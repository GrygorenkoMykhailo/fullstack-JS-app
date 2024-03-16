import { useEffect, useState } from "react"
import '../css/Register.css'
import { Form, redirect, useActionData } from "react-router-dom";

function Register(){

    const actionResponse = useActionData();
    const error = useErrorMessage(actionResponse,5000);

    return(
        <div className="register-wrapper">
            <Form action="/register" method="POST">
                <label>Username: </label>
                <input type="text" name="username"/>
                <label>Email: </label>
                <input type="text" name="email"/>
                <label>Password: </label>
                <input type="text" name="password"/>
                <label>Confirm password: </label>
                <input type="text" name="confirmPassword"/>
                <button type="submit">Submit</button>
                {error && error.error}
            </Form>
        </div>
    )
}

async function registerAction({request}){
    const formData = await request.formData();

    if(request.method === 'POST'){
        const user = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
        }

        const repeatPassword = formData.get('confirmPassword');

        if(user.password !== repeatPassword) return { error: 'Passwords are not identical'};

        let response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })

        if(response.status === 302){                
            const data = await response.json();
            return redirect('/profile/'+ data.id);
        }else if(response.status === 409){
            return { error: 'User with this email already exists' };
        }else if(response.status === 500){
            throw new Error();
        }    
    }
}

function useErrorMessage(errorMessage,timeout){
    const [error,setError] = useState(null);

    useEffect(() => {
        if(errorMessage && errorMessage.error){
            setError(errorMessage);
            setTimeout(() => {
                setError(null);
            },timeout)
        }
    },[errorMessage])

    return error;
}

export { Register,registerAction }
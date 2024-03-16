import { useState } from "react"
import '../css/Register.css'
import { Form, redirect, useActionData } from "react-router-dom";

function Register(){
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

        let response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        
        let data = await response.json();

        if(response.status === 302){
            return redirect('/profile/'+ data.id);
        }else{
            return response.status;
        }    
    }
}

export { Register,registerAction }
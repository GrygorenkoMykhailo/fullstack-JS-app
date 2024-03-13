import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'

function Login(){

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        email: '',
        password: '',
    })

    return (
        <div className="login-wrapper">
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="text" name="email" onChange={handleChange}/>
                <label>Password:</label>
                <input type="text" name="password" onChange={handleChange}/>
                <button type="button" onClick={handleSubmit}>Log in</button>
            </form>
        </div>
    )

    function handleChange(e){
        setFormData({...formData,[e.target.name]: e.target.value});
    }

    function handleSubmit(){
        fetch('/api/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
            })
        })
        .then(response => {
            if(response.status === 302) return response.json();
            else console.log('ploxo');
        })
        .then(data => {
            navigate('/profile/' + data.id)
        })
        .catch(e => console.log(e.message));
    }
}

export default Login
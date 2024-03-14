import { useState } from "react"
import '../css/Register.css'
import { useNavigate } from "react-router-dom";

function Register(){

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
  });

    return(
        <div className="register-wrapper">
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" name="username" onChange={handleChange}/>
                <label>Email: </label>
                <input type="text" name="email"onChange={handleChange}/>
                <label>Password: </label>
                <input type="text" name="password" onChange={handleChange}/>
                <label>Confirm password: </label>
                <input type="text" name="confirmPassword" onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: formData.username,
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
    }
}

export default Register
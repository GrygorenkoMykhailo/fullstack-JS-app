import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import TodoCard from "../Components/TodoCard";
import Header from "../Components/Header";
import '../css/Profile.css'

function Profile() {
    const [user, setUser] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch('/api/profile/getUserData/'+ id)
        .then(response => response.json())
        .then(data => {
            setUser(data);
        })
        .catch(e => {
            console.log(e);
        });
    },[]);

    if (user === null) {
        return (
            <>
                Loading...
            </>
        );
    } else {
        return (
            <>
                <Header Username = {user.Username} Email = {user.Email}/>
                    <div className="todo-container">
                    {user.Todos.map(t => {
                        return <TodoCard key={t.Id} props={t}/>
                    })}
                </div>
            </>
        );
    }
}

export default Profile;
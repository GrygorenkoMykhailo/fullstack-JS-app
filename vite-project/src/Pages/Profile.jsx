import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import TodoCard from "../Components/TodoCard";
import Header from "../Components/Header";
import TodoCreationElement from "../Components/TodoCreationElement";
import '../css/Profile.css'

function Profile() {
    const [user, setUser] = useState({
        Todos: []
    });
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

    useEffect(() => {
        console.log(user);
    },[user])

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
                        return <TodoCard key={t.Id} todo={t}/>
                    })}
                    <TodoCreationElement userId={user.Id} createTodoCallback={addTodo}/>
                    <div className="creation-element-reserve-space"></div>
                </div>

            </>
        );
    }

    function addTodo(todo){
        setUser(prevUser => ({
            ...prevUser,
            Todos: [...prevUser.Todos, todo]
        }));
        console.log('after adding', user);
    }
}

export default Profile;
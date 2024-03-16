import React, { useState, useEffect } from "react";
import { useParams,Link, useLoaderData } from "react-router-dom";
import TodoCard from "../Components/TodoCard";
import Header from "../Components/Header";
import TodoCreationElement from "../Components/TodoCreationElement";
import '../css/Profile.css'

function Profile() {
    const [user, setUser] = useState(null);
    const loader = useLoaderData();
    
    useEffect(() => {
        setUser(loader);
    },[])

    if (user === null) {
        return (
            <>
                Loading...
            </>
        );
    }else if(user === 404){
        throw new Response('User not found',{status: 404});
    }else if(user === 500){
        throw new Response('Internal server error',{status: 500});
    }else {
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
    }
}

async function profileLoaderFunction(params){
    let response = await fetch('/api/profile/getUserData/'+ params.id);
    if(response.status !== 200) return response.status;

    return await response.json();
}

export { Profile,profileLoaderFunction };
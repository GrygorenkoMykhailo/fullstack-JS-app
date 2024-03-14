import React, { useState } from 'react';
import '../css/TodoCard.css';

function TodoCard({todo}){
    const [title, setTitle] = useState(todo.Title);
    const [description, setDescription] = useState(todo.Description);
    const [expiringDate, setExpiringDate] = useState(todo.ExpiringDate);

    function handleDelete(){
        fetch('/api/profile/deleteUserTodo/'+ todo.Id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    function handleUpdate(){
        fetch('/api/profile/updateUserTodo', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: todo.Id,
                title: title,
                description: description,
                expiringDate: expiringDate,
            }),
        })
    }

    return (
        <div className="todo-card">

<           div className="inner-wrapper">
                <label>
                    Title:
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </label>
            </div>

            <div className="inner-wrapper">
                <label>
                    Description:
                    <input 
                        type="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </label>
            </div>

            <p>Creation Date: {parseDate(todo.CreationDate)}</p>
            <div className="inner-wrapper">
                <label>
                    Expiring Date:
                    <input 
                        type="text" 
                        value={expiringDate} 
                        onChange={(e) => setExpiringDate(e.target.value)} 
                    />
                </label>
            </div>

            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>🗑️</button>
        </div>
    )
}

function parseDate(date){
    const newDate = new Date(date);
    const month = newDate.getMonth() > 10 ? newDate.getMonth() : '0' + newDate.getMonth();
    const day = newDate.getDate() > 10 ? newDate.getDate() : '0' + newDate.getDate();
    const hours = newDate.getHours() > 10 ? newDate.getHours() : '0' + newDate.getHours();
    const minutes = newDate.getMinutes() > 10 ? newDate.getMinutes() : '0' + newDate.getMinutes();

    return [newDate.getFullYear(), month, day, hours, minutes].join(':');
}

export default TodoCard;
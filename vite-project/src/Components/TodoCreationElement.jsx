import { useState } from 'react';
import '../css/TodoCreationElement.css'

function TodoCreationElement({userId,createTodoCallback}){

    const [todoData,setTodoData] = useState({
        title: '',
        description: '',
        expiringDate: null,
    })

    return (
        <div className="todo-creation-element">
            <label>Title: </label>
            <input type="text" name="title" onChange={handleChange}/>
            <label>Descripton: </label>
            <input type="text" name="description" onChange={handleChange}/>
            <label>Expiring Date: </label>
            <input type="date" name="expiringDate" onChange={handleChange}/>
            <button type="button" onClick={handleClick}>Create Todo</button>
        </div>
    )

    function handleChange(e){
        if(e.target.name != 'expiringDate'){
            setTodoData({...todoData,[e.target.name]: e.target.value});
        }else{
            setTodoData({...todoData,[e.target.name]: new Date(e.target.value)});
        }
    }

    function handleClick(){
         let todoToCreate = {
             Title: todoData.title,
             Description: todoData.description,
             CreationDate: new Date(),
             ExpiringDate: todoData.expiringDate,
             UserId: userId,
         };
        fetch('/api/profile/postUserTodo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todoToCreate),
        })

        createTodoCallback(todoToCreate);
    }
}

export default TodoCreationElement;
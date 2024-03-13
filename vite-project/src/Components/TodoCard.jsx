import '../css/TodoCard.css'

function TodoCard({todo}){
    return (
        <div className="todo-card">
            <p>Title: {todo.Title}</p>
            <p>Description: {todo.Description}</p>
            <p>CreationDate: {parseDate(todo.CreationDate)}</p>
            <p>ExpiringDate: {parseDate(todo.ExpiringDate)}</p>
        </div>
    )
}

function parseDate(date){

    const newDate = new Date(date);

    const month = newDate.getMonth() > 10 ? newDate.getMonth() : '0' + newDate.getMonth()
    const day = newDate.getDay() > 10 ? newDate.getDay() : '0' + newDate.getDay()
    const hours = newDate.getHours() > 10 ? newDate.getHours() : '0' + newDate.getHours()
    const minutes = newDate.getMinutes() > 10 ? newDate.getMinutes() : '0' + newDate.getMinutes()

    return [newDate.getFullYear(),month,day,hours,minutes].join(':');
}


export default TodoCard;
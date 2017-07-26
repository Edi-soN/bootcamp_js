import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    return(
        <div> 
            <ul className={style.TodoList}>
                {props.list.map((todo, i) => <li key={todo.id} onClick={() => props.remove(todo.id)}>{todo.text}</li>)}
            </ul>
        </div>
)}

export default TodoList;

import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div> 
            <ul className={style.TodoList}>
                {props.list.map(todo => <Todo key={todo.id} id={todo.id} remove={props.remove} text={todo.text}/>)}
            </ul>
        </div>
)}

export default TodoList;

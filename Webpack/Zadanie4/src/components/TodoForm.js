import React from 'react';
import style from './TodoForm.css';

const TodoForm = props => {
	return (
		<form>
            <input className={style.TodoForm} type='text' value={props.value} onChange={event => props.changeValue(event.target.value)}/>
            <button onClick={event => {event.preventDefault(); props.addTodo(props.value)}}>Add</button>
        </form>
	)
}

export default TodoForm;
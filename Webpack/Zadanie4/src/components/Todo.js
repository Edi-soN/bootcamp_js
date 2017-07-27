import React from 'react';
import style from './Todo.css';

const Todo = props => {
	return (
		<li className={style.Todo}>{props.text}   <i className="glyphicon glyphicon-trash" onClick={() => props.remove(props.id)}></i></li>
	)
}

export default Todo;
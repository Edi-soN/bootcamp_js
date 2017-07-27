import React from 'react';
import style from './Title.css';

const Title = props => <h1>{props.title} <span className={style.Title}>({props.quantity})</span></h1>;

export default Title;

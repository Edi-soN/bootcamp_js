import React from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';

const Navigation = (props, content) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/about">About</Link> </li>
            </ul>
        </nav>
    );
};

Navigation.propTypes = {
};

export default Navigation;


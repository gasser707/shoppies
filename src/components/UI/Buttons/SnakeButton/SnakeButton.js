import React from 'react';
import Classes from './SnakeButton.module.css';
import { NavLink } from 'react-router-dom';
const SnakeButton = props => {
    return (
        <div className={Classes.SnakeBtn} disabled={props.disabled}>
            <NavLink  to="/auth" >
                {props.children}
        </NavLink>
        </div>
    );
};

export default SnakeButton;
import React from 'react';
import Classes from './Spinner.module.css';

const Spinner = props => {

    return (
        <div className={Classes.Loader}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Spinner;
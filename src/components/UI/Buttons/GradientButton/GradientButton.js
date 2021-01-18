import React from 'react';
import Classes from './GradientButton.module.css';

const GradientButton = props => {
    return (
        <div className={[Classes.icons, Classes[props.color]].join(' ')} onClick={props.clicked} disabled={props.disabled}>
            <a><div>{props.children}</div></a>
        </div>

    );
};

export default GradientButton;
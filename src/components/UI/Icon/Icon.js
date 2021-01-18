import React from 'react';
import Classes from './Icon.module.css';
const Icon = props => {
    return (
        <div className={[Classes.icons, Classes[props.color]].join(' ')}>
            <ul>
                <li><a onClick={props.onclicked}><i  className={[Classes.fa, props.icon].join(' ')} aria-hidden="true">{props.children}</i></a></li>
            </ul>
        </div>
    );
};

export default Icon;
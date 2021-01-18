import React from 'react';
import Classes from './NeonLamp.module.css';

const NeonLamp = props => {
    const words = props.words.map((word,idx) =>
        <>
            {word}<br key={idx}/>
        </>);

    let position = props.position;
    return (
        <div>
            <div className={[Classes.neonText, Classes[position]].join(' ')}>{words}</div>
        </div>
    );
};

export default NeonLamp;
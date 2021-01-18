import React from 'react';
import Classes from './SuccessBanner.module.css';
const SuccessBanner = props => {

    return (
        <div className={Classes.success}>
            <p className={Classes.paragraph}>Nominations Submitted!</p>
        </div>
    );

};

export default SuccessBanner;
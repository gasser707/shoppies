import { React, useState, useEffect, useCallback } from 'react';
import Classes from './Banner.module.css';
import Lottie from 'react-lottie';
import animationData from './mail.json';

const Banner = (props) => {
    let [classes, setClasses] = useState([Classes.Banner]);
    let [animation, setAnimation] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setClasses([Classes.Banner, Classes.show])
        }, 350);
    }, []);


    useEffect(() => {
        setTimeout(() => setAnimation(true), 2000);
    }, []);

    const options = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (

        <div className={classes.join(' ')} >
                <div className={Classes.text}>
                  You Are All Set!
                </div>
                {animation ?
                    <div className={Classes.lottie}>
                        <Lottie
                            options={options}
                            height={60}
                            width={60} 
                            />
                    </div>
                    : null
                }

        </div >

    );

};

export default Banner;
import React from 'react'
import Classes from './Herobox.module.css'
import NeonLamp from '../NeonLamp/NeonLamp'
import SnakeBtn from '../Buttons/SnakeButton/SnakeButton'

const Herobox = props =>{


return(
    <div className={Classes.Herobox}>
        <NeonLamp words={['Made','BY','Gasser']} position="topLeft"/>
        <div className={Classes.main}>
        <NeonLamp words={['Shopify Movie Awards']} position="center"/>
        </div>
        <SnakeBtn>Let's Get Started</SnakeBtn>
    </div>
)
}

export default Herobox;
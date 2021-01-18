import React from 'react';
import Classes from './MovieCard.module.css';
import Icon from '../Icon/Icon';
import { connect } from 'react-redux';
const MovieCard = props => {
    let color = 'purple';
    for (let movie in props.list) {
        if (props.list[movie].title === props.title && props.list[movie].year === props.year) {
            color = 'disabled';
        }
    }
    return (
        <div className={Classes.card}>
            <div class={[Classes.card__side, Classes.card__sideFront].join(' ')}>
                <div className={Classes.card__picture} style={{ backgroundImage: `url(${props.image}}` }}>
                    &nbsp;
              </div>
                <h4 className={Classes.card__heading}>
                    <span class={[Classes.card__headingSpan, Classes.card__headingSpan3].join(' ')}>
                        {props.title}
                    </span>
                </h4>
            </div>
            <div className={[Classes.card__side, Classes.card__sideBack, Classes.card__sideBack3].join(' ')}>
                <div className={Classes.card__cta}>
                    <div className={Classes.card__infoBox}>
                        <p className={Classes.card__yearOnly}>{props.year}</p>
                    </div>
                    <Icon color={color} onclicked={color==='disabled'? ()=>{}:props.clicked} icon={color==='disabled'?'fa fa-lock':'fa fa-check-circle'}></Icon>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        list: state.nomination.list
    };
};
export default connect(mapStateToProps, null)(MovieCard);
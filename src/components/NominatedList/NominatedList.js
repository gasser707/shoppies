import React from 'react';
import Classes from './NominatedList.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
const NominatedList = props => {
    const removeMovie = (idx) => {
        let newList = [...props.list];
        newList.splice(idx, 1);
        props.updateList(newList);
    };
    return (
        <div className={Classes.container}>
            {props.list.map((item, idx) => {
                return (
                    <div className={Classes.el} key={idx}>
                        <p className={Classes.paragraph}>{item.title} &mdash; {item.year} </p>
                        <a className={Classes.close} onClick={() => removeMovie(idx)}>
                            <i class="fa fa-times-circle"></i>
                        </a>
                    </div>
                );
            })}

        </div>

    );
};

const mapStateToProps = state => {
    return {
        list: state.nomination.list
    };
};

const mapDispatchToProps = dispatch => {

    return {
        updateList: (newList) => dispatch(actions.updateNominationList(newList))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NominatedList);

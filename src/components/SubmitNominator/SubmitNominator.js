import React from 'react';
import Icon from '../UI/Icon/Icon';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const SubmitNominator = props => {


    return (
        <Icon color="pink" icon="fa fa-paper-plane" onclicked={() => props.list.length === 5 ? props.submitNomination(props.list, props.token, props.userId) : undefined} />
    );

};

const mapStateToProps = state => {
    return {
        list: state.nomination.list,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitNomination: (list, token, userId) => dispatch(actions.nominateMovies(list, token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitNominator);
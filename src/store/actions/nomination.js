import * as actionTypes from './actionTypes';
import axios from '../../axios-nominate';

export const updateNominationList = (currentList) => {
    localStorage.setItem('nominationList', JSON.stringify([...currentList]));
    return {
        type: actionTypes.UPDATE_NOMINATION_LIST,
        list: [...currentList]
    };

};

export const nominateMoviesSuccess = () => {

    return {
        type: actionTypes.NOMINATE_MOVIES_SUCCESS,
    };
};


export const nominationFail = (error) => {

    return {
        type: actionTypes.NOMINATE_MOVIES_FAIL,
        error: error
    };
};


export const nominateMovies = (list, token,userId) => {

    let nominationData={
        list,
        userId
    }
    return dispatch => {
        axios.post('/nominations.json?auth=' + token, nominationData).then(response => {
            console.log(response)
            dispatch(nominateMoviesSuccess());
        }).catch(error => {
            console.log(error)
            dispatch(nominationFail(error));
        });
    };
};


export const fetchNominationSuccess = (list) => {

    return {
        type: actionTypes.FETCH_NOMINATION_SUCCESS,
        list: list

    };

};


export const fetchNomination = (token, userId) => {
    return dispatch => {
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/nominations.json' + queryParams).then(response => {
            let fetchedNominations=[];
            for (let key in response.data) {
                fetchedNominations=[...response.data[key].list];
            }
            console.log(fetchedNominations)
            dispatch(fetchNominationSuccess(fetchedNominations));
        }).catch(error => {
            console.log(error)
            dispatch(nominationFail(error));
        });

    };
};

export const autoSearchList = (token, userId) => {
    const list = JSON.parse(localStorage.getItem('nominationList'));
    return dispatch =>{
        if(list){
            dispatch(fetchNominationSuccess(list))
        }
        else{
            dispatch(fetchNomination(token, userId))
        }
    }

};
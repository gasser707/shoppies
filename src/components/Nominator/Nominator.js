import React, { useState, useEffect } from 'react';
import Classes from './Nominator.module.css';
import SearchBar from '../UI/SearchBar/SearchBar';
import MovieCard from '../UI/MovieCard/MovieCard';
import NominatedList from '../NominatedList/NominatedList';
import SubmitNominator from '../SubmitNominator/SubmitNominator';
import Logout from '../Auth/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import axios from 'axios';
import Icon from '../UI/Icon/Icon';
import Banner from '../UI/Banner/Banner';
import SuccessBanner from '../UI/Banner/SuccessBanner';

const Nominator = props => {
    let [title, setTitle] = useState("");
    let [year, setYear] = useState("");
    let [quit, setQuit] = useState(false);
    let [results, setResults] = useState(null);

    useEffect(() => {

        let url;
        if (title.length && year.length) {
            url = `http://www.omdbapi.com/?s=${title}&y=${year}&type=movie&page=1&apikey=fef9fdd8`;

        }
        else if (title.length) {
            url = `http://www.omdbapi.com/?s=${title}&type=movie&page=1&apikey=fef9fdd8`;
        }
        if (url) {
            axios.get(url)
                .then(res => {
                    console.log(res);
                    if (!res.data.Error) {
                        setResults(res.data.Search);
                    }
                    else setResults(null);
                });
        }
    }, [title, year]);

    useEffect(() => {
        props.autoSearchList(props.token, props.userId);
    }, [props.autoSearchList]);

    const removeMovie = (idx) => {
        let newList = [...props.list].splice(idx, 1);
        newList.splice(idx, 1);
        props.updateList(newList);
    };
    const addMovie = (movie) => {
        let newList = [...props.list];
        newList.push(movie);
        props.updateList(newList);
    };

    const logout = () => {
        setQuit(true);
    };

    return (
        <>
            <div className={Classes.Nominator}>
                {props.response ? <div className={Classes.success}><SuccessBanner /></div> : null}
                {
                    props.list.length === 5 ?
                        <div className={Classes.Banner}>
                            <Banner />
                        </div> : null
                }
                <div className={Classes.header}>
                    <h4 className={Classes.title}>Pick your best five movies</h4>
                    <SearchBar value={title} placeholder="Find Movie" changed={event => {
                        console.log(title);
                        setTitle(event.target.value);
                    }} />
                    <SearchBar value={year} placeholder="Year" changed={event => {
                        console.log(year);
                        setYear(event.target.value);
                    }} />
                    <div className={Classes.quit}>
                        <Icon color="turquoise" icon="fa fa-share-square" onclicked={() => logout()}>{quit ? <Logout /> : null}</Icon>
                    </div>
                </div>
                <div className={Classes.container}>
                    <div className={Classes.list}>
                        <NominatedList />
                    </div>
                    {
                        results ?
                            <div className={Classes.cards} >


                                {
                                    results.map(result => <MovieCard image={result.Poster} year={result.Year} title={result.Title}
                                        clicked={() => addMovie({ title: result.Title, year: result.Year })} />
                                    )
                                }
                            </div>
                            : <div className={Classes.centreParagraph}>
                                <p>Search for a movie above </p>
                            </div>
                    }
                    <div className={Classes.btn}>
                        <SubmitNominator></SubmitNominator>
                    </div>
                </div>

            </div >

        </>
    );
};

const mapStateToProps = state => {
    return {
        list: state.nomination.list,
        token: state.auth.token,
        userId: state.auth.userId,
        response: state.nomination.response
    };
};

const mapDispatchToProps = dispatch => {

    return {
        updateList: (newList) => dispatch(actions.updateNominationList(newList)),
        autoSearchList: (token, userId) => dispatch(actions.autoSearchList(token, userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nominator);
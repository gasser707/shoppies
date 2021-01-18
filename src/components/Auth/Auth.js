import React, { useState } from 'react';
import GradientButton from '../../components/UI/Buttons/GradientButton/GradientButton';
import Input from '../../components/Input/Input';
import Classes from './Auth.module.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import { checkValidity } from '../../Shared/checkValidity';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const Auth = props => {

    const [controls, setControls] = useState(
        {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                element_name: "email"
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false,
                element_name: "password"
            },
        });


    const [formIsValid, setFormIsValid] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedControlsForm = {
            ...controls
        };
        const updatedFormElement = {
            ...updatedControlsForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedControlsForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedControlsForm) {
            formIsValid = updatedControlsForm[inputIdentifier].valid && formIsValid;
        }
        setControls(updatedControlsForm);
        setFormIsValid(formIsValid);
    };

    const submitHandler = (event) => {

        event.preventDefault();
        props.onAuth(controls.email.value, controls.password.value, isSignUp);
    };

    const switchAuthModeHandler = () => {

        setIsSignUp(!isSignUp);
    };

    const submitForm = () => {
        props.onAuth(controls.email.value, controls.password.value, isSignUp);
    };

    const formElementArray = [];

    for (let key in controls) {
        formElementArray.push({ id: key, config: controls[key] });
    }

    let form = formElementArray.map(formElement => {
        return <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => inputChangedHandler(event, formElement.id)}
            field={formElement.config.element_name}
        />;
    });

    if (props.loading) {
        form = <Spinner />;
    }

    let errorMessage = null;

    if (props.error) {
        if (props.error.message === "EMAIL_EXISTS")
            errorMessage = <h4>Sorry you can't signup with this E-mail, it's already taken!</h4>;
        else if (props.error.message === "INVALID_PASSWORD")
            errorMessage = <h4>Wrong password!</h4>;
        else
            errorMessage = <h4>{props.error.message}</h4>;
    }

    let redirect = null;
    // let sum = 0;
    // for (let x in props.ingredients) {
    //     sum = sum + props.ingredients[x];
    // }

    // if (props.isAuth && sum > 0) {
    //     redirect = <Redirect to='/checkout' />;
    // }
    if (props.isAuth)
        redirect = <Redirect to='/' />;

    return (
        <div className={Classes.container}>
            {
                !props.loading ?
                    <div className={Classes.Auth}>
                        {errorMessage}
                        <form onSubmit={submitHandler} id="form">
                            {form}
                            <GradientButton
                                disabled={!formIsValid} clicked={submitForm} color="orange">
                                Submit
                             </GradientButton>
                        </form>
                        <GradientButton clicked={switchAuthModeHandler} color={isSignUp?"green":"purple"}>
                            Switch to {isSignUp ? 'Sign In' : 'Sign Up'}
                        </GradientButton>
                        {redirect}
                    </div>
                    :
                    <Spinner />
            }
        </div>

    );




};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);

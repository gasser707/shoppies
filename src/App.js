import './App.css';
import Spinner from './components/UI/Spinner/Spinner';
import Logout from './components/Auth/Logout/Logout';
import Nominator from './components/Nominator/Nominator';
import React, { useEffect, Suspense } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Herobox from './components/UI/Herobox/Herobox';


const Auth = React.lazy(() => {
  return import('./components/Auth/Auth');
});


const App = (props) => {

  const { onTryAutoSignUp } = props;

  useEffect(() => {

    onTryAutoSignUp();


  }, [onTryAutoSignUp]);

  let routes = (
    <Switch>
      <Route path="/auth" render={(props) => <Auth  {...props} />} />
      <Route path="/" render={() => <Herobox />} />
    </Switch>

  );

  if (props.isAuth) {
    routes = (
      <Switch>
        <Route path="/logout" render={(props) => <Logout  {...props} />} />
        <Route path="/auth" render={(props) => <Auth  {...props} />} />
        <Route path="/nominate" render={(props) => <Nominator {...props} />} />
        <Redirect from='/' to="/nominate" />
      </Switch>
    );
  }

  const spinner = <Spinner />;
  return (
    <>
      <Suspense fallback={spinner}>
        {routes}
      </Suspense>
    </>
  );

};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  };

};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

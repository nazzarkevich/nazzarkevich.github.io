import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from '../components/Landing';
import SignUpPage from '../components/SignUp';
import SignInPage from '../components/SignIn';
import ForgetPassword from '../components/ForgetPassword';
import AccountPage from '../components/Account';

import Navigation from './Navigation';
import * as ROUTES from './constants';

import './routes.css';

const Routes = () => (
  <Router>
    <div className="container">
      <Navigation />
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={ForgetPassword} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      </Switch>
    </div>
  </Router>
)
export default Routes;


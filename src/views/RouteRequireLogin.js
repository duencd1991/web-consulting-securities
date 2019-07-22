import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from "../utils/services";

export const RouteRequireLogin = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isLogin() ? <Component {...props} /> : <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />
  )} />
)
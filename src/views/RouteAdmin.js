import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAdmin } from "../utils/services";

export const RouteAdmin = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAdmin() ? <Component {...props} /> : <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />
  )} />
)
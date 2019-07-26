import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isCustomerCare, isAdmin, isExpert } from "../utils/services";

export const RouteExpert= ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isCustomerCare() || isAdmin() || isExpert() ? <Component {...props} /> : <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />
  )} />
)
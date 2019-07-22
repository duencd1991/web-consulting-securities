import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isCustomerCare, isAdmin } from "../utils/services";

export const RouteCustomerCare = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isCustomerCare() || isAdmin() ? <Component {...props} /> : <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />
  )} />
)
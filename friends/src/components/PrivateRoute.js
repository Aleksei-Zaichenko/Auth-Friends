import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...anyBananaWord}) => {
    return (
        <Route
            {...anyBananaWord}
            render={props => {
                localStorage.getItem('token') ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }} 
        />
    );
};
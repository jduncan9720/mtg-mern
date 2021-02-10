import React from 'react'
import { BrowserRouter as Redirect, Route } from "react-router-dom";
import { fakeAuth } from "../Login"
import Login from "../Login"

export default function PrivateRoute({ children, ...rest }) {
    console.log(fakeAuth)
    return (
        <Route {...rest} render={({ location }) => {
                return fakeAuth.isAuthenticated === true
            ? children
            : <Login />
            // : <Redirect to={{
            //     pathname: '/login',
            //     state: { from: location }
            // }} />
            }} />
    )
}

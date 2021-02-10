import React from "react"
import { Redirect, useLocation } from "react-router-dom"



export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100) //fake async
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100) //fake async
    }
}

export default function Login () {
    const [
        redirectToReferrer,
        setRedirectToReferrer
    ] = React.useState(false)

    const { state } = useLocation()

    const login = () => fakeAuth.authenticate(() => {
        setRedirectToReferrer(true)
    })

    if (redirectToReferrer === true) {
        return <Redirect to={state?.from || '/'} />
    }

    return (
        <div>
            <p>You must log in to view this page</p>
            <button onClick={login}>Log In</button>
        </div>
    )
}

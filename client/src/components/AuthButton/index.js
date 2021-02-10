import React from "react"
import { fakeAuth } from "../Login"

export default function AuthButton() {

    return fakeAuth.isAuthenticated === true
        ? <p>
            Welcome! <button onClick={() => {
                fakeAuth.signout(() => window.history.pushState('/'))
            }}>Sign Out</button>
        </p>
        : <p>You are not logged in.</p>
}

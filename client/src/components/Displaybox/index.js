import React from 'react'

export default function Displaybox({children}) {
    return (
        <div className="container border border-dark">
            {children}
        </div>
    )
}

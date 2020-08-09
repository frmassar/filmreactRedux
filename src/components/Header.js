import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <NavLink to='/films' className=" nav-link navbar-brand">Films</NavLink>
            </nav>
            <nav className="navbar navbar-light bg-light">
                <NavLink to='/favoris' className=" nav-link navbar-brand">Favoris</NavLink>
            </nav>
        </div>
    )
}

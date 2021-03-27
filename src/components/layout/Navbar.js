import React,{Fragment} from 'react'

const Navbar = () => {
    return (
        <Fragment>
            <nav className="green">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Chat</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Signup</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Signup</a></li>
                <li><a href="collapsible.html">Logout</a></li>
            </ul>
        </Fragment>
    )
}

export default Navbar

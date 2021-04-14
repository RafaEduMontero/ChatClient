import React,{Fragment,useContext} from 'react'
import { UserContext } from '../../UserContext';
import ENDPOINTS from '../../path/endpoints';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

const Navbar = () => {
    const {user,setUser} = useContext(UserContext);
    const logout = async() => {
        try {
            const res = await fetch(ENDPOINTS.logout,{
                credentials: 'include'
            });
            const data = res.json();
            console.log(data)
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }

    const menu = user? <SignedInMenu logout={logout}/> : <SignedOutMenu/>

    return (
        <Fragment>
            <nav className="green">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Chat</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {menu}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                {menu}   
            </ul>
        </Fragment>
    )
}

export default Navbar

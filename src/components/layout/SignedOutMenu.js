import React,{Fragment} from 'react'

const SignedOutMenu = () => {
    return (
        <Fragment>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
        </Fragment>
    )
}

export default SignedOutMenu

import React from 'react'
import gitlab from '../../assets/gitlab.png'
import key from '../../assets/key.svg'
import LoginOptions from './saas'

function selfHosted() {

    const loginOptions = [
        { icon: gitlab, text: 'Sign in with Github' },
        { icon: key, text: 'Sign in with Bitbucket' }
    ];

    return (
        <LoginOptions loginOptions={loginOptions}/>
    )
}

export default selfHosted
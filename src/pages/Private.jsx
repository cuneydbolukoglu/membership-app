import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import fire from '../firebase';
import Home from './Home';

const Private = (props) => {
    const [user, setUser] = useState(null);
    const haslogin = props.login

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            setUser(user.email)
        })
    }

    authListener();

    return (
        haslogin ? <Home user={user}/> : <Redirect to="/" />
    )
}

export default Private;
import { Redirect } from 'react-router-dom';
import fire from '../firebase';
import Home from './Home';

const Private = props => {
    const haslogin = true

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            console.log("private: ", user);
        })
    }

    authListener();

    return (
        haslogin ? <Home /> : <Redirect to="/" />
    )
}

export default Private;
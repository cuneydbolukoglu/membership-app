import { Redirect } from 'react-router-dom';
import Home from './Home';

const Private = props => {
    const haslogin = localStorage.getItem("token");

    return (
        haslogin ? <Home /> : <Redirect to="/login"/>
    )
}

export default Private;
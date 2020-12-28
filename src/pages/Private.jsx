import { Route, Redirect } from 'react-router-dom';

const Private = props => {
    const hasLogin = props.login

    return (
        <Route exact path="/">
            {hasLogin ? <Redirect to="/home" /> : <Redirect to="/" />}
        </Route>
    )
}

export default Private;

import { Link, Route, Redirect } from 'react-router-dom';

const Home = props => {
    const hasLogin = props.login
    const username = props.username

    return (
        <>
            <Route exact path="/">
                {hasLogin ? <Redirect to="/home" /> : <Redirect to="/" />}
            </Route>
            <div>Hoşgeldiniz, {username}</div>
            <Link to="/">Logout</Link>
        </>
    )
}

export default Home;
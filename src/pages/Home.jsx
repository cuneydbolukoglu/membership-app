
import { Redirect } from 'react-router-dom';

const Home = props => {
    const hasLogin = props.login

    return (
        <h1>Hoşgeldiniz, {props.username}</h1>,
        
        hasLogin ? (
                <Redirect to="/home" />
                
        ) : (
                <Redirect to="/" />
            )
    )
}

export default Home;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../components/data-controller';
import { COULD_NOT_LOGIN, LOGIN_SUCCESS } from '../components/message/message';
import ErrorMessage from '../components/error-message';
import passwordHash from 'password-hash';

import Home from './Home';

import registerIcon from '../assets/img/plus-solid.svg';

const Login = props => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorResult, setErrorResult] = useState(false);

    const onButtonClick = e => {
        e.preventDefault();

        getData(function (response) {
            const data = JSON.parse(response.data).find(item => item.username === username && passwordHash.verify(password, item.password))            

            if (data) {
                setErrorMessage(LOGIN_SUCCESS);
                setErrorResult(true);
            } else {
                setErrorMessage(COULD_NOT_LOGIN);
                setErrorResult(false);
            }
        });
    }

    return (
        <div className="login">
            <h1>Giriş Yap</h1>
            <Link to='/register'>
                <img className="registerIcon" src={registerIcon} alt="Register" />
            </Link>
            <form>
                <input type="text"
                    placeholder="Kullanıcı Adı"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input type="password"
                    placeholder="Parola"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={onButtonClick}
                >Giriş Yap</button>
            </form>
            <ErrorMessage message={errorMessage} result={errorResult} />
            <Home login={errorResult} username={username} />
        </div>
    )
}

export default Login;
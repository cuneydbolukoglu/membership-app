import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../components/data-controller';
import { COULD_NOT_LOGIN, LOGIN_SUCCESS, USER_LOCALSTORAGE_NAME } from '../components/message/message';
import ErrorMessage from '../components/error-message';
import passwordHash from 'password-hash';

import Private from './private';

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
                setUsernameLocal();
            } else {
                setErrorMessage(COULD_NOT_LOGIN);
                setErrorResult(false);
            }
        });
    }

    const setUsernameLocal = () => {
        localStorage.setItem(USER_LOCALSTORAGE_NAME, username);
    }

    return (
        <div className="login">
            <div className="left">
                <form>
                    <h1>LOGIN</h1>
                    <input type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={onButtonClick}
                    >Login</button>
                    <ErrorMessage message={errorMessage} result={errorResult} />
                    <Private login={errorResult} />
                    <Link to='/register'>
                        <button className="button-link">Create an Account</button>
                    </Link>
                </form>

            </div>
            <div className="right"></div>
        </div>
    )
}

export default Login;
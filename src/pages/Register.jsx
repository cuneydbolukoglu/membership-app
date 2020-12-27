import { useState } from 'react';
import { Link } from 'react-router-dom';
import { setData } from '../components/data-controller';
import { uuidv4 } from '../components/helper';
import ErrorMessage from '../components/error-message';
import { MATCH_PASWORD, NULL_PASSWORD, NULL_USERNAME } from '../components/message/message';
import passwordHash from 'password-hash';

const Register = props => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorResult, setErrorResult] = useState(null);

    const newUser = { id: uuidv4(), username: username, password: passwordHash.generate(password) };

    const onButtonClick = e => {
        e.preventDefault();

        if (username && password && password === repeatPassword) {
            setData(newUser, function (response) {
                console.log(response);
                setErrorMessage(response.message);
                setErrorResult(response.result);
            })
        } else if (!username) {
            setErrorMessage(NULL_USERNAME);
        } else if (!password) {
            setErrorMessage(NULL_PASSWORD);
        } else if (password !== repeatPassword) {
            setErrorMessage(MATCH_PASWORD);
        }
    }

    return (
        <div className="register">
            <div className="left"></div>
            <div className="right">
                <form onSubmit={onButtonClick}>
                    <h1>Register</h1>
                    <input type="text"
                        placeholder="Username"
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                    <input type="password"
                        placeholder="Password"
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <input type="password"
                        placeholder="Password Match"
                        onChange={(e) => { setRepeatPassword(e.target.value) }}
                    />
                    <button
                        onClick={onButtonClick}
                    >Sign Up</button>
                    <ErrorMessage message={errorMessage} result={errorResult} />
                    <Link to='/'>
                        <button className="button-link">Login</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Register;
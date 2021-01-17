import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ErrorMessage from '../components/error-message';
import { MATCH_PASWORD, NULL_PASSWORD, NULL_USERNAME, USER_CREATE } from '../components/message/message';
import { auth } from '../firebase';

const Register = props => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorResult, setErrorResult] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);

    const history = useHistory();

    const onButtonClick = e => {
        e.preventDefault();

        if (!email) {
            setErrorMessage(NULL_USERNAME);
        } else if (!password) {
            setErrorMessage(NULL_PASSWORD);
        } else if (password !== repeatPassword) {
            setErrorMessage(MATCH_PASWORD);
        } else {

            auth.createUserWithEmailAndPassword(email, password)
                .then(res => {
                    console.log("response: ", res);
                    console.log("response: ", res.message);

                    if (res.operationType === "signIn") {
                        setErrorMessage(USER_CREATE);
                        setErrorResult(true);
                        let token = res.user.refreshToken
                        localStorage.setItem("token", token);
                        history.push('/');
                    } else {
                        setErrorResult(false);
                        setErrorMessage(res.message)
                    }

                })
                .catch(err => {
                    console.error("error: ", err);
                    setErrorMessage(err.message);
                    setErrorResult(false);
                })
        }
    }

    return (
        <div className="register">
            <div className="left"></div>
            <div className="right">
                <form onSubmit={onButtonClick}>
                    <h1>New Account</h1>
                    <input type="text"
                        placeholder="Email"
                        onChange={(e) => { setEmail(e.target.value) }}
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
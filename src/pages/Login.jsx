import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LOGIN_SUCCESS, NULL_PASSWORD, NULL_USERNAME } from '../components/message/message';
import ErrorMessage from '../components/error-message';
import { auth } from '../firebase';
import md5 from 'md5';

const Login = props => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorResult, setErrorResult] = useState(null);

    const history = useHistory();

    const onButtonClick = e => {
        e.preventDefault();

        if (!email) {
            setErrorMessage(NULL_USERNAME);
        } else if (!password) {
            setErrorMessage(NULL_PASSWORD);
        } else {

            auth.signInWithEmailAndPassword(email, md5(password))
                .then(res => {
                    console.log("response: ", res);

                    if (res.operationType === "signIn") {
                        setErrorMessage(LOGIN_SUCCESS);
                        setErrorResult(true);
                        let token = res.user.refreshToken
                        localStorage.setItem("token", token);
                        history.push("/");
                    } else {
                        setErrorResult(false);
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
        <div className="login">
            <div className="left">
                <form>
                    <h1>LOGIN</h1>
                    <input type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={onButtonClick}
                    >Login</button>
                    <ErrorMessage message={errorMessage} result={errorResult} />
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
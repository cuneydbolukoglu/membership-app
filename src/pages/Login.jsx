import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LOGIN_SUCCESS } from '../components/message/message';
import ErrorMessage from '../components/error-message';
import fire from '../firebase';

const Login = props => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorResult, setErrorResult] = useState(null);
    const [haslogin, setHasLogin] = useState(false);

    const history = useHistory();

    const onButtonClick = e => {
        e.preventDefault();

        fire.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res);

                if (res.operationType === "signIn") {
                    setErrorMessage(LOGIN_SUCCESS);
                    setErrorResult(true);
                    setHasLogin(true);
                    history.push('/home');
                } else {
                    setErrorResult(false);
                    setHasLogin(false);
                }
            })
            .catch(err => {
                console.error(err);
                setErrorMessage(err.message);
                setErrorResult(false);
            })
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
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ErrorMessage from '../components/error-message';
import { USER_CREATE } from '../components/message/message';
import fire from '../firebase';

const Register = props => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorResult, setErrorResult] = useState(null);

    const history = useHistory();

    const onButtonClick = e => {
        e.preventDefault();

        fire.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res);
                
                if(res.operationType === "signIn"){
                    setErrorMessage(USER_CREATE);
                    setErrorResult(true);
                    let token = res.user.refreshToken
                    localStorage.setItem("token", token);
                    history.push('/home');
                } else {
                    setErrorResult(false);
                }
            })
            .catch(err => {
                console.error(err);
                setErrorMessage(err.message);
                setErrorResult(false);
            })
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
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../components/error-message';
import passwordHash from 'password-hash';
import fire from '../firebase';
import Private from './Private';

const Register = props => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorResult, setErrorResult] = useState(null);

    const onButtonClick = e => {
        e.preventDefault();

        fire.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res);
                
                if(res.operationType === "signIn"){
                    setErrorMessage("Your have successfully registered");
                    setErrorResult(true);
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
                    <Private login={errorResult} />
                    <Link to='/'>
                        <button className="button-link">Login</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Register;
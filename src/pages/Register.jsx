import { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../components/error-message';
import passwordHash from 'password-hash';
import { auth } from '../firebase';

const Register = props => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorResult, setErrorResult] = useState(null);

    const onButtonClick = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, passwordHash.generate(password))
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
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
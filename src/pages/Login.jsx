import { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../components/error-message';
import passwordHash from 'password-hash';

import Private from './Private';

const Login = props => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorResult, setErrorResult] = useState(false);
    
    const onButtonClick = e => {
        e.preventDefault();
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
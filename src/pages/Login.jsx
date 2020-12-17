import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import passwordHash from 'password-hash';

import registerIcon from '../assets/img/plus-solid.svg'

const Login = props => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [message, setMessage] = useState(null);

    const onButtonClick = (e) => {
        e.preventDefault();

        // load items array from localstorage 
        const userLocal = localStorage.getItem("userList");
        const userLocalParse = JSON.parse(userLocal);

        const usernameControl = userLocalParse.filter(item => item.username === username)
        const passwordControl = passwordHash.verify(password, usernameControl[0].password)

        console.log()
        if (passwordControl === true) {
            setMessage("Login successful")
        } else {
            setMessage("Login failed !")
        }

    }

    return (
        <div className="login">
            <h1>LOGIN</h1>
            <Link to='/register'>
                <img className="registerIcon" src={registerIcon} alt="Register"/>
            </Link>
            <form>
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
            </form>
            <div className="success">{message}</div>
        </div>
    )
}

export default Login;
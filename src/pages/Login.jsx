import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import passwordHash from 'password-hash';

import registerIcon from '../assets/img/plus-solid.svg'

const Login = props => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const loginControl = (e) => {
        e.preventDefault();

        // load items array from localstorage 
        const userLocal = localStorage.getItem("userList");
        const userLocalParse = JSON.parse(userLocal)

        // const userLocal2 = userLocalParse.map(item => (item.username === username)
        // const hash = passwordHash.verify("sha1$db799b1a$1$bc58e3a35d38817076f40d08fff0e0cef02af90f")
    }

    return (
        <div className="login">
            <h1>LOGIN</h1>
            <Link to='/register'>
                <img className="registerIcon" src={registerIcon} alt=""/>
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
                    onClick={loginControl}
                >Login</button>
            </form>
        </div>
    )
}

export default Login;
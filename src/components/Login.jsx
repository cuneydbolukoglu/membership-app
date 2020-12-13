import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = props => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const loginControl = () => {
        // load items array from localstorage 
       const userLocal = localStorage.getItem("user");
       const userLocalParse = JSON.parse(userLocal)

       userLocalParse.map(item => item.username === username)
    }

    return (
        <div className="login">
            <h1>LOGIN</h1>
            <Link to='/register'>
                <button className="register-button">+</button>
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
                onClick={()=> loginControl()}
                >Login</button>
            </form>
        </div>
    )
}

export default Login;
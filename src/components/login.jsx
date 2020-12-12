import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = props => {

    return (
        <div className="login">
            <h1>LOGIN</h1>
            <Link to='/register'>
                <button className="register-button">+</button>
            </Link>
            <form>
                <input type="text"
                    placeholder="Username"
                />
                <input type="password"
                    placeholder="Password"
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;
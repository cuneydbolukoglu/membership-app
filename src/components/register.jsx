import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = props => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const array = [];

    const user = {
        id: Date.now(),
        username: username,
        password: password,
        new: true
    }

    array.push(user);

    console.log(user);

    localStorage.setItem('user', array)

    return (
        <div className="register">
            <h1>Register</h1>
            <Link to='/'>
                <button className="back-button">X</button>
            </Link>
            <form>
                <input type="text"
                    placeholder="Username"
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <input type="password"
                    placeholder="Password"
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <input type="password"
                    placeholder="Repeat password"
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button
                    onClick={(e) => { e.preventDefault(); console.log(user) }}
                >Sign up</button>
            </form>
        </div>
    )
}

export default Register;
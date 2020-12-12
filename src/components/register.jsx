import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = props => {
    const [username, setUsername] = useState(null);
    let asd;

    localStorage.setItem('user', username)

    return (
        <div className="register">
            <h1>Register</h1>
            <Link to='/'>
                <button className="back-button">X</button>
            </Link>
            <form>
                <input type="text"
                    placeholder="Username"
                    onChange={(e) => {asd = e.target.value}}
                />
                <input type="password"
                    placeholder="Password"
                />
                <input type="password"
                    placeholder="Repeat password"
                />
                <button
                    onClick={(e) => { e.preventDefault(); console.log(asd) }}
                >Sign up</button>
            </form>
        </div>
    )
}

export default Register;
import React, { useState } from 'react';
import UserDetails from './userdetails';


const Login = props => {
    let inputRef;
    const [username, setUsername] = useState(null);

    return (
        <div className="login">
            <h1>LOGIN</h1>
            <form>
                <input type="text"
                    placeholder="Username"
                    ref={(e) => { inputRef = e; }}
                />
                <input type="password"
                    placeholder="Password"
                />
                <button
                    onClick={() => { setUsername(inputRef.value); }}
                >Login</button>
            </form>
            {
                username
                ?
                <UserDetails username={username} />
                : null
            }
        </div>
    )
}

export default Login;
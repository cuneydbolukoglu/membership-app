import React, { useState } from 'react';

const Login = props => {
    let inputRef;
    const [username, setUsername] = useState(null);

    console.log(username)

    return (
        <div className="login">
            <h1>LOGIN</h1>
            <form >
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
        </div>
    )
}

export default Login;
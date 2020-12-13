import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import passwordHash from 'password-hash';

const Register = props => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);
    const [isShowError, setIsShowError] = useState(false);
    const [isUserError, setIsUserError] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);

    const onButtonClick = (e) => {
        e.preventDefault();

        if (username && password && password === repeatPassword) {
            addNewUser()
            setIsShowError(false)
        } else {
            setIsShowError(true)
        }

        setErrorMessage([]);
        let errors = [];


        if (!username) {
            errors.push("username null")
        } else if (!password) {
            errors.push("password null")
        } else if (password !== repeatPassword) {
            errors.push("password not match")
        } 
        // else if (isUserError(true)){
        //     errors.push("username registered!")
        // }

        setErrorMessage(errors);
    }

    const addNewUser = () => {

        const userLocal = localStorage.getItem("user");
        const userLocalParse = JSON.parse(userLocal)
        let user = userLocal ? userLocalParse : [];

        const newUser = {
            id: Date.now(),
            username: username,
            password: passwordHash.generate(password)
        }

        const userControl = userLocalParse.map(item => item.username)

        console.log(userControl)

        // if (userControl === true) {
        //     isUser(true)
        // }

        // console.log(isUser)
        
        user.push(newUser);

        // if ()) {
        //     setIsUserError(true)
        // } else {
        //     setIsUserError(false)
        // }


        // localstorage sync update
        localStorage.setItem("user", JSON.stringify(user));
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <Link to='/'>
                <button className="back-button">X</button>
            </Link>
            <form onSubmit={onButtonClick}>
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
                    onChange={(e) => { setRepeatPassword(e.target.value) }}
                />
                <button
                    onClick={onButtonClick}
                >Sign up</button>
            </form>
            {
                isShowError && <div className="error">{errorMessage.map((item, index) => <p key={index}>{item}</p>)}</div>
            }
        </div>
    )
}

export default Register;
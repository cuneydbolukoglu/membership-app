import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import passwordHash from 'password-hash';

import closeIcon from '../assets/img/times-solid.svg';

const Register = props => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);
    const [isShowError, setIsShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);
    const [completed, setCompleted] = useState(false);
    const [isDuplicate, setIsDuplicate] = useState(false);

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
        } else if (isDuplicate === true) {
            errors.push("username registered!")
        }

        setErrorMessage(errors);
    }

    const addNewUser = () => {

        const userLocal = localStorage.getItem("userList");
        const userLocalParse = JSON.parse(userLocal)
        let user = userLocal ? userLocalParse : [];

     //   const userLocalList = userLocalParse.map(item => item.username)

        const newUser = {
            id: Date.now(),
            username: username,
            password: passwordHash.generate(password)
        }

        if (user.push(newUser)) {
            setCompleted("You are registered successfully")
        }

        // localstorage sync update
        localStorage.setItem("userList", JSON.stringify(user));
    }

    return (
        <div className="register">
            <h1>REGISTER</h1>
            <Link to='/'>
                <img className="closeIcon" src={closeIcon} alt="Close" />
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
                isShowError ?
                    <div className="error">{errorMessage.map((item, index) => <p key={index}>{item}</p>)}</div>
                    : completed && <div className="success">{completed}</div>
            }
        </div>
    )
}

export default Register;
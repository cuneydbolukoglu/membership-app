import { useState } from 'react';
import { Link } from 'react-router-dom';
import { setData } from '../components/data-controller';

import closeIcon from '../assets/img/times-solid.svg';

const Register = props => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);

    const newUser = { id: "121", username: username, password: password };

    const onButtonClick = e => {
        e.preventDefault();

        if (username && password && password === repeatPassword) {
            setData(newUser, function (response) {
                console.log(response);
            })
        }
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
        </div>
    )
}

export default Register;
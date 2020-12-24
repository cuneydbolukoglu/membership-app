import { useState } from 'react';
import { Link } from 'react-router-dom';
import { setData } from '../components/data-controller';
import { uuidv4 } from '../components/helper';
import ErrorMessage from '../components/error-message';
import { MATCH_PASWORD, NULL_PASSWORD, NULL_USERNAME } from '../components/message/message';

import closeIcon from '../assets/img/times-solid.svg';

const Register = props => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [errorResult, setErrorResult] = useState(null);

    const newUser = { id: uuidv4(), username: username, password: password };

    const onButtonClick = e => {
        e.preventDefault();

        if (username && password && password === repeatPassword) {
            setData(newUser, function (response) {
                console.log(response);
                setErrorMessage(response.message);
                setErrorResult(response.result);
            })
        } else if (!username){
            setErrorMessage(NULL_USERNAME);
        } else if (!password){
            setErrorMessage(NULL_PASSWORD);
        } else if (password !== repeatPassword){
            setErrorMessage(MATCH_PASWORD);
        }
    }

    return (
        <div className="register">
            <h1>Kayıt ol</h1>
            <Link to='/'>
                <img className="closeIcon" src={closeIcon} alt="Close" />
            </Link>
            <form onSubmit={onButtonClick}>
                <input type="text"
                    placeholder="Kullanıcı Adı"
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <input type="password"
                    placeholder="Parola"
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <input type="password"
                    placeholder="Parolayı tekrar girin"
                    onChange={(e) => { setRepeatPassword(e.target.value) }}
                />
                <button
                    onClick={onButtonClick}
                >Kaydol</button>
            </form>
            <ErrorMessage message={errorMessage} result={errorResult}/>
        </div>
    )
}

export default Register;
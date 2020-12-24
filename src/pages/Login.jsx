import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../components/data-controller';

import registerIcon from '../assets/img/plus-solid.svg';

const Login = props => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const onButtonClick = e => {
        e.preventDefault();
        console.log(username + password);

        getData(function (response) {
            console.log(JSON.parse(response.data));
        })
    }
    
    return (
        <div className="login">
            <h1>LOGIN</h1>
            <Link to='/register'>
                <img className="registerIcon" src={registerIcon} alt="Register" />
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
                    onClick={onButtonClick}
                >Login</button>
            </form>
        </div>
    )
}

export default Login;
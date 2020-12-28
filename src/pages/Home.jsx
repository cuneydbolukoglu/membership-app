
import { Link } from 'react-router-dom';
import { USER_LOCALSTORAGE_NAME } from '../components/message/message';

import LogoutIcon from '../assets/img/sign-out-alt-solid.svg';

const Home = props => {
    const userLocal = localStorage.getItem(USER_LOCALSTORAGE_NAME)
    const username = userLocal

    const userLogout = () => {
        localStorage.removeItem(USER_LOCALSTORAGE_NAME);
    }

    return (
        <div className="wrapper">
            <div className="home-page">
                <article>Hoşgeldiniz, <b>{username}</b></article>
                <Link to="/" onClick={userLogout}>
                    <button className="button-logout">Logout<img src={LogoutIcon} alt="Logout" /></button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
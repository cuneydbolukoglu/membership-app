import { Link } from 'react-router-dom';
import LogoutIcon from '../assets/img/sign-out-alt-solid.svg';
import fire from '../firebase';

const Home = props => {

    const userLogout = () => {
        fire.auth().signOut();
    }

    return (
        <div className="wrapper" >
            <div className="home-page">
                <article>Hoşgeldiniz, <b>{props.user}</b></article>
                <Link to="/" onClick={userLogout}>
                    <button className="button-logout">Logout<img src={LogoutIcon} alt="Logout" /></button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
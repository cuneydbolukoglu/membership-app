import { useState } from 'react';
import { Link } from 'react-router-dom';
import { USER_LOCALSTORAGE_NAME } from '../components/message/message';
import LogoutIcon from '../assets/img/sign-out-alt-solid.svg';
import Header from '../components/header';
import fire from '../firebase';

const Home = props => {
    const [user, setUser] = useState(null);
    const match = props.match.path === '/home'
    
    fire.auth().onAuthStateChanged((user)=> {
        setUser(user.email);
    })

    const userLogout = () => {
        fire.auth().signOut();
    }

    return (
        <>
            <Header match={match} />
            <div className="wrapper" >
                <div className="home-page">
                    <article>Hoşgeldiniz, <b>{user}</b></article>
                    <Link to="/" onClick={userLogout}>
                        <button className="button-logout">Logout<img src={LogoutIcon} alt="Logout" /></button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home;
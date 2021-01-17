import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoutIcon from '../assets/img/sign-out-alt-solid.svg';
import { auth } from '../firebase';

const Home = props => {
    const [user, setUser] = useState('');

    useEffect(() => {

        const authListener = () => {
            auth.onAuthStateChanged((user) => {
                user ? setUser(user.email) : setUser(null)
            })
        }
        authListener();
    }, []);


    const userLogout = () => {
        auth.signOut();
        localStorage.removeItem("token")
    }

    return (
        <div className="wrapper" >
            <div className="home-page">
                <article>Hoşgeldiniz, <b>{user}</b></article>
                <Link to="/" onClick={userLogout}>
                    <button className="button-logout">Logout<img src={LogoutIcon} alt="Logout" /></button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
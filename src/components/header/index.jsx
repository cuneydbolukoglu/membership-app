import { useLocation } from 'react-router-dom';
import logo from '../../assets/img/users-solid.svg';

const Index = props => {

    const location = useLocation();
    const match = location.pathname === '/home'

    return (
        match ? (
            <header>
                <div className="wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo" />Membership App
                    </div>
                </div>
            </header>
        ) : <></>
    )
}

export default Index;
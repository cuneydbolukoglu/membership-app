import { setData } from '../components/data-controller';

const Home = props => {

    const newUser = { id: "12121", username: "cuneyd", password: "1234" };

    const onClick = e => {
        setData(newUser, function (response) {
            console.log(response)
        })
    }

    return (
        <h1 onClick={onClick}>Home</h1>
    )
}

export default Home;
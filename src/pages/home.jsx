import { getData, setData } from '../components/data-controller';

const Home = props => {

    const onClick = e => {

        getData(function (response) {
            console.log("response :", response)
        })
    }

    return (
        <h1 onClick={onClick}>Home</h1>
    )
}

export default Home;
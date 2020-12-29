import logo from '../../assets/img/users-solid.svg'

const Index = props => {

    const match = props.match

    return (
        match ? (
            <header>
                <div className="wrapper">
                    <div className="logo">
                       <img src={logo} alt="logo"/>Membership App
                    </div>
                </div>
            </header>
        ) : <></>
    )
}

export default Index;
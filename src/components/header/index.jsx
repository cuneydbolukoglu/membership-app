const Index = props => {

    const location = window.location;
    console.log(location);

    return (
        window.location.pathname === "/home" && (
            <header>
                <div className="logo">
                    Membership App
                </div>
            </header>
        )
    )
}

export default Index;
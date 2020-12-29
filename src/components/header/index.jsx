const Index = props => {

    console.log("location :", navigator);

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
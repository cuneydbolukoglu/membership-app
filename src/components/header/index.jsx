const Index = props => {

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
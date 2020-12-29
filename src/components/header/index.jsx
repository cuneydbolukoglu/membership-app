const Index = props => {

    const match = props.match

    return (
        match ? (
            <header>
                <div className="logo">
                    Membership App
                </div>
            </header>
        ) : <></>
    )
}

export default Index;
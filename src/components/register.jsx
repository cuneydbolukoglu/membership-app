const Register = props => {
    return (
        <div className="register">
            <h1>Register</h1>
            <form>
                <input type="text"
                    placeholder="Username"
                />
                <input type="text"
                    placeholder="Password"
                />
                <input type="text"
                    placeholder="Repeat password"
                />
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default Register;
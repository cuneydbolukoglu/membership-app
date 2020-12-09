const Register = props => {
    return (
        <div className="register">
            <h1>Register</h1>
            <form>
                <input type="text"
                    placeholder="username"
                />
                <input type="text"
                    placeholder="password"
                />
                <input type="text"
                    placeholder="repeat password"
                />
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default Register;
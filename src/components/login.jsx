const Login = props => {
    return (
        <div className="login">
            <h1>LOGIN</h1>

            <form>
                <input type="text"
                    placeholder="Username"
                />
                <input type="text"
                    placeholder="Password"
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;
const Login = props => {
    return (
        <div className="login">
            <h1>LOGIN</h1>

            <form>
                <input type="text"
                    placeholder="username"
                />
                <input type="text"
                    placeholder="password"
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;
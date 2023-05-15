import "../styles/authenticateUser.css";

const AuthenticateUser = (props) => {
  return (
    <div className="auth">
      <div className="auth-form-parent">
        <form className="authUser" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="userName">Username: </label>
          <input
            id="userName"
            type="file"
            placeholder="Username"
            required
            onChange={(e) => props.setName(e.target.value)}
            value={props.name}
          />
          <label htmlFor="passwd">Password: </label>
          <input
            type="password"
            id="passwd"
            placeholder="Password"
            required
            onChange={(e) => props.setPasswd(e.target.value)}
            value={props.passwd}
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
      <div className="signup-btn">
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default AuthenticateUser;

const AuthenticateUser = (props) => {
  return (
    <div className="auth">
      Login/SignUp Section
      <form className="authUser" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="userName">Username: </label>
        <input
          id="userName"
          placeholder="userName"
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
        <button
          type="submit"
          style={{
            display: "block",
          }}
        >
          Login
        </button>
      </form>
      <div>
        <button
          style={{
            display: "block",
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default AuthenticateUser;

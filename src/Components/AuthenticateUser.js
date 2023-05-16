import { useState, useEffect } from "react";
import "../styles/authenticateUser.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../LoginContext";

const AuthenticateUser = () => {
  const { name, setName, passwd, setPasswd, setAccessToken } =
    useContext(LoginContext);

  // const [name, setName] = useState("");
  // const [passwd, setPasswd] = useState("");
  const [msg, setMsg] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);
  // const [accessToken, setAccessToken] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    setLoginClicked(true);
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: name, password: passwd }),
      });

      const responseData = await response.json();
      if (response.status === 200) {
        setAccessToken(responseData.accessToken);
        setName(responseData.username);
        setMsg("Login succesful \n Redirecting to the home page...");
      } else {
        setErrMsg(
          `Recieved status :${response.status} from the server with the message "${responseData.message}"`
        );
      }
    } catch (err) {
      alert("server error please reload the page");
    }
  };

  const handleAfterLogin = () => {
    setErrMsg();
    setName("");
    setPasswd("");
    setShouldRedirect(false);
    setLoginClicked(false);
  };
  const afterLoginContent = (
    <>
      {errMsg ? (
        <>
          {errMsg} <button onClick={handleAfterLogin}> Retry </button>
        </>
      ) : (
        msg
      )}
    </>
  );

  useEffect(() => {
    const delay = 3000; // 3000 milliseconds (3 seconds)
    const redirectTimeout = setTimeout(() => {
      if (msg) {
        setShouldRedirect(true);
      }
    }, delay);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [msg]);

  if (shouldRedirect) {
    return navigate("/exclusive");
  }

  return (
    <div className="layout">
      <div className="auth">
        {loginClicked ? (
          afterLoginContent
        ) : (
          <>
            <div className="auth-form-parent">
              <form className="authUser" onSubmit={handleLogin}>
                <label htmlFor="userName">Username : </label>
                <input
                  id="userName"
                  type="text"
                  placeholder="Username"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <label htmlFor="passwd">Password : </label>
                <input
                  type="password"
                  id="passwd"
                  placeholder="Password"
                  required
                  onChange={(e) => setPasswd(e.target.value)}
                  value={passwd}
                />
                <button type="submit" className="login-btn">
                  Login
                </button>
              </form>
            </div>
            <div className="signup-btn">
              <Link to="/register">Sign Up</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthenticateUser;

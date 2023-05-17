import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext({});

export const DataProvider = ({ children }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (name === "" || id === "") {
      const redirectTimeout = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => {
        clearTimeout(redirectTimeout);
      };
    }
  }, [accessToken]);

  return (
    <LoginContext.Provider
      value={{
        name,
        setName,
        passwd,
        setPasswd,
        setAccessToken,
        accessToken,
        id,
        setId,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;

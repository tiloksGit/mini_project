import { createContext } from "react";
import { useState } from "react";

const LoginContext = createContext({});

export const DataProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [accessToken, setAccessToken] = useState("");

  return (
    <LoginContext.Provider
      value={{ name, setName, passwd, setPasswd, setAccessToken, accessToken }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;

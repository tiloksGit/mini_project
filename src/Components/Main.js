import { useEffect, useState } from "react";
import { useContext } from "react";
import LoginContext from "../LoginContext";
import "../styles/home.css";
const Main = () => {
  const { name, accessToken } = useContext(LoginContext);

  const [displayContent, setDisplayContent] = useState("");
  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await fetch("http://localhost:4000/", {
          method: "GET",
          headers: {
            "Content-Type": "text/html",
          },
        });

        if (response.ok) {
          const htmlContent = await response.text();
          setDisplayContent(htmlContent);
        }
      } catch (err) {
        alert(err.message);
      }
    };

    getContent();
  }, [accessToken]);
  return (
    <>
      <p className="log-info">You are Signed In as: {name}</p>
      <div dangerouslySetInnerHTML={{ __html: displayContent }} />
    </>
  );
};

export default Main;

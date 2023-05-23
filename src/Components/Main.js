import { useEffect, useState } from "react";
import { useContext } from "react";
import dataContext from "../dataContext";
import "../styles/home.css";
const Main = () => {
  const { userName, accessToken, setMsg } = useContext(dataContext);

  const [displayContent, setDisplayContent] = useState("");
  useEffect(() => {
    setMsg(null);
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
      <p className="log-info">You are Signed in as: {userName}</p>
      <div dangerouslySetInnerHTML={{ __html: displayContent }} />
    </>
  );
};

export default Main;

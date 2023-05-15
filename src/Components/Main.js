import { useEffect, useState } from "react";

const Main = () => {
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
  }, []);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: displayContent }} />
    </>
  );
};

export default Main;

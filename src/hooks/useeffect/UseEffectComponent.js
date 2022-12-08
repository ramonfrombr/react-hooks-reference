import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { code } from "./code";

const UseEffectComponent = () => {
  const [showCode, setShowCode] = useState(false);

  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    return () => {
      console.log("component unmounted. useEffect finished");
    };
  }, [resourceType]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Function that is returned when the component is unmounted. Use this to remove side effects that where created inside the useEffect hook that might bug the program if the continue to exist when the component is unmounted.
    // This is considered a CLEANUP function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h1>useEffect</h1>
      <p
        style={{
          backgroundColor: `rgb(${windowWidth / 4}, ${windowWidth / 10}, ${
            windowWidth - 500
          })`,
        }}
      >
        Size of the window: {windowWidth}
      </p>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h2>{resourceType}</h2>

      {items.map((item, idx) => {
        return (
          <pre className="truncate" key={idx}>
            {JSON.stringify(item, null, 2)}
          </pre>
        );
      })}

      <br />
      <br />
      <hr />
      <br />
      <br />

      <button onClick={() => setShowCode(!showCode)}>
        {showCode ? "Hide Code" : "Show Code"}
      </button>
      {showCode && (
        <>
          {/*<pre>{codeSnippet}</pre>*/}

          <SyntaxHighlighter
            wrapLongLines
            showLineNumbers
            language="javascript"
            style={atomOneDark}
          >
            {code}
          </SyntaxHighlighter>
        </>
      )}
    </>
  );
};

export default UseEffectComponent;

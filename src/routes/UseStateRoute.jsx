import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { code } from "../hooks/usestate/code";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import ShowCodeButton from "../components/ShowCodeButton";

function getCountValue() {
  console.log("Console log run at every component mount");
  return 0;
}

const UseStateRoute = () => {
  const [showCode, setShowCode] = useState(false);

  // State static setting
  const [example, setExample] = useState("example value");

  // State setting function run only on mount
  const [count1, setCount1] = useState(() => {
    console.log("Console log run only on first mount");
    return 0;
  });

  // State setting function run at every component mount
  const [count2, setCount2] = useState(getCountValue());

  const [countObject, setCountObject] = useState({ count: 0, theme: "blue" });

  const count = countObject.count;
  const theme = countObject.theme;

  // INCORRECT way of updating the state
  const decrementCountOnce = () => {
    setCount1(count1 - 1);
    setCount1(count1 - 1);
  };

  const incrementCountOnce = () => {
    setCount1(count1 + 1);
    setCount1(count1 + 1);
  };

  // CORRECT way of updating the state
  const decrementCountTwice = () => {
    setCount2((prevCount) => prevCount - 1);
    setCount2((prevCount) => prevCount - 1);
  };

  const incrementCountTwice = () => {
    setCount2((prevCount) => prevCount + 1);
    setCount2((prevCount) => prevCount + 1);
  };

  // Updating state based on Object
  const decrementCountObject = () => {
    setCountObject((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };

  const incrementCountObject = () => {
    setCountObject((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };

  return (
    <div>
      <h1>useState</h1>
      <p>
        In this counter, the useState set method is being called twice, but it
        only increments and decrements once
      </p>
      <button onClick={decrementCountOnce}>-</button>
      <span>{count1}</span>
      <button onClick={incrementCountOnce}>+</button>

      <hr />

      <p>
        In this counter, the useState set method is being called twice, and it
        increments and decrements TWICE :)!
      </p>
      <p>
        The code used in this counter is considered the correct way of updating
        the state
      </p>
      <button onClick={decrementCountTwice}>-</button>
      <span>{count2}</span>
      <button onClick={incrementCountTwice}>+</button>

      <hr />

      <p>
        In this counter, the value for the counter is a property of an object.
        To update one of the properties in the object, you have to spread the
        whole object inside the set function, and only assign the property you
        want to change.
      </p>
      <button onClick={decrementCountObject}>-</button>
      <span style={{ backgroundColor: theme }}>{count}</span>
      <button onClick={incrementCountObject}>+</button>

      <br />
      <br />
      <hr />
      <br />
      <br />

      <ShowCodeButton showCode={showCode} setShowCode={setShowCode} />

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
    </div>
  );
};

export default UseStateRoute;

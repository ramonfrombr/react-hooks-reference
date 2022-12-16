import React, { useState, useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

function getCountValue() {
  console.log("Console log run at every component mount");
  return 0;
}

const UseStateExample1 = () => {
  const language = useContext(LanguageContext);

  // State setting function run only on mount
  const [count1, setCount1] = useState(() => {
    console.log("Console log run only on first mount");
    return 0;
  });

  // State setting function run at every component mount
  const [count2, setCount2] = useState(getCountValue());

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

  return (
    <div>
      <p>{language.useState.example1.explanation1}</p>
      <button onClick={decrementCountOnce}>-</button>
      <span>{count1}</span>
      <button onClick={incrementCountOnce}>+</button>
      <hr />
      <p>{language.useState.example1.explanation2}</p>
      <button onClick={decrementCountTwice}>-</button>
      <span>{count2}</span>
      <button onClick={incrementCountTwice}>+</button>
    </div>
  );
};

export default UseStateExample1;

export const code = `import React, { useState } from "react";

function getCountValue() {
  console.log("Console log run at every component mount");
  return 0;
}

const Counters = () => {
  // State setting function run only on mount
  const [count1, setCount1] = useState(() => {
    console.log("Console log run only on first mount");
    return 0;
  });

  // State setting function run at every component mount
  const [count2, setCount2] = useState(getCountValue());

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

  return (
    <div>
      {" "}
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
    </div>
  );
};

export default Counters;
`;

export const snippets = [{ fileName: "Counters.jsx", fileContent: code }];

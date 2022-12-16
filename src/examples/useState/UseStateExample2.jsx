import React, { useState, useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

const UseStateExample2 = () => {
  const language = useContext(LanguageContext);

  const [countObject, setCountObject] = useState({ count: 0, theme: "gray" });

  const count = countObject.count;
  const theme = countObject.theme;

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
      <p>{language.useState.example2.explanation1}</p>
      <button onClick={decrementCountObject}>-</button>
      <span style={{ backgroundColor: theme }}>{count}</span>
      <button onClick={incrementCountObject}>+</button>
    </div>
  );
};

export default UseStateExample2;

const code = `import React, { useState } from "react";

const Counter = () => {
  const [countObject, setCountObject] = useState({
    count: 0,
    theme: "gray"
  });

  const count = countObject.count;
  const theme = countObject.theme;

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
      <p>
        In this counter, the value for the counter is a property of an object.
        To update one of the properties in the object, you have to spread the
        whole object inside the set function, and only assign the property you
        want to change.
      </p>
      <button onClick={decrementCountObject}>-</button>
      <span style={{ backgroundColor: theme }}>{count}</span>
      <button onClick={incrementCountObject}>+</button>
    </div>
  );
};`;

export const snippets = [{ fileName: "Counter.jsx", fileContent: code }];

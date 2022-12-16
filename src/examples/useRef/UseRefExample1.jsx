import React, { useRef } from "react";

const UseRefExample1 = () => {
  const inputRef = useRef();

  // Accessing an element using useRef
  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focus}>Focus input</button>
    </>
  );
};

export default UseRefExample1;

export const code = `import React, { useRef } from "react";

const UseRefExample1 = () => {
  const inputRef = useRef();

  // Accessing an element using useRef
  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focus}>Focus input</button>
    </>
  );
};`;

export const snippets = [{ fileName: "UseRefExample.jsx", fileContent: code }];

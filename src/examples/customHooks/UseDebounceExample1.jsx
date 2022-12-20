import React, { useState } from "react";
import useDebounce from "../../customHooks/useDebounce";

const UseDebounceExample1 = () => {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default UseDebounceExample1;

const hookCode = `import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}`;

const code = `import React, { useState } from "react";
import useDebounce from "./useDebounce";

const UseDebounceExample1 = () => {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => 
        setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};`;

export const snippets = [
  { fileName: "useDebounce.js", fileContent: hookCode },
  { fileName: "UseDebounceExample.jsx", fileContent: code },
];

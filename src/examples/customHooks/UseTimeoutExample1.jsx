import React, { useState } from "react";
import useTimeout from "../../customHooks/useTimeout";

const UseTimeoutExample1 = () => {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 2000);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 10)}>Increment</button>
      <button onClick={() => clear()}>Clear Timeout</button>
      <button onClick={() => reset()}>Reset Timeout</button>
    </div>
  );
};

export default UseTimeoutExample1;

const hookCode = `import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
`;

const code = `import React, { useState } from "react";
import useTimeout from "./useTimeout";

const UseTimeoutExample = () => {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 10)}>Increment</button>
      <button onClick={() => clear()}>Clear Timeout</button>
      <button onClick={() => reset()}>Reset Timeout</button>
    </div>
  );
};`;

export const snippets = [
  { fileName: "useTimeout.js", fileContent: hookCode },
  { fileName: "UseTimeoutExample.jsx", fileContent: code },
];

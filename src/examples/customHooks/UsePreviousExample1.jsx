import React, { useState } from "react";
import usePrevious from "../../customHooks/usePrevious";

const UsePreviousExample1 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Kyle");
  const previousCount = usePrevious(count);
  return (
    <div>
      <div>
        {count} = {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName("John")}>Change Name</button>
    </div>
  );
};

export default UsePreviousExample1;

const hookCode = `import { useRef } from "react";

export default function usePrevious(value) {
  const currentRef = useRef(value);

  const previousRef = useRef();

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current;
}
`;

const code = `import React, { useState } from "react";
import usePrevious from "./usePrevious";

const UsePreviousExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Kyle");
  const previousCount = usePrevious(count);
  return (
    <div>
      <div>
        {count} = {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName("John")}>Change Name</button>
    </div>
  );
};`;

export const snippets = [
  { fileName: "usePrevious.js", fileContent: hookCode },
  { fileName: "UsePreviousExample.jsx", fileContent: code },
];

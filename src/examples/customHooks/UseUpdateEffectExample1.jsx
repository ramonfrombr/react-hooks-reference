import React, { useState } from "react";
import useUpdateEffect from "../../customHooks/useUpdateEffect";

const UseUpdateEffectExample1 = () => {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default UseUpdateEffectExample1;

const hookCode = `import { useEffect, useRef } from "react";

export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
`;

const code = `import React, { useState } from "react";
import useUpdateEffect from "../../customHooks/useUpdateEffect";

const UseUpdateEffectExample1 = () => {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};`;

export const snippets = [
  { fileName: "useUpdateEffect.js", fileContent: hookCode },
  { fileName: "UseUpdateEffectExample.jsx", fileContent: code },
];

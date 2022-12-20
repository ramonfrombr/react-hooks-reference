import React from "react";
import useArray from "../../customHooks/useArray";

const UseArrayExample1 = () => {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);
  return (
    <div>
      <div>{array.join(",")}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change Second Element to 9</button>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter((n) => n < 3)}>
        Keep Numbers Less Than 4
      </button>
      <button onClick={() => set([1, 2])}>Set to 1, 2</button>
      <button onClick={() => clear()}>Clear</button>
    </div>
  );
};

export default UseArrayExample1;

const hookCode = `import { useState } from "react";

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  function push(element) {
    setArray((a) => [...a, element]);
  }

  function filter(callback) {
    setArray((a) => a.filter(callback));
  }

  function update(index, newElement) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...slice(index + 1, a.length),
    ]);
  }

  function remove(index) {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length),
    ]);
  }

  function clear() {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
}`;

const code = `import React from "react";
import useArray from "./useArray";

const UseArrayExample1 = () => {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ]);
  return (
    <div>
      <div>{array.join(",")}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change Second Element to 9</button>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter((n) => n < 3)}>
        Keep Numbers Less Than 4
      </button>
      <button onClick={() => set([1, 2])}>Set to 1, 2</button>
      <button onClick={() => clear}>Clear</button>
    </div>
  );
};`;

export const snippets = [
  { fileName: "useArray.js", fileContent: hookCode },
  { fileName: "UseArrayExample.jsx", fileContent: code },
];

import React from "react";
import useToggle from "../../customHooks/useToggle";

const UseToggleExample1 = () => {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
    </div>
  );
};

export default UseToggleExample1;

export const code = `import React, { useState } from "react";

// Custom Hook
function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value) {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
}

// Example Component
const UseToggleExample = () => {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(true)}>Make False</button>
    </div>
  );
};`;

export const snippets = [{ fileName: "useToggle.jsx", fileContent: code }];

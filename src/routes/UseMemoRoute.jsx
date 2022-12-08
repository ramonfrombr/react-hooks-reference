import React, { useState, useMemo, useEffect } from "react";

const UseMemoComponent = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // Referencial equality for objects
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  });

  // Without themeStyles assigned inside a useMemo hook, the console.log would run everytime the component mounted, which includes when the counter variables is changed
  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>

      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(num) {
  console.log("Calling Slow Function");
  for (let i = 0; i < 200000000; i++) {}
  return num * 2;
}

export default UseMemoComponent;

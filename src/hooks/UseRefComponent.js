import React, { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  const [name, setName] = useState("");

  // renderCount = {current: 0}
  // Changing the value of a ref does not cause the component to re-render
  const renderCount = useRef(1);

  const inputRef = useRef();
  const previousName = useRef("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // ACessing an element using useRef
  const focus = () => {
    inputRef.current.focus();
  };

  // Persisting previous value
  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and used to be {previousName.current}
      </div>
      <div>I rendered {renderCount.current} times</div>
      <hr />
      <input ref={inputRef} />
      <button onClick={focus}>Focus input</button>
    </>
  );
};

export default UseRefComponent;

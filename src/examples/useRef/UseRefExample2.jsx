import React, { useEffect, useRef, useState } from "react";

const UseRefExample2 = () => {
  const [name, setName] = useState("");

  // renderCount = {current: 0}
  // Changing the value of a ref does not cause the component to re-render
  const renderCount = useRef(1);

  const previousName = useRef("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

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
    </>
  );
};

export default UseRefExample2;

export const code = `import React, { useEffect, useRef, useState } from "react";

const UseRefExample2 = () => {
  const [name, setName] = useState("");

  // renderCount = {current: 0}
  // Changing the value of a ref does not cause the component to re-render
  const renderCount = useRef(1);

  const previousName = useRef("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

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
    </>
  );
};`;

export const snippets = [{ fileName: "UseRefExample.jsx", fileContent: code }];

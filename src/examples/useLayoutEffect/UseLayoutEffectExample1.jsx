import React, { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffectExample1 = () => {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    debugger;
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();

    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <>
      <button ref={button} onClick={() => setShow((prevShow) => !prevShow)}>
        Click Here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is a popup
        </div>
      )}
    </>
  );
};

export default UseLayoutEffectExample1;

export const code = `import React, { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffectExample = () => {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    if ((popup.current == null) == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = \`\${bottom + 25}px\`;
  }, [show]);

  return (
    <>
      <button ref={button} onClick={() => setShow((prevShow) => !prevShow)}>
        Click Here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is a popup
        </div>
      )}
    </>
  );
};`;

export const snippets = [
  { fileName: "UseLayoutEffectExample.jsx", fileContent: code },
];

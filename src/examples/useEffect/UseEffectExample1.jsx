import React, { useEffect, useState } from "react";

const UseEffectExample1 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Function that is returned when the component is unmounted. Use this to remove side effects that where created inside the useEffect hook that might bug the program if the continue to exist when the component is unmounted.
    // This is considered a CLEANUP function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <p
        style={{
          backgroundColor: `rgb(
            ${windowWidth / 4},
            ${windowWidth / 10},
            ${windowWidth - 500}
          )`,
        }}
      >
        Size of the window: {windowWidth}
      </p>
    </>
  );
};

export default UseEffectExample1;

export const code = `
import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Function that is returned when the component is unmounted. Use this to remove side effects that where created inside the useEffect hook that might bug the program if the continue to exist when the component is unmounted.
    // This is considered a CLEANUP function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h1>useEffect</h1>
      <p
        style={{
          backgroundColor: \`rgb(
            \${windowWidth / 4},
            \${windowWidth / 10},
            \${windowWidth - 500}
          )\`,
        }}
      >
        Size of the window: {windowWidth}
      </p>
    </>
  );
};

export default UseEffectExample;
`;

export const snippets = [
  { fileName: "UseEffectExample.jsx", fileContent: code },
];

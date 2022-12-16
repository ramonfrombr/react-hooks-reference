import React, { useState } from "react";
import List from "./List";

const UseCallbackExample1 = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <>
      <p>
        This example does not use <code>useCallback</code>.
      </p>
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Toggle theme
        </button>
        <List getItems={getItems} />
      </div>
    </>
  );
};

export default UseCallbackExample1;

export const code = `
import React, { useState } from "react";

const UseCallbackExample = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallbackExample;
`;

export const listCode = `import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Updating Items");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};

export default List;
`;

export const snippets = [
  { fileName: "UseCallbackExample.jsx", fileContent: code },
  { fileName: "List.jsx", fileContent: listCode },
];

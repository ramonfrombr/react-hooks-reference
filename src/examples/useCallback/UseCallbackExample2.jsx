import React, { useCallback, useState } from "react";
import List from "./List";

const UseCallbackExample2 = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // When we the useCallback hook is used, the function is only recreated on component mount when the dependency array changes
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <>
      <p className="mb-5">
        This example uses <code>useCallback</code>. In this example, the
        <code>console.log</code> in the <code>List</code> component is not
        called when the theme is toggled, contrary to the first example. In this
        example, because the <code>useCallback</code> hook is being used on the{" "}
        <code>getItems()</code> function, the function is only recreated when
        the dependency array changes, instead of being recreated at every
        component mount.
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

export default UseCallbackExample2;

export const code = `import React, { useCallback, useState } from "react";
import List from "./List";

const UseCallbackExample = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // When we the useCallback hook is used, the function is only recreated on component mount when the dependency array changes
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <>
      <p>This example does not use useCallback</p>
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

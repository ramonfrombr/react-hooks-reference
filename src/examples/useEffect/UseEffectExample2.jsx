import React, { useEffect, useState } from "react";

const UseEffectExample2 = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    return () => {
      console.log("component unmounted. useEffect finished");
    };
  }, [resourceType]);

  return (
    <div>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h2>{resourceType}</h2>

      {items.map((item, idx) => {
        return (
          <pre className="truncate" key={idx}>
            {JSON.stringify(item, null, 2)}
          </pre>
        );
      })}
    </div>
  );
};

export default UseEffectExample2;

export const code = `
import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(\`https://jsonplaceholder.typicode.com/\${resourceType}\`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    return () => {
      console.log("component unmounted. useEffect finished");
    };
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h2>{resourceType}</h2>

      {items.map((item, idx) => {
        return (
          <pre className="truncate" key={idx}>
            {JSON.stringify(item, null, 2)}
          </pre>
        );
      })}
    </>
  );
};

export default UseEffectExample;
`;

export const snippets = [
  { fileName: "UseEffectExample.jsx", fileContent: code },
];

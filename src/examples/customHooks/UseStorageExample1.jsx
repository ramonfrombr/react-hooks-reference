import React from "react";
import {
  useLocalStorage,
  useSessionStorage,
} from "../../customHooks/useStorage";

const UseStorageExample1 = () => {
  const [name, setName, removeName] = useSessionStorage("name", "Kyle");
  const [age, setAge, removeAge] = useLocalStorage("age", 26);
  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("John")}>Set Name</button>
      <button onClick={() => setAge(40)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  );
};

export default UseStorageExample1;

const hookCode = `import { useCallback, useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}`;

const code = `import React from "react";
import {
  useLocalStorage,
  useSessionStorage,
} from "../../customHooks/useStorage";

const UseStorageExample = () => {
  const [name, setName, removeName] = useSessionStorage("name", "Kyle");
  const [age, setAge, removeAge] = useLocalStorage("age", 26);
  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("John")}>Set Name</button>
      <button onClick={() => setAge(40)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  );
};`;

export const snippets = [
  { fileName: "useStorage.js", fileContent: hookCode },
  { fileName: "UseStorageExample.jsx", fileContent: code },
];

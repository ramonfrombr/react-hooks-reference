import React from "react";
import FunctionContextComponent2 from "./FunctionContextComponent2";
import { ThemeProvider } from "./ThemeContext";

const UseContextExample2 = () => {
  return (
    <ThemeProvider>
      <p>
        In this example, we are implementing Context whose code lives in its own
        file.
      </p>
      <FunctionContextComponent2 />
    </ThemeProvider>
  );
};

export default UseContextExample2;

const code = `import React from "react";
import ContextComponent from "./ContextComponent";
import { ThemeProvider } from "./ThemeContext";

const UseContextExample = () => {
  return (
    <ThemeProvider>
      <p>
        In this example, we are implementing Context whose code lives in its own file.
      </p>
      <ContextComponent />
    </ThemeProvider>
  );
};

export default UseContextExample;`;

const themeProviderCode = `import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
`;

const functionCode = `import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const ContextComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
    width: "fit-content",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
};

export default ContextComponent;
`;

export const snippets = [
  { fileName: "UseContextExample.jsx", fileContent: code },
  { fileName: "ThemeContext.js", fileContent: themeProviderCode },
  { fileName: "ContextComponent.jsx", fileContent: functionCode },
];

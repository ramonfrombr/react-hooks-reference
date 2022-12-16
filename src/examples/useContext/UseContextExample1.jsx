import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent1";
import ClassContextComponent from "./ClassContextComponent";

export const ThemeContext = React.createContext();

const UseContextExample1 = () => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
  };

  return (
    <ThemeContext.Provider value={dark}>
      <p>
        In this example, we have a functional component and a class component.
        The way to import context in the components is different from one
        another.
      </p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionContextComponent />
      <ClassContextComponent />
    </ThemeContext.Provider>
  );
};

export default UseContextExample1;

const code = `import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";

export const ThemeContext = React.createContext();

const UseContextExample = () => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
  };

  return (
      <ThemeContext.Provider value={dark}>
        <p>
          In this example, we have a functional component and a class component.
          The way to import context in the components is different from one
          another.
        </p>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
  );
};

export default UseContextExample;`;

const functionCode = `import React, { useContext } from "react";
import { ThemeContext } from "./UseContextExample";

const FunctionContextComponent = () => {
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
    width: "fit-content",
  };

  return <div style={themeStyles}>Function Theme</div>;
};

export default FunctionContextComponent;
`;

const classCode = `import React, { Component } from "react";
import { ThemeContext } from "./UseContextExample";

export default class ClassContextComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
      padding: "2rem",
      margin: "2rem",
      width: "fit-content",
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
`;

export const snippets = [
  { fileName: "UseContextExample.jsx", fileContent: code },
  { fileName: "FunctionContextComponent.jsx", fileContent: functionCode },
  { fileName: "ClassContextComponent.jsx", fileContent: classCode },
];

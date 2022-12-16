import React, { useContext } from "react";
import { ThemeContext } from "./UseContextExample1";

const FunctionContextComponent1 = () => {
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

export default FunctionContextComponent1;

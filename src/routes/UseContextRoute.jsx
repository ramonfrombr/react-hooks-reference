import React from "react";
import HookPage from "../components/HookPage";
import UseContextExample1, {
  snippets as Snippets1,
} from "../examples/useContext/UseContextExample1";
import UseContextExample2, {
  snippets as Snippets2,
} from "../examples/useContext/UseContextExample2";

const exampleComponents = [
  { component: <UseContextExample1 />, snippets: Snippets1 },
  { component: <UseContextExample2 />, snippets: Snippets2 },
];

const UseContextRoute = () => {
  return (
    <HookPage hookName="useContext" exampleComponents={exampleComponents} />
  );
};

export default UseContextRoute;

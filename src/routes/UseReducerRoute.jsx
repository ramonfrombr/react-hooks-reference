import React from "react";
import HookPage from "../components/HookPage";

import UseReducerExample1, {
  snippets as Snippets1,
} from "../examples/useReducer/UseReducerExample1";
import UseReducerExample2, {
  snippets as Snippets2,
} from "../examples/useReducer/UseReducerExample2";

const exampleComponents = [
  { component: <UseReducerExample1 />, snippets: Snippets1 },
  { component: <UseReducerExample2 />, snippets: Snippets2 },
];

const UseReducerRoute = () => {
  return (
    <HookPage hookName="useReducer" exampleComponents={exampleComponents} />
  );
};

export default UseReducerRoute;

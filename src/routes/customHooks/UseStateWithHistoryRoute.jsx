import React from "react";
import HookPage from "../../components/HookPage";

import UseStateWithHistoryExample1, {
  snippets as Snippets1,
} from "../../examples/customHooks/UseStateWithHistoryExample1";

const exampleComponents = [
  { component: <UseStateWithHistoryExample1 />, snippets: Snippets1 },
];

const hookExplanation = "";

const UseStateWithHistoryRoute = () => {
  return (
    <HookPage
      hookName="useStateWithHistory"
      hookExplanation={hookExplanation}
      exampleComponents={exampleComponents}
    />
  );
};

export default UseStateWithHistoryRoute;

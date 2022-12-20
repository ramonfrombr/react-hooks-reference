import React from "react";
import HookPage from "../../components/HookPage";

import UseTimeoutExample1, {
  snippets as Snippets1,
} from "../../examples/customHooks/UseTimeoutExample1";

const exampleComponents = [
  { component: <UseTimeoutExample1 />, snippets: Snippets1 },
];

const hookExplanation = "";

const UseTimeoutRoute = () => {
  return (
    <HookPage
      hookName="useTimeout"
      hookExplanation={hookExplanation}
      exampleComponents={exampleComponents}
    />
  );
};

export default UseTimeoutRoute;

import React from "react";
import HookPage from "../../components/HookPage";

import UseStorageExample1, {
  snippets as Snippets1,
} from "../../examples/customHooks/UseStorageExample1";

const exampleComponents = [
  { component: <UseStorageExample1 />, snippets: Snippets1 },
];

const hookExplanation = "";

const UseStorageRoute = () => {
  return (
    <HookPage
      hookName="useStorage"
      hookExplanation={hookExplanation}
      exampleComponents={exampleComponents}
    />
  );
};

export default UseStorageRoute;

import React from "react";
import HookPage from "../../components/HookPage";

import UseToggleExample1, {
  snippets as Snippets1,
} from "../../examples/customHooks/UseToggleExample1";

const exampleComponents = [
  { component: <UseToggleExample1 />, snippets: Snippets1 },
];

const hookExplanation = "";

const UseToggleRoute = () => {
  return (
    <HookPage
      hookName="useToggle"
      hookExplanation={hookExplanation}
      exampleComponents={exampleComponents}
    />
  );
};

export default UseToggleRoute;

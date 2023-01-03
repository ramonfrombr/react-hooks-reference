import React from "react";
import HookPage from "../../components/HookPage";

import UsePreviousExample1, {
  snippets as Snippets1,
} from "../../examples/customHooks/UsePreviousExample1";

const exampleComponents = [
  { component: <UsePreviousExample1 />, snippets: Snippets1 },
];

const hookExplanation = "";

const UsePreviousRoute = () => {
  return (
    <HookPage
      hookName="usePrevious"
      hookExplanation={hookExplanation}
      exampleComponents={exampleComponents}
    />
  );
};

export default UsePreviousRoute;

import React from "react";
import HookPage from "../../components/HookPage";

import UseArrayExample1, {
  snippets as Snippets1,
} from "../../examples/customHooks/UseArrayExample1";

const exampleComponents = [
  { component: <UseArrayExample1 />, snippets: Snippets1 },
];

const hookExplanation = "";

const UseArrayRoute = () => {
  return (
    <HookPage
      hookName="useArray"
      hookExplanation={hookExplanation}
      exampleComponents={exampleComponents}
    />
  );
};

export default UseArrayRoute;

import React from "react";
import HookPage from "../../components/HookPage";

import UseUpdateEffectExample1, {
  snippets as Snippets1,
} from "../../examples/customHooks/UseUpdateEffectExample1";

const exampleComponents = [
  { component: <UseUpdateEffectExample1 />, snippets: Snippets1 },
];

const hookExplanation = "";

const UseUpdateEffectRoute = () => {
  return (
    <HookPage
      hookName="useUpdateEffect"
      hookExplanation={hookExplanation}
      exampleComponents={exampleComponents}
    />
  );
};

export default UseUpdateEffectRoute;

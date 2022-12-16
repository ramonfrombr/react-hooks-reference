import React from "react";
import HookPage from "../components/HookPage";

import UseLayoutEffectExample1, {
  snippets as Snippets1,
} from "../examples/useLayoutEffect/UseLayoutEffectExample1";

const exampleComponents = [
  { component: <UseLayoutEffectExample1 />, snippets: Snippets1 },
];

const hookExplanation = "";

const UseLayoutEffectRoute = () => {
  return (
    <HookPage
      hookName="useLayoutEffect"
      hookExplanation={hookExplanation}
      exampleComponents={exampleComponents}
    />
  );
};

export default UseLayoutEffectRoute;

import React from "react";
import HookPage from "../../components/HookPage";

import UseDebounceExample1, {
  snippets as Snippets1,
} from "../../examples/customHooks/UseDebounceExample1";

const exampleComponents = [
  { component: <UseDebounceExample1 />, snippets: Snippets1 },
];

const hookExplanation = "";

const UseDebounceRoute = () => {
  return (
    <HookPage
      hookName="useDebounce"
      hookExplanation={hookExplanation}
      exampleComponents={exampleComponents}
    />
  );
};

export default UseDebounceRoute;

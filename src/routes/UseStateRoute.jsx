import React from "react";
import HookPage from "../components/HookPage";

import UseStateExample1, {
  snippets as Snippets1,
} from "../examples/useState/UseStateExample1";
import UseStateExample2, {
  snippets as Snippets2,
} from "../examples/useState/UseStateExample2";
import UseStateExample3, {
  snippets as Snippets3,
} from "../examples/useState/UseStateExample3";

const exampleComponents = [
  { component: <UseStateExample1 />, snippets: Snippets1 },
  { component: <UseStateExample2 />, snippets: Snippets2 },
  { component: <UseStateExample3 />, snippets: Snippets3 },
];

const hookExplanation = "";

const UseStateRoute = () => {
  return (
    <HookPage
      hookName="useState"
      hookExplanation={hookExplanation}
      exampleComponents={exampleComponents}
    />
  );
};

export default UseStateRoute;

import React from "react";
import HookPage from "../components/HookPage";

import UseEffectExample1, {
  snippets as Snippets1,
} from "../examples/useEffect/UseEffectExample1";
import UseEffectExample2, {
  snippets as Snippets2,
} from "../examples/useEffect/UseEffectExample2";

const exampleComponents = [
  { component: <UseEffectExample1 />, snippets: Snippets1 },
  { component: <UseEffectExample2 />, snippets: Snippets2 },
];

const UseStateRoute = () => {
  return (
    <HookPage hookName="useEffect" exampleComponents={exampleComponents} />
  );
};

export default UseStateRoute;

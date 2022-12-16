import React from "react";
import HookPage from "../components/HookPage";

import UseCallbackExample1, {
  snippets as Snippets1,
} from "../examples/useCallback/UseCallbackExample1";
import UseCallbackExample2, {
  snippets as Snippets2,
} from "../examples/useCallback/UseCallbackExample2";

const exampleComponents = [
  { component: <UseCallbackExample1 />, snippets: Snippets1 },
  { component: <UseCallbackExample2 />, snippets: Snippets2 },
];

const UseCallbackRoute = () => {
  return (
    <HookPage hookName="useCallback" exampleComponents={exampleComponents} />
  );
};

export default UseCallbackRoute;

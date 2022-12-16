import React from "react";
import HookPage from "../components/HookPage";

import UseRefExample1, {
  snippets as Snippets1,
} from "../examples/useRef/UseRefExample1";
import UseRefExample2, {
  snippets as Snippets2,
} from "../examples/useRef/UseRefExample2";

const exampleComponents = [
  { component: <UseRefExample1 />, snippets: Snippets1 },
  { component: <UseRefExample2 />, snippets: Snippets2 },
];

const UseRefRoute = () => {
  return <HookPage hookName="useRef" exampleComponents={exampleComponents} />;
};

export default UseRefRoute;

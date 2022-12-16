import React from "react";
import HookPage from "../components/HookPage";

import UseMemoExample1, {
  snippets as Snippets1,
} from "../examples/useMemo/UseMemoExample1";

const exampleComponents = [
  { component: <UseMemoExample1 />, snippets: Snippets1 },
];

const UseMemoRoute = () => {
  return <HookPage hookName="useMemo" exampleComponents={exampleComponents} />;
};

export default UseMemoRoute;

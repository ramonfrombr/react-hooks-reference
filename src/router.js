import { createBrowserRouter } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./routes/ErrorPage";
import Homepage from "./routes/Homepage";
import UseStateRoute from "./routes/UseStateRoute";
import UseEffectRoute from "./routes/UseEffectRoute";
import UseContextRoute from "./routes/UseContextRoute";
import UseReducerRoute from "./routes/UseReducerRoute";
import UseCallbackRoute from "./routes/UseCallbackRoute";
import UseMemoRoute from "./routes/UseMemoRoute";
import UseRefRoute from "./routes/UseRefRoute";
import UseLayoutEffectRoute from "./routes/UseLayoutEffectRoute";
import UseToggleRoute from "./routes/customHooks/UseToggleRoute";
import UseTimeoutRoute from "./routes/customHooks/UseTimeoutRoute";
import UseDebounceRoute from "./routes/customHooks/UseDebounceRoute";
import UseUpdateEffectRoute from "./routes/customHooks/UseUpdateEffectRoute";
import UseArrayRoute from "./routes/customHooks/UseArrayRoute";
import UsePreviousRoute from "./routes/customHooks/UsePreviousRoute";
import UseStateWithHistoryRoute from "./routes/customHooks/UseStateWithHistoryRoute";
import UseStorageRoute from "./routes/customHooks/UseStorageRoute";

const hookRoutes = [
  {
    path: "useState",
    element: <UseStateRoute />,
  },
  {
    path: "useEffect",
    element: <UseEffectRoute />,
  },
  {
    path: "useContext",
    element: <UseContextRoute />,
  },

  {
    path: "useReducer",
    element: <UseReducerRoute />,
  },
  {
    path: "useCallback",
    element: <UseCallbackRoute />,
  },
  {
    path: "useMemo",
    element: <UseMemoRoute />,
  },
  {
    path: "useRef",
    element: <UseRefRoute />,
  },
  {
    path: "useLayoutEffect",
    element: <UseLayoutEffectRoute />,
  },
  {
    path: "useToggle",
    element: <UseToggleRoute />,
  },
  {
    path: "useTimeout",
    element: <UseTimeoutRoute />,
  },
  {
    path: "useDebounce",
    element: <UseDebounceRoute />,
  },
  {
    path: "useUpdateEffect",
    element: <UseUpdateEffectRoute />,
  },
  {
    path: "useArray",
    element: <UseArrayRoute />,
  },
  {
    path: "usePrevious",
    element: <UsePreviousRoute />,
  },
  {
    path: "useStateWithHistory",
    element: <UseStateWithHistoryRoute />,
  },
  {
    path: "useStorage",
    element: <UseStorageRoute />,
  },
  /*
  {
    path: "useAsync",
    element: <UseAsyncRoute />,
  },
  {
    path: "useFetch",
    element: <UseFetchRoute />,
  },  
  {
    path: "",element: <Route />,
  },
  {
    path: "",element: <Route />,
  },
  {
    path: "",element: <Route />,
  },
  {
    path: "",element: <Route />,
  },
  {
    path: "",element: <Route />,
  },
  {
    path: "",element: <Route />,
  },
  {
    path: "",element: <Route />,
  },
  {
    path: "",element: <Route />,
  },*/
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      ...hookRoutes,
    ],
  },
]);

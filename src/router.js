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
  /*
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

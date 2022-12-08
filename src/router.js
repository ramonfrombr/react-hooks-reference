import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Root from "./routes/root";
import Homepage from "./routes/Homepage";
import UseStateRoute from "./routes/UseStateRoute";
import UseEffectRoute from "./routes/UseEffectRoute";
import ErrorPage from "./routes/ErrorPage";

const hookRoutes = [
  {
    path: "useState",
    element: <UseStateRoute />,
  },
  {
    path: "useEffect",
    element: <UseEffectRoute />,
  },
  /*
  {
    path: "useContext",
    element: <useContextComponent />,
  },
  {
    path: "useReducer",
    element: <useReducerComponent />,
  },
  {
    path: "",
    element: <Component />,
  },
  {
    path: "",
    element: <Component />,
  },
  {
    path: "",
    element: <Component />,
  },
  {
    path: "",
    element: <Component />,
  },
  {
    path: "",
    element: <Component />,
  },
  {
    path: "",
    element: <Component />,
  },
  {
    path: "",
    element: <Component />,
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

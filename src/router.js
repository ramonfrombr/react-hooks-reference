import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import UseEffectComponent from "./hooks/useeffect/UseEffectComponent";
import UseStateComponent from "./hooks/usestate/UseStateComponent";

import Root from "./routes/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "usestate",
        element: <UseStateComponent />,
      },
      {
        path: "useeffect",
        element: <UseEffectComponent />,
      },
    ],
  },
]);

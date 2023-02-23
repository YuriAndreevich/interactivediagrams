import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/interactivediagrams",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);

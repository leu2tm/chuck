import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FrontPage from "./containers/FrontPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
  },
]);

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;

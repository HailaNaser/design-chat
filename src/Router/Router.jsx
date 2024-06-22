import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from '../Home'
import Login from '../Login';
import SignIn from '../SignIn';
import Window from '../Window';
// import './App.css';
import Signout from '../Signout';

 function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/Login",
          element: <Login/>,
        },
        {
          path: "/SignIn",
          element: <SignIn/>,
        },
        {
          path: "/Home",
          element: <Home/>,
        },
        {
          path: "/Window",
          element: <Window/>,
        },
        {
          path: "/Signout",
          element: <Signout/>,
        },
      ]);
  return (
    <div>
            <RouterProvider router={router} />
    </div>
  )
}
export default Router

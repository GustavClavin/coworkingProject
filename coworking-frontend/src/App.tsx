import { lazy } from 'react';
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Details from "./pages/Details"
import Account from "./pages/Account"






function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
         {
          index: true,
          element: <Home />
        }
      ]
    },{
      path: '/details/:slug',
      element: <RootLayout />,
      children: [
         {
          index: true,
          element: <Details />
        }
      ]
    },
    {
      path: '/account/:email',
      element: <RootLayout />,
      children: [
         {
          index: true,
          element: <Account />
        }
      ]
    },
])

  return (
    <RouterProvider router={router} />
  )
}

export default App;

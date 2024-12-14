import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Layout from './Component/Layout/Layout';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './providers/AuthProvider';
import CourseCards from './components/CourseCards/CourseCards';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      }, {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      }, {
        path: "/register",
        element: <Register></Register>
      }, {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/courses",
        element: <CourseCards></CourseCards>,
        loader: () => fetch('/data.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)

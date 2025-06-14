import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom"
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import ParamComp from './components/ParamComp'
import Courses from './components/Courses'
import MockTests from './components/MockTests'
import Reports from './components/Reports'
import Notfound from './components/Notfound'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
        <NavBar />
        <Home />
      </div>
       
    },

    {
      path:"/about",
      element: <div>
        <NavBar />
        <About/>
      </div>
    },

    {
      path:"/dashboard",
      element: <div>
        <NavBar />
        <Dashboard />
      </div>,
      children: [
        {
          path:'courses',
          element: <Courses />
        },
        {
          path:'mock-tests',
          element: <MockTests />
        },
        {
          path:'reports',
          element: <Reports />
        }
      ]
    },
    {
      path:"/student/:id",
      element: <div>
        <NavBar />
        <ParamComp />
      </div>
    },
    {
      path:'*',
      element: <Notfound />

    }
  ]
);

function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

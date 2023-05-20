import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ErrorPage from './components/ErrorPage'
import Blog from './components/Blog'
import './index.css'
import Login from './components/Login'
import Register from './components/Register'
import AuthProviders from './components/provider/AuthProviders'
import PrivateRoute from './components/routes/PrivateRoute'
import MyToys from './components/MyToys'
import AddAtoy from './components/AddAtoy'
import Alltoys from './components/Alltoys'
import UpdateAtoy from './components/UpdateAtoy'
import ViewToy from './components/ViewToy'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage />,
    loader: () => fetch('https://toy-serer-side.vercel.app/products')
  },

  {
    path: 'register',
    element: <Register />
  },
  {
    path: 'blog',
    element: <Blog></Blog>
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'viewToy/:id',
    element: <PrivateRoute><ViewToy></ViewToy></PrivateRoute>,
    loader: () => fetch('https://toy-serer-side.vercel.app/products')
  },
  {
    path: 'mytoys',
    element: <MyToys></MyToys>,
    loader: () => fetch('https://toy-serer-side.vercel.app/products')
  },
  {
    path: 'addtoy',
    element: <AddAtoy></AddAtoy>
  },
  {
    path: 'alltoys',
    element: <Alltoys></Alltoys>,
    loader: () => fetch('https://toy-serer-side.vercel.app/products')
  },
  {
    path: 'updateAtoy/:id',
    element: <UpdateAtoy></UpdateAtoy>,
    loader: () => fetch('https://toy-serer-side.vercel.app/products')
  }
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <RouterProvider router={router} />
  </AuthProviders>

);

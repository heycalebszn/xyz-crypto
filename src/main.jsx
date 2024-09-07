import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Admin from './sections/Admin/Admin.jsx';
import ReadMore from './sections/ReadMore/index.jsx';
import UserAuth from './sections/Auth/UserAuth.jsx';
import Login from './sections/Auth/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/user-auth",
    element: <UserAuth />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/read-more",
    element: <ReadMore />
  },
  {
    path: "/admin",
    element: <Admin />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>,
)

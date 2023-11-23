import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import NotFound from './Components_folder/NotFound.jsx'
import Services from './Components_folder/Services.jsx';
import './Main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components_folder/Home.jsx';
import Contact_Us from './Components_folder/Contact_Us.jsx';
import About_us from './Components_folder/About_us.jsx';
import Dashboard from './Components_folder/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Service',
        element: <Services />
      },
      {
        path : '/Contact',
        element : <Contact_Us/>
      },
      {
        path : '/About',
        element : <About_us/>
      },
      {
        path : '/Dashboard',
        element : <Dashboard/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
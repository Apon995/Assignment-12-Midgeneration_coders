import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import NotFound from './Components_folder/NotFound.jsx'
import './Main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components_folder/Home.jsx';
import Contact_Us from './Components_folder/Contact_Us.jsx';
import About_us from './Components_folder/About_us.jsx';
import Login from './Components_folder/Login.jsx';
import Register from './Components_folder/Register.jsx';
import AuthProvider from './Context_provider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Private from './Components_folder/Private.jsx';
import Dashboard from './DashboardComponents/Dashboard.jsx';
import Employe from './DashboardComponents/Employe.jsx';
import Pay from './DashboardComponents/Pay.jsx';
import Chart from './DashboardComponents/Chart.jsx';
import MyProfile from './DashboardComponents/MyProfile.jsx';
import PaymentDetails from './DashboardComponents/PaymentDetails.jsx';
import AllUsers from './DashboardComponents/AllUsers.jsx';

import Update from './DashboardComponents/Update.jsx';
import Mywork from './DashboardComponents/Mywork.jsx';
import Allservice from './DashboardComponents/Allservice.jsx';
import Addservice from './DashboardComponents/Addservice.jsx';
import Updateservice from './DashboardComponents/Updateservice.jsx';


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
        path: '/Contact',
        element: <Contact_Us />
      },
      {
        path: '/About',
        element: <About_us />
      },
      {
        path: '/Login',
        element: <Login />

      },
      {
        path: '/Register',
        element: <Register />
      }
    ]
  },
  {
    path: '/Dashboard',
    element: <Private><Dashboard /></Private>,
    errorElement: <NotFound />,
    children: [
      {
        path : '/Dashboard/MyProfile',
        element : <MyProfile/>

      },
      {
        path: '/Dashboard/employee',
        element: <Employe />
      },
      {
        path: '/Dashboard/pay',
        element: <Pay />
      },
      {
        path: '/Dashboard/Chart',
        element: <Chart/>
      },
      {
        path: '/Dashboard/PayHistory',
        element: <PaymentDetails/>
      },
      {
        path: '/Dashboard/Alluser',
        element: <AllUsers/>
      },
      {
        path: '/Dashboard/Services',
        element: <Allservice/>
      },
      {
        path: '/Dashboard/update',
        element: <Update/>
      },
      {
         path : '/Dashboard/Addservice',
         element : <Addservice/>
      },
      {
        path : '/Dashboard/updateService',
        element : <Updateservice/>

      },
      {
        path : '/Dashboard/Mywork',
        element : <Mywork/>
      }
    ]
  }
])


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './LandingPage/index.jsx';
import Aboutus from './components/custom/Aboutus.jsx';
import Donate from './components/custom/Donate.jsx'; 
import Partners from './components/custom/Partners.jsx';
import Volunteer from './components/custom/Volunteer.jsx';
import Activities from './components/custom/Activities.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: 
    [
      {
        path: '/activities',
        element: <Activities />
      },
      {
        path: '/aboutus',
        element: <Aboutus/>
      },
      {
        path: '/donate',
        element: <Donate/>
      },
      {
        path:'/partners',
        element:<Partners/>
      },
      {
        path:'/volunteer',
        element:<Volunteer/>
      }
    ]
  }, 
  {
    path: '/',
    element: <Home />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

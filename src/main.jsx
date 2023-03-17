import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Destination from './pages/destination';
import { Moon, Mars, Europa, Titan } from './components/Planets'
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import '../src/stylesheet/index.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/destination",
    element: <Destination />,
    children: [
      {
        path: '/destination/',
        element: <Moon />

      },
      {
        path: '/destination/mars',
        element: <Mars />
      },

      {
        path: '/destination/europa',
        element: <Europa />
      },

      {
        path: '/destination/titan',
        element: <Titan />

      },]
  },

  {
    path: "/crew",
    element: <Crew />,
  },

  {
    path: "/technology",
    element: <Technology />,
    children: []
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Calendar from './Pages/Calendar';
import Projects from './Pages/Projects';
import Income from './Pages/Income';
import Expenses from './Pages/Expenses';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRoutes=createBrowserRouter(
  [
   {
    path:'/',
    element:<Dashboard/>
   } ,
   {
    path:'calendar',
    element:<Calendar/>
   },
   {
    path:'projects',
    element:<Projects/>
   },
   {
    path:'income',
    element:<Income/>
   },
   {
    path:'expenses',
    element:<Expenses/>
   }
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}>
    </RouterProvider>
  </React.StrictMode>
);

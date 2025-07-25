import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider,Route,}from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Preflight from './pages/Preflight';
import BeforePush from './pages/BeforePush';
import Pushback from './pages/Pushback';
import Beforetaxi from './pages/Beforetaxi';
import Beforetakeoff from './pages/BeforeTakeoff';
import Transition from './pages/Transition';
import Descent from './pages/Descent';
import Final from './pages/Final';
import Taxitogate from './pages/Taxitogate';
import EngShoutD from './pages/EngshoutD';


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },{
    path:"Preflight",
    element:<Preflight/>
  },
  {
    path:"BeforePush",
    element:<BeforePush/>
  },
  {
    path:"Pushback",
    element:<Pushback/>
  },
  {
    path:"Beforetaxi",
    element:<Beforetaxi/>
  },
  {
    path:"Beforetakeoff",
    element:<Beforetakeoff/>
  },
  {
    path:"transition",
    element:<Transition/>
  },
  {
    path:"Descent",
    element:<Descent/>
  },
  {
    path:"Final",
    element:<Final/>
  },
  {
    path:"taxitogate",
    element:<Taxitogate/>
  },
  {
    path:"engineShoutdown",
    element:<EngShoutD/>
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

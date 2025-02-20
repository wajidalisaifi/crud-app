import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GetEmployee from './GetEmployee';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UpdateEmp from './UpdateEmp';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRout = createBrowserRouter(
  [
    {
      path:"/",
      element:<GetEmployee/>
    },
    {
      path:"save",
      element:<App/>
    },
    {
      path:"update/:id",
      element:<UpdateEmp/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allRout}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

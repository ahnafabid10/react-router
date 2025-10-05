import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './root.jsx';
import Home from './Home.jsx';
import Mobiles from './Mobiles.jsx';
import Laptops from './Laptops.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops}
    ]
  },
  {
    path: '/about',
    element: <div>About me here</div>
  },
  {
    path: 'blogs',
    element: <div>All blogs are here</div>
  },
  {
    path:'app',
    Component: App
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)

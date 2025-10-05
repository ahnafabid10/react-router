import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './root.jsx';
import Home from './Home.jsx';
import Mobiles from './Mobiles.jsx';
import Laptops from './Laptops.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';

const usersPromise = fetch ('https://jsonplaceholder.typicode.com/users').then(res=> res.json())


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {
        path: 'users', 
        loader:() => fetch('https://jsonplaceholder.typicode.com/users'),

        Component: Users
      },
      {
        path: "users2",
        element: <Suspense fallback={<span>Loading...</span>}>
          <Users2 usersPromise ={usersPromise}></Users2>
        </Suspense>
      }
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

import { createBrowserRouter } from "react-router-dom";



import RootLayout from "../RootLayout/RootLayout";
import HomePage from "../Pages/Home/HomePage/HomePage";
import Services from "../Pages/Service/Services/Services";
import AuthLayout from "../RootLayout/AuthLayout/AuthLayout";
import Login from "../Pages/UserAccount/Login/Login";
import Registration from "../Pages/UserAccount/Registration/Registration";
import ErrorPage from "../Pages/ErrorElement/ErrorElement";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
      {
        index: true,
        element: <HomePage />, 
      },
      {
        path: "/service",
        element: <Services></Services> 
      }
      
    ]
  },
  {
    path: "/",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/registration",
        element:<Registration></Registration>
      }
    ]

  }
]);

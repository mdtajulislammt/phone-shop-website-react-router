import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Phone from "../Pages/Phone/Phone";

const myCreateRoute =createBrowserRouter([
     {
          path:'/',
          element: <MainLayout></MainLayout>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
               {
                    path:'/',
                    element:<Home></Home>
               },
               {
                    path:'/favorites',
                    element:<Favorites></Favorites>
               },
               {
                    path:'/login',
                    element:<Login></Login>
               },
               {
                    path:"/phones/:id",
                    element:<Phone></Phone>
               }
          ]
     }
])
export default myCreateRoute;
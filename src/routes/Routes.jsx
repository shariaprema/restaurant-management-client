import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AdminLayout from "../components/layout/AdminLayout";
import AddService from "../pages/MyProfile/MyProfile";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import AllFoodItems from "../pages/AllFoodItems/AllFoodItems";
import Blog from "../pages/Blog/Blog";
import MyProfile from "../pages/MyProfile/MyProfile";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement: <h2>Error</h2>,
      children: [
        {
          path: "home",
          element: <Home></Home>,
        },
        {
          path: "allFoodItems",
          element: <AllFoodItems></AllFoodItems>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },  
        {
          path: "myProfile",
          element: <MyProfile></MyProfile>,
        },  

        {
          path: "/login",
          element: <Login></Login>,
        },
        
      ],
    },

    
    {
      path: "/register",
      element: <Register></Register>,
    },
    
  

  ]);

export default router;
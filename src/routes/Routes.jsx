import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Roots from "../layouts/Roots";
import Blog from "../pages/Blog/Blog";
import MyProfile from "../pages/MyProfile/MyProfile";
import Home from "../pages/Home/Home/Home";
import AllFoodItems from "../pages/AllFoodItems/AllFoodItems/AllFoodItems";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement: <h2>Error</h2>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "allFoodItems",
          element: <AllFoodItems></AllFoodItems>,
          loader:()=>fetch('http://localhost:5001/allFoodItems')
        },

        {
          path: "/detailsFood:id",
          element: <AllFoodItems></AllFoodItems>,
          loader:({params})=>fetch(`http://localhost:5001/allFoodItems/${params.id}`)

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

        {
          path: "/register",
          element: <Register></Register>,
        },
        
      ],
    },

    
    
    
  

  ]);

export default router;
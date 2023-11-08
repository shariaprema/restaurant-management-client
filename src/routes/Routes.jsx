import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Roots from "../layouts/Roots";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import AllFoodItems from "../pages/AllFoodItems/AllFoodItems/AllFoodItems";
import SingleFood from "../pages/AllFoodItems/AllFoodItems/SingleFood";
import FoodPurchase from "../pages/FoodPurchase/FoodPurchase";
import PrivateRoutes from "./PrivateRoutes";
import MyAddedFoodItems from "../pages/MyProfile/MyAddedFoodItems";
import MyProfile from "../pages/MyProfile/MyProfile";
import MyOrderedFoodItems from "../pages/MyProfile/MyOrderedFoodItems";
import AddFoodItem from "../pages/MyProfile/AddFoodItem";


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
          path: "/allFoodItems",
          element: <AllFoodItems></AllFoodItems>,
          loader:()=>fetch('http://localhost:5001/allFoodItems')
        },

        {
          path: "/singleFood/:id",
          element: <SingleFood></SingleFood>,
          loader:({params})=>fetch(`http://localhost:5001/allFoodItems/${params.id}`)

        },


        {
          path: "/foodPurchase/:id",
          element: <PrivateRoutes> <FoodPurchase></FoodPurchase></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5001/foodPurchase/${params.id}`)
        },


        // my profile

        {
          path: "/myAddedFoodItems",
          element: <MyAddedFoodItems></MyAddedFoodItems>,
          
        }, 

        {
          path: "/addFoodItems",
          element: <AddFoodItem></AddFoodItem>
          
        },  

        {
          path: "/myOrderedFoodItems",
          element: <MyOrderedFoodItems></MyOrderedFoodItems>
          
        },  





        {
          path: "/blog",
          element: <Blog></Blog>,
        },  
        {
          path: "/myProfile",
          element: <MyProfile></MyProfile>
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
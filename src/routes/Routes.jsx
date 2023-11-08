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
import PrivateRoutes from "../routes/PrivateRoutes";


import MyOrderedFoodItems from "../pages/MyProfile/MyOrderedFoodItems/MyOrderedFoodItems";
import AddFoodItem from "../pages/MyProfile/AddFoodItem";
import MyAddedFoodItems from "../pages/MyProfile/MyAddedFoodItems/MyAddedFoodItems";
import AddedItemsUpdate from "../pages/MyProfile/MyAddedFoodItems/AddedItemsUpdate";


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
          path: "/addFoodItems",
          element: <PrivateRoutes><AddFoodItem></AddFoodItem></PrivateRoutes>
          
        },  

        {
          path: "/myAddedFoodItems",
          element:<PrivateRoutes><MyAddedFoodItems></MyAddedFoodItems></PrivateRoutes>
          
        }, 

        {
          path: "/foodItemsUpdate/:id",
          element:<PrivateRoutes><AddedItemsUpdate></AddedItemsUpdate></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5001/addFoodItem/${params.id}`)

        }, 

       

        {
          path: "/myOrderedFoodItems",
          element: <PrivateRoutes><MyOrderedFoodItems></MyOrderedFoodItems></PrivateRoutes>
          
        },  





        {
          path: "/blog",
          element: <Blog></Blog>,
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
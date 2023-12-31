import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import { Link } from "react-router-dom";

const TopFoods = () => {

    const [topFoods, setTopFoods] = useState([])

    useEffect(()=>{

        fetch('https://restaurant-management-server-phi.vercel.app/topFoods')
        .then(res=>res.json())
        .then(data=>setTopFoods(data))
        

    }, [])




    return (
        <div className=" pb-8">
                <div>
                <h2 className="text-5xl text-center pt-10 font-bold"><span className="text-primary">Res</span>tho Top Selling Foods</h2>
            
            </div>
            

            <div className="grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-auto justify-center bg-pri gap-8  py-20 ">
               {
                topFoods.map((topFood)=><TopFoodCard key={topFood.id} topFood={topFood} ></TopFoodCard>)
               }
            </div>

          <div className="flex justify-center items-center ">
          <Link to='/allFoodItems'>
          <button type="button" className="text-black bg-primary hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary  dark:bg-primary dark:hover:bg-primary hover:text-white dark:focus:ring-primary font-medium rounded-lg text-base px-8 py-2.5 text-center inline-flex items-center">
            See All Food
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </button>
          </Link>
          </div>

          

     
        </div>
    );
};

export default TopFoods;
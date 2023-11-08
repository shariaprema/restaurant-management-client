// import { Link, useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AllFoodItemsCard from "./AllFoodItemsCard";
import { useState } from "react";

const AllFoodItems = () => {
    // const allFoods = useLoaderData()
    const [page, setPage] = useState(0)
   
    // console.log(allFoods);

    const {data:{result,postCount}} = useQuery({
       
        
        queryKey: ["allFoodItems", page],

        queryFn: ()=>
        fetch(`http://localhost:5001/allFoodItems?page=${page}`).then((response)=>response.json()),
        initialData: {result:[], postCount:0},
    })

    const totalPage = Math.ceil(postCount / 9);
    const pages =[...new Array(totalPage).fill(0)]


    
    return (
        <div className="mx-auto">

            <div>
            <h2>AllFoodItems:{result.length}</h2>

              {/* Pagination page */}
              <div className="mt-10  font-bold flex items-center justify-center gap-5">
                {
                    pages.map((item,index)=><button className={`w-8 h-8 ${page== index ? "text-white bg-primary" : "bg-black text-white"} hover:bg-primary  rounded-full`} onClick={()=>setPage(index)}>{index + 1}</button>)
                }
            </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-7 pb-20 mx-auto">
                    {

                result.map(allFood=><AllFoodItemsCard key={allFood._id}
                        allFood={allFood}></AllFoodItemsCard>)   
                    
                    }
                </div>
            </div>
           
      
        </div>
    );
};

export default AllFoodItems;
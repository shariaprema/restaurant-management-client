import { Link, useLoaderData } from "react-router-dom";
import AllFoodItemsCard from "./AllFoodItemsCard";

const AllFoodItems = () => {
    const allFoods = useLoaderData()
    console.log(allFoods);

   

    return (
        <div>

            <h2>AllFoodItems:{allFoods.length}</h2>

           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20 mx-auto">
                {
            
                    allFoods.map(allFood=><AllFoodItemsCard key={allFood._id}
                    allFood={allFood}></AllFoodItemsCard>)
                    
                
                }
            </div>
           

            
        </div>
    );
};

export default AllFoodItems;
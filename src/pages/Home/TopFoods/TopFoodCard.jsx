import React from 'react';
import { Link } from 'react-router-dom';

const TopFoodCard = ({topFood}) => {

    const{_id,foodName,foodImage,foodCategory,price} = topFood || {}

    return (
        
        <div className='mx-auto'>
            <div className="w-full max-w-sm bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
           <div className=''>
                <img className=" w-[340px]  h-[316px] rounded-t-lg " src={foodImage} alt="product image" />
            </div>
            
          
            <div className="px-5 pb-5 py-4 text-center ">

            <h2 className="text-3xl bg-transparent font-bold text-gray-900 dark:text-white pb-6">${price}</h2>
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{foodName}</h5>
            
            <div className=" mt-2.5 mb-5 text-sm font-bold ">
                <h2>{foodCategory}</h2>
            </div>
                
            <Link to='/allFoodItems'> 
            <button  className="text-white bg-black hover:bg-primary focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-full text-sm px-8 py-3 text-center dark:bg-black  dark:hover:bg-black dark:focus:ring-primary">Details</button>
            </Link>
        
            </div>
        
        </div>

       
    </div>

    );
};

export default TopFoodCard;
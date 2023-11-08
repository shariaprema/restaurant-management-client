import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import AddedItems from './AddedItems';

const MyAddedFoodItems = () => {
    const {user} = useContext(AuthContext)
    const [addedFoods,setAddedFoods]=useState([])

    const url = `http://localhost:5001/addFoodItem?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setAddedFoods(data);
        })

    },[]);



   
    return (
        

<div>
            <h2>
                My Added Food Items:{addedFoods.length}
            </h2>

            <div className='bg-primary mx-8 text-black rounded-lg my-20'>
            <div className="overflow-x-auto">
                <table className="table">
                 
                    <thead>
                    <tr className='text-base  text-white bg-gray-800 rounded-lg' >
                        <th>
                       
                        </th>                       
                        <th>UserName</th>
                        <th>UserEmail</th>
                        <th>FoodName</th>
                        <th>FoodCategory</th>
                        <th>FoodOrigin</th>
                        <th>FoodQuantity</th>  
                        <th>FoodPrice</th>
                                          
                       
                    </tr>
                    </thead>
                    <tbody>
                   
                   {
                    addedFoods.map(addFood=>
                         <AddedItems  
                         key={addFood._id} 
                         addFood={addFood} >
                         </AddedItems>)
                   }
            
                    </tbody>
                    
                </table>
                </div>
            </div>
            
            
        </div>
           
      
    );
};

export default MyAddedFoodItems;
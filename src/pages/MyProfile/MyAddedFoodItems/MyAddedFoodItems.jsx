import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import AddedItems from './AddedItems';
import Swal from 'sweetalert2'

const MyAddedFoodItems = () => {
    const {user} = useContext(AuthContext)
    const [addedFoods,setAddedFoods]=useState([])

    const url = `http://localhost:5001/purchaseFood?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setAddedFoods(data);
        })

    },[]);


    const handleAddFoodItem = e =>{
        e.preventDefault()
    
            const form = e.target

            const userName =form.userName.value
            const userEmail =form.userEmail.value
            const foodName =form.foodName.value
            const foodOrigin =form.foodOrigin.value
            const foodImage =form.foodImage.value
            const foodCategory =form.foodCategory.value
            const quantity =form.quantity.value
            const description =form.description.value
            const price =form.price.value

            const addFood={
               price, userName,userEmail,foodName,foodOrigin,foodImage,foodCategory,quantity,description
            }
            console.log(addFood);


            fetch("http://localhost:5001/addFoodItem", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(addFood),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);

                  if(data?.insertedId){
                    Swal.fire({
                        title: "Success!",
                        text: "New Food Item Add Successfully",
                        icon: "success",
                        confirmButtonText: 'Cool'
                       
                      });
                  }
                });



                
            







    }



   
    return (
        

<div>
            <h2>
                My Added Food Items:{addedFoods.length}
            </h2>

            <div className='bg-primary mx-8 text-black rounded-lg my-20'>
            <div className="overflow-x-auto">
                <table className="table">
                 
                    <thead>
                    <tr className='text-base  text-white bg-gray-800 ' >
                        <th>
                       
                        </th>                       
                        <th>UserName</th>
                        <th>UserEmail</th>
                        <th>FoodName</th>
                        <th>FoodCategory</th>
                        <th>FoodOrigin</th>
                        <th>FoodQuantity</th>  
                        <th>FoodPrice</th>
                        <th>UpdateFood</th>

                                          
                       
                    </tr>
                    </thead>
                    <tbody>
                   
                   {
                    addedFoods.map(addFood=>
                         <AddedItems  
                         key={addFood._id} 
                         addFood={addFood} handleAddFoodItem={handleAddFoodItem} >
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
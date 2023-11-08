import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import OrderFood from "./OrderFood";
import Swal from 'sweetalert2'

const MyOrderedFoodItems = () => {

    const {user} = useContext(AuthContext)
    const [orderedFood,setOrderedFood]=useState([])

    const url = `http://localhost:5001/purchaseFood?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setOrderedFood(data);
        })

    },[]);



    const handleDelete = id =>{
      

            fetch(`http://localhost:5001/purchaseFood/${id}`, {
                method: "DELETE",
              })
              
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        }
                      }); 
                  const remaining = orderedFood.filter(food=>food._id !== id) 
                  setOrderedFood(remaining)
                }
            })

        
    }
    
    


   



  

    return (
        <div>
            MyOrderedFoodItems{orderedFood.length}

            
            <div className='bg-primary mx-8 text-black rounded-lg my-20'>
            <div className="overflow-x-auto">
                <table className="table">
                 
                    <thead>
                    <tr className='text-base  text-white bg-gray-800 ' >
                                             
                        <th>BuyerEmail</th>
                        <th>BuyerEmail</th>
                        <th>FoodName</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>

                                          
                       
                    </tr>
                    </thead>
                    <tbody>
                   
                   {
                    orderedFood.map(order=>
                        <OrderFood key=
                        {order._id} 
                        order={order} handleDelete={handleDelete}>

                        </OrderFood>)
                   }
            
                    </tbody>
                    
                </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrderedFoodItems;
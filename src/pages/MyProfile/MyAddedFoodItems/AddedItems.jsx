import React from 'react';

const AddedItems = ({addFood}) => {
    const{userName,userEmail,foodName,foodOrigin,price, foodImage,foodCategory,quantity,description}=addFood || {}
   
   
    return (
        <tr className='text-black text-base font-bold'>

        
        <td>
        <div className="flex items-center space-x-3">
        <div className="avatar">
        <div className="w-24 rounded-xl">
           {
            foodName &&  <img src={foodName} />
           }
        </div>
        </div>
            
        </div>
        </td>

        <td>
       {userName}
        </td>
        <td>
       {userEmail}
        </td>

        <td>
       {foodName}
       </td>

        <td>
       {foodCategory}
       </td>

        <td> {foodOrigin} </td>
        <td> {quantity} </td>
        <td> ${price} </td>

        


         <th>
        
        </th> 
    </tr>
    );
};

export default AddedItems;
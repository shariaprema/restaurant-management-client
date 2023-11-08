
const OrderFood = ({order,handleDelete}) => {
    const {_id,foodImage, foodName,buyerName,email, date,price,quantity}=order || {}
    
    
   
    
    
    
    return (
        <tr className='text-black text-base font-bold'>

        <td>
       {buyerName}
        </td>
        <td>
       {email}
        </td>

        <td>
       {foodName}
       </td>

        <td>
       {date}
       </td>

        <td> {quantity} </td>
        <td> {price} </td>

        


         <th>
         <button onClick={()=>handleDelete(_id)} className="btn btn-square bg-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  hover:text-black text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        </th> 
    </tr>
    );
};

export default OrderFood;
import { Link } from "react-router-dom";

const AllFoodItemsCard = ({allFood}) => {

    const {_id,foodName,foodImage,foodCategory,price,foodOrigin,quantity,count,description,madeBy} = allFood || {}
    return (
        <div>
 
    <div className="relative flex flex-col bg-black text-white shadow-md w-96 rounded-xl bg-clip-border mx-auto">
            <div className="relative mx-4 mt-4 overflow-hidden text-white bg-white  rounded-xl bg-clip-border">
            <img
            src={foodImage}
            className="object-cover w-[400px] h-[300px]"
            />
        </div>
        <div className="p-6">
            <div className="flex items-center justify-between mb-2">
            <h5 className="block mb-2  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {foodName}
            </h5>
            <p className="block text-xl antialiased font-medium leading-relaxed text-blue-gray-900">
                ${price}
            </p>
            </div>
            <p className="text-center pb-2 text-lg antialiased font-normal leading-normal text-white ">
            {foodCategory}
            </p>
            <p className="text-center  text-base antialiased font-normal leading-normal text-white ">
            Food Quantity: <span>{quantity}</span>
            </p>
        </div>
       
            <Link to={`/detailsFood/${_id}`}>
            <div className="p-6 pt-0 flex items-center justify-center">
            <button
            className="block w-1/2  select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 hover:bd-primary text-white bg-primary hover:bg-white focus:ring-4 hover:text-black focus:outline-none focus:ring-black  disabled:shadow-none"
            type="button"
            >
            Details
            </button>
            </div>
            </Link>
            
       
        </div>
            
        </div>
    );
};

export default AllFoodItemsCard;
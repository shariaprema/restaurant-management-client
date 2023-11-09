import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2'

const FoodPurchase = () => {

   const foodPurchase = useLoaderData()
   console.log(foodPurchase);

   const {id,foodName,foodImage,foodCategory,price,foodOrigin,quantity,count,description,madeBy} = foodPurchase || {}

   const {user} = useContext(AuthContext)

   const handlePurchaseFood = e =>{
    e.preventDefault()


        const form = e.target
        const foodName =form.foodName.value
        const buyerName =form.buyerName.value
        const email =form.email.value
        const foodImage =form.foodImage.value
        const date =form.date.value
        const price =form.price.value
        const quantity =form.quantity.value


       
        console.log(foodName,buyerName,email,foodImage, date,price,quantity)

       const purchase ={
        foodName,
        buyerName,
        email,
         date,
         price,
         quantity,
         foodImage
       }


       fetch('http://localhost:5001/purchaseFood', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(purchase),
      })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        if(data.insertedId){
         
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Food Purchase Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }
        
        
       })

   }


    return (
        <div className="">
                      <div>
                <h2 className="text-5xl text-center pt-10 font-bold">Purchase <span className="text-primary">Res</span>tho Food</h2>
            
            </div>
            
  <div className="my-20">
  <div class="relative  rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none mx-auto">
            
            <form onSubmit={handlePurchaseFood} class="mt-8 mb-2  max-w-screen-lg mx-auto ">
                {/* input field */}
            <div className="flex justify-center items-center gap-5">
            <div className="flex-1">
                <div class="mb-4 flex flex-col gap-6">
                <div class="relative h-11 w-full ">
                    <input type="text" name="foodName" defaultValue={foodName}
                    class="peer h-full w-full rounded-md border border-blue-gray-200  bg-transparent px-3 py-3 font-sans text-sm font-semibold text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Food Name
                    </label>
                </div>



                <div class="relative h-11 w-full min-w-[200px]">
                    <input type="text" name="buyerName" defaultValue={user?.displayName} readOnly
                    class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-semibold text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Buyer Name
                    </label>
                </div>



                <div class="relative h-11 w-full min-w-[200px]">
                    <input
                    type="email" name="email" defaultValue={user?.email} readOnly
                    class="peer h-full w-full rounded-md border border-blue-gray-200  bg-transparent px-3 py-3 font-sans text-sm font-semibold text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Buyer Email
                    </label>
                </div>

                <div class="relative h-11 w-full min-w-[200px]">
                    <input
                    
                    />
                   
                </div>

                </div>

                </div>
        

                <div className="flex-1">
                <div class="mb-4 flex flex-col gap-6">
                <div class="relative h-11 w-full min-w-[200px]">
                    <input type="date" name="date" 
                    class="peer h-full w-full rounded-md border border-blue-gray-200  bg-transparent px-3 py-3 font-sans text-sm font-semibold text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                   Buying Date
                    </label>
                </div>



                <div class="relative h-11 w-full min-w-[200px]">
                    <input type="text" name="price" defaultValue={'$'+ price}
                    class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-semibold text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Price
                    </label>
                </div>

                <div class="relative h-11 w-full min-w-[200px]">
                    <input type="text" name="foodImage" defaultValue={foodImage}
                    class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-semibold text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Food Image
                    </label>
                </div>


                <div class="relative h-11 w-full min-w-[200px]">
                    <input type="text" name="quantity" defaultValue={quantity + 'g'}
                    class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-semibold text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Quantity
                    </label>
                </div>

                </div>

                </div>
            </div>
                {/* input field */}
                
            <div className="flex justify-center items-center mt-6">
         
          <button type="submit" className="text-black bg-primary hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary  dark:bg-primary dark:hover:bg-primary hover:text-white dark:focus:ring-primary font-medium rounded-lg text-base px-8 py-2.5 text-center inline-flex items-center">
          Purchase
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </button>
         
          </div>
              
            </form>
            </div>
  </div>

            <Toaster
            position="top-center"
            reverseOrder={false}
            />
            
        </div>
    );
};

export default FoodPurchase;
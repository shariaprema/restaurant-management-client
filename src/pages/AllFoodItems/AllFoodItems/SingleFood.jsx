import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const singleFood = useLoaderData();
    console.log(singleFood);
    const {_id,foodName,foodImage,foodCategory,price,foodOrigin,quantity,count,description,madeBy} = singleFood || {}
    return (
        <div className="flex min-h-screen mx-auto" >
            <div className="py-20">


            <div className="py-8 relative border sm:flex-none md:flex-none lg:flex w-full  flex-row rounded-xl bg-white bg-clip-border text-black shadow-md">
            <div className="relative flex-1 w-full m-0 overflow-hidden text-black bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border ">
                <img
                src={foodImage}
                alt="image"
                className="object-cover w-full h-full"
                />
            </div>
            <div className="p-6 flex-1">
                <h6 className="block mb-4  text-lg antialiased font-bold leading-relaxed tracking-normal text-primary uppercase">
                {foodCategory}
                </h6>
                <h4 className="block mb-2 text-3xl antialiased font-semibold leading-snug tracking-normal text-black">
                {foodName}
                </h4>
                <h4 className="block mb-2 text-2xl antialiased font-semibold leading-snug tracking-normal text-black">
                $ {price}
                </h4>
                <h4 className="block mb-2 text-lg antialiased font-normal leading-snug tracking-normal text-primary">
                Food Origin: <span className="font-semibold text-black">{foodOrigin}</span>
                </h4>
                <h4 className="block mb-2 text-lg antialiased font-normal leading-snug tracking-normal text-primary">
                Quantity: <span className="font-semibold text-black">{quantity}</span>
                </h4>
                <h4 className="block mb-2 text-lg antialiased font-normal leading-snug tracking-normal text-primary">
                Made By: <span className="font-semibold text-black">{madeBy}</span>
                </h4>
               
                <p className="block mb-8 text-base antialiased font-medium leading-relaxed text-black">
               {description}
                </p>


                <a className="inline-block" href="#">

                <button
                    className=" dark:bg-black  dark:hover:bg-black dark:focus:ring-primary text-white bg-black hover:bg-primary focus:ring-0 focus:outline-none focus:ring-black flex items-center gap-2 px-3 py-3 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                   Confirm Order
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                    </svg>
                </button>
                </a>
            </div>
            </div>

            </div>
        </div>

    );
};

export default SingleFood;




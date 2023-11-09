import { Link } from 'react-router-dom';
import image from '../../../assets/icons/ivan-torres-MQUqbmszGGM-unsplash.jpg'
const DiscountOffer = () => {
    return (
        <div className=" pt-8">

        <div  className=" pb-10" >
                
                <h2 className="text-5xl text-center pt-10 font-bold"><span className="text-primary">Res</span>tho Discount Food</h2>
            
            </div>

            <div>
            <div className="hero  " >
                <img src={image} className='h-[450px] w-full' alt="" />
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content bg-primary">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">50% Discount!!!</h1>
                <p className="mb-5">Offer Restho Restaurant Food Pizza</p>
                <h2>Offer 5 days - Loss 3 days</h2>
                <Link to='/allFoodItems' ><button className="bg-white px-2 py-2 text-black text-base font-medium rounded-md mt-5">Get This Offer</button>
               </Link>
                </div>
            </div>
            </div>
                
            </div>
            
        </div>
    );
};

export default DiscountOffer;
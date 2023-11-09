import img1 from '../../../../assets/banner/banner-1.jpg';
import img2 from '../../../../assets/banner/banner-2.jpg';
import img3 from '../../../../assets/banner/banner-4.png';
import img4 from '../../../../assets/banner/banner5.png';
import img5 from '../../../../assets/banner/banner-6.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    
    return (
        <div className="carousel w-full sm:h-[400px] md:h-[500px] lg:h-[600px] z-0">
            <div id="slide1" className="carousel-item relative w-full z-0">
                <img src={img1} className="w-full " />
                <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white  pl-16 lg:w-1/2 md:w-3/5 sm:w-1/4 sm:flex-wrap text-ellipsis overflow-hidden'>
                        <p className='text-primary text-xl font-medium'>_Welcome To Restho_ </p>
                        <h2 className='lg:text-6xl md:text-6xl font-bold text-4xl'>Find Your Best Healthy & Tasty Food.</h2>
                        <p className='my-5'>Welcome to our restaurant, where you'll find an enticing array of healthy and tasty dishes. Our chefs craft culinary masterpieces that will tantalize your taste buds and nourish your body. Explore our menu, savor the flavors, and find your best healthy & tasty food right here.</p>
                        <div>
                        <Link to='/allFoodItems'><button className="btn btn-primary mr-5">See All Food</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform  -translate-y-1/2 left-2 right-2 top-1/2">
                    <a href="#slide5" className="btn btn-square text-white hover:text-black bg-black">❮</a>
                    <a href="#slide2" className="btn btn-square text-white hover:text-black bg-black">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full z-0">
                <img src={img2} className="w-full " />
                <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white  pl-16 lg:w-1/2 md:w-3/5 sm:w-1/4 sm:flex-wrap text-ellipsis overflow-hidden'>
                        <p className='text-primary text-xl font-medium'>_Welcome To Restho_ </p>
                        <h2 className='lg:text-6xl md:text-6xl font-bold text-4xl'>Order Healthy Fresh Food in Any Time</h2>
                        <p className='my-5'>Experience the convenience of ordering healthy, fresh food at any time. Our restaurant is dedicated to serving you delectable, nourishing meals around the clock. Whether it's breakfast, lunch, dinner, or a midnight snack, we've got you covered. Satisfy your cravings with quality cuisine, always ready for your order.</p>
                        <div>
                            <Link to='/allFoodItems'><button className="btn btn-primary mr-5">See All Food</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <a href="#slide1" className="btn btn-square text-white hover:text-black bg-black ">❮</a>
                    <a href="#slide3" className="btn btn-square text-white hover:text-black bg-black ">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full z-0">
                <img src={img3} className="w-full " />
                <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white  pl-16 lg:w-1/2 md:w-3/5 sm:w-1/4 sm:flex-wrap text-ellipsis overflow-hidden'>
                        <p className='text-primary text-xl font-medium'>..Welcome To Restho..</p>
                        <h2 className='lg:text-6xl md:text-6xl font-bold text-4xl'>The Best Fresh Fish in your City Area</h2>
                        <p className='my-5'>Discover the finest selection of fresh fish in your city area right here at our restaurant. Our commitment to quality ensures you'll savor the best catches prepared with expertise. Dive into a seafood experience that combines the freshest ingredients with mouthwatering flavors. Come join us for a taste of the ocean's bounty.</p>
                        <div>
                        <Link to='/allFoodItems'><button className="btn btn-primary mr-5">See All Food</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <a href="#slide2" className="btn btn-square text-white hover:text-black bg-black">❮</a>
                    <a href="#slide4" className="btn btn-square text-white hover:text-black bg-black">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white  pl-16 lg:w-1/2 md:w-3/5 sm:w-1/4 sm:flex-wrap text-ellipsis overflow-hidden'>
                        <p className='text-primary text-xl font-medium'>_Welcome To Restho_ </p>
                        <h2 className='lg:text-6xl md:text-6xl font-bold text-4xl'>Shashlik Grill & Beyond - A Taste of Excellence</h2>
                        <p className='my-5'>Experience the art of grilling at Shashlik, where each dish is a masterpiece. We proudly present a menu that transcends boundaries, offering delectable delights from around the world.Each dish is a masterpiece, carefully crafted to satisfy your senses. Join us for an extraordinary dining experience that leaves an indelible mark on your taste buds.</p>
                        <div>
                        <Link to='/allFoodItems'><button className="btn btn-primary mr-5">See All Food</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <a href="#slide3" className="btn btn-square text-white hover:text-black bg-black">❮</a>
                    <a href="#slide5" className="btn btn-square text-white hover:text-black bg-black">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white  pl-16 lg:w-1/2 md:w-3/5 sm:w-1/4 sm:flex-wrap text-ellipsis overflow-hidden'>
                        <p className='text-primary text-xl font-medium'>_Welcome To Restho_ </p>
                        <h2 className='lg:text-6xl md:text-6xl font-bold text-4xl'>Free Home Delivery Within an Hour</h2>
                        <p className='my-5'>Enjoy the convenience of our lightning-fast delivery service. We promise to bring your favorite dishes to your doorstep within an hour. Just place your order, sit back, and savor the flavors from the comfort of your home. Your cravings are just an hour away!</p>
                        <div>
                        <Link to='/allFoodItems'><button className="btn btn-primary mr-5">See All Food</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <a href="#slide4" className="btn btn-square text-white hover:text-black bg-black">❮</a>
                    <a href="#slide1" className="btn btn-square text-white hover:text-black bg-black ">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import restho from '../../../assets/icons/restho.jpg';
 const Abouts = () => {
    return (
        <div className=''>
             <div className='py-14'>
                <h2 className="text-5xl text-center pt-10 font-bold">About Our <span className="text-primary">Res</span>tho</h2>
            </div>

        <div className="hero  text-black ">
        <div className="hero-content flex-col lg:flex-row ">
            <div className="flex-1">
                <div>
                <img src={restho} className='rounded-lg' />
                </div>

            </div>
        <div className="flex-1 pl-5">
        <div>
        <h1 className="text-4xl font-bold text-black">We Are Experienced <br /> Restaurant!</h1>
        <p className="py-6 text-black">Welcome to Restho, a culinary haven where taste meets elegance in every dish. At Restho, we are more than just a restaurant; we are a celebration of flavors, a symphony of aromas, and a gathering place for those who appreciate the artistry of fine dining.
        Our journey begins with a commitment to delivering a gastronomic experience that transcends the ordinary. From the moment you step into Restho, you are greeted by an ambiance that seamlessly blends modern sophistication with a warm, inviting atmosphere. The carefully curated decor sets the stage for an unforgettable dining adventure.</p>
        </div>

        <div>

        <div className='mb-5'>
        <h2 className='font-bold text-xl bg-primary inline-block rounded-full  px-2 border-x-slate-400'>Pure Fresh Food</h2>
            <p className='text-base font-medium'>We are serve different type of fresh food.</p>
        </div>
        <div>
        <h2 className='font-bold text-xl bg-primary inline-block rounded-full  px-2 border-x-slate-400'>Experties Chef</h2>
            <p className='text-base font-medium'>We are serve different type of fresh food.</p>
        </div>


        </div> 



    
    
        </div>

        



        </div>
            
        </div>

        </div>
    );
};

export default Abouts;







 
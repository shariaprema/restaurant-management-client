import React from 'react';

const TopBar = () => {
    return (
      
             <div className="w-full text-white text-sm font-medium mx-auto border-b-[hsla(0,0%,100%,.07)] border-b bg-black py-2 ">
                <div className='md:flex-none mx-auto px-11 flex justify-between text-center items-center'>
                <div>
                    <h2 className=''><span className='text-primary'>Opening Hour:</span> 9.00 am to 10.00 pm</h2>
                </div>
                <div className='flex gap-8'>
                    <h2 className='hidden md:flex'>restho@yahoo.com</h2>
                    <h2 className='hidden sm:flex'>Road-18, Block-A, West London City</h2>
                </div>
                </div>
            </div>
        
    );
};

export default TopBar;
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
const NavbarRoot = ({children}) => {
    return (
        <div>
            <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
           
            <div className="drawer-content flex flex-col">

            <div className="w-full mx-auto border-b-[hsla(0,0%,100%,.07)] border-b bg-black py-2 ">
                <div className='md:flex-none mx-auto px-11 flex justify-between text-center items-center'>
                <div>
                    <h2 className=''><span className='text-primary'>Opening Hour:</span> 9.00 am to 10.00 pm</h2>
                </div>
                <div className='flex gap-8'>
                    <h2 className='hidden md:flex'>info@example.com</h2>
                    <h2 className='hidden sm:flex'>Road-01, Block-B, West London City</h2>
                </div>
                </div>
            </div>

                {/* Navbar */}
                <div className="w-full navbar bg-black ">
                    <Navbar></Navbar>
                </div>

                {/* Page content here */}
                {children}
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                <div className="menu p-4 w-80 min-h-full bg-base-200">
                {/* Sidebar content here */}
                <Sidebar></Sidebar>
                </div>
            </div>
            </div>
            
        </div>
    );
};

NavbarRoot.propTypes = {   
    children: PropTypes.node,
}


export default NavbarRoot;
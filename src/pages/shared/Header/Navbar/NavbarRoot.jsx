import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TopBar from './TopBar/TopBar';
const NavbarRoot = ({children}) => {
    return (
        <div>
            <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
           
            <div className="drawer-content flex flex-col">

           <TopBar></TopBar>

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
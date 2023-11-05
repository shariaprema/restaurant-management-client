import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (

        <div className="flex flex-col  gap-4">
            
             <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
            <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
            <svg className="w-3 h-3" aria-hidden="true"  fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close menu</span>
        </button>
             
        {/* Navbar menu content here */}
        <NavLink
            to='/' className={({ isActive}) => isActive ? "btn btn-primary btn-sm": 'btn btn-ghost btn-sm' }>Home</NavLink>

            <NavLink
            to='/allFoodItems' className={({ isActive}) => isActive ? "btn btn-primary btn-sm": 'btn btn-ghost btn-sm' }>All Food Items</NavLink>

            <NavLink className={({ isActive}) => isActive ? "btn btn-primary btn-sm": 'btn btn-ghost btn-sm' } 
            to='/blog'>Blog</NavLink>

            
         

            {/* <ul className="menu  py-0 px-0  rounded-box">
       
        <li>
            <details className="bg-black  w-70 px-4 gap-5 " open>
            <summary><NavLink className={({ isActive}) => isActive ? "btn btn-primary btn-sm": 'btn btn-ghost btn-sm' } 
            to='/myProfile'>My Profile</NavLink></summary>
            <ul className="bg-black">
                <li><a>level 2 item 1</a></li>
                <li><a>level 2 item 2</a></li>
                
            </ul>
            </details>
        </li>
       
        </ul>  */}

        <ul class="menu menu-xs bg-base-200 rounded-lg max-w-xs w-full">

        <li>
        <details open>
        <summary >
        <NavLink className={({ isActive}) => isActive ? "btn btn-primary btn-sm": 'btn btn-ghost btn-sm' } 
            to='/myProfile'>My Profile</NavLink>
        </summary>
        <ul>
        <li><a>
        
        Project-final.psd
        </a></li>
        <li><a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
        Project-final-2.psd
        </a></li>

        </ul>
        </details>
        </li>

        </ul>




            

    </div> 
  

    );
};

export default Sidebar;



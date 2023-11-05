import { NavLink } from "react-router-dom";
import logo from "../../../../assets/logo/logo1.svg";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Navbar = () => {
    
    const {userLogout,user} = useContext(AuthContext);

  
    const handleLogOut =()=>{
        userLogout()
        .then(() => {
        console.log('Sign-out successful.');
        }).catch((error) => {
        console.log(error.message);
        });
    }





    return (
        <div className=' w-full   mx-auto bg-black px-5 sticky top-0'>
        <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
        </div> 
        <div className="flex-1 px-2 mx-2">
            <img src={logo} alt="" />
        </div>
        <div className="flex-none hidden lg:block">
            <div className="flex gap-4">
            {/* Navbar menu content here */}
            <NavLink
            to='/' className={({ isActive}) => isActive ? "btn btn-primary btn-sm": 'btn btn-ghost btn-sm' }>Home</NavLink>

            <NavLink
            to='/allFoodItems' className={({ isActive}) => isActive ? "btn btn-primary btn-sm": 'btn btn-ghost btn-sm' }>All Food Items</NavLink>

            <NavLink className={({ isActive}) => isActive ? "btn btn-primary btn-sm": 'btn btn-ghost btn-sm' } 
            to='/blog'>Blog</NavLink>

            
            <div className="menu lg:menu-horizontal  mx-0 my-0 px-0 py-0 ">
            <li>
                <details >
                <summary open className="mx-0 my-0 px-0 py-0  bottom-0 "><NavLink className={({ isActive}) => isActive ? "btn btn-primary btn-sm ": 'btn btn-ghost btn-sm' } to='/myProfile'>My Profile</NavLink></summary>
                <ul className="menu bg-base-200 rounded-none w-56 mt-10">
                <li><a>Item 1</a></li>
                <li><a className="">Item 2</a></li>
                <li><a>Item 3</a></li>
                </ul>
                </details>
            </li>
            
            </div>


            

            {/* <div>
            <div class="relative flex justify-center text-left ">
            <div className="relative flex justify-center">
                
                <NavLink className={({ isActive}) => isActive ? "btn btn-primary btn-sm ": 'btn btn-ghost btn-sm' } to='/myProfile'>My Profile</NavLink>
               <span className="border-1 ">
               
             </span>
            
           
            <div class="absolute  bg-black right-0  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md top-11 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
                <div class="py-1" role="none">
                <a href="#" class="text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Edit</a>
                
                </div>
                <div class="py-1" role="none">
                
                <a href="#" class="text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Move</a>
                </div>
                <div class="py-1" role="none">
                
                <a href="#" class="text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-5">Add to favorites</a>
                </div>
            
            </div>
            </div>
            </div>

            </div> */}

          



            
         { user?
            <div className="flex justify-center gap-3 items-center">
            <div >     
               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                   <div className="w-9 rounded-full">
                   <img src={user.photoURL} alt={user.displayName} />
                   </div>
               </label>
           </div>
   
            <div className="menu lg:menu-horizontal  mx-0 my-0 px-0 py-0 ">
               <li>
                   <details >
                   <summary open className="mx-0 my-0 px-0 py-0  bottom-0 "><NavLink 
                   to='/login'>
                   <button onClick={handleLogOut} type="button" className="text-gray-900 bg-primary border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-[6px] mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign Out</button>
                   </NavLink></summary>
                   <ul className="menu bg-base-200 rounded-none w-56 right-2 mt-10">
                   <li><p className="text-sm hidden md:flex lg:flex">{user.email}</p></li>
                   <li><p className="text-xs font-bold hidden md:flex lg:flex">{user.displayName}</p></li>             
                   </ul>
                   </details>
               </li>
               
               </div>
            </div>
   
            :
   
           <NavLink 
           to='/login'>
           <button type="button" className="text-gray-900 bg-primary border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-[6px] mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Login</button>
           </NavLink>
         }
















            {/* <NavLink 
            to='/login'>
                <button type="button" className="text-gray-900 bg-primary border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-[6px] mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Login</button>
            </NavLink> */}
            
            

            </div>
        </div>
        
        </div>
    );
};

export default Navbar;
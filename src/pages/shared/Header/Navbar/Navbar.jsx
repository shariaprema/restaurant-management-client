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
        <div className=' w-full text-white  mx-auto bg-black px-5 sticky top-0'>
        <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
        </div> 
        <div className="flex-1 px-2 mx-2">
            <img src={logo} alt="" />
        </div>
        <div className="flex-none hidden mt-4 lg:block">
            <div className="flex gap-4">
            {/* Navbar menu content here */}
            <NavLink
            to='/' className={({ isActive}) => isActive ? "btn btn-primary btn-sm": 'btn btn-ghost btn-sm' }>Home</NavLink>

            <NavLink
            to='/allFoodItems' className={({ isActive}) => isActive ? "btn btn-primary btn-sm": 'btn btn-ghost btn-sm' }>All Food Items</NavLink>

            <NavLink className={({ isActive}) => isActive ? "btn btn-primary btn-sm": 'btn btn-ghost btn-sm' } 
            to='/blog'>Blog</NavLink>



            {/*My Profile */}
            {/* <div className="menu lg:menu-horizontal  mx-0 my-0 px-0 py-0 ">
            <li>
                <details >
                <summary open className="mx-0 my-0 px-0 py-0  bottom-0 "><NavLink className={({ isActive}) => isActive ? "btn btn-primary btn-sm ": 'btn btn-ghost btn-sm' } to='/myProfile'>My Profile</NavLink></summary>
                <ul className="menu bg-black rounded-none w-56 mt-10 z-10">
                
                <li> <NavLink className={({ isActive}) => isActive ? "btn btn-primary btn-sm hidden": 'btn btn-ghost btn-sm' } 
                 to='/blog'>My added food items</NavLink></li>

                <li><NavLink className={({ isActive}) => isActive ? "btn btn-primary btn-sm": 'btn btn-ghost btn-sm' } 
                 to='/blog'>My added food items</NavLink></li>

                <li><NavLink className={({ isActive}) => isActive ? "btn btn-primary btn-sm": 'btn btn-ghost btn-sm' } 
                 to='/blog'>My added food items</NavLink></li>
               
                </ul>
                </details>
            </li>
            
            </div> */}




{/* <div className="flex justify-center gap-3 items-center relative">
  
  <div>
    <label
      tabIndex={0}
      className="btn btn-ghost btn-circle avatar"
      htmlFor="avatar-dropdown"
    >
      <div className="avatar online placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
          <img src={user.photoURL} alt={user.displayName} />
        </div>
      </div>
    </label>
  </div>




  <div className="relative group inline-block text-left">
    <input
      type="checkbox"
      id="avatar-dropdown"
      className="hidden"
    />
    <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1">
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Profile
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Sign Out
        </a>
      </div>
    </div>
  </div>
</div> */}



{/* <details className="dropdown">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details> */}








            <div>
            { user?
            <div className="flex justify-center gap-3 items-center">
            <div >     
               
               <details className="dropdown z-50">
                <summary className=" btn btn-primary">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div class="avatar online placeholder">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-10">
                            <img src={user.photoURL} alt={user.displayName} />
                        </div>
                    </div> 
                </label></summary>
                <ul className=" shadow gap-6  w-52 mt-2  dropdown-content  bg-black rounded-xl mx-auto z-50">
                <li> <NavLink className={({ isActive}) => isActive ? "btn btn-primary w-full btn-sm": 'btn btn-ghost btn-sm w-full hover:bg-primary' } 
                 to='/myAddedFoodItems'>My added food items</NavLink></li>

                <li><NavLink className={({ isActive}) => isActive ? "btn btn-primary w-full btn-sm": 'btn btn-ghost btn-sm w-full hover:bg-primary' } 
                 to='/addFoodItems'>Add a food item</NavLink></li>

                <li><NavLink className={({ isActive}) => isActive ? "btn  btn-primary w-full btn-sm": 'btn btn-ghost hover:bg-primary btn-sm w-full' } 
                 to='/myOrderedFoodItems'>My ordered food items</NavLink></li>
                </ul>
                </details>
           </div>
   
            <div className="menu lg:menu-horizontal  mx-0 my-0 px-0 py-0 ">
               <li>
               <details className="dropdown">
                   <summary open className=" mx-0 my-0 w-28 h-10  bottom-0 z-[100]  text-gray-900  bg-primary border border-gray-300 focus:outline-none hover:bg-gray-100   rounded-full text-xs font-bold  px-1  py-[6px] mr-4 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "><NavLink 
                   to='/login'>
                   <button onClick={handleLogOut} type="button" className=" pl-3 text-center font-bold text-base" >Sign Out</button>
                   </NavLink></summary>
                   <ul className="menu bg-black rounded-xl z-[100] w-56 right-1 mt-10   p-2 shadow  dropdown-content ">
                   <li><p className="text-sm hidden hover:bg-primary md:flex lg:flex">{user.email}</p></li>
                   <li><p className="text-xs font-bold hover:bg-primary hidden md:flex lg:flex">{user.displayName}</p></li>             
                   </ul>
                   </details>
               </li>
               
               </div>
            </div>
   
            :
   
           <NavLink 
           to='/login'>
           <button type="button" className="pt-[5px] pl-3 text-center  text-base  mx-0 my-0 w-28 h-10   bottom-0 z-[100]  text-gray-900  bg-primary border border-gray-300 focus:outline-none hover:bg-gray-100   rounded-full  font-bold  px-1  py-[6px] mr-4 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ">Login</button>
           </NavLink>
         }


        </div>

            </div>
        </div>
        
        </div>
    );
};

export default Navbar;
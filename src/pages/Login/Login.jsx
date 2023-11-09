import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const {googleSignIn, logInUser}= useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault()
        const toastId =toast.loading('Logging in...')


        const form = new FormData(e.currentTarget)
        const email =form.get('email')
        const password =form.get('password')
        console.log(email,password);


    //validation
    if(password.length < 6){
        toast.error('Password must have at least 6 characters')
        return;
    }


    logInUser(email, password)
    .then((result) => {
        console.log(result.user);
        toast.success('User logged in successfully',{id:toastId})        
        navigate(location?.state ? location.state : '/')
        e.target.reset();       
    
    })
    .catch((error) => {
       toast.error(error.message)
    });

    
}



  const handleGoogleSignIn =()=>{
    googleSignIn()
    .then((result) => {
        console.log(result.user);
        toast.success('User logged in successfully!',{id:toastId})  
        navigate(location?.state ? location.state : '/')      

      }).catch((error) => {
       toast.error(error.message)
        
      });
}





    return (

        <div>

            
            <div className=''>
                <h2 className="text-5xl text-center pt-10 font-bold"><span className="text-primary">Res</span>tho Login Page</h2>
            </div>


            <div className='py-8  flex mx-auto justify-center'>
            <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700
             shadow-none mx-auto justify-center">
           
            <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
               
                <div className="relative h-11 w-full min-w-[200px]">
                    <input type="email" name="email"  required
                    className=" peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                    </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                    <input  name="password"  required
                    type="password"
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                    </label>
                </div>
                </div>
                <div className="inline-flex items-center">
                <label
                    className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                    for="checkbox"
                    data-ripple-dark="true"
                >
                    <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10"
                    id="checkbox"
                    />
                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                    >
                        <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                        ></path>
                    </svg>
                    </span>
                </label>
                <label
                    className="mt-px cursor-pointer select-none font-light text-gray-700"
                    for="checkbox"
                >
                    <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                    I agree the
                    <a
                        className="font-medium transition-colors hover:text-primary"
                        href="#"
                    >
                        &nbsp;Terms and Conditions
                    </a>
                    </p>
                </label>
                </div>
                <button 
                className="mt-6 block w-full select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                data-ripple-light="true"
                >
               Login
                </button>
                <p className=" mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">Don`t have an account <Link to="/register" className="font-medium text-primary transition-colors hover:text-black">Register</Link></p>
                <Link to='/'></Link>


                
                <Link to='/'>
                <div  className="flex justify-center items-center ">
                <button onClick={handleGoogleSignIn}
                class="flex font-sans text-xs font-bold uppercase justify-center mx-auto  w-full select-none items-center gap-3 rounded-lg border border-blue-gray-500 py-2 px-6 text-center align-middle  text-blue-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-primary active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
                >
                <FcGoogle className="w-6 h-6 mr-1"/>
                Sign in with Google
                </button>
                
                </div>

                </Link>

            </form>
           
       
           </div>
           <Toaster
         position="top-right"
         reverseOrder={false} />  
            
        </div>
        </div>
        
    );
};

export default Login;
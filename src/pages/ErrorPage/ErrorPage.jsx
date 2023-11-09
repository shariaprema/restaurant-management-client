import Lottie from "lottie-react";
import groovyWalkAnimation from "./2AkFtNafoL.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className=" flex justify-center items-center mx-auto">
          <Lottie className="w-[500px]" animationData={groovyWalkAnimation} />
          
        </div>
        <Link to="/"><button  className="btn btn-primary bg-black text-white flex mx-auto outline-none justify-center items-center">Go Back Home</button></Link>
        </div>

    );
};

export default ErrorPage;
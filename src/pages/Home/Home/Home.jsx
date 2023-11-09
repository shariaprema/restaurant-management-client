import Banner from "../../shared/Header/Banner/Banner";
import Abouts from "../Abouts/Abouts";
import TopFoods from "../TopFoods/TopFoods";

const Home = () => {
    return (
        <div className="flex-none  min-h-screen">
            
            <div>
           <Banner></Banner>
           <Abouts></Abouts>
           <TopFoods></TopFoods>
           </div>
        </div>
    );
};

export default Home;
import Banner from "../../shared/Header/Banner/Banner";
import TopFoods from "../TopFoods/TopFoods";

const Home = () => {
    return (
        <div className="flex-none  min-h-screen">
            
            <div>
           <Banner></Banner>
           <TopFoods></TopFoods>
           </div>
        </div>
    );
};

export default Home;
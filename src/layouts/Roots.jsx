import { Outlet } from "react-router-dom"
import NavbarRoot from "../pages/shared/Header/Navbar/NavbarRoot"
import Footer from "../pages/shared/Footer/Footer"

function Roots() {

  return (
   

  <div>
    <div className="max-w-[1400px] mx-auto font-poppins">

    <NavbarRoot>
    <Outlet></Outlet>
    </NavbarRoot>
    </div>
    <Footer></Footer>

  </div>
  

     
      
 
  )
}

export default Roots
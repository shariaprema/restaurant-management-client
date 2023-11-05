import { Outlet } from "react-router-dom"
import NavbarRoot from "../pages/shared/Header/Navbar/NavbarRoot"

function Roots() {

  return (
   

  <div>
    <div className="max-w-[1400px] mx-auto font-poppins">

<NavbarRoot>
<Outlet></Outlet>
</NavbarRoot>
</div>

  </div>
  

     
      
 
  )
}

export default Roots
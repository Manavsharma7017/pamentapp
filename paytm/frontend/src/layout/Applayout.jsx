
import Header from "@/reactcomponents/Header"
import { Outlet } from "react-router-dom"

const Applayout=()=>{
    return(
        <div>
       <main className="min-h-screen w[780px]">
        <Header></Header>
       <Outlet></Outlet>
       </main>
     
       </div>
     
       
    )
}
export default Applayout
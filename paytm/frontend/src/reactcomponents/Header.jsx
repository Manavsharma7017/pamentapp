import { Button } from "@/components/ui/button"
import ModeToggle from "../components/ModeToggle"
import { Link, useNavigate } from "react-router-dom"
import About from "./About"
const Header=()=>{
    const arr=["P","a","y","m","e","n","t","","A","p","p"]
    const userid=localStorage.getItem("token")
    const n=useNavigate()
    return(
        <div className="flex flex-row justify-between items-center"> 

        <Link to={"/"}><div className="flex flex-row cursor-pointer " >
            <div className="mt-4 ml-4 mb-4 "><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg></div>
 <div className="flex justify-center items-center pb-2">
     {arr.map((x,index)=>{
        return(
            <span key={index} className="text-2xl hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer">{x}</span>
        )
     })
      
    }
 </div>
</div></Link>
       <div className="flex flex-row gap-6">
        <div className="text-xl  hover:underline underline-offset-4 duration-100 "><About></About></div>
        <Link to={"/das"}> <div className="text-xl  hover:underline underline-offset-4 duration-100">Dashboard</div></Link>
        <Link to={"/transfer"}><div className="text-xl  hover:underline underline-offset-4 duration-100">Transfer</div></Link>  
       </div>
        <div className="flex flex-row gap-1 justify-end"><ModeToggle></ModeToggle><div className="flex justify-center items-center">{userid?<Button className={"mr-2"} onClick={()=>{
           localStorage.removeItem("token")
           n("/")
        }}>Logout</Button>

:<Button className={"mr-2"} onClick={()=>{
            n("/auth")
        }}>Login</Button>}</div></div>
        </div>
       
    )
}
export default Header
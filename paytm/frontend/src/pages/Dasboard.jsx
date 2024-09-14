import { Input } from "@/components/ui/input"
import axios from "axios"
import { useMemo, useState } from "react"
import {useNavigate } from "react-router-dom"
import { Data } from "@/reactcomponents/Data"
const Dashboard=()=>{
    const n=useNavigate()
    const [balance,setbalance]=useState()
    const [filter,setfilter]=useState("")
    const [user,setuser] =useState([])
     useMemo(()=>{
        async function data(){
     try{
        const res = await axios.get("http://localhost:3000/api/v1/account/balance",
            {
                headers:{
                    authorization:"Bearer "+localStorage.getItem("token")
                }
            })
            if(res.data.message==="can not get balance"){
                alert("login first")
                n("/auth")
                }
         setbalance(res.data.balance)
     }catch(e){
        alert("login first")
       n("/")
     }}
          data()  
     },[balance])
     let timeout;
     const setter=(e)=>{
       clearTimeout(timeout)
       timeout=setTimeout(()=>{
        setfilter(e.target.value)
       },500)
     }
    return(
       <><div className="flex flex-row justify-between"><div className="mr-8 text-4xl font-extrabold">userbalance</div><div className="flex flex-row ml-8 text-2xl font-extrabold"><div className="mt-2">
     </div>  Rs{balance}</div></div>
     <div className=" text-lg underline underline-offset-4 items-center flex flex-row justify-center font-extrabold">Search for the user</div>
       <div className="m-4 mt-8"><Input name="filter" placeholder="search for name" onChange={setter} ></Input>
       <div><Data filter={filter}></Data></div>
        </div></>
    )
}
export default Dashboard
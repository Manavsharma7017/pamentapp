import { Button } from "@/components/ui/button"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Data=({filter})=>{
    const[users,setuser]=useState([])
    const n=useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter).then((res)=>{
        setuser(res.data.username)
    })
  },[filter])
return(
    <><div>
      {users.map((user,i)=>{
        return(<div  key={i}>
        <div className="flex flex-row justify-between"><div className="flex flex-row mt-4 mb-4">
        <div className="rounded-full bg-slate-500 w-10 h-10 items-center flex justify-center text-2xl font-extrabold"><div>{user.username[0]}</div></div>
           <div className="flex justify-center text-2xl font-extrabold ml-4"><div>{user.firstname}</div></div>
        </div>
           <div className="flex flex-row  justify-end text-2xl mt-4"><Button onClick={(e)=>{
            n("/transfer?id="+user.userid+"&name="+user.firstname)
           }}>Send Money</Button></div></div>
        </div>)
      })}</div></>
)
}
import { useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"
  import { Input } from "../components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { message } from "../atoms/Atoms"
import { useRecoilState } from "recoil"
export const Loginup=()=> {
    const nagvate=useNavigate()
    const [userdata,setdata]=useState({
    username:"",password:""
})
const setter=(e)=>{
    const {name,value} =e.target;
    setdata((prevState)=>({
      ...prevState,
      [name]:value
 }
   
 ))

}  
const [mess,setmessage]=useRecoilState(message)
  const login=async()=>{
    try{
       const res= await axios.post("http://localhost:3000/api/v1/user/signin",userdata)
      
     if(res.data.message==="Incorrect inputs"){
       setmessage("Incorrect inputs")
     }
    
     if(res.data.message==="User created successfully"){
       setmessage("login sucesssfull")
       localStorage.setItem("token",res.data.token)
       nagvate("/das")
     }
    }catch(e){
        console.log(e)
       setmessage("sothing gone wrong or incorrect input")
    }
   }
return (
    <Card>
<CardHeader>
<CardTitle>Login</CardTitle>
<CardDescription>Login to your account</CardDescription>
</CardHeader>
<CardContent>
<div className="space-y-2"><Input name="username" placeholder="enter your email" onChange={setter} ></Input></div>
</CardContent>
<CardContent>
<div className="space-y-2"><Input name="password" placeholder="enter your password" onChange={setter}  ></Input></div>
</CardContent>
<CardFooter>
<div className="flex flex-row justify-between w-96"><Button onClick={login}>Login in</Button></div>
</CardFooter>
</Card>

)
}
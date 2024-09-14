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
import { Alertcom } from "./Alertcom"
import { message } from "../atoms/Atoms"
import { useRecoilState } from "recoil"
export const Signup=()=>{
    const nagvate=useNavigate()
    const [userdata,setdata]=useState({
        username:"",firstname:"",lastname:"",password:""
    })
   const [mess,setmessage]=useRecoilState(message)
    const setter=(e)=>{
        const {name,value} =e.target;
        setdata((prevState)=>({
          ...prevState,
          [name]:value
     }
       
     ))
   
    }
    const signup=async()=>{
     try{
        const res= await axios.post("http://localhost:3000/api/v1/user/signup",userdata)
       
      if(res.data.message==="Incorrect inputs"){
        setmessage("Incorrect inputs")
      }
      if(res.data.message==="user already exist"){
        setmessage("user already exist")
       
      }
      if(res.data.message==="User created successfully"){
        setmessage("User created successfully")
        localStorage.setItem("token",res.data.token)
        nagvate("/das")
      }
     }catch(e){
        setmessage("sothing gone wrong")
     }
    }
    return (
        <>
        <Card>
  <CardHeader>
    <CardTitle>Sign up</CardTitle>
    <CardDescription>Create your account</CardDescription>
  </CardHeader>
  <CardContent>
    <div>username</div>
    <div className="space-y-2"><Input name="username" placeholder="enter your email" onChange={setter} ></Input></div>
  </CardContent>
  <CardContent>
  <div>firstname</div>
    <div className="space-y-2"><Input name="firstname" placeholder="enter your firstname" onChange={setter}  ></Input></div>
  </CardContent>
  <CardContent>
  <div>lastname</div>
    <div className="space-y-2"><Input name="lastname" placeholder="enter your lastname " onChange={setter}  ></Input></div>
  </CardContent>
  <CardContent>
  <div>password</div>
    <div className="space-y-2"><Input name="password" placeholder="enter your password" onChange={setter}  ></Input></div>
  </CardContent>
  <CardFooter>
    <Button onClick={signup}>Sign up</Button>
  </CardFooter>
</Card>
</>
    )
}
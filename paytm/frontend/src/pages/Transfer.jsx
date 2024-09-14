import { useSearchParams } from "react-router-dom"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import axios from "axios"
import { useRecoilState, useRecoilValue } from "recoil"
import { message } from "@/atoms/Atoms"
import { Alertcom } from "../reactcomponents/Alertcom"
const Transfer=()=>{
  const [amount,seta]=useState(0)
    const [serchp,setp]=useSearchParams()
    const to=serchp.get("id")
    const name=serchp.get("name")
    const setter=(e)=>{
      seta(e.target.value)
    }
   const[mess,setmess]=useRecoilState(message)
const trans=async()=>{
  try{
const res= await axios.post("http://localhost:3000/api/v1/account/transfer",{
  amount,
  to
},{
  headers:{
      authorization:"Bearer "+localStorage.getItem("token")
  }
})
  if(res.data.message==="insufficent balance"){
    setmess("insufficent balance")
  }
  if(res.data.message==="invalid uuser"){
    setmess("invalid uuser")
  }
  if(res.data.message==="Transfer successful"){
    setmess("Transfer successful")
  }
  }catch(e){
    setmess("insufficent balance or invalid uuser")
  }
}
    return(<div>   <div ><Alertcom message={mess}></Alertcom></div>   <div className="flex flex-row justify-center m-32"><Card>
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold">{name}</CardTitle>
        <CardDescription>Transfer your Money</CardDescription>
      </CardHeader>
      <CardContent>
       <Input name="amount" placeholder="enter amount" onChange={setter} ></Input>
      </CardContent>
      <CardFooter>
   <Button onClick={trans}>Send</Button>
      </CardFooter>
    </Card>
    </div></div>

    )
}
export default Transfer
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Signup } from "../reactcomponents/Signup"
import { Loginup } from "../reactcomponents/Loginup"
import { Alertcom } from "@/reactcomponents/Alertcom"
import { useRecoilValue } from "recoil"
import { message } from "@/atoms/Atoms"
const Auth=()=>{

const mess=useRecoilValue(message)
    return(
      <div>
           <div className="flex flex-row justify-end "><Alertcom message={mess}></Alertcom></div>
       <div className="mt-30 flex flex-col items-center gap-10">
        <h1 className="text-5xl font font-extrabold">Create or Login to your account</h1>
<Tabs defaultValue="Login" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2"> 
    <TabsTrigger value="Login">Login</TabsTrigger>
    <TabsTrigger value="signup">Sign up</TabsTrigger>
  </TabsList>
  <TabsContent value="signup"><Signup></Signup></TabsContent>
  <TabsContent value="Login"><Loginup></Loginup></TabsContent>
</Tabs>

       </div></div>
      
    )
}
export default Auth
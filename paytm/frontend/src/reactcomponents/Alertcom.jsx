import { Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../components/ui/alert"
export const Alertcom=({message})=>{
   if(message){
    return(
  <div> <Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Alert</AlertTitle>
  <AlertDescription>
    {message}
  </AlertDescription>
</Alert></div>
   )}
   else{
    return(
        <></>
    )
   }


}
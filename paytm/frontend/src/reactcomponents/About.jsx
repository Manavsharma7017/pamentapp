import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "../components/ui/hover-card"
  
const About=()=>{
return(<HoverCard>
    <HoverCardTrigger>About</HoverCardTrigger>
    <HoverCardContent>
     This is an Payment App created using React Js,Tailwind CSS,Node Js,Express Js and Mongo DB
    </HoverCardContent>
  </HoverCard>
  )
}
export default About
import animation from "../assets/paymentanimation.json"
import Lottie from "lottie-react"
import { ScrollArea } from "@/components/ui/scroll-area"

const Landing=()=>{
const arr=["Know"," ","About"," ","Us"]
    return(
        <>
    <div className="flex flex-row justify-around "> <div className="w-2/4 h-96"><Lottie  animationData={animation}></Lottie></div>
     <div className="flex flex-col justify-center items-center h-screen">
    <div className="flex justify-center items-center pb-2">
     {arr.map((x,index)=>{
        return(
            <span key={index} className="text-2xl hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer">{x} </span>
        )
     })
      
    }
 </div>
    <br></br>
        <ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
    <h1> Welcome to Payment App</h1>
    <br></br>
Simplify Your Payments, Amplify Your Life
Seamless Transactions: With Payment App, experience the ease of instant payments, whether you're shopping online, splitting bills with friends, or paying for services. Our intuitive interface ensures that your transactions are quick, secure, and hassle-free.
<br></br>
Secure and Reliable:Your security is our top priority. Payment App uses advanced encryption and multi-factor authentication to protect your financial information, giving you peace of mind with every transaction.
<br></br>
Global Reach:Payment App supports multiple currencies and international transactions, making it easier than ever to send and receive money across borders. Whether you're at home or traveling, Payment App has you covered.
<br></br>
Rewards and Offers:Enjoy exclusive rewards and offers from our partner merchants. Earn cashback, discounts, and more every time you use Payment App.
<br></br>
24/7 Support: Our dedicated support team is available around the clock to assist you with any questions or issues. We're here to ensure your experience with Payment App is smooth and enjoyable.
<br></br>
Get Started Today:Join millions of satisfied users and discover the convenience of Payment App. Download the app now and take control of your finances with just a few taps.
<br></br>
Feel free to let me know if there's anything else you'd like to adjust or add!
</ScrollArea></div>
     

    </div>
    <footer>  <div className="h-36 text-2xl flex flex-row justify-center p-10 transition ease-in-out delay-150 bg-zinc-900 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-700 duration-300">created by Manav sharma</div></footer>
    </>
    )
}
export default Landing
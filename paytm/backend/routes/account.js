const {Router} =require("express")
const route=Router()
const {bank}=require("../db/schema");
const { userexist } = require("../middleware/usermiddleware");
const  mongoose  = require("mongoose");

route.get("/balance",userexist,async(req,res)=>{
   try{
     const userbalance=await bank.findOne({userid:req.userid})
    res.json({
        balance:userbalance.balance
    })
   }catch(e){
    res.status(411).json({
        message:"can not get balance"
    })
   }
})

route.post("/transfer",userexist,async(req,res)=>{
  try{
const session=await mongoose.startSession();
  session.startTransaction()
  const {amount,to}=req.body;
  const useraccount=await bank.findOne({userid:req.userid}).session(session)
  if(!useraccount||useraccount.balance<amount){
    await session.abortTransaction();
    res.status(411).json({
        message:"insufficent balance"
    })
    return
  }
  const touser= await bank.findOne({userid:to}).session(session)
  if(!touser){
   await session.abortTransaction();
    res.status(411).json({
        message:"invalid uuser"
    })
    return
  }
  await bank.updateOne({userid:req.userid},{"$inc":{balance:-amount}}).session(session)
  await bank.updateOne({userid:to},{"$inc":{balance:amount}}).session(session)
  await session.commitTransaction();
  res.status(200).json({
      message:"Transfer successful"
  })}catch(e){
    res.json({
      message:"error in transation"
    })
  }
  
})

module.exports=route;
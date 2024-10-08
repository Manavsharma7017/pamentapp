const {Router} =require("express")
const route=Router()
const {user,bank}=require("../db/schema")
const {usertype,usersigin,updateuser}=require("../zod/typezod")
const jwt=require("jsonwebtoken")
const {JWT_SECRETE}=require("../jwttoken/config")
const {userexist}=require("../middleware/usermiddleware")


route.post("/signup", async (req, res) => {
    try{
    const userdata = usertype.safeParse(req.body)
    if (!userdata.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

 else{
     const username=req.body.username
     const firstname=req.body.firstname
     const lastname=req.body.lastname
     const password=req.body.password
     const finduser=await user.findOne({username})
     if(finduser){
        res.status(200).json({
            message:"user already exist"
        })
     }
     else{
     const usercreated=await user.create({
        username,
        firstname,
        lastname,
        password
     })
      const userid=usercreated._id
      await bank.create({
        userid,
        balance:1+Math.random()*1000
      })
     const token=jwt.sign({userid},JWT_SECRETE)
      res.status(200).json({
      message:"User created successfully",
      token,
     })
    }
 }}catch(e){
    res.status(411).json({
        message:"error in creating user"
    })
 }

})
route.post("/signin",async(req,res)=>{
    try{
    const userdata=usersigin.safeParse(req.body)
    if(!userdata.success){
        res.status(411).json({
            message:"Incorrect inputs"
        })
    }
    else{
        const username=req.body.username
        const password=req.body.password
        const userexist=await user.findOne({username,
            password
        })
        if(userexist){
            const userid=userexist._id
            const token=jwt.sign({userid},JWT_SECRETE)
             res.status(200).json({
             message:"User created successfully",
             token,
            })
            return;
        }
        else{
            res.status(411).json({
                message: "Error while logging in"
            })
        }
    }
    }catch(e){
        res.status(411).json({
            message:"error while login"
        })
    }
})
route.put("/update",userexist,async(req,res)=>{
    const userdata=req.body
   
    const updatedata=updateuser.safeParse(userdata)
    if(!updatedata.success){
         res.status(411).json({
            message:"wrong syntax"
         })
    }else{
        const userid=req.userid
     const update =await user.updateOne({_id:userid},req.body)
        res.status(200).json({
            update,
            message:'user updated'
        })
    }
})
route.get("/bulk",async(req,res)=>{
    const filter=req.query.filter || ""
    const usernames=await user.find({
        "$or" :[{
            firstname:{
                "$regex":filter
            }
        },{ lastname:{
            "$regex":filter
        }}]
    })
    res.status(200).json({
        username:usernames.map(name=>({
            username:name.username,
            firstname:name.firstname,
            lastname:name.lastname,
            userid:name._id
        }))
    })
})
module.exports=route;

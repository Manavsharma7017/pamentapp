const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://manav:Manav%400603@cluster0.svddq7z.mongodb.net/paytm")

const userschema = new mongoose.Schema(
    {   username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30

    },
        firstname:{
            type: String,
            required: true,
            trim: true,
            maxLength: 30
    
        },
        lastname:{ type: String,
            required: true,
            trim: true,
            maxLength: 30
    },
        password:{
            type: String,
            required: true,
            mimLength: 6
        },
    }
)

const user=mongoose.model("user",userschema)
const bankschema=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user,
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})
const bank=mongoose.model("bank",bankschema)
module.exports={
    user,
    bank
}
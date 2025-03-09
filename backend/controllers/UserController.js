const UserModel = require("../models/UserModel");
const bcrypt=require('bcryptjs')

const createUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await UserModel.findOne({email})
        if(user){
            return res.status(403).json({
                success:false,message:"User already exsist"
            })
        }
        const profileImage=req.file ? req.file.path :null
        const hashPassword=await bcrypt.hash(password,10)
        const newUser=new UserModel({
            ...req.body,
            profileImage,
            password:hashPassword
        })
        res.status(200).json({
            success:true,
            message:"successfully create user"
        })
    }catch(error){
        console.log('see if any error',error)
        res.status(500).json({
            success:false,message:"Internal server error"
        })
    }
}

module.exports=createUser;
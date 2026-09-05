import User from '../model/user.model.js'
import Blog from '../model/blog.model.js'
import { where } from 'sequelize';

export const viewAllUsers=async(req,res)=>{
    
    const findUser=await User.findAll({attributes:{exclude:["password"]}});

    if(!findUser)
    {
        return res.status(400).json({
            message:'User not found '
        })
    }
    res.status(201).json({
        message:"Lists of Users",
        data:findUser
        
    })

}

export const findUserbyId=async(req,res)=>{
        const userId=req.params.id;

    const findUser=await User.findByPk(userId,
        {attributes:{exclude:["password"]}}
    );

    if(!findUser)
    {
        return res.status(400).json({
            message:'User not found '
        })
    }
    res.status(201).json({
        message:"User found",
        data:findUser
        
    })
}

export const statusUpdate=async(req,res)=>{
    const {isActive}=req.body
    const findId=req.params.id;

    const findUser=await User.findByPk(findId,{attributes:{exclude:["password"]}});

    if(!findUser)
    {
        return res.status(404).json({
            message:"User not found"
        })
    }
    if(isActive!==0 && isActive!==1 )
    {
        return res.status(409).json({
            message:"Set user status either 1 or 0"
        })
    }

    await findUser.update({isActive:Boolean(isActive)})
    res.status(200).json({
        message:"User status updated",
        data:findUser
    })

    
}
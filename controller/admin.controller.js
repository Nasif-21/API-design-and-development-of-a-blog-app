import User from '../model/user.model.js'
import Blog from '../model/blog.model.js'

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
        message:"Lists of Users",
        data:findUser
        
    })
}
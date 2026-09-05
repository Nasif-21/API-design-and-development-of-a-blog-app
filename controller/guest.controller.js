import User from '../model/user.model.js'
import Blog from '../model/blog.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export const userReg=async(req,res)=>{
    const{firstname,lastname,email,password}=req.body;
    if(!firstname||!lastname||!email||!password)
    {
        return res.status(400).json({
            message:'firstname, lastname, email and password cannot be null'
        })

    }

    const isExisting=await User.findOne({where:{email}});
    if(isExisting)
    {
        return res.status(409).json({
            message:'User already exist using this email'
        })
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const user=await User.create({
        firstName:firstname,
        lastName:lastname,
        email,
        password:hashedPassword
    })

    res.status(201).json({
        message:"User created successfully",
        data:
        {
            id:user.id,
            firstname:user.firstName,
            lastname:user.lastName,
            email:user.email,
        }
    })

}

export const userLogin=async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({where:{email}});

    if(!user)
    {
        return res.status(401).json({
            message:"No user found"
        })
    }

    const isPasswordValid=await bcrypt.compare(password,user.password);

    if(!isPasswordValid)
    {
        return res.status(400).json({
            message:"Wrong credencials"
        })
    }

    const token=jwt.sign({id:user.id,email:user.email,role:user.role},process.env.SECRET_KEY,{expiresIn:3600})
    res.status(200).json({
        message:"Login Successful",
        data:{
            token,
            user:{
                id:user.id,
                email:user.email
            }
        }
    })

}

export const viewAllBlogs=async(req,res)=>{
    const blogs=await Blog.findAll();

    if(!blogs)
    {
        return res.status(204).json({
            message:"No blogs are currently available"
        })
    }

    res.status(200).json({
        message:"List of all blogs",
        data:{
            blogs
        }
        
    })

}

export const viewBlogbyId=async(req,res)=>{
    const reqId=req.params.id;
    const findBlogById=await Blog.findByPk(reqId);

    if(!findBlogById)
    {
        return res.status(400).json({
            message:"Invalid blog ID, please check"
        })
    }

    res.status(200).json({
        message:"Blog found!",
        data:{
            findBlogById
        }
    })

}
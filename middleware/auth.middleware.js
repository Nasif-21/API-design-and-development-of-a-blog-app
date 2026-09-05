import jwt from "jsonwebtoken";

export const authMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;

    if(!authHeader||!authHeader.startsWith("Bearer"))
    {
        return res.status(403).json({
            message:"Auth token is required"
        })
    }

    const token=authHeader.split(" ")[1]
    const decoded=jwt.verify(token,process.env.SECRET_KEY);
    req.user=decoded;
    next();

}

export const isAdmin=(req,res,next)=>{
    if(req.user?.role!=="admin")
    { 
        return res.status(403).json({
            message:"Access denied, Admin user only"
        })

    }
    next();
}
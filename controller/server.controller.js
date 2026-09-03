export const serverUp=(req,res)=>{
    return res.status(200).json({
        message:"Server is Up"
    })
}
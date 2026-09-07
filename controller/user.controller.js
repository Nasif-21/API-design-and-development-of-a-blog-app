import Blog from "../model/blog.model.js";
import User from "../model/user.model.js";
import bcrypt from 'bcrypt'

export const viewOwnProfile=async(req,res)=>{
    
    const findId=req.user.id;
    const findMe=await User.findByPk(findId);

    if(!findMe)
    {
        return res.status(400).json({
            message:"User not found"
        })
    }
    res.status(200).json({
        message:"Your user profile",
        data:findMe
    })

}

export const updateOwnProfile=async(req,res)=>{
    const findUser=req.user.id
    const{firstName,lastName,email}=req.body;

    if(!firstName||!lastName||!email)
    {
        return res.status(400).json({
            message:"firstName,lastName,email cannot be empty"
        })
    }

    const [updateCount] =await User.update({
        firstName:firstName,
        lastName:lastName,
        email:email,
    },
    {where:{id:findUser}});

    const updatedUser = await User.findByPk(findUser, {
    attributes: { exclude: ["password"] },
  });

    res.status(200).json({
        message:"User updated",
        data:updatedUser
    })



}

export const updateOwnPassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const userId = req.user.id;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({
      message: "Current and new password are required",
    });
  }

  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(currentPassword, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Current password is incorrect" });
  }


  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  res.status(200).json({ message: "Password updated" });
}

//Fix here, need to check error when you throw the endpoints
export const createBlogs=async(req,res)=>{

    const userId = req.user.id;
    const {blogTitle, blog,category}=req.body;

    if(!blogTitle||!blog||!category){
        return res.status(400).json({
            message:"blogTite,blog and category cannot be empty"
        })
    }
    const createBlog=await Blog.create({
        blogTitle:blogTitle,
        blog:blog,
        category:category,
        userId:userId
    },
    );
    return res.status(200).json({
        message:"Blog created successfully",
        data:createBlog
    })
    
}

export const updateBlogId = async (req, res) => {
    const userId = req.user.id;
    const blogId = req.params.id;
    const { blogTitle, blog, category } = req.body;

    if (!blogId) {
        return res.status(400).json({ message: "blog id is required" });
    }

    try {
        const existingBlog = await Blog.findOne({ where: { id: blogId, userId } });

        if (!existingBlog) {
            return res.status(404).json({ message: "No blog found for this user with this ID" });
        }

        await Blog.update(
            { blogTitle, blog, category },
            { where: { id: blogId, userId } }
        );

        const updatedBlog = await Blog.findByPk(blogId);

        return res.status(200).json({
            message: "Blog updated successfully",
            data: updatedBlog
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong while updating the blog",
            error: error.message
        });
    }
}

export const deleteBlogbyId = async (req, res) => {
    const blogId = req.params.id;
    const userId = req.user.id;

    if (!blogId) {
        return res.status(400).json({ message: "blog id is required" });
    }

    try {
        const findBlog = await Blog.findOne({ where: { id: blogId, userId } });

        if (!findBlog) {
            return res.status(404).json({ message: "No blog found for this user with this id" });
        }

        await Blog.destroy({ where: { id: blogId, userId } });

        return res.status(200).json({
            message: "Blog deleted successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong while deleting the blog",
            error: error.message
        });
    }
};
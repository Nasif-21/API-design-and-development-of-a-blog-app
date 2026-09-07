import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { viewOwnProfile,updateOwnProfile,updateOwnPassword,createBlogs,updateBlogId,deleteBlogbyId } from "../controller/user.controller.js";

const router=Router();

router.get("/api/users/profile",authMiddleware,viewOwnProfile)
router.put("/api/users/profile/update",authMiddleware,updateOwnProfile)
router.patch("/api/users/password",authMiddleware,updateOwnPassword)
router.post("/api/blogs/create",authMiddleware,createBlogs)
router.put("/api/blogs/update/:id",authMiddleware,updateBlogId)
router.delete("/api/blogs/delete/:id",authMiddleware,deleteBlogbyId)



export default router;
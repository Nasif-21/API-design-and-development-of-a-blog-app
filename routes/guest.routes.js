import { Router } from "express";
import {userReg,userLogin,viewAllBlogs,viewBlogbyId} from '../controller/guest.controller.js'

const router=Router();

router.post("/api/auth/register",userReg);
router.post("/api/auth/login",userLogin);
router.get("/api/blogs",viewAllBlogs)
router.get("/api/blogs/:id",viewBlogbyId)



export default router;
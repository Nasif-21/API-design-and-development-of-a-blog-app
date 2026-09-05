import { Router } from "express";
import { authMiddleware,isAdmin } from "../middleware/auth.middleware.js";
import { viewAllUsers } from "../controller/admin.controller.js";

const router=Router();


 router.get("/api/users",authMiddleware,isAdmin,viewAllUsers)
// router.get("/api/users/:id")
// router.patch("/api/users/:id/status")
// router.get("/api/users/profile")
// router.put("/api/users/profile/update")
// router.patch("/api/users/password")
// router.get("/api/blogs")
// router.get("/api/blogs/:id")
// router.post("/api/blogs/create")
// router.put("/api/blogs/update/:id")
// router.delete("/api/blogs/delete/:id")



export default router;
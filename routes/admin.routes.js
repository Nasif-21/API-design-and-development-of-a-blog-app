import { Router } from "express";
import { authMiddleware,isAdmin } from "../middleware/auth.middleware.js";
import { viewAllUsers,findUserbyId,statusUpdate } from "../controller/admin.controller.js";

const router=Router();


router.get("/api/users",authMiddleware,isAdmin,viewAllUsers)
router.get("/api/users/:id",authMiddleware,isAdmin,findUserbyId)
router.patch("/api/users/:id/status",authMiddleware,isAdmin,statusUpdate)
// router.get("/api/users/profile")
// router.put("/api/users/profile/update")
// router.patch("/api/users/password")
// router.get("/api/blogs")
// router.get("/api/blogs/:id")
// router.post("/api/blogs/create")
// router.put("/api/blogs/update/:id")
// router.delete("/api/blogs/delete/:id")



export default router;
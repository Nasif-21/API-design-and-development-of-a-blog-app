import { Router } from "express";
import { serverUp } from "../controller/server.controller.js";

const router=Router();

router.get("/api",serverUp);

export default router;
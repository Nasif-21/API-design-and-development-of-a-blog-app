import express from "express"
import path from "path"
import router from "./routes/server.routes.js";
import guestRouter from './routes/guest.routes.js';
import adminRouter from './routes/admin.routes.js'

const app=express();

app.use(express.json());

app.use("/",router)
app.use("/",guestRouter)
app.use("/",adminRouter)

export default app;




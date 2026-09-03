import express from "express"
import path from "path"
import router from "./routes/server.routes.js";
import guestRouter from './routes/guest.routes.js'

const app=express();

app.use(express.json());

app.use("/",router)
app.use("/",guestRouter)

export default app;




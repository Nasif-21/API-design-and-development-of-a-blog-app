import dotenv from "dotenv";
import sequelize from "./config/db.js";
dotenv.config();
import app from "./app.js";
import './model/association.js';


const PORT=process.env.PORT||5001;

await sequelize.authenticate();
await sequelize.sync()
console.log(`Database start at port ${process.env.DB_PORT}`)
app.listen(PORT,()=>{
    console.log(`Server starts at port ${PORT} `)
});


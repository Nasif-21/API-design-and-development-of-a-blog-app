import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";


const Blog=sequelize.define('Blogs',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"users",
            key:"id",
        },
    },
    blogTitle:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    blog:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false,
    },   
},
{
    tableName:'blogs',
    timestamps:true,
    createdAt:'createdAt',
    updatedAt:'updatedAt',
}
);




export default Blog;
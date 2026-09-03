import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";


const User=sequelize.define('Users',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    isActive:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true,
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"user"

    },
},
{
    tableName:'users',
    timestamps:true,
    createdAt:'createdAt',
    updatedAt:'updatedAt',
}
);



export default User




import Blog from "./blog.model.js";
import User from "./user.model.js";

User.hasMany(Blog,{
    foreignKey:"userId",
    as:"blogs",
    onDelete:"CASCADE",
    onUpdate:"CASCADE",
});


Blog.belongsTo(User,{
    foreignKey:"userId",
    as:"user",
});
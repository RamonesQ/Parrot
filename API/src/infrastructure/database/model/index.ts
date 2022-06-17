import { Post } from "./posts";
import { User } from "./users";

Post.belongsTo(User,{
    foreignKey: 'user_idUser'
})
User.hasMany(Post,{
    foreignKey: 'user_idUser'
})


export const relationship = {
    User,
    Post
}


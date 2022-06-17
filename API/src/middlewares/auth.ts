import { expressjwt } from "express-jwt";
require('dotenv').config();


module.exports = expressjwt({
    secret: process.env.key!,
    algorithms: ["HS256"],
});
import { expressjwt } from "express-jwt";


module.exports = expressjwt({
    secret: 'abc',
    algorithms: ["HS256"],
});
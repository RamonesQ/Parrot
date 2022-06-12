const {expressjwt:expressJWT} = require("express-jwt");
const secret = require("../config/secret")

module.exports = expressJWT({
    secret:'abc',
    algorithms:["HS256"],
});
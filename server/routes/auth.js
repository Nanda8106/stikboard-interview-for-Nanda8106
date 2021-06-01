const express = require("express");
const router = express.Router();
const {check} = require("express-validator")
const {signup, signin, signout} = require("../controllers/auth")

router.post("/signup", [
    check("username", "username should contains atleast three letters").isLength({min:3, max:32}),
    check("email", "Please enter email in correct format").isEmail(),
    check("password", "Password must include one lowercase character, one uppercase character, a number, and a special character.").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
], signup);

router.post("/signin", [
    check("email", "Please enter email in correct format").isEmail()
], signin)

router.get("/signout", signout)

module.exports = router;
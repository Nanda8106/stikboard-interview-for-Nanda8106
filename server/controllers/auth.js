const User = require("../models/user");
const {validationResult, cookie} = require("express-validator")
const jwt= require("jsonwebtoken");
const expressJwt= require("express-jwt");

exports.signup = (req, res) => {
    const errors = validationResult(req);
    const {username, email, password} = req.body;

    if(email === ""){
        return res.status(400).json({
            error: "Email is empty"
        })
    }
    if(username === ""){
        return res.status(400).json({
            error: "username is empty"
        })
    }
    if(password === ""){
        return res.status(400).json({
            error: "password is empty"
        })
    }

    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg    
        })
    }
    const user = new User(req.body);
    // checks wether email exist or not
    
    
    User.findOne({email}, (error, existEmail) => {
        if(existEmail){
            return res.status(400).json({
                error: "Email already exist"
            })
        }

        User.findOne({username}, (error, existPhone) => {
            if(existPhone){
                return res.status(400).json({
                    error: "Username already exist"
                })
            }

            user.save( (error, user) => {
                if(error || !user){
                    return res.status(422).json({
                        error: "Unable to save in DB"
                    }) 
                }
                return res.json({
                    username:user.username,
                    email : user.email,
                    id: user.id
                })
            })
        });
    })
}

exports.signin = (req, res) => {
    const errors = validationResult(req);
    const {email, password} = req.body;

    if(email === ""){
        return res.status(400).json({
            error: "Email is empty"
        })
    }
    if(password === ""){
        return res.status(400).json({
            error: "password is empty"
        })
    }

    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg    
        })
    }

    User.findOne({email}, (error, user) => {
        if(error || !user){
            return res.status(400).json({
                error: "Wrong Email/Password combinations"
            })
        }
        if(!user.authenticate(password)){
            return res.status(401).json({
                error: "Wrong Email/Password combinations"
            })
        }

        const token = jwt.sign({_id:user._id}, process.env.SECRET);

        res.cookie("token", token, {expire: new Date()+9999});

        const {_id, email} = user;
        res.json({token, user:{_id, email}})
    })
}

exports.signout = (req, res) => {
    res.clearCookie("token");
    res.json({
        message: "User signout successfully"
    })
}

exports.isSignedIn = expressJwt({
    secret: process.env.SECRET,
    userProperty : "auth"
})

exports.isAuthenticated = (req, res, next) => {
    const checker = req.auth && req.profile && req.profile._id == req.auth._id;
    if(!checker){
        return res.status(403).json({
            error : "ACCESS DENIED"
        })
    }
    next();
}


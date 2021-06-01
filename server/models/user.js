const mongoose = require("mongoose");
const uuid = require("uuid/v1");
const crypto = require("crypto");

const userSchema =new  mongoose.Schema({
    username:{
        type : String,
        trim : true,
        required : true,
        maxlength : 100,
    },
    email:{
        type : String,
        required : true,
        maxlength : 100,
        unique : true,
        trim : true
    },
    encry_password: {
        type : String,
        required : true,
    },
    salt: String
}, {timestamps: true}
);


userSchema.virtual("password")
.set(function(password){
    this._password = password;
    this.salt = uuid();
    this.encry_password = this.securePassword(password)
})
.get(function(){
    return this._password;
})


userSchema.methods = {
    authenticate : function(plainPassword){
        return this.securePassword(plainPassword) === this.encry_password
    },
    
    securePassword : function(plainPassword){
        if(!plainPassword) return "";
        try {
            return crypto.createHmac('sha256', this.salt)
            .update(plainPassword)
            .digest('hex');
        } catch (err) {
            return ""
        }
    }
}


module.exports = mongoose.model("User", userSchema);
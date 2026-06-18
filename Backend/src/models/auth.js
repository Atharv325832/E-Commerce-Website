const mongoose = require("mongoose");

const authschema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})
    const Authmodel = mongoose.model("auth",authschema);
          module.exports = Authmodel;



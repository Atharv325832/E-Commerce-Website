const mongoose = require("mongoose");

const registerSchema=new mongoose.Schema({
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

const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    }
});

    const Blacklist = mongoose.model("Blacklist", blacklistSchema);
    const authmodel = mongoose.model("auth",registerSchema);

          module.exports = { authmodel, Blacklist };



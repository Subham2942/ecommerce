const router = require("express").Router();
const User = require("../models/user");

const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async(req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_JS_SECRET).toString(),
    })

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    };
    
})


//LOGIN
router.get("/login", async(req,res) => {
    try{
        const user = await User.findOne({username: req.body.username});
    
        if (!user) {
            res.status(401).json("Username doesn't exist!");
            return;
        }

        const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_JS_SECRET).toString(CryptoJS.enc.Utf8);


        if (decryptedPassword !== req.body.password) {
            res.status(401).json("Password doesn't match!");
            return;
        }

        const accesToken = jwt.sign(
            {
                id: user._id, 
                isAdmin: user.isAdmin
            }, 
            process.env.JWT_SECRET,
            {expiresIn: "3d"}
        )
        const { password, ...otherInfo} = user._doc;
        res.status(200).json({...otherInfo, accesToken})
    }catch(err){
        console.log(err);
    }

})

module.exports = router;
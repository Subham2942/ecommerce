const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const CryptoJs = require("crypto-js");
const router = require("express").Router();
const User = require("../models/user");

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJs.AES.encrypt(
            req.body.password,
            process.env.CRYPTO_JS_SECRET // Corrected environment variable access
        ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

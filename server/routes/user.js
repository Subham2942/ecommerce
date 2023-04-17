const router = require("express").Router();

router.get("/usertest", (req,res)=>{
    res.send("Test is successful!");
    console.log("Success");
})

module.exports = router;
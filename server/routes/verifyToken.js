const jwt = require("jsonwebtoken");

//TO CHECK WHETHER USER IS LOGGED IN
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    const token = authHeader.split(" ")[1];
    if (authHeader) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            // IF TOKEN IS EXPIRED OR NOT VALID
            if (err) res.status(403).json("Token is not valid!");

            // IF TOKEN IS VALID
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("You are not logged in");
    }
};

//TO ONLY ALLOW USERS(EXCEPT ADMINS) TO UPDATE THEIR OWN ACCOUNT AND NOT OTHER's

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user && (req.user.id == req.params.id || req.user.isAdmin)) {
            next();
        } else {
            res.status(403).json("not Admin!");
        }
    });
};

//TO ONLY ALLOW ADMINS TO UPDATE ANY THING
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user && ( req.user.isAdmin)) {
            next();
        } else {
            res.status(403).json("Not Admin!");
        }
    });
};

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };

const jwt = require("jsonwebtoken");

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

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user && (req.user.id == req.params.id || req.user.isAdmin)) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};

module.exports = { verifyToken, verifyTokenAndAuthorization };

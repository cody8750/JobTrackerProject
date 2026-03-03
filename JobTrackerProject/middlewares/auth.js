const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // 1. Get token from header (Standard way: 'Authorization: Bearer <token>')
    const token = req.header('x-auth-token'); 

    // 2. Check if no token
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        // 3. Verify token (Note the comma, not a dot)
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // 4. Add user from payload to the request object
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
};

// const jwt = require('jsonwebtoken');
// module.exports = function(req, res, next){
//     const token = req.api
//     if(!token){
//         return res.status(401).json({message: "no token access denied"});
//     }
//     try {
//         //JWT verification
//         const verified = jwt.verify(token.process.env.JWT_SECRET_KEY);

//         req.user = verified;
//         next();
//     } catch (error) {
//         res.status(401).send("server error")
//     }
// } 
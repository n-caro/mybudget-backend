const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = function(req, res, next) {
  let token = req.headers["authorization"];
  if(!token){
    return res.status(400).json({
      status: 400,
      message: "Token must be send."
    })
  }
  token = token.replace(/^Bearer\s+/, "");
  jwt.verify(token, 'jwt_secret_key', function(err, decodedToken) {
    if (err) {
      return res.status(401).json({
        status: 401,
        message: "Invalid token."
      })
    }

    req.user = decodedToken.user;
    next();
  });
}
var jwt = require('jsonwebtoken');
const Usr = require('../modules/Register');
const JWT_SECRET = 'ver_token';

const gettoken = (req, res, next) => {
  
    const token = req.header('auth-token');
    if (!token)
        return res.json({"msg":"Invalid token!","status":"0"});

    try {
       
      const data = jwt.verify(token,JWT_SECRET);
      
      req.user = data;
      next();
    } catch (error) {
        return res.json({"msg":"Invalid token!","status":"0"});

    }
  }

  module.exports = gettoken;
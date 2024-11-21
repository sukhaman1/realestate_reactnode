const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Usr = require('../modules/Register');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const validate = validations => {
    return async (req, res, next) => {
      // sequential processing, stops running validations chain if one fails.
      for (const validation of validations) {
        const result = await validation.run(req);
        if (!result.isEmpty()) {
          return res.status(400).json({ errors: result.errors[0].msg });
        }
      }
  
      next();
    };
  };

  router.post("/",validate([
    body('email','Enter valid email').isEmail(),
    body('password','Password must be minimum 6').optional().isLength({ min: 6 }),
]), async (req, res) => {
  
    try {
     
      let user = await Usr.findOne({ email: req.body.email});
      if (!user)
        return res.json({"msg":"Invalid details!","status":"0"});
  
      const passwordss = await bcrypt.compare(req.body.password,user.password);
      if (!passwordss)
        return res.json({"msg":"Invalid details!","status":"0"});

      var token = jwt.sign({ id: user.id }, 'ver_token');

      return res.json({"msg":"Login successfully!!!","status":"1","token":token,"userid":user.id});

    } catch (error) {
      res.status(400).send("An error occured");
    }
  });

module.exports = router; 
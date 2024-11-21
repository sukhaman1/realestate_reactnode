const express = require('express');
const router = express.Router();
const User = require('../modules/Register');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const validate = validations => {
    return async (req, res, next) => {
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
    body('username','Name cannot be empty!!!').not().isEmpty(),
    body('email','Enter valid email').isEmail(),
    body('password','Password must be minimum 6').optional().isLength({ min: 6 }),
]), async (req, res) => {
    try {

   let user = await User.findOne({ email: req.body.email });
   if (user)
     return res.json({"msg":"User with given email already exist!","status":"0"});

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hashSync(req.body.password, salt);

    user = await new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashPass,
    }).save();

    var token = jwt.sign({ id: user.id }, 'ver_token');
       return res.json({"msg":"Account created successfully!!!","status":"1","token":token,"userid":user.id});
    } catch (error) {
      return res.status(404).json({ error });

    }
  }); 
module.exports = router; 
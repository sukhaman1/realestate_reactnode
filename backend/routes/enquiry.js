const express = require('express');
const router = express.Router();
const PropertyEnq = require('../modules/Enquiry');
const Property = require('../modules/Property');
const { body, validationResult } = require('express-validator');
var gettoken = require('../middleware/gettoken');

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


// Submit Enquiry
  router.post("/submit", async (req, res) => {
    try {
      console.log(req.body);
        propertyenq = await new PropertyEnq({
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email,
        msg: req.body.msg,
        property_id: req.body.id,
      }).save();

      return res.json({"msg":"Enquiry submit successfully!!!","status":"1"});
    } catch (error) {
      return res.status(404).json({ error });
    }
  });

// Submit Enquiry


// Get Single property info

router.get("/getenq/:id/",gettoken, async (req, res) => {
    try {
      
        let propss = await PropertyEnq.find({ property_id: req.params.id });
        let dtl = await Property.find({ _id: req.params.id },{pname:1,_id:0});
        return res.json({propss,dtl});
    } catch (error) {
        return res.json(error);
    }
    
});
// Get Single property info

module.exports = router; 
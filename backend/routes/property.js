const express = require('express');
const router = express.Router();
const Property = require('../modules/Property');
const { body, validationResult } = require('express-validator');
var gettoken = require('../middleware/gettoken');
const multer  = require('multer');
const path = require('path');


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


const imageUploadPath = 'public/images/';

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, imageUploadPath)
  },
  filename: function(req, file, cb) {
    file.originalname = file.originalname.replace(' ', '');
    cb(null, `${Date.now()}_${file.originalname}`)
  }
})

const imageUpload = multer({storage: storage})


// Add Property
  router.post("/add",gettoken,imageUpload.single("file"), async (req, res) => {
    try {
      req.file.filename = req.file.filename.replace(' ', '');
      property = await new Property({
        pname: req.body.pname,
        price: req.body.price,
        bedroom: req.body.bedroom,
        bathroom: req.body.bathroom,
        image: req.file.filename,
        sqft: req.body.sqft,
        descr: req.body.descr,
        userid: req.body.userid,
      }).save();

      return res.json({"msg":"Property added successfully!!!","status":"1"});
    } catch (error) {
      return res.status(404).json({ error });
    }
  });

// Add Property


// Update Property
  router.put("/update/:id",gettoken,imageUpload.single("file"),async (req, res) => {
    try {
      
      const id = req.params.id;
      req.file.filename = req.file.filename.replace(' ', '');
      req.body.image = req.file.filename;
      //console.log(req.file.filename);
      /*if(req.file.filename !='')
      {
        req.body.image=req.file.filename;  
      }
      else{
       req.body.image='';   
      }*/
      
Property.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}).then((docs)=>{
       if(docs) {
         return res.json({"msg":"Property updated successfully!!!","status":"1"});
       } else {
         return res.json({"msg":"error","status":"0"});
       }
    }).catch((err)=>{
        reject(err);
    })
     
      
    } catch (error) {
      return res.status(404).json({ error });
    }
  });

// Update Property


// Get all properties of a user

router.get("/getallproperties",gettoken, async (req, res) => {
    try {
        let propss = await Property.find({ userid: req.query.userid });
        res.json(propss);
    } catch (error) {
        res.json(error);
    }
    
});
// Get all properties of a user


// Get all properties

router.get("/getall/:id", async (req, res) => {
    try {
        var nam= req.params.id;
        if(nam == 'all')
        {
          let propss = await Property.find();
          return res.json(propss);
        }
        else{
          
          let propss = await Property.find({ pname: new RegExp(nam, 'i') });
          console.log(nam);
        }
        
        
    } catch (error) {
        res.json(error);
    }
    
});
// Get all properties


// Get all properties of a user

router.get("/getsingle/:id", async (req, res) => {
    try {
        let propss = await Property.find({ _id: req.params.id });
        res.json(propss);
    } catch (error) {
        res.json(error);
    }
    
});
// Get all properties of a user


// delete property

router.get("/delproperty/:userid/:id",gettoken, async (req, res) => {
    try {
    const result = await Property.deleteOne({ userid: req.params.userid,_id: req.params.id, });
      return res.json({"msg":"Property deleted successfully!!!","status":"1"});
  } catch (error) {
        return res.json(error);
    }
    
});
// delete property


// Get Single property info

router.get("/getinfo/:userid/:id",gettoken, async (req, res) => {
    try {
        let propss = await Property.find({ userid: req.params.userid,_id: req.params.id });
        return res.json(propss);
    } catch (error) {
        return res.json(error);
    }
    
});
// Get Single property info

module.exports = router; 
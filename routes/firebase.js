const express = require("express");
const router = express.Router();
const firebaseService = require("../services/firebase.service");


router.post("/singin", async function (req, res, next) {
    const studentAuth = {
      email: req.body.email,
      password: req.body.password,
    };
    const student = await firebaseService.singin(studentAuth);
    console.log(`student Authentication`,student);
    
    res.json(student);
  });


  module.exports = router;
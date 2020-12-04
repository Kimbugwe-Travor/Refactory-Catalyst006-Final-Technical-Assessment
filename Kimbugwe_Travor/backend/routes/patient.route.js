const express = require('express');
const patientRoute = express.Router();

// Patient model
let PatientModel = require('../models/patients');

patientRoute.route('/').get((req, res) => {
    PatientModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 patientRoute.route('/Register').post((req, res, next) => {
    PatientModel.Register(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


module.exports = patientRoute;
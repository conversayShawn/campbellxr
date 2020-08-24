// IMPORT EXPRESS
const express = require('express')

// IMPORT API FROM MODELS
// const api = require('../models/activity.js')

// CREATE NEW ROUTER TO CONTAIN ALL REQ HANDLERS
// const router = express.Router()

// REQ HANDLERS ****************

// GET ALL ACTIVITIES

//  IMPORT ROUTERS
module.exports = function(app) {
  app.get("/", function(req, res) {
      res.send("testing routes")
  })
}
const express = require('express')
const dataController = require('../Controllers/Data')

const dataRouter = express.Router()//We are linking Data.js file with our /api main

dataRouter.route('/details')//creating a route

.get(dataController.apiController)//getting data

module.exports = dataRouter
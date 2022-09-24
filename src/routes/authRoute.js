const express = require('express')
const route = express.Router()
const AuthController = require("../controllers/AuthController")

route.post('/auth/token', (req, res) => {
    AuthController.token(req, res)
})

route.post('/auth/login', (req, res) => {
  AuthController.login(req, res)
})

route.post('/auth/logout', (req, res) => {
  AuthController.logout(req, res)
})

module.exports = route
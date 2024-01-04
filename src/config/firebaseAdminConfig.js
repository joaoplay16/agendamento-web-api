const { initializeApp, cert } = require("firebase-admin/app")
const { getAuth } = require("firebase-admin/auth")
var serviceAccount = require("./firebaseServiceConfig.json");

const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: 'https://agendamento-web-ea083.firebaseio.com'
})

const adminAuth = getAuth(app)

module.exports = {
  app,
  adminAuth
}
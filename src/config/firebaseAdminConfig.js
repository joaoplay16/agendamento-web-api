const { initializeApp, cert } = require("firebase-admin/app")
const { getAuth } = require("firebase-admin/auth")
var serviceAccount = require("./agendamento-web-ea083-ca46c36dc976.json");

const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: 'https://agendamento-web-ea083.firebaseio.com'
})

const adminAuth = getAuth(app)

module.exports = {
  app,
  adminAuth
}
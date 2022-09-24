const { initializeApp } = require("firebase/app")
const { getAuth } = require("firebase/auth")


const app = initializeApp({
  apiKey: 'AIzaSyC7LoaM9pv0tdzjnPDFXNyXWrmqMwC7LXQ',
  authDomain: 'agendamento-web-ea083.firebaseapp.com',
  projectId: 'agendamento-web-ea083',
  storageBucket: 'agendamento-web-ea083.appspot.com',
  messagingSenderId: '227455752712',
  appId: '1:227455752712:web:6b03c4cf23da9c14910fbd',
  measurementId: 'G-TEKG6V9T0W'
})

const auth = getAuth(app)

module.exports = {
  app,
  auth
}
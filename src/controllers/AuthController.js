const { signInWithEmailAndPassword, signInWithCustomToken } = require("firebase/auth")
const { auth } = require("../config/firebaseConfig")
const { adminAuth } = require("../config/firebaseAdminConfig")

async function authenticate(req) {
  const { email, password } = req?.body

  const result = await signInWithEmailAndPassword(auth, email, password)

  return result?.user
}

function getToken(uid, response) {
  const result = adminAuth
    .createCustomToken(uid)
    .then((token) => {
      response.json({ token: token })
    })
    .catch((error) => {
      response.status(500).json({ error: "Error during token creation" })
    })

  return result
}

module.exports = {
  token(req, res) {
    authenticate(req)
      .then(async (user) => {
        getToken(user.uid, res)
      })
      .catch((error) => {
        res.status(401).json({ error: "Invalid login or password" })
      })
  },

  login(req, res) {
    const { token } = req.body.data
    signInWithCustomToken(auth, token)
    .then(async (result) => {
      res.status(200).send("OK")
    })
    .catch((error) => {
      console.log("ERRO LOGIN", error);
      res.status(401).json({ error: "Invalid login token"})
    })
  },

  logout(req, res) {},
}

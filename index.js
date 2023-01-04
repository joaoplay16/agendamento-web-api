const app = require("./app")

require("dotenv").config()

const PORT = process.env.PORT || 8088

app.listen(PORT, () => {
  console.log(`The server is now running on Port ${PORT}`)
})

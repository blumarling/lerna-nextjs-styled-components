// server.js
const next = require("next")
const routes = require("./routes")
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

require("dotenv").config()

const app = next({ dev: process.env.NODE_ENV !== "production" })
const port = parseInt(process.env.PORT || 3000, 10)
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()
  server.use(handler).listen(port)
})

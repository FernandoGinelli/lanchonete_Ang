// src/server/index.ts

import express from "express"
import session from "cookie-session"
import { auth } from "./auth"
import { api } from "./api"
import helmet from "helmet"
import compression from "compression"
import path from "path"





const app = express()

app.use(
  session({
    secret: process.env["SESSION_SECRET"] || "my secret"
  })
)

app.use(helmet({ contentSecurityPolicy: false }))
app.use(compression())

app.use(api,auth)

app.use(express.static(path.join(__dirname, "../remult-angular-todo")))
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../remult-angular-todo", "index.html"))
})

app.listen(process.env["PORT"] || 3002, () => console.log("Server started"))









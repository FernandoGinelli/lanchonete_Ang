// src/server/index.ts

import express from "express"
import session from "cookie-session"
import { auth } from "./auth"
import { api } from "./api"






const app = express()
app.listen(3002, () => console.log("Server started"))

app.use(
  session({
    secret: process.env["SESSION_SECRET"] || "my secret"
  })
)
app.use(api,auth)









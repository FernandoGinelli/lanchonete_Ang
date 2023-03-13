// src/server/auth.ts

import express, { Router } from "express"
import { UserInfo } from "remult"

export const auth = Router()

auth.use(express.json())

const validUsers: UserInfo[] = [
  { id: "1", name: "Cozinheiro", roles: ["cozin"] },
  { id: "3", name: "Admin", roles: ["admin"] },
  { id: "2", name: "FiscalSelf", roles: ["fisSelf"]  }
]

auth.post("/api/signIn", (req, res) => {
  const user = validUsers.find(user => user.name === req.body.username)
  if (user) {
    req.session!["user"] = user
    res.json(user)
  } else {
    res.status(404).json("Invalid user")
  }
})

auth.post("/api/signOut", (req, res) => {
  req.session!["user"] = null
  res.json("signed out")
})

auth.get("/api/currentUser", (req, res) => res.json(req.session!["user"]))

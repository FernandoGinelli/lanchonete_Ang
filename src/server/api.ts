// src/server/api.ts

import { remultExpress } from "remult/remult-express"
import { Task } from "../shared/Task"
import { TasksController } from "../shared/TasksController"
import { createPostgresConnection } from "remult/postgres"
import { JsonDataProvider } from "remult"
import { JsonEntityFileStorage } from "remult/server"
import { Users } from "src/shared/Users"




export const api = remultExpress({
  entities: [Task,Users],
  controllers: [TasksController],
  getUser: req => req.session!["user"], dataProvider: async () =>
  new JsonDataProvider(new JsonEntityFileStorage("./db"))
})


const { Router } = require("express")

const usersRouter = require("./users.routes")
const notesRouter = require("./notes.routes")
const tagsRoutes = require("./tags.routes")
const sessionsRouter = require("./sessions.routes")


const routes = Router()
routes.use("/users", usersRouter)
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRoutes)
routes.use("/sessions", sessionsRouter)

module.exports = routes
const { Router } = require("express")
const ensureAuthenticated =require("../middlewares/ensureAuthenticated")


const NotesController = require("../controller/NotesController")


const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)

notesRoutes.post("/", notesController.create)
notesRoutes.delete("/:id", notesController.delete)
notesRoutes.get("/:id", notesController.show)
notesRoutes.get("/", notesController.index)

module.exports = notesRoutes 
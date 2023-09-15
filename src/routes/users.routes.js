const { Router } = require("express")
const ensureAuthenticated =require("../middlewares/ensureAuthenticated")
const uploadConfig = require("../config/upload")
const UsersController = require("../controller/UsersController")
const UserAvatarController = require("../controller/UserAvatarController")

const multer = require("multer")

const upload = multer(uploadConfig.MULTER)

const usersRoutes = Router()

const usersController = new UsersController()
const userAvatarController =  new UserAvatarController()

usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthenticated, usersController.update)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes 
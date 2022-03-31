const express = require("express")

const UsuariosController = require("../controllers/UsuariosController")

const router = express.Router()

router.get("/registrar", UsuariosController.showRegistrar)


module.exports = router
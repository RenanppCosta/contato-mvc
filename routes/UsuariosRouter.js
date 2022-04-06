const express = require("express")

const UsuariosController = require("../controllers/UsuariosController")

const router = express.Router()

router.get("/registrar", UsuariosController.showRegistrar)
router.post("/usuarios", UsuariosController.store)
router.get("/login", UsuariosController.mostrarLogin)
router.post("/login", UsuariosController.login)

module.exports = router
const express = require("express")
const verificaSeLogado = require("../middlewares/verificaSeLogado")
const UsuariosController = require("../controllers/UsuariosController")

const router = express.Router()

router.get("/registrar", UsuariosController.showRegistrar)
router.post("/registrar", UsuariosController.store)
router.get("/login", UsuariosController.mostrarLogin)
router.post("/login", UsuariosController.login)

module.exports = router
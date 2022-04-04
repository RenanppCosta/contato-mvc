const express = require("express");
const ContatosController = require("../controllers/ContatosController")
const verificaAdimplencia = require("../middlewares/verificaAdimplencia")
const router = express.Router();


router.get("/contatos", verificaAdimplencia, ContatosController.listarContatos);
router.get("/contatos/:id", verificaAdimplencia, ContatosController.capturarContato);


module.exports = router;
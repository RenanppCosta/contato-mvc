const express = require("express");
const ContatosController = require("../controllers/ContatosController")
const router = express.Router();


router.get("/contatos", ContatosController.listarContatos);
router.get("/contatos/:id", ContatosController.capturarContato);


module.exports = router;
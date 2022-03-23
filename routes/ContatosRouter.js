const express = require("express");

//importando ContatosController
const ContatosController = require("../controllers/ContatosController")

// criando um roteador
const router = express.Router();

// pedindo para roteador definir uma rota: (método: get, endereço: /contatos)
router.get("/contatos", ContatosController.listarContatos);

// exportando roteador
module.exports = router;
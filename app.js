// importando o express
const express = require("express");
const session = require("express-session")


//importando os roteadores
const ContatosRouter = require("./routes/ContatosRouter");
const UsuariosRouter = require("./routes/UsuariosRouter");

// importando os middlewares
const marcaEntradaDeRequisição = require("./middlewares/marcaEntradaDeRequisição");


// criando um servidor ou aplicação usando express
const app = express();

// Configurar seu EJS como seu template engine

app.set("view engine", "ejs");

// configurando o req.body para conter informações

app.use(express.urlencoded({extended: false}))

// configurando a pasta public para arquivos estáticos

app.use(express.static("public"))

// configurando o uso da session

app.use(session({
    secret:"segredo",
    resave: false,
    saveUninitialized: false
}))

//aplicando middlewares globais

app.use(marcaEntradaDeRequisição)

// criando rota get no endereço "/" para responder a requisição com um olá
app.get("/", (req, res) => {
  res.send("Olá");
});

// usando os roteadores
app.use("/", UsuariosRouter)
app.use("/", ContatosRouter);

// executar/rodar a aplicação
app.listen(3000, () => {
  console.log("Escutando na porta 3000");
});

// importando o express
const express = require("express");

//importando os roteadores
const ContatosRouter = require("./routes/ContatosRouter");
const UsuariosRouter = require("./routes/UsuariosRouter");

// criando um servidor ou aplicação usando express
const app = express();

// Configurar seu EJS como seu template engine

app.set("view engine", "ejs");

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

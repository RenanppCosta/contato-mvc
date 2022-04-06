const bcrypt = require("bcrypt");
const fs = require("fs");
const { dirname } = require("path");
const path = require("path");

module.exports ={
    showRegistrar: (req,res)=>{
        res.render("registro");
    },
    store: (req,res)=>{
        //capturando informaçõoes que o usuario digitou
        let {nome, email, senha} = (req.body);

        //importando array de usuario
        let usuarios = require("../database/usuarios.json");

        //determinando id novo do usuario
        let idNovo = usuarios[usuarios.length - 1].id + 1;
        
        //criar a senha criptografada
        let senhaCriptografada = bcrypt.hashSync(senha, 10);

        // criar um objeto com os dados do usuario
        let usuario = {
            "id": idNovo,
            "nome": nome,
            "email": email,
            "senha": senhaCriptografada,
            "adimplente": true,
        };

        // adicionar o novo usuario a este array
        usuarios.push(usuario);

        //salvar este array no arquivo usuario.json
        fs.writeFileSync(path.join(__dirname,"/../database/usuarios.json"), JSON.stringify(usuarios, null, 4));

        res.redirect("/contatos");
    },
    mostrarLogin: (req,res)=>{
        res.render("login");
    },
    login: (req, res)=>{
        // pegar o email e senha digitados pelo usuario
        let {email, senha} = req.body;

        // carregar o array de usuarios
        const usuarios = require("../database/usuarios.json");

        // verficiar se o email existe e se a senha do email esta certa
        usuarios.find(
            u => (u.email == email && bcrypt.compareSync(senha, u.senha))
        )

           //if(usuario == undefined){
               //res.send("Erro! Usuário não encontrado.")
           //}else{
              // req.session.usuario = usuario
              // res.redirect("/contatos")
          // }
        ;

    }
}
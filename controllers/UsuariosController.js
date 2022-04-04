const bcrypt = require("bcrypt")
const fs = require("fs")
const { dirname } = require("path")
const path = require("path")

module.exports ={
    showRegistrar: (req,res)=>{
        res.render("registro")
    },
    store: (req,res)=>{
        //capturando informaçõoes que o usuario digitou
        let {nome, email, senha} = (req.body)

        //importando array de usuario
        let usuarios = require("../database/usuarios.json")

        //determinando id novo do usuario
        let idNovo = usuarios[usuarios.length - 1].id + 1
        
        //criar a senha criptografada
        let senhaCriptografada = bcrypt.hashSync(senha, 10)

        // criar um objeto com os dados do usuario
        let usuario = {
            "id": idNovo,
            "nome": nome,
            "email": email,
            "senha": senhaCriptografada,
        }

        // adicionar o novo usuario a este array
        usuarios.push(usuario)

        //salvar este array no arquivo usuario.json
        fs.writeFileSync(path.join(__dirname,"/../database/usuarios.json"), JSON.stringify(usuarios, null, 4))

        res.redirect("/contatos")
    }
}
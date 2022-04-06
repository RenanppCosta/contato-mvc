// supondo que o usuario é o uid=1

let uid = 1

module.exports = (req, res, next) =>{

    // importa os usuarios
    const usuarios = require("../database/usuarios.json")

    // capturar o usuario de id==req.usuario.id
    const usuario = usuarios.find( u => u.id == req.usuario.id)

    //verificar se o usuario é adimplente
    if(usuario.adimplente){
         // caso for adimplente: continue
         next()
    }else{
         // caso contrario, enviar msg
         res.send("Entrar em contato com o nosso financeiro, por favor!")
    } 

    
    
}
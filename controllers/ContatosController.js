const req = require("express/lib/request")
const res = require("express/lib/response")


module.exports = {

    listarContatos: (req, res)=>{
        let contatos = require(`../database/contatos_${req.usuario.id}.json`);
        res.render("home.ejs",{contatos})
    },
    
    capturarContato:(req, res)=>{
        let contatos = require(`../database/contatos_${req.usuario.id}.json`);
        let idDoContato = req.params.id;
        let contato = contatos.find(
            (c) =>{
                return c.id == idDoContato;
            }
        );
        
        if(!contato){
            res.send("Contato inexistente")
        }else{
            res.send(contato)
        }

    }
} 


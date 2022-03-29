const req = require("express/lib/request")
const res = require("express/lib/response")
const uid = 1;

module.exports = {

    listarContatos: (req, res)=>{
        let contatos = require(`../database/contatos_${uid}.json`);
        res.render("home.ejs",{contatos:contatos})
    },
    
    capturarContato:(req, res)=>{
        let contatos = require(`../database/contatos_${uid}.json`);
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


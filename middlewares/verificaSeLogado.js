const verificaSeLogado = (req, res, next)=>{
    // verificar se session.usuario existe
    if(req.session.usuario == undefined){
        res.redirect("/login")
    }else{
        //pendurar informações do usuario na requisição
        req.usuario = req.session.usuario

        // proximo middleware ou controller
        next()
    }
}

module.exports = verificaSeLogado



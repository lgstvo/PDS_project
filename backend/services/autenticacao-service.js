const jwttoken = require('jsonwebtoken')

exports.autenticar = (req, res, next) => {
    try{
        const decoded = jwttoken.verify(req.body.token, process.env.JWT_TOKEN)
        req.userData = decoded
    }catch(error){
        return res.status(401).json({
            message: 'Token sem permissao'
        })
    }
    next()
}
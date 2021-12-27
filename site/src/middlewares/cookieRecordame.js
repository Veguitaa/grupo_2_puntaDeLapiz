const usuariosRegistrados = require('../data/usersDataBase.json')

module.exports = (req, res, next) => {
    if (req.cookies.recordarme !== undefined && req.session.usuarioLogueado === undefined) {
        req.session.usuarioLogueado = usuariosRegistrados.find(usuario => usuario.email === req.cookies.recordarme)
    }
    next()
}
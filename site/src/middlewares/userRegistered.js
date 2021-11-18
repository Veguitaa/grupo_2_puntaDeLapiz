const users = require('../data/usersDataBase.json')

module.exports = (req, res, next) => {
    
    const user = users.find(user => user.user_name.toLowerCase().trim() === req.query.user_name.toLowerCase().trim())

    if (user) {
        next()
    } else {
        res.render('users/login')
    }
}
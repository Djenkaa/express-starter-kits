const AuthController = require('../controllers/AuthController');
const authMiddleware = require('../middleware/authUser');


module.exports = (router, passport) => {

    router.get('/login', authMiddleware, AuthController.loginView);

    router.post('/login/user', 
    passport.authenticate('login', { successRedirect: '/home',failureRedirect: '/auth/login',failureFlash: true }));

    return router;

}
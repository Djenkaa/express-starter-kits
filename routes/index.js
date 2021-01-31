

module.exports = (express, passport)=>{

    const router = express.Router();

    // Routets

    const main = require('./main')(router, passport);
    router.use('/home', main);

    const auth = require('./auth')(router, passport);
    router.use('/auth', auth);


    return router;
}
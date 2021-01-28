

module.exports = (express, passport)=>{

    const router = express.Router();

    // Routets

    const main = require('./main')(router, passport);
    router.use('/', main);


    return router
}
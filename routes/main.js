const MainController = require('../controllers/MainController');


module.exports = (router, passport)=>{

    const authUser = require('../middleware/authUser')(passport);

    // GET home page
    router.get('/home', authUser, MainController.home);

    // POST data
    router.post('/data/:id', MainController.data);

    return router;
}
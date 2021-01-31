const MainController = require('../controllers/MainController');
const authMiddleware = require('../middleware/authUser');


module.exports = (router, passport)=>{

    // GET home page
    router.get('/', authMiddleware, MainController.home);

    // GET about page
    router.get('/about', MainController.about);

    // POST data
    router.post('/data/:id', authMiddleware, MainController.data);

    return router;
}
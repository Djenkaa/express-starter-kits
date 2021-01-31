module.exports = (req, res, next)=>{

    const authRoutes = ['/login', '/register'];

    if(req.isAuthenticated()){

        if(authRoutes.includes(req.url)){
          
           return res.redirect('/home');
        }else{

            return next();
        }
    }
    res.redirect('/auth/login');
}
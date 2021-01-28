const localStrategy = require('passport-local').Strategy;

var user = {
    id: 1,
    name: 'Mihajlo',
    lastName: 'Crnobrnja',
    age: 24,
    email: 'mihajlosmex@gmail.com'
}

module.exports = (passport)=>{

    passport.use(new localStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }), 
    (email, password, done)=>{

        if(user.email === email){

            return done(null, user);
        }else{

            return done(null, false, {message: 'There is no such user in database!'});
        }

    });

    passport.serializeUser((user, done) => {

        done(null,user.id);
      });
      
    passport.deserializeUser((userId, done) => {
        
        done(null, user);
      });
      
    
    return (req, res, next)=>{

        passport.authenticate('local', (err, user, info)=>{

            if(err){

                return next(err);
            }
            if (!user) {

                return res.json({status: 'error', message: info.message});
              }else{
                
                req.user = user;
                return next();
              }
            
              return res.json({status: 'Access Denied!'});

        })(req, res, next);
    }
}
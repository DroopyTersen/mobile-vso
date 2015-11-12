 var LocalStrategy = require("passport-local");
 
 var setupPassport = function(passport) {

     passport.serializeUser((user, done) => done(null, user.authHash));

     passport.deserializeUser(function(authHash, done) {
         done(null, { authHash });
     });

    var authHashCreator = (user, pwd, done) => {
        var authHash = new Buffer(user + ":" + pwd).toString('base64');
        return done(null, { authHash })
    }
    
    passport.use(new LocalStrategy(authHashCreator))
 };

module.exports = setupPassport;
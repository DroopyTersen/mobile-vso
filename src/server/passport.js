 var LocalStrategy = require("passport-local");
 var vsoFactory = require('../../droopy-vso');

 var setupPassport = function(passport) {

     passport.serializeUser((user, done) => done(null, user.authHash));

     passport.deserializeUser(function(authHash, done) {
         done(null, { authHash });
     });

    var authHashCreator = (user, pwd, done) => {
        var authHash = new Buffer(user + ":" + pwd).toString('base64');
        vsoFactory.create(authHash).projects()
        	.then(projects => {
                return (projects && projects.value) ? done(null, { authHash }) : done(null, false);
            })
        	.catch(error => {
                if (error.statusCode === 401) {
                    //Valid user but invalid pwd
                    return done(null, false);
                }
                return done(error, false);
            })
        
    }
    
    passport.use(new LocalStrategy(authHashCreator))
 };

module.exports = setupPassport;
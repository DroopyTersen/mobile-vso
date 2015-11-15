var { indexPage, loginPage } = require('./reactPages');
var api = require('./api');
var createRoutes = function(app, passport) {

    // React server side rendered pages
    app.get("/", indexPage);
    app.get("/login", loginPage);
    
    var passportOptions = { 
        successRedirect: "/", 
        failureRedirect: "/login?failed=true"
    };
    app.post('/login', passport.authenticate('local', passportOptions));
    
    app.get("/signout", (req, res) => {
        req.logout();
        res.redirect("/login");
    });
    
    app.get("/api/mytasks", (req, res) => {
        api.getMyTasks(authHash)
        //api.getMyTasks(req.user.authHash)
            .then(tasks => res.send(tasks) )
            .catch(error => res.send(errror))
    });
    // Middle ware to enforce signin
    function authorize(req, res, next) {
        return req.isAuthenticated() ? next() : res.redirect("/login");
    } 
    
    var authHash = new Buffer("DroopyTersen:Rival5sof").toString('base64');
}

module.exports = createRoutes;

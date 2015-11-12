var reactPages = require('./reactPages');

var createRoutes = function(app, passport) {
    
    app.get("/", authorize, function(req, res) {
        res.sendFile(__dirname + '/src/pages/index.html')
    })
    
        
    app.get("/login", reactPages.login);
    
    var redirects = { successRedirect: "/", failureRedirect: "/login" }
    app.post('/login', passport.authenticate('local', redirects));
    
    app.get("/signout", (req, res) => {
        req.logout();
        res.redirect("/login");
    });
    
    
    function authorize(req, res, next) {
        return req.isAuthenticated() ? next() : res.redirect("/login");
    }
}

module.exports = createRoutes;

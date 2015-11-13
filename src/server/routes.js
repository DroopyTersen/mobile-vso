var { indexPage, loginPage } = require('./reactPages');

var createRoutes = function(app, passport) {
    
    // React server side rendered pages
    app.get("/", authorize, indexPage)
    app.get("/login", loginPage);
    
    var redirects = { successRedirect: "/", failureRedirect: "/login" }
    app.post('/login', passport.authenticate('local', redirects));
    
    app.get("/signout", (req, res) => {
        req.logout();
        res.redirect("/login");
    });
    
    // Middle ware to enforce signin
    function authorize(req, res, next) {
        return req.isAuthenticated() ? next() : res.redirect("/login");
    } 
}

module.exports = createRoutes;

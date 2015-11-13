var { indexPage, loginPage } = require('./reactPages');
var vsoContextFactory = require("../../droopy-vso");

var createRoutes = function(app, passport) {
    var vsoHost = "skyline.visualstudio.com";
    var vso = vsoContextFactory.create(vsoHost);
    // React server side rendered pages
    app.get("/", authorize, indexPage)
    app.get("/login", loginPage);
    
    var passportOptions = { 
        successRedirect: "/", 
        failureRedirect: "/login?failed=true",
        successFlash: "You're in!",
        failureFlash: "No soup for you!" 
    };
    
    app.post('/login', passport.authenticate('local', passportOptions));
    
    app.get("/signout", (req, res) => {
        req.logout();
        res.redirect("/login");
    });
    
    app.get("/api/mytasks", authorize, (req, res) => {
        vso.setAuthHash(req.user.authHash);
        vso.projects()
            .then(items => res.send(items))
            .catch(error => res.send(error))
    })
    // Middle ware to enforce signin
    function authorize(req, res, next) {
        return req.isAuthenticated() ? next() : res.redirect("/login");
    } 
}

module.exports = createRoutes;

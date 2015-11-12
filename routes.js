var createRoutes = function(app, passport) {
    
    app.get("/", function(req, res) {
        res.sendFile(__dirname + '/client/index.html')
    })
    
    app.get("/signout", (req, res) => {
        req.logout();
        res.redirect("/login");
    });
    
    var authorize = function(req, res, next) {
        if (req.isAuthenticated()) return next(req, res);
        
        res.redirect("/login")
    }
}

module.exports = createRoutes;

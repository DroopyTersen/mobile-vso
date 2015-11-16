var { indexPage, loginPage } = require('./reactPages');
var api = require('./api');
var createRoutes = function(app, passport) {

    // React server side rendered pages
    app.get("/", authorize, indexPage);
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
        //api.getMyTasks(authHash)
        api.getMyTasks(req.user.authHash)
            .then(tasks => res.send(tasks) )
            .catch(err => res.send(err))
    });

    app.get("/api/myrecentdone", (req, res) => {
        //api.getMyRecentDone(authHash)
        api.getMyRecentDone(req.user.authHash)
            .then(tasks => res.send(tasks) )
            .catch(err => res.send(err))
    });

    app.get("/api/tasks/:id/setState/:state", (req, res) => {
        api.setTaskState(authHash, req.params.id, req.params.state)
        //api.setTaskState(req.user.authHash, req.params.id, req.params.state)
            .then(apiRes => res.send(apiRes))
            .catch(err => res.send(err))
    });
    // Middle ware to enforce signin
    function authorize(req, res, next) {
        return req.isAuthenticated() ? next() : res.redirect("/login");
    } 
    
    var authHash = new Buffer("DroopyTersen:Rival5sof").toString('base64');
}

module.exports = createRoutes;

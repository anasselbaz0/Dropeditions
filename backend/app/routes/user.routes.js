const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/content/all", controller.allAccess);

    app.get("/api/content/private1", [authJwt.verifyToken], controller.private1Board);

    // app.get(
    //     "/api/content/private1",
    //     [authJwt.verifyToken, authJwt.isPrivate1],
    //     controller.private1Board()
    // );
    //
    // app.get(
    //     "/api/content/private2",
    //     [authJwt.verifyToken, authJwt.isPrivate2],
    //     controller.private2Board()
    // );
    //
    // app.get(
    //     "/api/content/private3",
    //     [authJwt.verifyToken, authJwt.isPrivate3],
    //     controller.private3Board()
    // );

};

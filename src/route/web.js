import express from "express";
import homeControllers from "../controllers/homeControllers";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeControllers.getHomePage);
    router.get('/about', homeControllers.getAboutPage);

    router.get('/dunntapcode', (req, res) => {
        return res.send("Hello World with DunnTapCode hehehe")
    });

    // rest api 


    return app.use("/", router);
}

module.exports = initWebRoutes;
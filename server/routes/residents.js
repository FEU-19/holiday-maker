const router = require("express").Router();
const controllers = require("../controllers/residents");
const residentControllers = require("../controllers/residents");

router.post("/residents/", controllers.create);
router.get("/residents/", controllers.read);
router.get("/resident/:id", residentControllers.read);

module.exports = router;

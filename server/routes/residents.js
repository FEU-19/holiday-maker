const router = require("express").Router();
const controllers = require("../controllers/residents");

router.post("/residents/", controllers.create);
router.get("/residents/", controllers.read);
router.get("/residents/:id", controllers.readOne);

module.exports = router;

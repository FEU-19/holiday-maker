const router = require("express").Router();
const controllers = require("../controllers/orders");

router.post("/residents/", controllers.create);
router.get("/residents/", controllers.read);

module.exports = router;

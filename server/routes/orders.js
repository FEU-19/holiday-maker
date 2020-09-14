const router = require("express").Router();
const controllers = require("../controllers/orders");

router.post("/orders/", controllers.create);
router.get("/orders/", controllers.read);

module.exports = router;

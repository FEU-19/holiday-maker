const router = require("express").Router();
const controllers = require("../controllers/orders");
const auth = require("../middleware/auth");

router.post("/orders/", auth, controllers.create);
router.get("/orders/", auth, controllers.read);

module.exports = router;

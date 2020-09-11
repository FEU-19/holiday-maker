const router = require("express").Router();
const controllers = require("../controllers/myBookings");
const auth = require("../middleware/auth");

router.delete("/myBooking/:orderId", auth, controllers.deleteBooking);
router.put("/myBooking/:orderId", auth, controllers.changeBooking);

module.exports = router;
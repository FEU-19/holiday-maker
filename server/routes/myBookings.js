const router = require("express").Router();
const controllers = require("../controllers/myBookings");
const auth = require("../middleware/auth");

router.delete("/myBooking/:orderId", controllers.deleteBooking);
router.put("/myBooking/:orderId", controllers.changeBooking);

module.exports = router;

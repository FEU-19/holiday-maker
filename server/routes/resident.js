const router = require("express").Router();
const controllers = require("../controllers/resident");

router.get("resident/:id", controllers.read);

module.exports = router;

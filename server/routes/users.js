const router = require("express").Router();
const controllers = require("../controllers/users");

router.post("/users/", controllers.create);
router.get("/users/", controllers.read);

module.exports = router;
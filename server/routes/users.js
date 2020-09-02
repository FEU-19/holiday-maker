const router = require("express").Router();
const controllers = require("../controllers/users");

router.post("/register/", controllers.create);
router.get("/users/", controllers.read);

module.exports = router;
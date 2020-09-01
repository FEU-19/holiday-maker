const router = require("express").Router();
const controllers = require("../controllers/users");

router.post("/register/", controllers.create);
router.post("/login", controllers.createLogin);
router.get("/users/", controllers.read);

module.exports = router;
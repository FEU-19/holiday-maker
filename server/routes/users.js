const router = require("express").Router();
const controllers = require("../controllers/users");
const auth = require("../middleware/auth");

router.post("/register/", controllers.create);
router.post("/login/", controllers.createLogin);
router.delete("/logout/", controllers.deleteLogout);
router.get("/users/", auth, controllers.read);

module.exports = router;

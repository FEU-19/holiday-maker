const router = require("express").Router();
const controllers = require("../controllers/residences");

router.post("/residences/", controllers.create);
router.get("/residences/", controllers.read);
router.get("/residences/:id", controllers.readOne);

module.exports = router;

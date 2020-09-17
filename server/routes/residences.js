const router = require("express").Router();
const controllers = require("../controllers/residences");

router.post("/residences/", controllers.create);
router.get("/residences/", controllers.read);
router.get("/residences/:id", controllers.readOne);
router.post("/residences/:id/user", controllers.addFavourite)
router.delete("/residences/:id/user", controllers.deleteFavourite)
router.get("/residences/:id/user", controllers.getStar)

module.exports = router;

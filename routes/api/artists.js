const router = require("express").Router();
const artistsController = require("../../controllers/artistsController");
const uploadFile = require('../../upload')

// Matches with "/api/artists"
router.route("/")
  .get(artistsController.findAll)
  .post(artistsController.create);

// Matches with "/api/artists/:id"
router
  .route("/:id")
  .get(artistsController.findById)
  .put(artistsController.update)
  .delete(artistsController.remove);

// Matches with "/api/artists/art/:id"
router
  .route("/art/:id", uploadFile.single('art_filename'))
  .post(artistsController.addArtById)

module.exports = router;
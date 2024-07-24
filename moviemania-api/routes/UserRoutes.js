
//imports three functions from the UserController module:

const {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedMovies,
} = require("../cotrollers/UserController");

//Creating an Express router
const router = require("express").Router();


//Defining routes
router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikedMovies);
router.put("/delete",removeFromLikedMovies);


//Exporting the router
module.exports = router;

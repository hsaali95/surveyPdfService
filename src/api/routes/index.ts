var router = require("express").Router();

// Insert routes below
router.use("/survey", require("./survey-pdf"));

module.exports = router;

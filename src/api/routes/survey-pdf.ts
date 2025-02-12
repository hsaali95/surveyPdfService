var router = require("express").Router();
const surveyController = require("../controllers/survey-pdf");
router.get("/survey-pdf", surveyController.generateSurveyPdf);
module.exports = router;

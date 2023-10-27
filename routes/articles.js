const express = require("express")
const router = express.Router()
const ArticleController = require('../controllers/Article')

router.post("/save", ArticleController.save)


module.exports = router
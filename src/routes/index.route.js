const { Router } = require("express");
const router = Router();
const { getUrl, postUrl } = require("../controllers/index.controller");

router.get("/longUrl", postUrl);
router.post("/longUrl", postUrl);
router.get("/:shortUrl", getUrl);

module.exports = router;

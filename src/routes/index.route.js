const { Router } = require("express");
const router = Router();
const { getUrl, postUrl } = require("../controllers/index.controller");

router.get("/", postUrl);
router.post("/", postUrl);
router.get("/:shortUrl", getUrl);

module.exports = router;

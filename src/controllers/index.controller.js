const Io = require("../utils/io");
const urlsDB = new Io(`${process.cwd()}/database/urls.json`);
const config = require("../../config/index");

const PORT = config.port;
const postUrl = async (req, res) => {
  const urlDatabase = await urlsDB.read();
  const longUrl = req.body.longUrl;
  const shortUrl = Math.random().toString(36).substring(2, 8);

  urlDatabase[shortUrl] = longUrl;
  urlDatabase.push({ shortUrl, longUrl });
  await urlsDB.write(urlDatabase);
  res.render("index", {
    shortUrl: `https://urlshortener.uz/${shortUrl}`,
    longUrl,
  });
};

const getUrl = async (req, res) => {
  const urlDatabase = await urlsDB.read();
  const shortUrl = req.params.shortUrl;
  longUrl = urlDatabase.find((url) => url.shortUrl === shortUrl);
  longUrl = longUrl?.longUrl;
  console.log(longUrl);
  if (longUrl) {
    console.log(longUrl, "bu1 long url");
    res.redirect(longUrl);
  } else {
    res.status(404).send("URL not found err");
  }
};

module.exports = {
  postUrl,
  getUrl,
};

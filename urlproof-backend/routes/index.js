var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer')

/* GET home page. */
router.get('/:url', async function (req, res, next) {

  try {
    const url = req.params.url;
    console.log(req.params.url);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https:' + url);
    await page.waitForTimeout({ milliseconds: 1000 });
    await page.viewport({
      width: 700,
      height: 2000,
      deviceScaleFactor: 1
    })
    console.log(page.url());
    buffer = await page.screenshot({ path: `screenshot.png` });
    return res.json(buffer)
    // ${Date.now()}
    console.log(buffer);
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;

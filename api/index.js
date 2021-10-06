const puppeteer = require("puppeteer");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = "https://www.nytimes.com/section/world";

  await page.goto(url);

  // looking for combined elements
  const nytOutput = await page.evaluate(() =>
    Array.from(document.querySelectorAll("article")).map(d => ({
      title: d.querySelector("h2, css-byk1jx").innerText.trim(),
      pic: d.querySelector("img").src,
      link: d.querySelector("a").href
    }))
  );

  // api endpoint fro the NYT
  app.get("/nytglobal", (req, res) => {
    res.send({ nytOutput });
  });

  await browser.close();
})();

module.exports = {
  path: "/api",
  handler: app
};

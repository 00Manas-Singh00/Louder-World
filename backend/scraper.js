import puppeteer from "puppeteer";
import Event from "./models/Event.js";

async function scrapeEvents() {
  const browser = await puppeteer.launch({ headless: true }); // Launch browser in headless mode
  const page = await browser.newPage();
  await page.goto("https://www.eventfinda.com.au/", { waitUntil: "load" });

  const events = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".card.h-event.h-card")).map(
      (event) => ({
        title:
          event
            .querySelector(".card-title.p-summary.p-name")
            ?.innerText.trim() || "No Title",
        date:
          event.querySelector(".card-text.meta-date")?.innerText.trim() ||
          "No Date",
        location:
          event
            .querySelector(
              ".card-text.meta-location.location.vcard.p-location.h-adr"
            )
            ?.innerText.trim() || "No Location",
        image:
          event.querySelector(".card-img-top.lazyloaded")?.src || "No Image",
        link: event.querySelector("a.card-image")?.href || "No Link",
      })
    );
  });

  // Clear previous events and insert new ones
  await Event.deleteMany();
  await Event.insertMany(events);

  console.log("Scraping completed. Events stored in database.");

  await browser.close();
}

export default scrapeEvents;

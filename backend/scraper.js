import puppeteer from "puppeteer";
import Event from "./models/Event.js";

async function scrapeEvents() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.eventbrite.com.au/d/australia--sydney/all-events/"
  ); // Scraping Sydney events

  const events = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll(".search-event-card-wrapper")
    ).map((event) => ({
      title: event.querySelector(".eds-event-card-content__primary-content")
        ?.innerText,
      date: event.querySelector(".eds-text-bs")?.innerText,
      link: event.querySelector("a")?.href,
    }));
  });

  // Clear previous events and insert new ones
  await Event.deleteMany();
  await Event.insertMany(events);
  await browser.close();
}

export default scrapeEvents;

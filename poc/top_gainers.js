import puppeteer from "puppeteer";

async function fetchTopGainers() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(
    "https://www.goodreturns.in/gainers-losers/groupwise/nse-all.html",
    {
      waitUntil: "networkidle2",
    }
  );

  // Wait for the table to load
  await page.waitForSelector("table");

  // Extract the data
  const gainers = await page.evaluate(() => {
    const rows = document.querySelectorAll("table tbody tr");
    const gainersData = [];

    rows.forEach((row) => {
      const columns = row.querySelectorAll("td");
      if (columns.length > 1) {
        gainersData.push({
          rank: columns[0].textContent.trim(),
          company: columns[1].textContent.trim(),
          currentPrice: columns[2].textContent.trim(),
          change: columns[3].textContent.trim(),
          changePercent: columns[4].textContent.trim(),
        });
      }
    });

    return gainersData;
  });

  await browser.close();

  console.log("Top Gainers on NSE:");
  gainers.forEach((gainer, index) => {
    console.log(
      `${index + 1}. ${gainer.company} - ${gainer.currentPrice} (Change: ${
        gainer.change
      }, ${gainer.changePercent})`
    );
  });
}

fetchTopGainers();

import express from "express";
import cors from "cors";
import nseIndia from "stock-nse-india"; // Ensure the correct import
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/api/stock-symbols", async (req, res) => {
  const nse = new nseIndia(); // Ensure correct initialization
  try {
    const symbols = await nse.getAllStockSymbols();
    res.json(symbols);
  } catch (error) {
    console.error("Error fetching stock symbols:", error); // Log the error
    res.status(500).json({ error: error.toString() });
  }
});

app.use(express.static(`${__dirname}/dist`));

app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port, () => {
  console.log(`Your node.js server is running on port ${port}`);
});

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/scrape', async (req, res) => {
  const { url } = req.query;

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const title = $('h1#title').text().trim();
    const description = $('meta[name="description"]').attr('content');
    let price = $('span#priceblock_ourprice').text().trim() ||
                $('span#priceblock_dealprice').text().trim() ||
                $('span.a-price .a-offscreen').first().text().trim() ||
                $('span.a-price-whole').first().text().trim();

    if (!price) {
      const priceWhole = $('span.a-price-whole').first().text().trim();
      const priceFraction = $('span.a-price-fraction').first().text().trim();
      price = `${priceWhole}.${priceFraction}`;
    }

    const image = $('#imgTagWrapperId img').attr('src') ||
                  $('#landingImage').attr('src');

    res.json({ title, description, price, image });
  } catch (error) {
    console.error('Error scraping data:', error);
    res.status(500).json({ error: 'Failed to scrape data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Data for crop recommendations based on temperature
const cropData = [
  {
    condition: (temp) => temp > 28,
    crops: [
      {
        crop: 'Rice',
        water: '5-6 liters per sq.m daily',
        fertilizer: 'Nitrogen-rich fertilizer every 2 weeks',
      },
      {
        crop: 'Sugarcane',
        water: '7-8 liters per sq.m daily',
        fertilizer: 'Organic compost and nitrogen monthly',
      },
      {
        crop: 'Cotton',
        water: '4-5 liters per sq.m every 2 days',
        fertilizer: 'Balanced NPK fertilizer every 3 weeks',
      },
    ],
  },
  {
    condition: (temp) => temp > 20,
    crops: [
      {
        crop: 'Wheat',
        water: '3-4 liters per sq.m every 2 days',
        fertilizer: 'Phosphorus fertilizer monthly',
      },
      {
        crop: 'Maize',
        water: '4-5 liters per sq.m every 2 days',
        fertilizer: 'Nitrogen-rich fertilizer every 20 days',
      },
      {
        crop: 'Soybean',
        water: '3-4 liters per sq.m every 3 days',
        fertilizer: 'Potassium and phosphorus fertilizer monthly',
      },
    ],
  },
];

const defaultCrops = [
  { crop: 'Barley', water: '2-3 liters per sq.m every 3 days', fertilizer: 'Potassium fertilizer once a month' },
  { crop: 'Millet', water: '2 liters per sq.m every 3 days', fertilizer: 'Light nitrogen fertilizer every 3 weeks' },
];

app.post('/api/get-advice', async (req, res) => {
  const { lat, lon } = req.body;
  try {
    const weatherRes = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );

    const temp = weatherRes.data.current_weather.temperature;

    const recommendation = cropData.find(item => item.condition(temp));
    const crops = recommendation ? recommendation.crops : defaultCrops;

    res.json({ crops });
  } catch (e) {
    console.error('Error fetching weather or getting advice:', e.message);
    if (e.response) {
      console.error('Error response data:', e.response.data);
      console.error('Error response status:', e.response.status);
    }
    res.status(500).json({ error: 'Failed to fetch weather' });
  }
});

app.post('/api/save-user', (req, res) => {
  const { name } = req.body;

  if (!name || name.trim() === '') {
    return res.status(400).send('Username cannot be empty.');
  }

  console.log(`Received user: '${name}'. No database configured, skipping save.`);
  res.status(200).send('User received successfully.');
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

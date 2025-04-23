const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

const TELEGRAM_BOT_TOKEN = process.env.7737823151:AAGcJ3Naf88cmLqJEUMAu8UDaFRHrnHAF8U;
const CHAT_ID = process.env.6691011876;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/send', async (req, res) => {
  const { text } = req.body;
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${7737823151:AAGcJ3Naf88cmLqJEUMAu8UDaFRHrnHAF8U}/sendMessage`,
      {
        chat_id: 6691011876,
        text: text,
      }
    );
    res.status(200).json({ ok: true, result: response.data });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy funcionando en puerto ${port}`);
});

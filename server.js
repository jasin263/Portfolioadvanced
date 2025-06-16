import express from 'express';
import axios from 'axios';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  // Replace with your Slack or Discord webhook URL
  const webhookUrl = 'https://discordapp.com/api/webhooks/1384211662977896608/YG4gjryNF6kHtTu-PoTrHn3KRFGpLMy84B5y30bXHy-prSLukQ8VQwCrA7oTJy_7B7Gg';

  // Discord webhook expects content field instead of text
  const payload = {
    content: `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  try {
    await axios.post(webhookUrl, payload);
    res.json({ message: 'Notification sent successfully.' });
  } catch (error) {
    console.error('Error sending notification:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to send notification.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

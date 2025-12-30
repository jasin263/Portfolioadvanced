import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  const webhookUrl = 'https://discordapp.com/api/webhooks/1384211662977896608/YG4gjryNF6kHtTu-PoTrHn3KRFGpLMy84B5y30bXHy-prSLukQ8VQwCrA7oTJy_7B7Gg';

  const payload = {
    content: `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  try {
    await axios.post(webhookUrl, payload);
    res.status(200).json({ message: 'Notification sent successfully.' });
  } catch (error) {
    console.error('Error sending notification:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to send notification.', details: error.response ? error.response.data : error.message });
  }
}

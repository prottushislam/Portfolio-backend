const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio API is running!' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp-relay.brevo.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'prottushislam17@gmail.com',
      subject: '[Portfolio] ' + subject,
      html: '<h3>New message from ' + name + '</h3><p><b>Email:</b> ' + email + '</p><p><b>Message:</b> ' + message + '</p>'
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Got your message, ' + name + '!',
      html: '<h3>Hey ' + name + '!</h3><p>Thanks for reaching out. I will reply within 24-48 hours.</p><p><b>Your message:</b> ' + message + '</p><br><p>— Prottush Islam</p>'
    });

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to send email. Error: ' + error.message });
  }
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

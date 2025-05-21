const express = require('express');
const app = express();
app.use(express.json());

let payments = [
  { id: 1, amount: 250, recipient: 'John Doe', date: '2025-05-20' },
  { id: 2, amount: 100, recipient: 'Jane Smith', date: '2025-05-21' }
];

app.get('/api/payments', (req, res) => {
  res.json(payments);
});

app.post('/api/payments', (req, res) => {
  const { amount, recipient } = req.body;
  const newPayment = { id: payments.length + 1, amount, recipient, date: new Date().toISOString() };
  payments.push(newPayment);
  res.status(201).json(newPayment);
});

app.listen(5000, () => console.log('Backend running on port 5000'));

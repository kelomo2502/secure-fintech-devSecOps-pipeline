const express = require('express');
const router = express.Router();

let payments = [
  { id: 1, amount: 250, recipient: 'John Doe', date: '2025-05-20' },
  { id: 2, amount: 100, recipient: 'Jane Smith', date: '2025-05-21' }
];

// GET all payments
router.get('/', (req, res) => {
  res.json(payments);
});

// POST a new payment
router.post('/', (req, res) => {
  const { amount, recipient } = req.body;
  const newPayment = {
    id: payments.length + 1,
    amount,
    recipient,
    date: new Date().toISOString()
  };
  payments.push(newPayment);
  res.status(201).json(newPayment);
});

module.exports = router;

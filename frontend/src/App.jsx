
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [payments, setPayments] = useState([]);
  const [form, setForm] = useState({ recipient: '', amount: '' });

  // Fetch all payments on load
  useEffect(() => {
    axios.get('http://localhost:5001/api/payments')
      .then(res => setPayments(res.data))
      .catch(err => console.error('Error fetching payments:', err));
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/payments', form);
      setPayments(prev => [...prev, res.data]); // update the UI
      setForm({ recipient: '', amount: '' });
    } catch (err) {
      console.error('Error submitting payment:', err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">PayTrack - FinTech Dashboard</h1>

      {/* Payment Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Recipient</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3"
            value={form.recipient}
            onChange={(e) => setForm({ ...form, recipient: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
          <input
            type="number"
            className="shadow border rounded w-full py-2 px-3"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Payment
        </button>
      </form>

      {/* Payments List */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-xl font-semibold mb-4">Payment History</h2>
        {payments.length === 0 ? (
          <p className="text-gray-500">No payments yet.</p>
        ) : (
          <ul className="space-y-2">
            {payments.map((payment) => (
              <li
                key={payment.id}
                className="border-b pb-2 text-gray-700"
              >
                💸 <strong>{payment.recipient}</strong> - ${payment.amount} on {new Date(payment.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;

const express = require('express');
const app = express();
const cors = require('cors')
const paymentRoutes = require('./routes/payments');

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.get('/', (req,res)=>{
    res.send('<h1>Welcome to PayTrack API</h1>');
})
app.use('/api/payments', paymentRoutes);

app.listen(5001, () => console.log('Backend running on port 5001'));

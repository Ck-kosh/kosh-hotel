import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { amount, service } = req.body;
    if (!amount) return res.status(400).json({ error: 'Missing amount' });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: service || 'Kosh Hotel Service' },
            unit_amount: Math.round(Number(amount) * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${CLIENT_URL}/?payment=success`,
      cancel_url: `${CLIENT_URL}/?payment=cancelled`,
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/mobile-pay', async (req, res) => {
  const { amount, phoneNumber, method } = req.body;
  if (!amount || !phoneNumber) return res.status(400).json({ error: 'Missing amount or phone' });

  // Simulate a mobile money charge (replace with real provider integration)
  console.log(`Simulating ${method} charge of ${amount} to ${phoneNumber}`);

  res.json({ success: true, message: `Payment request sent to ${phoneNumber}` });
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// pages/api/predictions/index.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const response = await fetch("https://api.replicate.com/v1/predictions", {
          method: "POST",
          headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            version: "ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
            input: { prompt: req.body.prompt },
          }),
        });
  
        const prediction = await response.json();
        if (response.ok) {
          res.status(200).json(prediction);
        } else {
          res.status(response.status).json({ message: prediction.detail });
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  

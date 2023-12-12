// pages/api/predictions/[id].js

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const response = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    const prediction = await response.json();
    if (response.ok) {
      res.status(200).json(prediction);
    } else {
      // Include more detailed error information if available
      res.status(response.status).json({ 
        message: "Error fetching prediction status",
        detail: prediction.detail || "No additional details provided"
      });
    }
  } catch (error) {
    res.status(500).json({ 
      message: "Internal server error",
      error: error.message
    });
  }
}

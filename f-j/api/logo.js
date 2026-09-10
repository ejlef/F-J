export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json({
    status: "success",
    message: "Your Vercel API is live and working!"
  });
}

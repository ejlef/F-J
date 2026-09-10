export default function handler(req, res) {
  // 1. Set clean JSON response headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

  // 2. Safely return a clean 200 Success status
  return res.status(200).json({
    status: "success",
    message: "Your F-J logo function is live and working perfectly!",
    timestamp: new Date().toISOString()
  });
}

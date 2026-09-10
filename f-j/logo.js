export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json({
    status: "success",
    message: "The logo.js file is running directly from the f-j root folder!"
  });
}

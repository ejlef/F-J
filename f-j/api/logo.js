// api/logo.js

/**
 * Vercel Serverless Function handling requests on standard native ES Module formats
 * @param {Request} req - The incoming web request object
 * @param {Response} res - The outgoing web response object
 */
export default function handler(req, res) {
  // Extract query parameters if needed (e.g., /api/logo?color=blue)
  const { color = 'black' } = req.query;

  // Set response headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');

  // Return JSON status payload
  return res.status(200).json({
    status: "success",
    service: "logo-generator",
    configuredColor: color,
    timestamp: new Date().toISOString()
  });
}

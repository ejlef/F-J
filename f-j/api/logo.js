export default function handler(req, res) {
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');

  const svgString = `<svg xmlns="http://w3.org" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="fjGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00d2ff" />
      <stop offset="100%" stop-color="#0066ff" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#ffffff" rx="40" />
  <g transform="translate(150, 100)">
    <path d="M 50,40 C 50,0 110,0 110,40 L 110,60 C 110,60 70,60 70,60 L 70,100 L 110,100 L 110,130 L 70,130 L 70,220 C 70,260 110,260 110,220 L 110,90 L 150,90 L 150,220 C 150,300 30,300 30,220 L 30,130 L 0,130 L 0,100 L 30,100 L 30,40 C 30,-20 150,-20 150,40 Z" fill="url(#fjGradient)" />
  </g>
</svg>`;

  res.status(200).send(svgString);
}

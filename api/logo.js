export default function handler(req, res) {
  const {
    text = "F/J",
    primary = "#00E5FF",
    secondary = "#6D5DFC",
    bg = "#050816"
  } = req.query;

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="600"
     height="600"
     viewBox="0 0 600 600">

<defs>

<linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stop-color="${primary}" />
<stop offset="100%" stop-color="${secondary}" />
</linearGradient>

<radialGradient id="glow">
<stop offset="0%" stop-color="${primary}" stop-opacity="0.35"/>
<stop offset="100%" stop-color="${bg}" stop-opacity="0"/>
</radialGradient>

<filter id="blur">
<feGaussianBlur stdDeviation="8"/>
</filter>

</defs>

<rect width="100%" height="100%" fill="${bg}"/>

<circle cx="300" cy="300" r="180" fill="url(#glow)">
    <animate attributeName="r"
             values="170;190;170"
             dur="5s"
             repeatCount="indefinite"/>
</circle>

<circle
cx="300"
cy="300"
r="145"
fill="none"
stroke="url(#ring)"
stroke-width="8"
stroke-linecap="round"
stroke-dasharray="650 250">

<animateTransform
attributeName="transform"
attributeType="XML"
type="rotate"
from="0 300 300"
to="360 300 300"
dur="4s"
repeatCount="indefinite"/>

</circle>

<circle
cx="300"
cy="300"
r="95"
fill="#ffffff10"
stroke="#ffffff25"
stroke-width="2"/>

<circle r="6" fill="${primary}" filter="url(#blur)">
<animateMotion
dur="3s"
repeatCount="indefinite"
path="M300,155 A145,145 0 1,1 299.9,155"/>
</circle>

<circle r="5" fill="${secondary}" filter="url(#blur)">
<animateMotion
dur="4.5s"
repeatCount="indefinite"
path="M300,155 A145,145 0 1,0 299.9,155"/>
</circle>

<text
x="300"
y="322"
text-anchor="middle"
font-family="Arial"
font-size="70"
font-weight="900"
fill="white">

${text}

<animate
attributeName="opacity"
values="1;.8;1"
dur="2s"
repeatCount="indefinite"/>

</text>

</svg>`;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}

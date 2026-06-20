/* ------------------------------------------------------------------ *
 *  icons.js — professional icon set
 *  Lucide icons (MIT, https://lucide.dev) stored as inner SVG markup,
 *  drawn stroked in a 0..24 viewBox. Reference by key from a node's
 *  `icons: [...]` array. `SANKEY_BRAND.nvidia` is the NVIDIA eye glyph
 *  (Simple Icons, brand trademark of NVIDIA Corporation).
 * ------------------------------------------------------------------ */
window.SANKEY_ICONS = {
  "server": "<rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\" /> <rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\" /> <line x1=\"6\" x2=\"6.01\" y1=\"6\" y2=\"6\" /> <line x1=\"6\" x2=\"6.01\" y1=\"18\" y2=\"18\" />",
  "controller": "<line x1=\"6\" x2=\"10\" y1=\"11\" y2=\"11\" /> <line x1=\"8\" x2=\"8\" y1=\"9\" y2=\"13\" /> <line x1=\"15\" x2=\"15.01\" y1=\"12\" y2=\"12\" /> <line x1=\"18\" x2=\"18.01\" y1=\"10\" y2=\"10\" /> <path d=\"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z\" />",
  "eye": "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "car": "<path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2\" /> <circle cx=\"7\" cy=\"17\" r=\"2\" /> <path d=\"M9 17h6\" /> <circle cx=\"17\" cy=\"17\" r=\"2\" />",
  "factory": "<path d=\"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\" /> <path d=\"M17 18h1\" /> <path d=\"M12 18h1\" /> <path d=\"M7 18h1\" />",
  "cloud": "<path d=\"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z\" />",
  "dollar": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\" /> <path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8\" /> <path d=\"M12 18V6\" />",
  "bank": "<line x1=\"3\" x2=\"21\" y1=\"22\" y2=\"22\" /> <line x1=\"6\" x2=\"6\" y1=\"18\" y2=\"11\" /> <line x1=\"10\" x2=\"10\" y1=\"18\" y2=\"11\" /> <line x1=\"14\" x2=\"14\" y1=\"18\" y2=\"11\" /> <line x1=\"18\" x2=\"18\" y1=\"18\" y2=\"11\" /> <polygon points=\"12 2 20 7 4 7\" />",
  "chip": "<rect width=\"16\" height=\"16\" x=\"4\" y=\"4\" rx=\"2\" /> <rect width=\"6\" height=\"6\" x=\"9\" y=\"9\" rx=\"1\" /> <path d=\"M15 2v2\" /> <path d=\"M15 20v2\" /> <path d=\"M2 15h2\" /> <path d=\"M2 9h2\" /> <path d=\"M20 15h2\" /> <path d=\"M20 9h2\" /> <path d=\"M9 2v2\" /> <path d=\"M9 20v2\" />"
};

window.SANKEY_BRAND = {
  // single fill path, 0..24 viewBox
  nvidia: "M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z"
};

window.SANKEY_BUSINESS_ICONS = {
  alibabaCloud: `
    <g fill="none" stroke="#ff5a00" stroke-width="5.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M27 8H9C5 8 3 10 3 14v19c0 4 2 6 6 6h18"/>
      <path d="M44 8h18c4 0 6 2 6 6v19c0 4-2 6-6 6H44"/>
      <path d="M22 24h27"/>
    </g>
    <text x="81" y="38" font-family="Arial,sans-serif" font-size="34" font-weight="700" fill="#ff5a00">Alibaba Cloud</text>
  `,
  hema: `
    <g fill="none" stroke="#075085" stroke-linejoin="round" stroke-linecap="round">
      <path d="M25 10C34 18 44 18 54 10C63 17 70 31 66 47C61 70 16 70 10 47C6 31 15 17 25 10Z" fill="#27aee8" stroke-width="4"/>
      <path d="M12 46C11 31 26 25 39 36C49 25 65 31 64 47C61 61 49 67 39 56C29 67 16 61 12 46Z" fill="#f7f7ef" stroke-width="4"/>
      <path d="M28 60C35 66 44 66 51 60C50 71 30 71 28 60Z" fill="#27aee8" stroke-width="4"/>
      <circle cx="26" cy="30" r="3.8" fill="#075085" stroke="none"/>
      <circle cx="50" cy="30" r="3.8" fill="#075085" stroke="none"/>
    </g>
    <text x="82" y="58" font-family="Arial,'Microsoft YaHei',sans-serif" font-size="50" font-weight="800" fill="#075085">盒马</text>
  `,
  amap: `
    <path d="M74 16H254C279 16 299 36 299 61V255C299 280 279 300 254 300H58C33 300 13 280 13 255V77C13 43 40 16 74 16Z" fill="#f7f5ec"/>
    <path d="M13 103V77C13 43 40 16 74 16H113V103Z" fill="#a9e87e"/>
    <path d="M113 16H184V103H113Z" fill="#a9e87e"/>
    <path d="M207 16H254C279 16 299 36 299 61V103H207Z" fill="#f0eee5"/>
    <path d="M13 235V255C13 280 33 300 58 300H73V235Z" fill="#f6f0cf"/>
    <path d="M207 235H299V255C299 280 279 300 254 300H207Z" fill="#9ec4f5"/>
    <rect x="73" y="16" width="40" height="284" fill="#ffc95a"/>
    <rect x="184" y="16" width="23" height="284" fill="#ffffff"/>
    <rect x="13" y="103" width="286" height="23" fill="#ffffff"/>
    <rect x="13" y="203" width="286" height="32" fill="#ffdc38"/>
    <path d="M96 210L201 262L223 275L111 238Z" fill="#606060" opacity="0.18"/>
    <path d="M74 186L108 209L104 249L72 218Z" fill="#c59a32"/>
    <path d="M43 160L262 60L106 208Z" fill="#12a6ff"/>
    <path d="M106 208L262 60L117 215L104 249Z" fill="#0066bf"/>
    <path d="M117 215L262 60L198 262Z" fill="#0d95f6"/>
  `
};

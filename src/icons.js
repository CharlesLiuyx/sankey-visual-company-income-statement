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
  apple: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701",
  nvidia: "M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z",
  tesla: "M12 0C7.7 0 3.9.9 1.1 2.6l1.5 2.6C5 4 8.3 3.3 12 3.3S19 4 21.4 5.2l1.5-2.6C20.1.9 16.3 0 12 0ZM6.4 6.1C8.1 5.7 9.9 5.5 12 5.5s3.9.2 5.6.6l-1.2 2.7c-.9-.2-1.8-.3-2.8-.4L12.7 24h-1.4l-.9-15.6c-1 0-1.9.2-2.8.4L6.4 6.1Z"
};

window.SANKEY_BUSINESS_ICONS = {
  teslaAutoCluster: `
    <g transform="translate(0 18)">
      <g transform="translate(0 7)">
        <path d="M12 35C30 16 62 10 93 20C104 24 116 35 123 48H3C3 43 6 39 12 35Z" fill="#0d2d56"/>
        <path d="M31 19C48 8 76 9 94 23L82 32H39Z" fill="#c9d9e7"/>
        <circle cx="31" cy="51" r="9" fill="#151515"/>
        <circle cx="95" cy="51" r="9" fill="#151515"/>
        <path d="M17 37H120" stroke="#dae3eb" stroke-width="5" stroke-linecap="round"/>
      </g>
      <g transform="translate(95 0)">
        <path d="M9 43C24 17 65 9 103 22C118 27 130 39 138 57H3C3 51 5 47 9 43Z" fill="#ffffff" stroke="#c8cdd1" stroke-width="2"/>
        <path d="M36 21C54 12 83 14 104 29L91 41H44Z" fill="#b8d0df"/>
        <circle cx="34" cy="60" r="9" fill="#171717"/>
        <circle cx="111" cy="60" r="9" fill="#171717"/>
      </g>
      <g transform="translate(218 5)">
        <path d="M8 40C25 16 67 8 103 24C116 30 126 42 132 57H3C3 50 5 45 8 40Z" fill="#bfc4c9"/>
        <path d="M37 21C55 12 80 14 101 30L88 41H45Z" fill="#eef3f5"/>
        <circle cx="35" cy="59" r="9" fill="#171717"/>
        <circle cx="107" cy="59" r="9" fill="#171717"/>
      </g>
      <g transform="translate(336 11)">
        <path d="M8 34C23 15 58 8 88 20C99 25 108 36 114 50H2C2 44 4 39 8 34Z" fill="#bd2228"/>
        <path d="M33 19C48 11 71 12 88 25L76 35H40Z" fill="#dee7ec"/>
        <circle cx="31" cy="52" r="8" fill="#171717"/>
        <circle cx="92" cy="52" r="8" fill="#171717"/>
      </g>
    </g>
  `,
  teslaEnergyCluster: `
    <g transform="translate(0 0)">
      <rect x="0" y="5" width="52" height="99" rx="4" fill="#f6f7f7" stroke="#d4d6d8" stroke-width="2"/>
      <path d="M40 5L52 15V104H40Z" fill="#dfe2e4"/>
      <path d="M8 16H34" stroke="#ffffff" stroke-width="3" opacity="0.8"/>
    </g>
    <g transform="translate(78 38)">
      <path d="M0 45L101 10L160 38L55 75Z" fill="#101820"/>
      <path d="M8 43L100 15L151 39L56 70Z" fill="#2e3439"/>
      <path d="M30 36L79 21M54 61L130 34M61 25L115 51" stroke="#b8c3ca" stroke-width="2" opacity="0.72"/>
      <path d="M0 45L55 75L55 83L0 53Z" fill="#4d5256"/>
      <path d="M55 75L160 38V46L55 83Z" fill="#2a2f33"/>
    </g>
  `,
  teslaCharger: `
    <g>
      <path d="M42 14C59 28 62 79 51 106C45 119 23 119 17 106C6 79 9 28 26 14C30 11 38 11 42 14Z" fill="#f7f7f7" stroke="#969ba0" stroke-width="3"/>
      <path d="M24 16C29 21 39 21 44 16" fill="none" stroke="#d2d6d9" stroke-width="3" stroke-linecap="round"/>
      <path d="M25 109H44V122H25Z" fill="#272727"/>
      <path d="M30 26H43" stroke="#eb1840" stroke-width="2" stroke-linecap="round"/>
      <path d="M40 26V36C40 43 33 44 33 51V72" fill="none" stroke="#c3c7ca" stroke-width="2" stroke-linecap="round"/>
    </g>
  `,
  appleServicesCluster: `
    <defs>
      <linearGradient id="apple-icloud-grad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#dff4ff"/>
        <stop offset="0.55" stop-color="#67c5ff"/>
        <stop offset="1" stop-color="#008df8"/>
      </linearGradient>
      <linearGradient id="apple-appstore-grad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#42c8ff"/>
        <stop offset="1" stop-color="#1479e8"/>
      </linearGradient>
    </defs>
    <g transform="translate(0 0)">
      <rect x="0" y="0" width="88" height="88" rx="15" fill="#20272a"/>
      <rect x="10" y="23" width="68" height="42" rx="5" fill="#ece5d7"/>
      <path d="M14 31H74" stroke="#fb4d42" stroke-width="5"/>
      <path d="M14 40H74" stroke="#f5a623" stroke-width="5"/>
      <path d="M14 49H74" stroke="#2dc85a" stroke-width="5"/>
      <path d="M30 58H58" stroke="#f5a623" stroke-width="5" stroke-linecap="round"/>
    </g>
    <g transform="translate(95 0)">
      <rect x="0" y="0" width="88" height="88" rx="15" fill="#ffffff" stroke="#d7d7d7"/>
      <path d="M18 16L70 72H51L18 36Z" fill="#ff2d55"/>
      <path d="M18 72V50L39 72Z" fill="#ff2d55"/>
      <path d="M70 16V38L48 16Z" fill="#ff2d55"/>
    </g>
    <g transform="translate(190 0)">
      <rect x="0" y="0" width="88" height="88" rx="15" fill="#ffffff" stroke="#d7d7d7"/>
      <path d="M28 60H63a18 18 0 0 0 0-36h-5a24 24 0 0 0-45 11A14 14 0 0 0 28 60Z" fill="url(#apple-icloud-grad)"/>
    </g>
    <g transform="translate(285 0)">
      <rect x="0" y="0" width="88" height="88" rx="15" fill="#050505"/>
      <circle cx="44" cy="44" r="31" fill="none" stroke="#ff2d55" stroke-width="7"/>
      <circle cx="44" cy="44" r="22" fill="none" stroke="#ffcc00" stroke-width="7"/>
      <circle cx="44" cy="44" r="13" fill="none" stroke="#32d74b" stroke-width="7"/>
      <circle cx="44" cy="44" r="5" fill="#00c7ff"/>
    </g>
    <g transform="translate(380 0)">
      <rect x="0" y="0" width="88" height="88" rx="15" fill="#ff375f"/>
      <path d="M54 18V58a13 13 0 1 1-8-12V28l26-5v30a13 13 0 1 1-8-12V16Z" fill="#ffffff"/>
    </g>
    <g transform="translate(475 0)">
      <rect x="0" y="0" width="88" height="88" rx="15" fill="#1d2927"/>
      <g transform="translate(14 20) scale(1.35)" fill="#ffffff">
        <path d="${window.SANKEY_BRAND.apple}"/>
      </g>
      <text x="46" y="56" font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="800" fill="#ffffff">tv</text>
    </g>
    <g transform="translate(570 0)">
      <rect x="0" y="0" width="88" height="88" rx="15" fill="url(#apple-appstore-grad)"/>
      <g fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
        <path d="M27 63L44 33L61 63"/>
        <path d="M31 54H57"/>
        <path d="M44 33L49 23"/>
      </g>
    </g>
  `,
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
  `,
  tencentWordmark: `
    <text x="0" y="132" font-family="Arial,sans-serif" font-style="italic" font-size="170" font-weight="800" fill="#064ee4">Tencent</text>
    <path d="M768 17L846 81H790L822 136L744 71H800Z" fill="#064ee4"/>
  `,
  tencentGamingCluster: `
    <g transform="translate(0 0)">
      <path d="M31 74C48 29 98 6 151 13L136 63C112 61 91 71 78 91Z" fill="#b6ef18"/>
      <path d="M51 137C24 123 12 100 31 74L78 91C70 105 77 116 94 123Z" fill="#ff8e00"/>
      <path d="M94 123L136 63L207 62L153 113L161 156L110 155Z" fill="#0a63bd"/>
      <path d="M91 45L143 30L127 54Z" fill="#fff176" opacity="0.9"/>
      <path d="M70 94L118 83L101 107Z" fill="#fff176" opacity="0.9"/>
      <text x="217" y="72" font-family="Arial,sans-serif" font-size="57" font-style="italic" font-weight="800" fill="#0b65bd">Tencent</text>
      <text x="226" y="124" font-family="Arial,sans-serif" font-size="51" font-style="italic" font-weight="800" fill="#2f2f2f">Games</text>
    </g>
    <g transform="translate(4 183)">
      <path d="M0 26L58 5V58L0 46Z" fill="#f2132d"/>
      <rect x="10" y="30" width="8" height="43" fill="#f2132d"/>
      <rect x="25" y="24" width="8" height="43" fill="#f2132d"/>
      <rect x="40" y="18" width="8" height="43" fill="#f2132d"/>
      <text x="74" y="55" font-family="Arial Black,Arial,sans-serif" font-size="46" font-weight="900" fill="#f2132d">RIOT</text>
      <text x="74" y="101" font-family="Arial Black,Arial,sans-serif" font-size="46" font-weight="900" fill="#f2132d">GAMES</text>
    </g>
    <g transform="translate(305 176)">
      <path d="M0 0H113V102C113 131 56 151 56 151C56 151 0 131 0 102Z" fill="#1d1d1d"/>
      <rect x="13" y="13" width="87" height="91" fill="none" stroke="#ffffff" stroke-width="8"/>
      <text x="56" y="63" text-anchor="middle" font-family="Arial Narrow,Arial,sans-serif" font-size="44" font-weight="800" fill="#ffffff">EPIC</text>
      <text x="56" y="101" text-anchor="middle" font-family="Arial Narrow,Arial,sans-serif" font-size="33" font-weight="800" fill="#ffffff">GAMES</text>
    </g>
    <g transform="translate(445 162)" fill="#1b1b1b" font-family="Arial Black,Arial,sans-serif" font-size="45" font-weight="900">
      <text x="0" y="42">SUP</text>
      <text x="0" y="87">ERC</text>
      <text x="0" y="132">ELL</text>
    </g>
  `,
  tencentSocialCluster: `
    <g transform="translate(0 0)">
      <ellipse cx="82" cy="67" rx="70" ry="58" fill="#86d813"/>
      <ellipse cx="159" cy="123" rx="70" ry="52" fill="#e9e9e9" stroke="#cfcfcf" stroke-width="4"/>
      <circle cx="63" cy="54" r="11" fill="#333"/>
      <circle cx="107" cy="54" r="11" fill="#333"/>
      <circle cx="139" cy="110" r="10" fill="#333"/>
      <circle cx="184" cy="110" r="10" fill="#333"/>
      <path d="M38 112L19 151L63 126Z" fill="#86d813"/>
      <path d="M202 154L230 186L197 171Z" fill="#e9e9e9" stroke="#cfcfcf" stroke-width="4"/>
    </g>
    <g transform="translate(285 7)">
      <ellipse cx="71" cy="141" rx="58" ry="14" fill="#f8a900"/>
      <path d="M34 61C42 19 101 16 113 61L130 152C134 186 108 217 73 217C38 217 13 186 17 152Z" fill="#050505"/>
      <ellipse cx="73" cy="137" rx="50" ry="61" fill="#ffffff"/>
      <path d="M23 96H123V130H23Z" fill="#e91b28"/>
      <ellipse cx="73" cy="89" rx="49" ry="18" fill="#f3a41a"/>
      <circle cx="55" cy="52" r="18" fill="#ffffff"/>
      <circle cx="93" cy="52" r="18" fill="#ffffff"/>
      <circle cx="58" cy="54" r="8" fill="#262626"/>
      <path d="M89 52C97 43 108 48 109 58C102 54 96 54 89 52Z" fill="#262626"/>
    </g>
    <g transform="translate(112 260)">
      <path d="M113 0L144 76L226 82L164 135L184 216L113 171L42 216L62 135L0 82L82 76Z" fill="#ffc400"/>
      <path d="M56 103C95 89 141 91 176 106C136 111 99 130 70 159C95 144 133 135 164 136C130 151 95 170 55 199C77 158 107 131 139 114C109 110 82 110 56 103Z" fill="#ffffff" opacity="0.95"/>
    </g>
  `,
  tencentMarketingCluster: `
    <g transform="translate(0 0)">
      <path d="M31 19C52 -4 190 64 205 88C220 112 70 202 36 175C8 152 3 48 31 19Z" fill="#168df2"/>
      <path d="M18 51C28 20 141 66 157 86C174 107 57 175 31 158C14 147 6 87 18 51Z" fill="#85d817"/>
      <path d="M0 45C6 21 32 13 58 24L48 169C20 168 4 154 2 131Z" fill="#ff8a00"/>
      <path d="M76 65L134 100L76 136Z" fill="#ffffff"/>
    </g>
    <g transform="translate(265 0)">
      <path d="M34 100A83 83 0 0 1 117 17" fill="none" stroke="#ffc400" stroke-width="25" stroke-linecap="round"/>
      <path d="M196 56A83 83 0 0 1 201 158" fill="none" stroke="#33d39a" stroke-width="25" stroke-linecap="round"/>
      <path d="M180 213A83 83 0 0 1 74 209" fill="none" stroke="#ff1f4f" stroke-width="25" stroke-linecap="round"/>
      <path d="M94 96C101 55 161 55 168 96L179 161C184 195 154 220 132 204C110 220 80 195 85 161Z" fill="#063bd5"/>
    </g>
    <g transform="translate(108 238)">
      <defs>
        <linearGradient id="tencent-video-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#00b6ff"/>
          <stop offset="0.45" stop-color="#2756ff"/>
          <stop offset="1" stop-color="#ff177a"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="210" height="210" rx="48" fill="url(#tencent-video-grad)"/>
      <path d="M63 45L164 105L63 165Z" fill="none" stroke="#ffffff" stroke-width="7" stroke-linejoin="round"/>
      <path d="M63 45L103 68V143L63 165Z" fill="none" stroke="#ffffff" stroke-width="7"/>
      <path d="M103 68L164 105L103 143Z" fill="none" stroke="#ffffff" stroke-width="7"/>
    </g>
  `,
  tencentFintechCluster: `
    <g transform="translate(65 0)" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M61 124H200C238 124 270 93 270 55C270 17 238 -14 200 -14C174 -14 151 1 139 24C128 11 111 3 91 3C56 3 28 30 28 65C28 68 28 71 29 74" stroke="#2c88d5" stroke-width="24"/>
      <path d="M52 122C20 122 -6 96 -6 64C-6 32 20 6 52 6C75 6 94 19 104 37L140 73" stroke="#22b8b7" stroke-width="24"/>
      <path d="M123 74L190 123" stroke="#2c88d5" stroke-width="24"/>
    </g>
    <g transform="translate(0 202)">
      <path d="M34 74C41 20 118 20 126 74L155 210C160 239 128 263 82 263C36 263 4 239 9 210Z" fill="#1ca5f2"/>
      <path d="M38 140L86 187L149 127L158 145L86 218L26 158Z" fill="#fff02a"/>
      <path d="M9 210L0 248L47 232Z" fill="#1ca5f2"/>
      <path d="M155 210L164 248L117 232Z" fill="#1ca5f2"/>
    </g>
    <g transform="translate(250 215)">
      <ellipse cx="120" cy="96" rx="112" ry="90" fill="#11a80f"/>
      <path d="M45 104L94 148L201 63L215 84L93 181L34 126Z" fill="#ffffff"/>
      <path d="M39 157L11 226L82 181Z" fill="#11a80f"/>
    </g>
  `,
  microsoftLogo: `
    <rect x="0" y="0" width="90" height="90" fill="#f25022"/>
    <rect x="103" y="0" width="90" height="90" fill="#7fba00"/>
    <rect x="0" y="103" width="90" height="90" fill="#00a4ef"/>
    <rect x="103" y="103" width="90" height="90" fill="#ffb900"/>
  `,
  microsoftAzure: `
    <defs>
      <linearGradient id="microsoft-azure-left" x1="0" x2="1" y1="1" y2="0">
        <stop offset="0" stop-color="#0059b8"/>
        <stop offset="1" stop-color="#165a9f"/>
      </linearGradient>
      <linearGradient id="microsoft-azure-right" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#42c7ea"/>
        <stop offset="1" stop-color="#178fd8"/>
      </linearGradient>
      <linearGradient id="microsoft-azure-fold" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#0098df"/>
        <stop offset="1" stop-color="#0067c5"/>
      </linearGradient>
    </defs>
    <path d="M42 0H83L126 111H87L76 79H40L28 111H0Z" fill="url(#microsoft-azure-left)"/>
    <path d="M81 0H126L154 111H88L76 79H40Z" fill="url(#microsoft-azure-right)" opacity="0.96"/>
    <path d="M48 72L77 34L106 111H65Z" fill="url(#microsoft-azure-fold)"/>
    <path d="M42 72H92L106 111H22Z" fill="#109ad8" opacity="0.95"/>
  `,
  microsoft365Commercial: `
    <defs>
      <linearGradient id="microsoft-365-a" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#45d5ea"/>
        <stop offset="1" stop-color="#1660d7"/>
      </linearGradient>
      <linearGradient id="microsoft-365-b" x1="1" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="#37d4ed"/>
        <stop offset="1" stop-color="#7d52c7"/>
      </linearGradient>
      <linearGradient id="microsoft-365-c" x1="0" x2="1" y1="1" y2="0">
        <stop offset="0" stop-color="#286fdf"/>
        <stop offset="1" stop-color="#c06ae8"/>
      </linearGradient>
    </defs>
    <path d="M58 0L112 30V88L57 120L4 89V31Z" fill="url(#microsoft-365-a)"/>
    <path d="M58 0L112 30L60 59L4 31Z" fill="url(#microsoft-365-b)"/>
    <path d="M4 31L60 59V120L4 89Z" fill="url(#microsoft-365-c)"/>
    <path d="M112 30V88L60 120V59Z" fill="#5935a7" opacity="0.72"/>
    <path d="M38 40C52 26 77 28 91 46C104 65 94 96 67 103C48 108 29 99 20 82L40 70C45 82 57 88 70 83C82 78 86 63 79 52C71 41 56 40 48 48Z" fill="#f4f2f7" opacity="0.96"/>
  `,
  microsoftXbox: `
    <circle cx="59" cy="37" r="37" fill="#000000"/>
    <path d="M25 33C42 8 76 8 94 33C79 22 63 35 59 39C54 34 39 22 25 33Z" fill="#f2f2f2"/>
    <path d="M21 43C24 73 48 82 58 82C52 61 39 47 21 43Z" fill="#f2f2f2"/>
    <path d="M97 43C94 73 70 82 60 82C66 61 79 47 97 43Z" fill="#f2f2f2"/>
    <text x="60" y="137" text-anchor="middle" font-family="Arial,sans-serif" font-size="55" font-weight="400" fill="#000000">XBOX</text>
  `,
  microsoftLinkedIn: `
    <rect x="0" y="0" width="89" height="89" rx="10" fill="#0969c3"/>
    <circle cx="24" cy="24" r="8.5" fill="#ffffff"/>
    <rect x="16" y="39" width="16" height="36" fill="#ffffff"/>
    <path d="M43 39H58V46C62 40 68 38 75 38C86 38 92 46 92 61V75H76V63C76 56 73 53 68 53C62 53 59 57 59 64V75H43Z" fill="#ffffff"/>
  `,
  microsoftWindows: `
    <path d="M0 13L50 6V51H0Z" fill="#00a4ef"/>
    <path d="M57 5L120 0V51H57Z" fill="#00a4ef"/>
    <path d="M0 58H50V103L0 96Z" fill="#00a4ef"/>
    <path d="M57 58H120V111L57 104Z" fill="#00a4ef"/>
  `,
  microsoftBing: `
    <defs>
      <linearGradient id="microsoft-bing-main" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="#35c6ee"/>
        <stop offset="0.62" stop-color="#2b80e7"/>
        <stop offset="1" stop-color="#2558d8"/>
      </linearGradient>
      <linearGradient id="microsoft-bing-tail" x1="0" x2="1" y1="1" y2="0">
        <stop offset="0" stop-color="#46d3e8"/>
        <stop offset="1" stop-color="#2868df"/>
      </linearGradient>
      <linearGradient id="microsoft-bing-wing" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#31d3e9"/>
        <stop offset="1" stop-color="#1d5bd4"/>
      </linearGradient>
    </defs>
    <path d="M10 0C10 0 50 25 54 31V72C52 95 21 110 0 89V10C0 4 4 0 10 0Z" fill="url(#microsoft-bing-main)"/>
    <path d="M54 72L92 50C106 59 116 79 108 94C96 115 48 124 14 91C32 94 43 87 54 72Z" fill="url(#microsoft-bing-tail)"/>
    <path d="M54 31L91 53L57 72L54 72Z" fill="url(#microsoft-bing-wing)"/>
    <path d="M0 89L15 92C33 101 62 96 79 75L108 94C89 126 25 125 0 89Z" fill="#40d4e2" opacity="0.76"/>
  `,
  microsoftOtherCluster: `
    <path d="M0 29C16 18 36 21 54 36C68 49 83 48 99 37V55C81 66 61 63 43 48C29 36 14 36 0 44Z" fill="#000000"/>
    <rect x="0" y="29" width="18" height="18" rx="2" fill="#000000"/>
    <rect x="88" y="47" width="18" height="18" rx="2" fill="#000000"/>
    <g transform="translate(128 0)">
      <path d="M0 9L54 31V85L0 64Z" fill="#275cdf"/>
      <path d="M54 31L92 14V67L54 85Z" fill="#6b55c7"/>
      <path d="M0 9L38 0L92 14L54 31Z" fill="#4264df"/>
      <path d="M38 23C52 23 64 35 64 50C64 65 52 77 38 77C25 77 15 69 12 58H31C34 62 40 62 44 59C49 56 51 50 48 45C45 40 39 37 33 40Z" fill="#ebe7ff" opacity="0.92"/>
      <path d="M54 31L92 14V67L54 85Z" fill="#9271e6" opacity="0.55"/>
    </g>
  `,
  ibmLogo: `
    <defs>
      <clipPath id="ibm-logo-clip">
        <text x="230" y="194" text-anchor="middle" font-family="Arial Black,Arial,Helvetica,sans-serif" font-size="230" font-weight="900" letter-spacing="-13">IBM</text>
      </clipPath>
    </defs>
    <g clip-path="url(#ibm-logo-clip)" fill="#1f70c1">
      <rect x="0" y="20" width="460" height="13"/>
      <rect x="0" y="43" width="460" height="13"/>
      <rect x="0" y="66" width="460" height="13"/>
      <rect x="0" y="89" width="460" height="13"/>
      <rect x="0" y="112" width="460" height="13"/>
      <rect x="0" y="135" width="460" height="13"/>
      <rect x="0" y="158" width="460" height="13"/>
      <rect x="0" y="181" width="460" height="13"/>
    </g>
  `,
  tsmcLogo: `
    <defs>
      <clipPath id="tsmc-wafer-clip">
        <circle cx="160" cy="98" r="94"/>
      </clipPath>
    </defs>
    <circle cx="160" cy="98" r="94" fill="#ffffff" stroke="#2b2b2b" stroke-width="2.2"/>
    <g clip-path="url(#tsmc-wafer-clip)" fill="none" stroke="#202020" stroke-width="2.1">
      ${Array.from({ length: 15 }, (_, index) => `<path d="M${34 + index * 18} 4V192"/>`).join('')}
      ${Array.from({ length: 11 }, (_, index) => `<path d="M64 ${10 + index * 17}H256"/>`).join('')}
    </g>
    <g clip-path="url(#tsmc-wafer-clip)" fill="#251815">
      <rect x="109" y="24" width="17" height="32"/>
      <rect x="92" y="58" width="18" height="33"/>
      <rect x="116" y="74" width="17" height="17"/>
      <rect x="210" y="62" width="18" height="31"/>
      <rect x="111" y="147" width="17" height="31"/>
      <rect x="129" y="132" width="18" height="16"/>
      <rect x="132" y="166" width="17" height="22"/>
      <rect x="175" y="148" width="17" height="31"/>
      <rect x="218" y="148" width="18" height="31"/>
    </g>
    <text x="160" y="132" text-anchor="middle" font-family="Georgia,'Times New Roman',serif" font-size="96" font-weight="700" fill="#e60012">tsmc</text>
    <rect x="28" y="224" width="264" height="8" fill="#e60012"/>
  `,
  metaLogo: `
    <defs>
      <linearGradient id="meta-logo-blue" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#005eea"/>
        <stop offset="0.48" stop-color="#0079ff"/>
        <stop offset="1" stop-color="#0097ff"/>
      </linearGradient>
      <filter id="meta-logo-shadow" x="-20%" y="-20%" width="140%" height="145%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#33404c" flood-opacity="0.42"/>
      </filter>
    </defs>
    <path
      d="M28 142C43 84 70 46 101 45C126 44 145 76 166 112C188 149 209 173 236 157C260 143 265 92 244 61C225 32 190 36 161 75C142 101 124 140 101 167C73 200 35 190 20 158C7 129 14 92 34 69"
      fill="none"
      stroke="url(#meta-logo-blue)"
      stroke-width="34"
      stroke-linecap="round"
      stroke-linejoin="round"
      filter="url(#meta-logo-shadow)"
    />
  `,
  metaFamilyAppsCluster: `
    <defs>
      <linearGradient id="meta-facebook-grad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#19b5ff"/>
        <stop offset="1" stop-color="#0065e8"/>
      </linearGradient>
      <radialGradient id="meta-instagram-grad" cx="32%" cy="100%" r="105%">
        <stop offset="0" stop-color="#ffd76f"/>
        <stop offset="0.30" stop-color="#ff7a20"/>
        <stop offset="0.58" stop-color="#e82972"/>
        <stop offset="1" stop-color="#5c47d8"/>
      </radialGradient>
      <linearGradient id="meta-messenger-grad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#ff4bb2"/>
        <stop offset="0.44" stop-color="#9255ff"/>
        <stop offset="1" stop-color="#00b7ff"/>
      </linearGradient>
    </defs>
    <g transform="translate(0 0)">
      <rect x="0" y="0" width="112" height="112" rx="18" fill="url(#meta-facebook-grad)"/>
      <path d="M72 36H58C53 36 50 40 50 46V57H72L68 75H50V112H31V75H17V57H31V44C31 27 41 17 58 17H72Z" fill="#ffffff"/>
    </g>
    <g transform="translate(152 0)">
      <rect x="0" y="0" width="112" height="112" rx="24" fill="url(#meta-instagram-grad)"/>
      <rect x="25" y="25" width="62" height="62" rx="18" fill="none" stroke="#ffffff" stroke-width="9"/>
      <circle cx="56" cy="56" r="20" fill="none" stroke="#ffffff" stroke-width="9"/>
      <circle cx="79" cy="33" r="6" fill="#ffffff"/>
    </g>
    <g transform="translate(0 152)">
      <rect x="0" y="0" width="112" height="112" rx="18" fill="#00e45b"/>
      <path d="M56 18C34 18 17 35 17 57C17 64 19 71 22 77L17 96L37 91C43 94 49 96 56 96C78 96 95 79 95 57C95 35 78 18 56 18Z" fill="none" stroke="#ffffff" stroke-width="8" stroke-linejoin="round"/>
      <path d="M45 39C43 39 38 44 38 49C38 62 52 76 65 76C70 76 75 71 75 69C75 68 64 62 62 63L56 68C49 65 44 60 41 53L46 47C47 45 46 39 45 39Z" fill="#ffffff"/>
    </g>
    <g transform="translate(152 152)">
      <path d="M56 0C88 0 112 22 112 52C112 83 88 104 56 104C50 104 44 104 38 102L15 112L22 89C8 80 0 67 0 52C0 22 24 0 56 0Z" fill="url(#meta-messenger-grad)"/>
      <path d="M24 61L49 35L65 52L88 29L65 68L49 51Z" fill="#ffffff"/>
    </g>
  `,
  metaQuestWordmark: `
    <g transform="translate(0 8) scale(0.23)">
      <path
        d="M28 142C43 84 70 46 101 45C126 44 145 76 166 112C188 149 209 173 236 157C260 143 265 92 244 61C225 32 190 36 161 75C142 101 124 140 101 167C73 200 35 190 20 158C7 129 14 92 34 69"
        fill="none"
        stroke="#0878f8"
        stroke-width="34"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <text x="71" y="56" font-family="Arial,Helvetica,sans-serif" font-size="49" font-weight="700" fill="#050505">MetaQuest</text>
  `,
  googleGMark: `
    <g fill="none" stroke-width="42" stroke-linecap="butt" stroke-linejoin="round">
      <path d="M210 103A86 86 0 0 0 128 44A86 86 0 0 0 72 63" stroke="#ea4335"/>
      <path d="M72 63A86 86 0 0 0 53 153" stroke="#fbbc05"/>
      <path d="M53 153A86 86 0 0 0 128 212A86 86 0 0 0 189 188" stroke="#34a853"/>
      <path d="M189 188A86 86 0 0 0 214 128H135" stroke="#4285f4"/>
      <path d="M135 128H218" stroke="#4285f4"/>
    </g>
  `,
  googleWordmark: `
    <g font-family="Arial,Helvetica,sans-serif" font-size="92" font-weight="500">
      <text x="0" y="92" fill="#4285f4">G</text>
      <text x="71" y="92" fill="#ea4335">o</text>
      <text x="124" y="92" fill="#fbbc05">o</text>
      <text x="177" y="92" fill="#4285f4">g</text>
      <text x="231" y="92" fill="#34a853">l</text>
      <text x="255" y="92" fill="#ea4335">e</text>
    </g>
  `,
  youtubeWordmark: `
    <rect x="0" y="12" width="110" height="78" rx="18" fill="#ff0000"/>
    <path d="M43 30L78 51L43 72Z" fill="#ffffff"/>
    <text x="126" y="78" font-family="Arial,Helvetica,sans-serif" font-size="82" font-weight="800" fill="#191919">YouTube</text>
  `,
  googleAdMobWordmark: `
    <g transform="translate(0 4)">
      <path d="M58 88A43 43 0 1 1 58 2" fill="none" stroke="#ea4335" stroke-width="22" stroke-linecap="round"/>
      <path d="M58 2A43 43 0 0 1 101 45" fill="none" stroke="#fbbc05" stroke-width="22" stroke-linecap="round"/>
      <path d="M101 45V79" stroke="#4285f4" stroke-width="22" stroke-linecap="round"/>
    </g>
    <text x="130" y="72" font-family="Arial,Helvetica,sans-serif" font-size="63" font-weight="500" fill="#5f6368">Google AdMob</text>
  `,
  googlePlayWordmark: `
    <defs>
      <linearGradient id="google-play-cyan" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#00e5ff"/>
        <stop offset="1" stop-color="#00bcd4"/>
      </linearGradient>
    </defs>
    <path d="M0 0L0 92L48 46Z" fill="url(#google-play-cyan)"/>
    <path d="M48 46L70 24L12 0Z" fill="#00d26a"/>
    <path d="M48 46L70 68L12 92Z" fill="#ff2d55"/>
    <path d="M70 24L101 41C108 45 108 47 101 51L70 68L48 46Z" fill="#fbbc05"/>
    <text x="124" y="73" font-family="Arial,Helvetica,sans-serif" font-size="70" font-weight="500" fill="#6f7377">Google Play</text>
  `,
  googleCloudWordmark: `
    <g transform="translate(0 8)" fill="none" stroke-width="16" stroke-linecap="round" stroke-linejoin="round">
      <path d="M48 18A45 45 0 0 1 124 43" stroke="#ea4335"/>
      <path d="M124 43A36 36 0 0 1 112 112H84" stroke="#4285f4"/>
      <path d="M84 112H35A33 33 0 0 1 31 46" stroke="#fbbc05"/>
      <path d="M31 46A45 45 0 0 1 48 18" stroke="#34a853"/>
      <path d="M49 112H95" stroke="#4285f4"/>
    </g>
    <text x="150" y="86" font-family="Arial,Helvetica,sans-serif" font-size="70" font-weight="500" fill="#5f6368">Google Cloud</text>
  `,
  amazonCompanyWordmark: `
    <text x="0" y="95" font-family="Arial Black,Arial,Helvetica,sans-serif" font-size="104" font-weight="900" fill="#232323">amazon</text>
    <path d="M70 113C150 158 285 157 370 112" fill="none" stroke="#ff9900" stroke-width="15" stroke-linecap="round"/>
    <path d="M359 99L406 91L395 137" fill="none" stroke="#ff9900" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
  `,
  amazonDotCom: `
    <text x="0" y="50" font-family="Arial Black,Arial,Helvetica,sans-serif" font-size="54" font-weight="900" fill="#050505">amazon</text>
    <text x="226" y="50" font-family="Arial,Helvetica,sans-serif" font-size="54" font-weight="400" fill="#050505">.com</text>
    <path d="M45 65C84 86 149 86 191 63" fill="none" stroke="#ff9900" stroke-width="7" stroke-linecap="round"/>
    <path d="M184 56L207 52L201 76" fill="none" stroke="#ff9900" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  `,
  amazonPhysicalStores: `
    <g transform="translate(0 10)">
      <text x="0" y="55" font-family="Arial,Helvetica,sans-serif" font-size="57" font-weight="700" fill="#70b62c">fresh</text>
      <path d="M4 76C38 100 92 98 128 73" fill="none" stroke="#70b62c" stroke-width="6" stroke-linecap="round"/>
      <path d="M119 66L140 61L134 83" fill="none" stroke="#70b62c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g transform="translate(158 0)" fill="#00674f" font-family="Georgia,'Times New Roman',serif" font-weight="800">
      <path d="M120 9C145 3 160 18 164 42C146 36 128 28 120 9Z" fill="none" stroke="#00674f" stroke-width="8" stroke-linecap="round"/>
      <text x="0" y="45" font-size="43">WHOLE</text>
      <text x="3" y="86" font-size="43">FOODS</text>
      <rect x="10" y="96" width="156" height="24" rx="4" fill="#00674f"/>
      <text x="88" y="116" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="18" font-weight="800" fill="#f2f2f2">MARKET</text>
    </g>
  `,
  amazonAdvertisingCluster: `
    <g transform="translate(0 30)">
      <text x="0" y="42" font-family="Arial,Helvetica,sans-serif" font-size="39" font-weight="700" fill="#46515d">amazon</text>
      <text x="146" y="42" font-family="Arial,Helvetica,sans-serif" font-size="39" font-weight="500" fill="#46515d">ads</text>
      <path d="M28 52C65 72 124 70 159 49" fill="none" stroke="#232f3e" stroke-width="5" stroke-linecap="round"/>
      <path d="M151 43L170 41L164 60" fill="none" stroke="#232f3e" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g transform="translate(226 0)" fill="#6d45a8" font-family="Arial Black,Arial,Helvetica,sans-serif" font-weight="900">
      <path d="M139 0H200V45L175 69H150V95H117V69H87V18H139Z" fill="none" stroke="#6d45a8" stroke-width="8" stroke-linejoin="round"/>
      <rect x="144" y="20" width="9" height="26" fill="#6d45a8"/>
      <rect x="169" y="20" width="9" height="26" fill="#6d45a8"/>
      <text x="0" y="98" font-size="71">twitch</text>
    </g>
  `,
  amazonSubscriptionCluster: `
    <g transform="translate(0 18)">
      <text x="0" y="62" font-family="Arial,Helvetica,sans-serif" font-size="65" font-weight="800" fill="#00a8e1">prime</text>
      <path d="M6 83C56 115 145 113 198 79" fill="none" stroke="#00a8e1" stroke-width="8" stroke-linecap="round"/>
      <path d="M189 70L216 67L207 94" fill="none" stroke="#00a8e1" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g transform="translate(230 8)">
      <text x="0" y="71" font-family="Arial,Helvetica,sans-serif" font-size="61" font-weight="700" fill="#232323">audible</text>
      <path d="M170 14C193 5 220 12 236 32" fill="none" stroke="#ff9900" stroke-width="6" stroke-linecap="round"/>
      <path d="M158 27C184 16 214 23 232 45" fill="none" stroke="#ff9900" stroke-width="6" stroke-linecap="round"/>
      <path d="M150 41C178 30 210 38 230 62" fill="none" stroke="#ff9900" stroke-width="6" stroke-linecap="round"/>
    </g>
  `,
  amazonAws: `
    <text x="0" y="85" font-family="Arial,Helvetica,sans-serif" font-size="105" font-weight="700" fill="#232f3e">aws</text>
    <path d="M10 114C86 160 226 156 300 108" fill="none" stroke="#ff9900" stroke-width="13" stroke-linecap="round"/>
    <path d="M289 92L330 86L319 127" fill="none" stroke="#ff9900" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
  `,
  qualcommCompanyWordmark: `
    <text x="0" y="94" font-family="Arial Rounded MT Bold,Arial,Helvetica,sans-serif" font-size="94" font-weight="700" fill="#3454dd">Qualcomm</text>
  `,
  qualcommHandsetsPhone: `
    <rect x="16" y="6" width="35" height="76" rx="2" fill="#f2f2f2" stroke="#3454dd" stroke-width="4"/>
    <rect x="20" y="12" width="27" height="58" rx="1" fill="#f2f2f2" stroke="#dbe2ef" stroke-width="2"/>
    <rect x="26" y="73" width="16" height="4" rx="1.5" fill="#3454dd"/>
  `,
  qualcommAutomotiveCar: `
    <path d="M28 60H98C108 60 113 65 114 75V87H104C102 78 96 73 87 73H38C29 73 23 78 21 87H11V75C12 66 18 60 28 60Z" fill="#3454dd"/>
    <path d="M41 42H84C93 42 101 50 107 61H19C25 50 32 42 41 42Z" fill="#3454dd"/>
    <path d="M43 49H82C88 49 93 54 97 60H29C33 54 37 49 43 49Z" fill="#f2f2f2"/>
    <path d="M20 76L42 79C45 80 47 84 45 87H20Z" fill="#f2f2f2"/>
    <path d="M105 76L83 79C80 80 78 84 80 87H105Z" fill="#f2f2f2"/>
    <path d="M44 30C57 20 79 19 94 29" fill="none" stroke="#dfe7f6" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 7"/>
    <path d="M86 24C104 30 116 40 120 55" fill="none" stroke="#dfe7f6" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 7"/>
    <path d="M32 24C19 29 10 39 6 53" fill="none" stroke="#dfe7f6" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 7"/>
  `,
  qualcommIotCluster: `
    <circle cx="36" cy="33" r="22" fill="#3454dd"/>
    <circle cx="80" cy="33" r="22" fill="#3454dd"/>
    <circle cx="58" cy="78" r="22" fill="#3454dd"/>
    <path d="M50 16C56 13 64 13 70 16" fill="none" stroke="#3454dd" stroke-width="5" stroke-linecap="round"/>
    <path d="M22 58C25 66 31 73 39 77" fill="none" stroke="#3454dd" stroke-width="5" stroke-linecap="round"/>
    <path d="M94 58C91 66 85 73 77 77" fill="none" stroke="#3454dd" stroke-width="5" stroke-linecap="round"/>
    <path d="M24 33L36 25V41L24 33Z" fill="#f2f2f2"/>
    <path d="M40 27V39M46 30V36" stroke="#f2f2f2" stroke-width="3" stroke-linecap="round"/>
    <path d="M80 21C91 21 98 30 94 40C90 51 70 51 66 40C62 30 69 21 80 21Z" fill="none" stroke="#f2f2f2" stroke-width="4"/>
    <circle cx="80" cy="34" r="7" fill="#f2f2f2"/>
    <rect x="43" y="79" width="30" height="13" fill="#f2f2f2"/>
    <path d="M47 79V67M54 79V72M61 79V63M68 79V69" stroke="#f2f2f2" stroke-width="3" stroke-linecap="round"/>
    <path d="M39 92H77" stroke="#f2f2f2" stroke-width="4" stroke-linecap="round"/>
  `,
  samsungCompanyWordmark: `
    <text x="0" y="118" font-family="Arial Black,Arial,Helvetica,sans-serif" font-size="122" font-weight="900" textLength="604" lengthAdjust="spacingAndGlyphs" fill="#2029a5">SAMSUNG</text>
  `,
  samsungDeviceSolutionsChipCluster: `
    <defs>
      <linearGradient id="samsung-chip-dark" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#1f1f1f"/>
        <stop offset="1" stop-color="#050505"/>
      </linearGradient>
      <linearGradient id="samsung-chip-gold" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#d5a55e"/>
        <stop offset="1" stop-color="#7f4b1c"/>
      </linearGradient>
    </defs>
    <g transform="translate(2 0)">
      <rect x="0" y="0" width="45" height="45" rx="2" fill="url(#samsung-chip-dark)"/>
      <rect x="54" y="0" width="28" height="45" rx="2" fill="url(#samsung-chip-dark)"/>
      <g opacity="0.26" fill="#3d3d3d">
        <circle cx="14" cy="14" r="6"/>
        <circle cx="30" cy="32" r="5"/>
        <circle cx="66" cy="15" r="4"/>
      </g>
      <g transform="translate(24 54)">
        <rect x="0" y="0" width="32" height="32" fill="url(#samsung-chip-gold)" stroke="#4a2c14" stroke-width="2"/>
        ${Array.from({ length: 4 }, (_, row) => Array.from({ length: 4 }, (_, col) => `<circle cx="${7 + col * 6}" cy="${7 + row * 6}" r="1.8" fill="#f4e6cf"/>`).join('')).join('')}
      </g>
      <g transform="translate(66 50)">
        <rect x="0" y="0" width="54" height="54" fill="url(#samsung-chip-gold)" stroke="#4a2c14" stroke-width="2"/>
        ${Array.from({ length: 6 }, (_, row) => Array.from({ length: 6 }, (_, col) => `<circle cx="${8 + col * 8}" cy="${8 + row * 8}" r="2.2" fill="#f4e6cf"/>`).join('')).join('')}
      </g>
    </g>
  `,
  samsungDeviceExperienceCluster: `
    <g transform="translate(0 18)" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M0 19C36 19 67 5 100 5C129 5 146 34 177 34C210 34 232 11 264 10C287 10 306 31 328 31" stroke="#0c2b8e" stroke-width="3"/>
      <g transform="translate(9 4)">
        <rect x="0" y="13" width="36" height="20" rx="3" fill="#151515"/>
        <rect x="5" y="17" width="26" height="12" fill="#163d85"/>
        <path d="M10 23H28" stroke="#e7c46c" stroke-width="2"/>
      </g>
      <g transform="translate(56 1)">
        <rect x="0" y="2" width="44" height="28" rx="2" fill="#111"/>
        <path d="M5 19C18 4 28 30 39 12" stroke="#ef2c26" stroke-width="4"/>
        <path d="M5 24H39" stroke="#e7c46c" stroke-width="2"/>
      </g>
      <g transform="translate(117 6)">
        <circle cx="17" cy="17" r="16" fill="#f5f5f5" stroke="#111" stroke-width="4"/>
        <path d="M7 17H13L17 9L23 25L27 17H32" stroke="#0087a8" stroke-width="3"/>
      </g>
      <g transform="translate(172 0)">
        <rect x="0" y="0" width="42" height="45" rx="5" fill="#111"/>
        <circle cx="21" cy="21" r="13" fill="#153b8b"/>
        <path d="M14 21H27L24 28H17Z" fill="#f7c900"/>
      </g>
      <g transform="translate(230 -5)">
        <rect x="0" y="0" width="18" height="58" fill="#0f0f0f"/>
        <rect x="22" y="0" width="25" height="58" rx="2" fill="#141414"/>
        <rect x="28" y="12" width="13" height="30" fill="#203b73"/>
        <path d="M5 17H13V40H5Z" stroke="#9d9d9d" stroke-width="2"/>
        <circle cx="34" cy="27" r="4" fill="#ef2c26"/>
      </g>
      <g transform="translate(296 15)">
        <path d="M0 17C8 2 33 1 39 19L30 23C24 11 13 10 8 22Z" fill="#111"/>
        <circle cx="39" cy="19" r="5" fill="#d1a54a"/>
      </g>
    </g>
  `,
  samsungDisplayWordmark: `
    <text x="0" y="45" font-family="Arial Black,Arial,Helvetica,sans-serif" font-size="45" font-weight="900" textLength="320" lengthAdjust="spacingAndGlyphs" fill="#005095">SAMSUNG DISPLAY</text>
  `,
  samsungHarmanWordmark: `
    <g fill="none" stroke="#0b9bd5" stroke-width="9" stroke-linecap="round">
      <path d="M44 64C102 22 214 8 287 49"/>
      <path d="M6 142C60 104 158 99 237 124"/>
      <path d="M293 52C303 68 306 80 303 94"/>
      <path d="M58 158C88 174 138 176 184 163"/>
    </g>
    <text x="0" y="122" font-family="Arial,Helvetica,sans-serif" font-size="70" font-weight="500" letter-spacing="7" fill="#0082bd">HARMAN</text>
    <text x="132" y="153" font-family="Arial Black,Arial,Helvetica,sans-serif" font-size="16" font-weight="900" fill="#1d1d1d">A SAMSUNG COMPANY</text>
  `
};

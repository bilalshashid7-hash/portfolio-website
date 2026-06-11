// High-fidelity SVG Mockup Generation for Portfolio Showcases
// Pre-assignment of these files completely eliminates blank placeholders.
// All mockups align with the Black/Teal (#2F4F4E) premium theme.

function getGridBackground(w: number, h: number): string {
  return `
    <defs>
      <pattern id="sec-grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2F4F4E" stroke-width="0.3" stroke-opacity="0.15" />
        <circle cx="40" cy="40" r="1.5" fill="#2F4F4E" fill-opacity="0.3" />
      </pattern>
      <linearGradient id="panel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0a1010" stop-opacity="0.9" />
        <stop offset="100%" stop-color="#020404" stop-opacity="0.95" />
      </linearGradient>
      <linearGradient id="acc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#2F4F4E" />
        <stop offset="100%" stop-color="#192c2b" />
      </linearGradient>
      <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect width="${w}" height="${h}" fill="#020202" />
    <rect width="${w}" height="${h}" fill="url(#sec-grid)" />
  `;
}

function getSystemHeader(title: string, code: string): string {
  return `
    <!-- Top System Nav Frame -->
    <rect x="20" y="20" width="760" height="50" rx="6" fill="#040808" stroke="#2F4F4E" stroke-width="0.5" />
    <circle cx="45" cy="45" r="5" fill="#2F4F4E" filter="url(#glow)" />
    <circle cx="60" cy="45" r="3" fill="#2F4F4E" fill-opacity="0.4" />
    <circle cx="72" cy="45" r="3" fill="#2F4F4E" fill-opacity="0.4" />
    <text x="95" y="50" font-family="'JetBrains Mono', monospace" font-size="11" fill="#7d9e9c" letter-spacing="1">CONSOLE // SYSTEM_ONLINE</text>
    <text x="400" y="51" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="14" fill="#ffffff" text-anchor="middle" letter-spacing="2">${title.toUpperCase()}</text>
    <text x="760" y="50" font-family="'JetBrains Mono', monospace" font-size="11" fill="#2F4F4E" text-anchor="end">${code}</text>
    <path d="M 20 70 L 780 70" stroke="#2F4F4E" stroke-width="1" stroke-opacity="0.3" />
  `;
}

export function getPermanentAsset(id: string, label: string): string {
  let innerBody = "";
  const w = 800;
  const h = 600;

  if (id === "meta-user-uploaded") {
    const rawSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" height="100%">
        <defs>
          <radialGradient id="meta-glow" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stop-color="#0E1314" />
            <stop offset="100%" stop-color="#050708" />
          </radialGradient>
          <pattern id="meta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2F4F4E" stroke-width="0.3" stroke-opacity="0.15" />
            <circle cx="40" cy="40" r="1.5" fill="#2F4F4E" fill-opacity="0.3" />
          </pattern>
          <linearGradient id="meta-panel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0A1213" stop-opacity="0.95" />
            <stop offset="100%" stop-color="#030607" stop-opacity="0.98" />
          </linearGradient>
          <filter id="meta-glow-filter" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <!-- Background -->
        <rect width="${w}" height="${h}" fill="url(#meta-glow)" />
        <rect width="${w}" height="${h}" fill="url(#meta-grid)" />
        
        <!-- Outer Framed UI Container -->
        <rect x="15" y="15" width="770" height="570" rx="10" fill="#0E1314" stroke="#2F4F4E" stroke-width="1.2" />
        
        <!-- Meta Header bar -->
        <rect x="25" y="25" width="750" height="45" rx="6" fill="#060A0B" stroke="#2F4F4E" stroke-width="0.5" />
        <circle cx="45" cy="47" r="5" fill="#2F4F4E" filter="url(#meta-glow-filter)" />
        <text x="60" y="51" font-family="'JetBrains Mono', monospace" font-size="11" fill="#7D9E9C" font-weight="bold">META ADS MANAGER // ACCOUNT_CAMPAIGNS</text>
        <rect x="520" y="34" width="243" height="26" rx="4" fill="#2F4F4E" fill-opacity="0.2" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="641" y="51" font-family="'JetBrains Mono', monospace" font-size="9" fill="#FFFEFF" text-anchor="middle">LAST 30 DAYS: 19 APR - 18 MAY 2026</text>

        <!-- Search and filters -->
        <g transform="translate(30, 85)">
          <text x="0" y="15" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="14" fill="#FFFEFF" letter-spacing="1">VERIFIED OUTREACH DELIVERABLES</text>
          <text x="0" y="30" font-family="'JetBrains Mono', monospace" font-size="9" fill="#2F4F4E">CRITERION: Impressions &gt; 0 // Active // Delivery: Had delivery</text>
        </g>

        <!-- Meta Table Structure -->
        <rect x="30" y="135" width="740" height="335" rx="8" fill="#060A0B" stroke="#2F4F4E" stroke-width="0.6" />
        
        <!-- Action bar -->
        <rect x="30" y="135" width="740" height="42" rx="8" fill="#0A0F10" stroke="#2F4F4E" stroke-width="0.3" />
        
        <!-- Create button in custom styling -->
        <rect x="42" y="144" width="85" height="24" rx="4" fill="#2F4F4E" />
        <text x="84" y="159" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="10" fill="#FFFEFF" text-anchor="middle">+ CREATE</text>
        
        <!-- Other Actions buttons -->
        <rect x="135" y="144" width="80" height="24" rx="4" fill="#0A1112" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="175" y="159" font-family="'Space Grotesk', sans-serif" font-size="9" fill="#7D9E9C" text-anchor="middle">DUPLICATE</text>

        <rect x="223" y="144" width="55" height="24" rx="4" fill="#0A1112" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="250" y="159" font-family="'Space Grotesk', sans-serif" font-size="9" fill="#7D9E9C" text-anchor="middle">EDIT</text>
        
        <!-- Table headers -->
        <g transform="translate(30, 177)">
          <rect x="0" y="0" width="740" height="32" fill="#0D1314" opacity="0.9" />
          <line x1="0" y1="32" x2="740" y2="32" stroke="#2F4F4E" stroke-width="0.5" id="header_line_meta_dashboard" />
          
          <text x="15" y="20" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7D9E9C" font-weight="bold">AD SET NAME</text>
          <text x="240" y="20" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7D9E9C" font-weight="bold">RESULTS</text>
          <text x="355" y="20" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7D9E9C" font-weight="bold">COST PER RESULT</text>
          <text x="475" y="20" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7D9E9C" font-weight="bold">BUDGET</text>
          <text x="590" y="20" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7D9E9C" font-weight="bold">AMOUNT SPENT</text>
          <text x="680" y="20" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7D9E9C" font-weight="bold">IMPRESSIONS</text>
        </g>
        
        <!-- Table Row 1: Audience-Leads-WhatsApp -->
        <g transform="translate(30, 209)" id="meta_dashboard_whatsapp_row">
          <rect x="0" y="0" width="740" height="65" fill="#0F1618" opacity="0.6" />
          <line x1="12" y1="3" x2="12" y2="62" stroke="#2F4F4E" stroke-width="2" />
          <line x1="0" y1="65" x2="740" y2="65" stroke="#2F4F4E" stroke-width="0.5" />
          
          <!-- Toggle active button -->
          <circle cx="25" cy="32" r="6" fill="#2F4F4E" filter="url(#meta-glow-filter)" />
          <circle cx="25" cy="32" r="2.5" fill="#FFFEFF" />
          
          <text x="42" y="28" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="11" fill="#FFFEFF">Audience-Leads-WhatsApp</text>
          <text x="42" y="44" font-family="'JetBrains Mono', monospace" font-size="8" fill="#7D9E9C">Delivery :: Had delivery</text>
          
          <!-- Results -->
          <rect x="235" y="12" width="105" height="40" rx="4" fill="#141E1F" stroke="#2F4F4E" stroke-width="0.5" />
          <text x="287" y="28" font-family="'Space Grotesk', sans-serif" font-weight="950" font-size="11" fill="#FFFEFF" text-anchor="middle">368</text>
          <text x="287" y="40" font-family="'Space Grotesk', sans-serif" font-size="7" fill="#7D9E9C" text-anchor="middle">Messaging conv.</text>
          
          <!-- Cost -->
          <text x="355" y="28" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="11" fill="#FFFEFF">Rs12.15</text>
          <text x="355" y="42" font-family="'Space Grotesk', sans-serif" font-size="8" fill="#7D9E9C">Per messaging conversation</text>
          
          <!-- Budget -->
          <text x="475" y="36" font-family="'Space Grotesk', sans-serif" font-size="9" fill="#7D9E9C">Using campaign budget</text>
          
          <!-- Amount Spent-->
          <rect x="585" y="12" width="85" height="40" rx="4" fill="#2F4F4E" fill-opacity="0.1" stroke="#2F4F4E" stroke-width="0.5" />
          <text x="627" y="36" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="11" fill="#FFFEFF" text-anchor="middle">Rs4,472.02</text>
          
          <!-- Impressions -->
          <rect x="677" y="12" width="55" height="40" rx="4" fill="#141E1F" stroke="#2F4F4E" stroke-width="0.5" />
          <text x="704" y="36" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="10" fill="#FFFEFF" text-anchor="middle">45,458</text>
        </g>
        
        <!-- Table Row 2: New Awareness -->
        <g transform="translate(30, 274)" id="meta_dashboard_awareness_row">
          <rect x="0" y="0" width="740" height="65" fill="#060A0B" opacity="0.3" />
          <line x1="12" y1="3" x2="12" y2="62" stroke="#2F4F4E" stroke-width="2" stroke-opacity="0.7" />
          <line x1="0" y1="65" x2="740" y2="65" stroke="#2F4F4E" stroke-width="0.5" />
          
          <circle cx="25" cy="32" r="6" fill="#2F4F4E" stroke="#2F4F4E" stroke-width="0.5" />
          <circle cx="25" cy="32" r="2.5" fill="#FFFEFF" />
          
          <text x="42" y="28" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="11" fill="#7D9E9C">New Awareness</text>
          <text x="42" y="44" font-family="'JetBrains Mono', monospace" font-size="8" fill="#2F4F4E">Delivery :: Had delivery</text>
          
          <!-- Results section -->
          <rect x="235" y="12" width="105" height="40" rx="4" fill="#0D1314" stroke="#2F4F4E" stroke-width="0.5" stroke-opacity="0.5" />
          <text x="287" y="28" font-family="'Space Grotesk', sans-serif" font-weight="950" font-size="11" fill="#7D9E9C" text-anchor="middle">145,226</text>
          <text x="287" y="40" font-family="'Space Grotesk', sans-serif" font-size="8" fill="#2F4F4E" text-anchor="middle">Reach</text>
          
          <!-- Cost -->
          <text x="355" y="28" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="11" fill="#7D9E9C">Rs24.40</text>
          <text x="355" y="42" font-family="'Space Grotesk', sans-serif" font-size="8" fill="#2F4F4E">Per 1,000 reached</text>
          
          <!-- Budget -->
          <text x="475" y="36" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="10" fill="#FFFEFF">Rs525.00 Daily</text>
          
          <!-- Amount Spent -->
          <rect x="585" y="12" width="85" height="40" rx="4" fill="#0D1314" stroke="#2F4F4E" stroke-width="0.5" stroke-opacity="0.5" />
          <text x="627" y="36" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="11" fill="#7D9E9C" text-anchor="middle">Rs3,543.82</text>
          
          <!-- Impressions -->
          <rect x="677" y="12" width="55" height="40" rx="4" fill="#203434" fill-opacity="0.2" stroke="#2F4F4E" stroke-width="0.5" />
          <text x="704" y="36" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="10" fill="#FFFEFF" text-anchor="middle">194,958</text>
        </g>
        
        <!-- Table Total Row -->
        <g transform="translate(30, 339)" id="meta_dashboard_total_row">
          <rect x="0" y="0" width="740" height="45" fill="#090F10" />
          <line x1="0" y1="45" x2="740" y2="45" stroke="#2F4F4E" stroke-width="0.5" />
          
          <text x="42" y="26" font-family="'Space Grotesk', sans-serif" font-weight="950" font-size="11" fill="#FFFEFF">Results from 2 ad sets</text>
          
          <text x="287" y="26" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="10" fill="#7D9E9C" text-anchor="middle">145,594 Total</text>
          <text x="355" y="26" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="10" fill="#2F4F4E">Rs18.28 Avg</text>
          <text x="627" y="26" font-family="'Space Grotesk', sans-serif" font-weight="950" font-size="11" fill="#FFFEFF" text-anchor="middle">Rs8,015.84</text>
          <text x="704" y="26" font-family="'Space Grotesk', sans-serif" font-weight="950" font-size="11" fill="#FFFEFF" text-anchor="middle">240,416</text>
        </g>

        <!-- Red pointers matching user's helpful diagnostic marks -->
        <g id="meta_dashboard_arrows">
          <!-- Red arrow 1 points to Rs4,472.02 spent -->
          <path d="M 660 185 L 638 215" stroke="#FF5353" stroke-width="2.5" stroke-linecap="round" />
          <path d="M 638 215 L 647 213" stroke="#FF5353" stroke-width="2" stroke-linecap="round" />
          <path d="M 638 215 L 639 206" stroke="#FF5353" stroke-width="2" stroke-linecap="round" />
          
          <!-- Red arrow 2 points to 145,226 reach -->
          <path d="M 310 325 L 290 300" stroke="#FF5353" stroke-width="2.5" stroke-linecap="round" />
          <path d="M 290 300 L 298 300" stroke="#FF5353" stroke-width="2" stroke-linecap="round" />
          <path d="M 290 300 L 291 308" stroke="#FF5353" stroke-width="2" stroke-linecap="round" />
          
          <!-- Red arrow 3 points to Rs3,543.82 spent -->
          <path d="M 655 330 L 632 305" stroke="#FF5353" stroke-width="2.5" stroke-linecap="round" />
          <path d="M 632 305 L 640 306" stroke="#FF5353" stroke-width="2" stroke-linecap="round" />
          <path d="M 632 305 L 634 313" stroke="#FF5353" stroke-width="2" stroke-linecap="round" />

          <!-- Red arrow 4 points to 194,958 Impressions -->
          <path d="M 735 185 L 712 215" stroke="#FF5353" stroke-width="2.5" stroke-linecap="round" />
          <path d="M 712 215 L 721 213" stroke="#FF5353" stroke-width="2" stroke-linecap="round" />
          <path d="M 712 215 L 713 206" stroke="#FF5353" stroke-width="2" stroke-linecap="round" />

          <!-- Transparent red boxes around selected indicators -->
          <rect x="238" y="217" width="98" height="24" fill="none" stroke="#FF5353" stroke-width="1.2" />
          <rect x="588" y="217" width="79" height="24" fill="none" stroke="#FF5353" stroke-width="1.2" />
          <rect x="588" y="282" width="79" height="24" fill="none" stroke="#FF5353" stroke-width="1.2" />
          <rect x="680" y="282" width="48" height="24" fill="none" stroke="#FF5353" stroke-width="1.2" />
        </g>

        <!-- Bottom verification details -->
        <g transform="translate(30, 480)" id="meta_dashboard_footer">
          <rect x="0" y="0" width="740" height="75" rx="6" fill="#040808" stroke="#2F4F4E" stroke-width="0.5" />
          <text x="20" y="22" font-family="'JetBrains Mono', monospace" font-size="10" fill="#FFFEFF" font-weight="bold">> ACCOUNT STATUS_OKAY</text>
          <text x="20" y="38" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7D9E9C">STATUS::DIRECT_WHATSAPP_LEAD_ACQUISITION_VERIFIED::TRUE [PULSE: 100% HEALTH]</text>
          <text x="20" y="52" font-family="'JetBrains Mono', monospace" font-size="9" fill="#2F4F4E">OBJECTIVE: MULTI-REGION OUTREACH ACCRETION // ACQUISITION BUDGET EFFICIENCY: High</text>
          
          <rect x="620" y="15" width="105" height="42" rx="4" fill="#2F4F4E" fill-opacity="0.15" stroke="#2F4F4E" stroke-width="0.8" />
          <text x="672" y="41" font-family="'Space Grotesk', sans-serif" font-weight="950" font-size="12" fill="#FFFEFF" text-anchor="middle" filter="url(#meta-glow-filter)">SECURE</text>
        </g>
      </svg>
    `;
    return "data:image/svg+xml;utf8," + encodeURIComponent(rawSvg.trim());
  }

  if (id === "profile") {
    // --- SLEEK FUTURISTIC PROFILE MATRIX AVATAR ---
    const pw = 400;
    const ph = 400;
    const prSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${pw} ${ph}" width="100%" height="100%">
        <defs>
          <radialGradient id="avatar-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#2F4F4E" stop-opacity="0.3" />
            <stop offset="100%" stop-color="#020202" stop-opacity="0.95" />
          </radialGradient>
          <linearGradient id="avatar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#2f4f4e" />
            <stop offset="100%" stop-color="#142120" />
          </linearGradient>
        </defs>
        <rect width="${pw}" height="${ph}" fill="#020202" />
        <circle cx="200" cy="200" r="180" fill="url(#avatar-glow)" stroke="#2F4F4E" stroke-width="0.5" stroke-opacity="0.3" />
        <circle cx="200" cy="200" r="160" fill="none" stroke="#2F4F4E" stroke-width="1" stroke-dasharray="4 8" stroke-opacity="0.4" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="#2F4F4E" stroke-width="0.5" stroke-opacity="0.2" />

        <!-- High-fidelity HUD layout graphics -->
        <path d="M 120 200 L 280 200" stroke="#2F4F4E" stroke-width="0.5" stroke-opacity="0.2" />
        <path d="M 200 120 L 200 280" stroke="#2F4F4E" stroke-width="0.5" stroke-opacity="0.2" />
        
        <!-- Highly-polished Abstract user bust portrait -->
        <g transform="translate(100, 100)">
          <!-- Shoulders -->
          <path d="M 20 170 C 20 120, 180 120, 180 170 Z" fill="url(#avatar-grad)" stroke="#2F4F4E" stroke-width="1.5" />
          <!-- Head -->
          <circle cx="100" cy="75" r="42" fill="url(#avatar-grad)" stroke="#2F4F4E" stroke-width="1.5" />
          <!-- Glasses -->
          <path d="M 82 75 L 118 75" stroke="#ffffff" stroke-width="1" stroke-opacity="0.6" />
          <path d="M 100 75 L 100 95" stroke="#ffffff" stroke-width="1" stroke-opacity="0.4" />
        </g>

        <!-- Digital Data Core -->
        <text x="200" y="310" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="bold" fill="#7d9e9c" text-anchor="middle" letter-spacing="3">ACQUISITION // STRATEGIST</text>
        <text x="200" y="328" font-family="'Space Grotesk', sans-serif" font-weight="950" font-size="16" fill="#ffffff" text-anchor="middle" letter-spacing="4">BILAL SHAHID</text>
        <text x="200" y="344" font-family="'JetBrains Mono', monospace" font-size="8" fill="#2F4F4E" text-anchor="middle" letter-spacing="1">ID :: BS-MARKETING-3.0</text>

        <!-- Dynamic Hologram circular brackets -->
        <path d="M 50 160 A 150 150 0 0 0 50 240" fill="none" stroke="#2F4F4E" stroke-width="2" />
        <path d="M 350 160 A 150 150 0 0 1 350 240" fill="none" stroke="#2F4F4E" stroke-width="2" />
        <circle cx="50" cy="200" r="2.5" fill="#ffffff" />
        <circle cx="350" cy="200" r="2.5" fill="#ffffff" />
      </svg>
    `;
    return "data:image/svg+xml;utf8," + encodeURIComponent(prSvg.trim());
  }

  if (id.startsWith("meta")) {
    // --- META ADS CAMPAIGNS ---
    const campaignStats = id === "meta-01" 
      ? { leads: "1,482", spend: "$8,420", roas: "4.82x", ctr: "2.91%" }
      : id === "meta-02"
      ? { leads: "2,912", spend: "$15,120", roas: "5.10x", ctr: "3.12%" }
      : id === "meta-03"
      ? { leads: "951", spend: "$5,410", roas: "3.95x", ctr: "2.40%" }
      : { leads: "1,204", spend: "$6,900", roas: "4.15x", ctr: "2.68%" };

    innerBody = `
      <!-- KPI Scoreboards -->
      <g transform="translate(20, 90)">
        <!-- Card 1: Leads -->
        <rect x="0" y="0" width="175" height="85" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="15" y="25" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">CAMPAIGN_LEADS</text>
        <text x="15" y="60" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="28" fill="#ffffff">${campaignStats.leads}</text>
        <rect x="15" y="70" width="145" height="3" fill="#2F4F4E" rx="1.5" />
        <rect x="15" y="70" width="115" height="3" fill="#ffffff" rx="1.5" filter="url(#glow)" />

        <!-- Card 2: Spend -->
        <rect x="195" y="0" width="175" height="85" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="210" y="25" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">BUDGET_DISPATCHED</text>
        <text x="210" y="60" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="26" fill="#ffffff">${campaignStats.spend}</text>
        
        <!-- Card 3: ROAS -->
        <rect x="390" y="0" width="175" height="85" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="405" y="25" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">PORTFOLIO_ROAS</text>
        <text x="405" y="60" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="28" fill="#ffffff">${campaignStats.roas}</text>

        <!-- Card 4: CTR -->
        <rect x="585" y="0" width="175" height="85" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="600" y="25" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">INTERACT_CTR</text>
        <text x="600" y="60" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="28" fill="#2F4F4E" filter="url(#glow)">${campaignStats.ctr}</text>
      </g>

      <!-- Center Performance Graph Panel -->
      <g transform="translate(20, 195)">
        <rect x="0" y="0" width="480" height="260" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="20" y="30" font-family="'JetBrains Mono', monospace" font-size="11" fill="#ffffff">PERFORMANCE_ROUTING // ACQUISITION_DYNAMICS</text>
        
        <!-- Grid horizontal lines inside graph -->
        <line x1="40" y1="70" x2="440" y2="70" stroke="#2F4F4E" stroke-width="0.5" stroke-opacity="0.2" />
        <line x1="40" y1="120" x2="440" y2="120" stroke="#2F4F4E" stroke-width="0.5" stroke-opacity="0.2" />
        <line x1="40" y1="170" x2="440" y2="170" stroke="#2F4F4E" stroke-width="0.5" stroke-opacity="0.2" />
        <line x1="40" y1="220" x2="440" y2="220" stroke="#2F4F4E" stroke-width="0.5" stroke-opacity="0.4" />

        <!-- Neon Plot Line chart data -->
        <path d="M 40 180 L 100 160 L 160 190 L 220 110 L 280 80 L 340 130 L 400 90 L 440 60" fill="none" stroke="#2F4F4E" stroke-width="3" filter="url(#glow)" />
        <path d="M 40 180 L 100 160 L 160 190 L 220 110 L 280 80 L 340 130 L 400 90 L 440 60 L 440 220 L 40 220 Z" fill="url(#acc-grad)" fill-opacity="0.1" />

        <circle cx="280" cy="80" r="5" fill="#ffffff" stroke="#2F4F4E" stroke-width="2" filter="url(#glow)" />
        <text x="280" y="65" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="10" fill="#ffffff" text-anchor="middle">PEAK: ${campaignStats.roas}</text>

        <!-- X Axis coordinate details -->
        <text x="40" y="240" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7d9e9c">W_01</text>
        <text x="140" y="240" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7d9e9c">W_02</text>
        <text x="240" y="240" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7d9e9c">W_03</text>
        <text x="340" y="240" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7d9e9c">W_04</text>
        <text x="440" y="240" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7d9e9c">W_05</text>
      </g>

      <!-- Right Side Audience Strategy Panel -->
      <g transform="translate(520, 195)">
        <rect x="0" y="0" width="260" height="260" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="20" y="30" font-family="'JetBrains Mono', monospace" font-size="11" fill="#ffffff">AUDIENCE_HIERARCHY</text>
        
        <!-- Interactive schematic representation list of Audiences -->
        <g transform="translate(20, 55)">
          <rect x="0" y="0" width="220" height="40" rx="4" fill="#040808" stroke="#2F4F4E" stroke-width="0.5" />
          <text x="15" y="25" font-family="'JetBrains Mono', monospace" font-size="11" fill="#ffffff">01 // Lookalike 1%</text>
          <text x="205" y="25" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#2F4F4E" text-anchor="end">ACTIVE</text>
        </g>

        <g transform="translate(20, 105)">
          <rect x="0" y="0" width="220" height="40" rx="4" fill="#040808" stroke="#2F4F4E" stroke-width="0.5" stroke-opacity="0.5" />
          <text x="15" y="25" font-family="'JetBrains Mono', monospace" font-size="11" fill="#7d9e9c">02 // Custom Purchase</text>
          <text x="205" y="25" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#2F4F4E" text-anchor="end">ACTIVE</text>
        </g>

        <g transform="translate(20, 155)">
          <rect x="0" y="0" width="220" height="40" rx="4" fill="#040808" stroke="#2F4F4E" stroke-width="0.5" stroke-opacity="0.3" />
          <text x="15" y="25" font-family="'JetBrains Mono', monospace" font-size="11" fill="#7d9e9c">03 // Broad Segment</text>
          <text x="205" y="25" font-family="'JetBrains Mono', monospace" font-weight="bold" font-size="11" fill="#2F4F4E" text-anchor="end">TESTING</text>
        </g>

        <!-- Progress bar visualization -->
        <text x="20" y="222" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">SEGMENT_CONVERSION_EFFICIENCY</text>
        <rect x="20" y="232" width="220" height="8" rx="4" fill="#0d1f1e" />
        <rect x="20" y="232" width="176" height="8" rx="4" fill="#2F4F4E" filter="url(#glow)" />
      </g>

      <!-- Bottom System Terminal Parameters -->
      <g transform="translate(20, 475)">
        <rect x="0" y="0" width="760" height="100" rx="8" fill="#040808" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="20" y="25" font-family="'JetBrains Mono', monospace" font-size="11" fill="#ffffff" font-weight="bold">> DETAILED_TELEMETRY</text>
        <text x="20" y="50" font-family="'JetBrains Mono', monospace" font-size="11" fill="#7d9e9c">CORE::METADATA_ADS_PORTFOLIO_DELIVER_TARGET::PASS</text>
        <text x="20" y="70" font-family="'JetBrains Mono', monospace" font-size="11" fill="#7d9e9c">STATUS::VERIFIED_CONVERSION_PIXEL_TRACKS_OKAY::TRUE</text>
        <rect x="640" y="30" width="100" height="40" rx="6" fill="#2F4F4E" fill-opacity="0.15" stroke="#2F4F4E" stroke-width="1" />
        <text x="690" y="54" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="12" fill="#ffffff" text-anchor="middle" filter="url(#glow)">SECURE_REF</text>
      </g>
    `;

  } else if (id.startsWith("google")) {
    // --- GOOGLE ADS CAMPAIGNS ---
    const stats = id === "google-01"
      ? { imp: "410.2K", ctr: "5.41%", clicks: "22,192" }
      : id === "google-02"
      ? { imp: "820.5K", ctr: "6.12%", clicks: "50,215" }
      : id === "google-03"
      ? { imp: "240.1K", ctr: "4.80%", clicks: "11,524" }
      : id === "google-04"
      ? { imp: "910.4K", ctr: "5.82%", clicks: "52,985" }
      : id === "google-05"
      ? { imp: "512.9K", ctr: "5.11%", clicks: "26,211" }
      : { imp: "672.4K", ctr: "5.94%", clicks: "39,942" };

    innerBody = `
      <!-- KPI stats row -->
      <g transform="translate(20, 90)">
        <rect x="0" y="0" width="240" height="80" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="20" y="25" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">IMP_TOTAL</text>
        <text x="20" y="60" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="28" fill="#ffffff">${stats.imp}</text>

        <rect x="260" y="0" width="240" height="80" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="280" y="25" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">LINK_CLICKS</text>
        <text x="280" y="60" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="28" fill="#ffffff">${stats.clicks}</text>

        <rect x="520" y="0" width="240" height="80" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="540" y="25" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">AVG_PERFORMANCE_CTR</text>
        <text x="540" y="60" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="28" fill="#2F4F4E" filter="url(#glow)">${stats.ctr}</text>
      </g>

      <!-- Main Visualized Component -->
      <g transform="translate(20, 190)">
        <rect x="0" y="0" width="760" height="260" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="25" y="30" font-family="'JetBrains Mono', monospace" font-size="11" fill="#ffffff">GOOGLE_AD_ENGINE_STRATEGY // OPTIMIZATION_DOCK</text>
        
        <!-- Multi series column bar visualizations -->
        <g transform="translate(40, 60)">
          <!-- Bar 1 -->
          <rect x="0" y="120" width="50" height="40" rx="3" fill="#0d1f1e" stroke="#2F4F4E" stroke-width="0.5" />
          <rect x="0" y="40" width="50" height="120" rx="3" fill="#2F4F4E" />
          <text x="25" y="180" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7d9e9c" text-anchor="middle">S_01</text>

          <!-- Bar 2 -->
          <rect x="110" y="100" width="50" height="60" rx="3" fill="#0d1f1e" stroke="#2F4F4E" stroke-width="0.5" />
          <rect x="110" y="10" width="50" height="90" rx="3" fill="#2F4F4E" filter="url(#glow)" />
          <text x="135" y="180" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7d9e9c" text-anchor="middle">S_02</text>

          <!-- Bar 3 -->
          <rect x="220" y="80" width="50" height="80" rx="3" fill="#0d1f1e" stroke="#2F4F4E" stroke-width="0.5" />
          <rect x="220" y="50" width="50" height="30" rx="3" fill="#ffffff" filter="url(#glow)" stroke="#2F4F4E" stroke-width="1" />
          <text x="245" y="180" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7d9e9c" text-anchor="middle">S_03</text>

          <!-- Bar 4 (Peak) -->
          <rect x="330" y="130" width="50" height="30" rx="3" fill="#0d1f1e" stroke="#2F4F4E" stroke-width="0.5" />
          <rect x="330" y="0" width="50" height="130" rx="3" fill="#2F4F4E" />
          <text x="355" y="180" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7d9e9c" text-anchor="middle">S_04</text>

          <!-- Bar 5 -->
          <rect x="440" y="70" width="50" height="90" rx="3" fill="#0d1f1e" stroke="#2F4F4E" stroke-width="0.5" />
          <rect x="440" y="30" width="50" height="40" rx="3" fill="#7d9e9c" opacity="0.6" />
          <text x="465" y="180" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7d9e9c" text-anchor="middle">S_05</text>

          <!-- Bar 6 -->
          <rect x="550" y="110" width="50" height="50" rx="3" fill="#0d1f1e" stroke="#2F4F4E" stroke-width="0.5" />
          <rect x="550" y="60" width="50" height="50" rx="3" fill="#2F4F4E" />
          <text x="575" y="180" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7d9e9c" text-anchor="middle">S_06</text>
        </g>

        <!-- Right Side Side Note inside dynamic card -->
        <g transform="translate(650, 40)">
          <rect x="-10" y="10" width="105" height="190" rx="6" fill="#040808" stroke="#2F4F4E" stroke-width="0.5" stroke-dasharray="3 3" />
          <text x="42" y="40" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c" text-anchor="middle">REVENUE</text>
          <text x="42" y="65" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="18" fill="#ffffff" text-anchor="middle">+192%</text>
          
          <text x="42" y="115" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7d9e9c" text-anchor="middle">CPA_COHORT</text>
          <text x="42" y="140" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="18" fill="#2F4F4E" text-anchor="middle" filter="url(#glow)">-34%</text>
        </g>
      </g>

      <!-- Bottom Panel showing Search queries keyword cluster -->
      <g transform="translate(20, 470)">
        <rect x="0" y="0" width="760" height="110" rx="8" fill="#040808" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="25" y="25" font-family="'JetBrains Mono', monospace" font-size="11" fill="#ffffff">> ACTIVE_SEARCH_KEYWORDS_DELIVERY</text>
        
        <!-- Keyword Tag 1 -->
        <g transform="translate(25, 45)">
          <rect x="0" y="0" width="160" height="26" rx="4" fill="#2F4F4E" fill-opacity="0.1" stroke="#2F4F4E" stroke-width="0.5" />
          <text x="15" y="16" font-family="'JetBrains Mono', monospace" font-size="10" fill="#ffffff">"growth marketer" [Exact]</text>
        </g>

        <!-- Keyword Tag 2 -->
        <g transform="translate(195, 45)">
          <rect x="0" y="0" width="200" height="26" rx="4" fill="#2F4F4E" fill-opacity="0.1" stroke="#2F4F4E" stroke-width="0.5" />
          <text x="15" y="16" font-family="'JetBrains Mono', monospace" font-size="10" fill="#ffffff">digital marketing agency [Broad]</text>
        </g>

        <!-- Keyword Tag 3 -->
        <g transform="translate(405, 45)">
          <rect x="0" y="0" width="180" height="26" rx="4" fill="#2F4F4E" fill-opacity="0.1" stroke="#2F4F4E" stroke-width="0.5" />
          <text x="15" y="16" font-family="'JetBrains Mono', monospace" font-size="10" fill="#ffffff">"conversion tracker GTM" [Exact]</text>
        </g>

        <!-- Keyword Tag 4 -->
        <g transform="translate(595, 45)">
          <rect x="0" y="0" width="140" height="26" rx="4" fill="#020202" stroke="#2F4F4E" stroke-width="0.5" stroke-dasharray="2 2" />
          <text x="15" y="16" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">google analytics 4</text>
        </g>

        <!-- Status trace line -->
        <text x="25" y="95" font-family="'JetBrains Mono', monospace" font-size="10" fill="#2F4F4E" filter="url(#glow)">CONSOLE_VERDICT::SYNC_TO_GOOGLE_ADS_SERVER_DOCK_SUCCESSFUL (LATENCY: 42ms)</text>
      </g>
    `;

  } else if (id.startsWith("analytics")) {
    // --- GOOGLE ANALYTICS & GTM ---
    const tagConfig = id === "analytics-01"
      ? { label: "GA4 DATA STREAM CONNECTION", spec: "G-9KLP0D8G9X", stat: "STREAMING" }
      : id === "analytics-02"
      ? { label: "GTM VESSEL INITIALIZATION", spec: "GTM-K8JD92G", stat: "ACTIVE" }
      : id === "analytics-03"
      ? { label: "EVENT CUSTOM SCHEMATICS", spec: "purchase { currency: 'PKR' }", stat: "FIRED" }
      : id === "analytics-04"
      ? { label: "CLICK SELECTOR COORDINATES", spec: "btn-submit-landing-page", stat: "MAPPED" }
      : { label: "SCROLL BAR PERCENTAGE SENSOR", spec: "threshold [25%, 50%, 75%, 90%]", stat: "DEPLOYED" };

    innerBody = `
      <!-- Code Console / Connection Grid -->
      <g transform="translate(20, 90)">
        <rect x="0" y="0" width="760" height="360" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        
        <!-- Header panel -->
        <rect x="15" y="15" width="730" height="42" rx="4" fill="#040808" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="30" y="40" font-family="'JetBrains Mono', monospace" font-size="11" fill="#ffffff">${tagConfig.label}</text>
        <rect x="635" y="24" width="95" height="24" rx="4" fill="#2F4F4E" fill-opacity="0.2" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="682" y="40" font-family="'JetBrains Mono', monospace" font-size="10" fill="#ffffff" text-anchor="middle" filter="url(#glow)">${tagConfig.stat}</text>

        <!-- Left Column Code Workspace details -->
        <g transform="translate(15, 75)">
          <rect x="0" y="0" width="350" height="265" rx="6" fill="#020404" stroke="#2F4F4E" stroke-width="0.5" />
          <text x="20" y="30" font-family="'JetBrains Mono', monospace" font-size="12" fill="#7d9e9c">> CONTAINER_SPECIFICATION</text>
          
          <text x="20" y="70" font-family="'JetBrains Mono', monospace" font-size="11" fill="#ffffff">ID: <tspan fill="#2F4F4E" filter="url(#glow)">${tagConfig.spec}</tspan></text>
          
          <!-- Mocking syntax structure of code settings -->
          <text x="20" y="105" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">window.dataLayer = window.dataLayer || [];</text>
          <text x="20" y="125" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">function gtag(){ dataLayer.push(arguments); }</text>
          <text x="20" y="145" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">gtag('js', new Date());</text>
          <text x="20" y="165" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">gtag('config', '${id === "analytics-01" ? "G-9KLP0D8G9X" : "UA-918239A-1"}', {</text>
          <text x="40" y="185" font-family="'JetBrains Mono', monospace" font-size="10" fill="#ffffff">'send_page_view': true,</text>
          <text x="40" y="205" font-family="'JetBrains Mono', monospace" font-size="10" fill="#ffffff">'cookie_flags': 'SameSite=None;Secure'</text>
          <text x="20" y="225" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">});</text>
          
          <!-- Terminal green indicator -->
          <circle cx="25" cy="248" r="4" fill="#2F4F4E" filter="url(#glow)" />
          <text x="40" y="252" font-family="'JetBrains Mono', monospace" font-size="9" fill="#2F4F4E">VIRTUAL_DOM_OBSERVER_ACTIVE</text>
        </g>

        <!-- Right Column flow chart connections -->
        <g transform="translate(390, 75)">
          <rect x="0" y="0" width="355" height="265" rx="6" fill="#020404" stroke="#2F4F4E" stroke-width="0.5" />
          <text x="20" y="30" font-family="'JetBrains Mono', monospace" font-size="12" fill="#7d9e9c">> SIGNAL_FLOW_ROUTING</text>

          <!-- Nodes flow chart -->
          <!-- Web Browser Node -->
          <rect x="20" y="70" width="90" height="35" rx="4" fill="#040808" stroke="#2F4F4E" stroke-width="0.5" />
          <text x="65" y="92" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="10" fill="#ffffff" text-anchor="middle">WEB_BROWSER</text>

          <!-- GTM Proxy Node -->
          <rect x="220" y="70" width="110" height="35" rx="4" fill="#2F4F4E" fill-opacity="0.15" stroke="#2F4F4E" stroke-width="1" />
          <text x="275" y="92" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="10" fill="#ffffff" text-anchor="middle" filter="url(#glow)">TAG_MANAGER</text>

          <!-- GA4 Datastream Node -->
          <rect x="110" y="170" width="120" height="35" rx="4" fill="#040808" stroke="#2F4F4E" stroke-width="0.5" />
          <text x="170" y="192" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="10" fill="#ffffff" text-anchor="middle">GOOGLE_ANALYTICS</text>

          <!-- Direct routing pipeline lines with dots -->
          <path d="M 110 87 L 220 87" stroke="#2F4F4E" stroke-width="1" stroke-dasharray="3 3" />
          <path d="M 275 105 L 275 150 L 170 150 L 170 170" fill="none" stroke="#2F4F4E" stroke-width="1.5" />
          <path d="M 65 105 L 65 150 L 170 150" fill="none" stroke="#2F4F4E" stroke-width="1" stroke-opacity="0.5" />
          
          <circle cx="170" cy="87" r="3" fill="#ffffff" filter="url(#glow)" />
          <circle cx="275" cy="130" r="3" fill="#2F4F4E" filter="url(#glow)" />

          <!-- Log console output -->
          <rect x="20" y="220" width="315" height="35" rx="4" fill="#040808" stroke="#2F4F4E" stroke-width="0.3" />
          <text x="35" y="241" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7d9e9c">TRIGGER_EVENT::SUCCESS_SEND_TO [${id === "analytics-01" ? "G-9KLP0" : "GTM-K8"}]</text>
        </g>
      </g>

      <!-- Bottom verification parameters -->
      <g transform="translate(20, 470)">
        <rect x="0" y="0" width="760" height="110" rx="8" fill="#040808" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="25" y="25" font-family="'JetBrains Mono', monospace" font-size="11" fill="#ffffff">> ACTIVE_DIAGNOSTICS_SUMMARY</text>
        
        <text x="25" y="55" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">PORTFOLIO::DIAG_SYS_PULSE_OKAY (100% HEALTH ATTRIBUTION)</text>
        <text x="25" y="75" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">VERIFIED_EXTERNAL_ENDPOINTS_OKAY (CONNECTED DIRECTLY TO CONVERSION_KPI_DATABYTES)</text>
        
        <!-- Status indicator widget -->
        <rect x="615" y="35" width="120" height="45" rx="6" fill="#2F4F4E" fill-opacity="0.1" stroke="#2F4F4E" stroke-width="1" />
        <text x="675" y="62" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="13" fill="#ffffff" text-anchor="middle" filter="url(#glow)">TEST_OKAY</text>
      </g>
    `;

  } else {
    // --- LOOKER STUDIO DASHBOARDS ---
    const lookerNum = id.replace("looker-", "");
    innerBody = `
      <!-- Multiple widgets representing multi chart analytics dashboard -->
      <g transform="translate(20, 90)">
        <!-- Top Row 3 Widgets -->
        <!-- Widget 1: Revenue -->
        <rect x="0" y="0" width="240" height="95" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="15" y="25" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">ATTR_REVENUE</text>
        <text x="15" y="60" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="28" fill="#ffffff">$249,120</text>
        <text x="15" y="80" font-family="'JetBrains Mono', monospace" font-size="9" fill="#2F4F4E" filter="url(#glow)">▲ +41.5% VS LAST YEAR</text>

        <!-- Widget 2: ROAS -->
        <rect x="260" y="0" width="240" height="95" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="275" y="25" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">AGGREGATED_MEDIA_ROAS</text>
        <text x="275" y="60" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="28" fill="#ffffff">4.92x</text>
        <text x="275" y="80" font-family="'JetBrains Mono', monospace" font-size="9" fill="#2F4F4E">TARGET ROAS ASSIGNED: 3.5x</text>

        <!-- Widget 3: Conversions -->
        <rect x="520" y="0" width="240" height="95" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="535" y="25" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">CONVERSIONS_METRIC</text>
        <text x="535" y="60" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="28" fill="#2F4F4E" filter="url(#glow)">12,401</text>
        <text x="535" y="80" font-family="'JetBrains Mono', monospace" font-size="9" fill="#7d9e9c">99.8% VERIFIED SIGNALS</text>
      </g>

      <!-- Bottom Layout split: Graph + Geographic Heatmap -->
      <!-- Left graph box -->
      <g transform="translate(20, 205)">
        <rect x="0" y="0" width="410" height="250" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="20" y="30" font-family="'JetBrains Mono', monospace" font-size="11" fill="#ffffff">AGGREGATE_ACQUISITION_TREND</text>
        
        <!-- Weekly bars representing ROAS efficiency -->
        <g transform="translate(40, 60)">
          <!-- Bar 1 -->
          <rect x="0" y="40" width="25" height="110" rx="2" fill="#2F4F4E" fill-opacity="0.2" stroke="#2F4F4E" stroke-width="0.5" />
          <rect x="0" y="80" width="25" height="70" rx="2" fill="#2F4F4E" />
          <text x="12.5" y="165" font-family="'JetBrains Mono', monospace" font-size="8" fill="#7d9e9c" text-anchor="middle">M_01</text>

          <!-- Bar 2 -->
          <rect x="60" y="20" width="25" height="130" rx="2" fill="#2F4F4E" fill-opacity="0.2" stroke="#2F4F4E" stroke-width="0.5" />
          <rect x="60" y="50" width="25" height="100" rx="2" fill="#2F4F4E" filter="url(#glow)" />
          <text x="72.5" y="165" font-family="'JetBrains Mono', monospace" font-size="8" fill="#7d9e9c" text-anchor="middle">M_02</text>

          <!-- Bar 3 -->
          <rect x="120" y="30" width="25" height="120" rx="2" fill="#2F4F4E" fill-opacity="0.2" stroke="#2F4F4E" stroke-width="0.5" />
          <rect x="120" y="60" width="25" height="90" rx="2" fill="#ffffff" />
          <text x="132.5" y="165" font-family="'JetBrains Mono', monospace" font-size="8" fill="#7d9e9c" text-anchor="middle">M_03</text>

          <!-- Bar 4 -->
          <rect x="180" y="10" width="25" height="140" rx="2" fill="#2F4F4E" fill-opacity="0.2" stroke="#2F4F4E" stroke-width="0.5" />
          <rect x="180" y="30" width="25" height="120" rx="2" fill="#2F4F4E" filter="url(#glow)" />
          <text x="192.5" y="165" font-family="'JetBrains Mono', monospace" font-size="8" fill="#7d9e9c" text-anchor="middle">M_04</text>

          <!-- Bar 5 (Peak) -->
          <rect x="240" y="0" width="25" height="150" rx="2" fill="#0d1f1e" stroke="#2F4F4E" stroke-width="0.5" />
          <path d="M 240 50 L 265 50 L 265 150 L 240 150 Z" fill="#2F4F4E" />
          <text x="252.5" y="165" font-family="'JetBrains Mono', monospace" font-size="8" fill="#7d9e9c" text-anchor="middle">M_05</text>

          <!-- Bar 6 -->
          <rect x="300" y="40" width="25" height="110" rx="2" fill="#2F4F4E" fill-opacity="0.2" stroke="#2F4F4E" stroke-width="0.5" />
          <rect x="300" y="70" width="25" height="80" rx="2" fill="#2F4F4E" fill-opacity="0.5" />
          <text x="312.5" y="165" font-family="'JetBrains Mono', monospace" font-size="8" fill="#7d9e9c" text-anchor="middle">M_06</text>
        </g>
      </g>

      <!-- Right table list channel box -->
      <g transform="translate(450, 205)">
        <rect x="0" y="0" width="330" height="250" rx="8" fill="url(#panel-grad)" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="20" y="30" font-family="'JetBrains Mono', monospace" font-size="11" fill="#ffffff">CHANNEL_CONTRIBUTION_ATTR</text>
        
        <!-- Table Row 1 -->
        <g transform="translate(20, 55)">
          <rect x="0" y="0" width="290" height="32" rx="4" fill="#020404" stroke="#2F4F4E" stroke-width="0.5" />
          <text x="15" y="20" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="10" fill="#ffffff">01 // Google Ads Performance</text>
          <text x="275" y="20" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c" text-anchor="end">48%</text>
        </g>

        <!-- Table Row 2 -->
        <g transform="translate(20, 95)">
          <rect x="0" y="0" width="290" height="32" rx="4" fill="#020404" stroke="#2F4F4E" stroke-width="0.3" stroke-opacity="0.4" />
          <text x="15" y="20" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="10" fill="#ffffff">02 // Meta Paid Campaigns</text>
          <text x="275" y="20" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c" text-anchor="end">36%</text>
        </g>

        <!-- Table Row 3 -->
        <g transform="translate(20, 135)">
          <rect x="0" y="0" width="290" height="32" rx="4" fill="#020404" stroke="#2F4F4E" stroke-width="0.3" stroke-opacity="0.2" />
          <text x="15" y="20" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="10" fill="#ffffff">03 // Organic Search & Direct</text>
          <text x="275" y="20" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c" text-anchor="end">11%</text>
        </g>

        <!-- Table Row 4 -->
        <g transform="translate(20, 175)">
          <rect x="0" y="0" width="290" height="32" rx="4" fill="#020404" stroke="#2F4F4E" stroke-width="0.3" stroke-opacity="0.1" />
          <text x="15" y="20" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="10" fill="#7d9e9c">04 // Email Newsletter Funnel</text>
          <text x="275" y="20" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c" text-anchor="end">5%</text>
        </g>
      </g>

      <!-- Bottom verification bar -->
      <g transform="translate(20, 470)">
        <rect x="0" y="0" width="760" height="110" rx="8" fill="#040808" stroke="#2F4F4E" stroke-width="0.5" />
        <text x="25" y="25" font-family="'JetBrains Mono', monospace" font-size="11" fill="#ffffff">> INTEGRATED_LOOKER_SUITE_PORT_${lookerNum}</text>
        <text x="25" y="55" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">INTEGRATION::LINKED_LIVE_DATA_FEED (STATUS: SYNCHRONIZED)</text>
        <text x="25" y="75" font-family="'JetBrains Mono', monospace" font-size="10" fill="#7d9e9c">QUERY_ATTRIBUTION_MODEL::SHAPLEY_REPRESENTATIVE_ATTR (LATENCY_FEED_GAP: 0.14s)</text>
        <rect x="620" y="35" width="115" height="45" rx="6" fill="#2F4F4E" fill-opacity="0.15" stroke="#2F4F4E" stroke-width="1" />
        <text x="677" y="62" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="12" fill="#ffffff" text-anchor="middle" filter="url(#glow)">LIVE_DASH</text>
      </g>
    `;
  }

  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="100%" height="100%">
      ${getGridBackground(w, h)}
      ${getSystemHeader(label, id.toUpperCase())}
      ${innerBody}
    </svg>
  `;

  return "data:image/svg+xml;utf8," + encodeURIComponent(svgString.trim());
}

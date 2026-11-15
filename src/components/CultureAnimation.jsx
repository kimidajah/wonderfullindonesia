import { motion } from 'framer-motion';

/**
 * CultureAnimation: Dynamic SVG and Framer Motion cultural animations
 * Authentic regional cultural elements: Bali, Yogyakarta, Bandung, Jakarta, Padang, Aceh, Medan, Papua, Kalimantan, Sulawesi, Maluku.
 */
export default function CultureAnimation({ type = 'yogyakarta', className = '', compact = false }) {
  // Normalize type
  const animType = type?.toLowerCase() || 'yogyakarta';

  const containerVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } }
  };

  switch (animType) {
    // ==========================================
    // BALI: Keris Bali, Pura Besakih/Ulun Danu, Patra Ornamen, Gold Sparks
    // ==========================================
    case 'bali':
      return (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={`relative flex items-center justify-center select-none ${className}`}
        >
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full max-w-[420px] drop-shadow-[0_10px_25px_rgba(212,175,55,0.25)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="baliGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff3b0" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#996515" />
              </linearGradient>
              <linearGradient id="puraGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0b132b" stopOpacity="0" />
              </linearGradient>
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background Halo Glow */}
            <circle cx="200" cy="160" r="110" fill="url(#puraGlow)" />

            {/* Rotating Balinese Carving Motif (Patra) */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '200px', originY: '160px' }}
              opacity="0.35"
            >
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <path
                  key={i}
                  d="M200 60 C 215 90, 230 110, 200 135 C 170 110, 185 90, 200 60 Z"
                  fill="url(#baliGold)"
                  transform={`rotate(${angle} 200 160)`}
                />
              ))}
              <circle cx="200" cy="160" r="75" stroke="#d4af37" strokeWidth="1" strokeDasharray="4 6" />
            </motion.g>

            {/* Balinese Pura (Meru) Tiered Roof Silhouette */}
            <g transform="translate(140, 45)">
              {/* Meru Roof 1 (Top) */}
              <polygon points="60,15 45,30 75,30" fill="#d4af37" />
              {/* Meru Roof 2 */}
              <polygon points="60,32 38,50 82,50" fill="#caa028" />
              {/* Meru Roof 3 */}
              <polygon points="60,52 30,72 90,72" fill="#bf931f" />
              {/* Meru Roof 4 */}
              <polygon points="60,74 22,96 98,96" fill="#a87f15" />
              {/* Meru Roof 5 (Base) */}
              <polygon points="60,98 12,122 108,122" fill="#8f690c" />
              {/* Base pillars */}
              <rect x="35" y="122" width="50" height="25" fill="#1e293b" stroke="#d4af37" strokeWidth="1" />
              <rect x="52" y="128" width="16" height="19" fill="#d4af37" opacity="0.8" />
            </g>

            {/* Floating Balinese Keris Pusaka */}
            <motion.g
              animate={{
                y: [0, -8, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '200px', originY: '170px' }}
            >
              {/* Keris Hilt (Hulu Dewayana) */}
              <path
                d="M 194 140 C 192 125, 208 125, 206 140 C 205 145, 195 145, 194 140 Z"
                fill="#f59e0b"
                stroke="#d4af37"
                strokeWidth="1.5"
              />
              {/* Mendak Ring */}
              <ellipse cx="200" cy="144" rx="7" ry="2.5" fill="#fff" />
              {/* Keris Gantha Base */}
              <path d="M 190 147 L 210 147 L 205 152 L 195 152 Z" fill="#d4af37" />
              {/* Keris Wavy Blade (Luk 5) with Gold Pamor Meteorite */}
              <path
                d="M 198 152 
                   Q 206 168 198 184 
                   Q 190 200 198 216 
                   Q 206 232 198 248 
                   L 200 256 
                   L 202 248 
                   Q 210 232 202 216 
                   Q 194 200 202 184 
                   Q 210 168 202 152 Z"
                fill="url(#baliGold)"
                stroke="#ffd700"
                strokeWidth="1.5"
                filter="url(#glowFilter)"
              />
            </motion.g>

            {/* Floating Canang Sari / Spiritual Sparks */}
            <motion.circle
              cx="130"
              cy="120"
              r="3"
              fill="#fbbf24"
              animate={{ y: [0, -25, 0], opacity: [0.2, 0.9, 0.2] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="270"
              cy="130"
              r="2.5"
              fill="#fef08a"
              animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <motion.circle
              cx="200"
              cy="80"
              r="2"
              fill="#f59e0b"
              animate={{ y: [0, -15, 0], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
          </svg>
          {!compact && (
            <div className="absolute -bottom-3 text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-amber-300/80 font-cinzel">
                Pura Besakih & Keris Bali
              </span>
            </div>
          )}
        </motion.div>
      );

    // ==========================================
    // YOGYAKARTA: Gunungan Wayang Kulit, Prambanan & Batik Kawung
    // ==========================================
    case 'yogyakarta':
      return (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={`relative flex items-center justify-center select-none ${className}`}
        >
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full max-w-[420px] drop-shadow-[0_10px_25px_rgba(234,179,8,0.25)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="yogyaGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#854d0e" />
              </linearGradient>
              <linearGradient id="prambananGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#eab308" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0b132b" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Background Halo */}
            <circle cx="200" cy="160" r="115" fill="url(#prambananGlow)" />

            {/* Rotating Batik Kawung Motif in Background */}
            <motion.g
              animate={{ rotate: -360 }}
              transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '200px', originY: '160px' }}
              opacity="0.25"
            >
              {[0, 90, 180, 270].map((angle, i) => (
                <g key={i} transform={`rotate(${angle} 200 160)`}>
                  <ellipse cx="200" cy="95" rx="28" ry="48" stroke="#eab308" strokeWidth="1.5" />
                  <ellipse cx="200" cy="95" rx="16" ry="28" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="200" cy="95" r="4" fill="#eab308" />
                </g>
              ))}
              <circle cx="200" cy="160" r="88" stroke="#eab308" strokeWidth="1" strokeDasharray="2 4" />
            </motion.g>

            {/* Silhouette of Candi Prambanan (Spire) */}
            <g transform="translate(170, 70)" opacity="0.45">
              <polygon points="30,0 20,40 40,40" fill="#a16207" />
              <polygon points="30,35 15,95 45,95" fill="#854d0e" />
              <polygon points="30,90 8,150 52,150" fill="#713f12" />
              <rect x="18" y="150" width="24" height="25" fill="#3f2305" />
            </g>

            {/* Gunungan Wayang Kulit (Kayon) - Majestic Central Motif */}
            <motion.g
              animate={{
                y: [0, -6, 0],
                rotate: [-1.5, 1.5, -1.5]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '200px', originY: '240px' }}
            >
              {/* Gunungan Silhouette Shape */}
              <path
                d="M 200 45 
                   C 235 90, 265 140, 260 215 
                   C 255 240, 230 250, 200 255 
                   C 170 250, 145 240, 140 215 
                   C 135 140, 165 90, 200 45 Z"
                fill="#0f172a"
                stroke="url(#yogyaGold)"
                strokeWidth="2.5"
              />

              {/* Gunungan Internal Filigree - Pohon Hayat (Tree of Life) */}
              {/* Central Trunk */}
              <line x1="200" y1="250" x2="200" y2="105" stroke="#eab308" strokeWidth="2.5" />
              
              {/* Branches */}
              <path d="M 200 190 Q 225 180 235 160" stroke="#fef08a" strokeWidth="1.5" fill="none" />
              <path d="M 200 190 Q 175 180 165 160" stroke="#fef08a" strokeWidth="1.5" fill="none" />
              <path d="M 200 160 Q 220 150 228 135" stroke="#fef08a" strokeWidth="1.5" fill="none" />
              <path d="M 200 160 Q 180 150 172 135" stroke="#fef08a" strokeWidth="1.5" fill="none" />
              <path d="M 200 130 Q 215 120 220 105" stroke="#fef08a" strokeWidth="1.5" fill="none" />
              <path d="M 200 130 Q 185 120 180 105" stroke="#fef08a" strokeWidth="1.5" fill="none" />

              {/* Paduraksa Gateway / Gate at bottom of Gunungan */}
              <rect x="188" y="215" width="24" height="28" fill="#eab308" rx="2" />
              <polygon points="200,205 185,217 215,217" fill="#fde047" />
              <rect x="195" y="225" width="10" height="18" fill="#0f172a" />

              {/* Gapit (Wayang Bamboo Handle) */}
              <line x1="200" y1="255" x2="200" y2="295" stroke="#ca8a04" strokeWidth="4" strokeLinecap="round" />
            </motion.g>

            {/* Glowing Golden Sparks of Adiluhung */}
            <motion.circle
              cx="145"
              cy="100"
              r="2"
              fill="#fde047"
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.4, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.circle
              cx="255"
              cy="95"
              r="2.5"
              fill="#fef08a"
              animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.8, 1.3, 0.8] }}
              transition={{ duration: 3.8, repeat: Infinity, delay: 1 }}
            />
          </svg>
          {!compact && (
            <div className="absolute -bottom-3 text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-amber-300/80 font-cinzel">
                Gunungan Wayang & Candi Prambanan
              </span>
            </div>
          )}
        </motion.div>
      );

    // ==========================================
    // BANDUNG: Gedung Sate, Kujang Pajajaran & Angklung Sunda
    // ==========================================
    case 'bandung':
      return (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={`relative flex items-center justify-center select-none ${className}`}
        >
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full max-w-[420px] drop-shadow-[0_10px_25px_rgba(20,184,166,0.25)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bandungTeal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5eead4" />
                <stop offset="50%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#0f766e" />
              </linearGradient>
              <linearGradient id="kujangGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#a16207" />
              </linearGradient>
            </defs>

            {/* Gedung Sate Architectural Silhouette */}
            <g transform="translate(100, 150)" opacity="0.35">
              {/* Sate Tower Roof */}
              <polygon points="100,10 70,45 130,45" fill="#14b8a6" />
              {/* Six Sphere Balls (Tusuk Sate 6 Bulatan) */}
              <line x1="100" y1="10" x2="100" y2="-30" stroke="#fde047" strokeWidth="2.5" />
              {[0, -6, -12, -18, -24, -30].map((y, idx) => (
                <circle key={idx} cx="100" cy={y} r="2.5" fill="#fde047" />
              ))}
              {/* Main Building Base */}
              <rect x="30" y="45" width="140" height="30" fill="#0f766e" />
              <rect x="10" y="75" width="180" height="35" fill="#115e59" />
              {/* Arched windows */}
              {[25, 45, 65, 85, 105, 125, 145, 165].map((x, idx) => (
                <rect key={idx} x={x} y="85" width="8" height="15" rx="3" fill="#5eead4" opacity="0.7" />
              ))}
            </g>

            {/* Sacred Kujang Sunda (Bilah Kujang) */}
            <motion.g
              animate={{
                y: [0, -7, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '170px', originY: '140px' }}
            >
              {/* Kujang Blade Profile */}
              <path
                d="M 175 75 
                   C 190 78, 205 90, 200 110 
                   C 195 125, 175 135, 185 155 
                   C 192 170, 210 185, 200 205 
                   C 192 218, 178 220, 172 225 
                   L 165 220 
                   C 160 195, 170 170, 162 145 
                   C 155 120, 160 95, 175 75 Z"
                fill="url(#kujangGold)"
                stroke="#fff7ed"
                strokeWidth="1.5"
              />
              {/* Kujang Sacred Eye Holes (Tiga Lubang Kesakralan) */}
              <circle cx="180" cy="115" r="3" fill="#070c18" stroke="#fef08a" strokeWidth="1" />
              <circle cx="178" cy="135" r="2.5" fill="#070c18" stroke="#fef08a" strokeWidth="1" />
              <circle cx="182" cy="155" r="2.5" fill="#070c18" stroke="#fef08a" strokeWidth="1" />

              {/* Kujang Hilt (Gagang Burung Gagak/Macan) */}
              <path
                d="M 172 225 C 168 235, 165 250, 155 258 C 150 252, 155 238, 165 220 Z"
                fill="#78350f"
                stroke="#d4af37"
                strokeWidth="1"
              />
            </motion.g>

            {/* Harmonious Vibrating Angklung Bamboo (Right side) */}
            <motion.g
              animate={{ rotate: [-4, 4, -4] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '260px', originY: '110px' }}
            >
              {/* Bamboo Frame */}
              <rect x="235" y="105" width="50" height="6" rx="2" fill="#d97706" />
              <rect x="240" y="111" width="4" height="90" fill="#b45309" />
              <rect x="280" y="111" width="4" height="90" fill="#b45309" />
              <rect x="230" y="195" width="60" height="8" rx="2" fill="#d97706" />

              {/* Bamboo Tubes (Tabung Suara Angklung) */}
              <rect x="250" y="125" width="10" height="65" rx="3" fill="url(#kujangGold)" />
              <path d="M 250 135 L 260 125" stroke="#78350f" strokeWidth="1" />
              <rect x="266" y="140" width="10" height="50" rx="3" fill="url(#kujangGold)" />
              <path d="M 266 150 L 276 140" stroke="#78350f" strokeWidth="1" />
            </motion.g>
          </svg>
          {!compact && (
            <div className="absolute -bottom-3 text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-teal-300/80 font-cinzel">
                Gedung Sate, Kujang & Angklung
              </span>
            </div>
          )}
        </motion.div>
      );

    // ==========================================
    // JAKARTA: Tugu Monas Api Emas & Ondel-Ondel Betawi
    // ==========================================
    case 'jakarta':
      return (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={`relative flex items-center justify-center select-none ${className}`}
        >
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full max-w-[420px] drop-shadow-[0_10px_25px_rgba(249,115,22,0.25)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="monasGold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="40%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
              <linearGradient id="betawiRed" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>

            {/* Gigi Balang Betawi Geometric Border at top */}
            <g opacity="0.35">
              {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
                <polygon key={x} points={`${x},20 ${x + 20},35 ${x + 40},20`} fill="#f59e0b" />
              ))}
            </g>

            {/* Monumen Nasional (Monas) Obelisk */}
            <g transform="translate(140, 40)">
              {/* Blazing Flame of Independence (Lidah Api Kemerdekaan Emas) */}
              <motion.path
                d="M 60 10 
                   C 66 18, 75 25, 70 38 
                   C 66 48, 52 48, 50 38 
                   C 48 30, 54 22, 60 10 Z"
                fill="url(#monasGold)"
                filter="drop-shadow(0 0 8px rgba(245, 158, 11, 0.8))"
                animate={{
                  scale: [1, 1.08, 1],
                  filter: [
                    'drop-shadow(0 0 6px rgba(245, 158, 11, 0.6))',
                    'drop-shadow(0 0 14px rgba(245, 158, 11, 0.9))',
                    'drop-shadow(0 0 6px rgba(245, 158, 11, 0.6))'
                  ]
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ originX: '60px', originY: '38px' }}
              />

              {/* Upper Viewing Platform (Cawan Atas) */}
              <ellipse cx="60" cy="42" rx="14" ry="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />

              {/* Tall White Obelisk Shaft */}
              <polygon points="56,44 64,44 66,160 54,160" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />

              {/* Massive Lower Chalice (Cawan Bawah Lebar) */}
              <polygon points="40,160 80,160 90,178 30,178" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
              <polygon points="25,178 95,178 105,195 15,195" fill="#cbd5e1" />
            </g>

            {/* Friendly Ondel-Ondel Betawi Silhouette (Right side) */}
            <motion.g
              animate={{
                y: [0, -5, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '290px', originY: '230px' }}
            >
              {/* Ondel-ondel Headpiece (Kembang Kelapa Goyang) */}
              {[
                { x1: 290, y1: 135, x2: 275, y2: 110, c: '#f59e0b' },
                { x1: 290, y1: 135, x2: 285, y2: 105, c: '#ef4444' },
                { x1: 290, y1: 135, x2: 295, y2: 105, c: '#10b981' },
                { x1: 290, y1: 135, x2: 305, y2: 110, c: '#3b82f6' }
              ].map((stem, idx) => (
                <g key={idx}>
                  <line x1={stem.x1} y1={stem.y1} x2={stem.x2} y2={stem.y2} stroke={stem.c} strokeWidth="1.5" />
                  <circle cx={stem.x2} cy={stem.y2} r="2.5" fill={stem.c} />
                </g>
              ))}

              {/* Ondel-ondel Face Mask */}
              <circle cx="290" cy="150" r="15" fill="url(#betawiRed)" stroke="#fee2e2" strokeWidth="1.5" />
              {/* Mustaches & Eyes */}
              <circle cx="285" cy="147" r="2" fill="#fff" />
              <circle cx="295" cy="147" r="2" fill="#fff" />
              <path d="M 283 154 Q 290 156 297 154" stroke="#000" strokeWidth="1.5" fill="none" />

              {/* Giant Woven Body */}
              <path
                d="M 280 165 
                   L 300 165 
                   L 315 245 
                   L 265 245 Z"
                fill="#1e3a8a"
                stroke="#60a5fa"
                strokeWidth="1.5"
              />
              {/* Betawi Sash (Kain Selendang) */}
              <path d="M 280 165 L 305 210 L 300 245" stroke="#f59e0b" strokeWidth="4" fill="none" />
            </motion.g>
          </svg>
          {!compact && (
            <div className="absolute -bottom-3 text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-orange-300/80 font-cinzel">
                Monas & Budaya Betawi
              </span>
            </div>
          )}
        </motion.div>
      );

    // ==========================================
    // SUMATERA BARAT (PADANG): Rumah Gadang Gonjong & Motif Songket Minangkabau
    // ==========================================
    case 'padang':
      return (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={`relative flex items-center justify-center select-none ${className}`}
        >
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full max-w-[420px] drop-shadow-[0_10px_25px_rgba(245,158,11,0.25)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="padangGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fffbeb" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <linearGradient id="minangRed" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
            </defs>

            {/* Songket Minangkabau Pucuak Rabuang Border Pattern */}
            <g opacity="0.3">
              {[30, 80, 130, 180, 230, 280, 330].map((x) => (
                <polygon key={x} points={`${x},260 ${x + 20},220 ${x + 40},260`} fill="url(#padangGold)" />
              ))}
            </g>

            {/* Rumah Gadang (Bagonjong) Majestic Roof Silhouette */}
            <motion.g
              animate={{
                y: [0, -6, 0]
              }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Outer Gonjong Horns (Tanduk Kerbau Melengkung Menjulang) */}
              {/* Far Left Gonjong */}
              <path
                d="M 60 70 
                   Q 80 130 130 150 
                   L 115 150 
                   Q 70 130 60 70 Z"
                fill="url(#padangGold)"
              />
              {/* Middle Left Gonjong */}
              <path
                d="M 120 95 
                   Q 145 135 170 150 
                   L 160 150 
                   Q 135 135 120 95 Z"
                fill="url(#padangGold)"
              />
              {/* Central Pinnacle */}
              <polygon points="200,85 195,150 205,150" fill="#fde047" />

              {/* Middle Right Gonjong */}
              <path
                d="M 280 95 
                   Q 255 135 230 150 
                   L 240 150 
                   Q 265 135 280 95 Z"
                fill="url(#padangGold)"
              />
              {/* Far Right Gonjong */}
              <path
                d="M 340 70 
                   Q 320 130 270 150 
                   L 285 150 
                   Q 330 130 340 70 Z"
                fill="url(#padangGold)"
              />

              {/* Sweeping Roof Ridge (Punggung Atas Ijuk Rumah Gadang) */}
              <path
                d="M 60 70 
                   Q 130 150 200 145 
                   Q 270 150 340 70 
                   L 330 165 
                   Q 270 175 200 170 
                   Q 130 175 70 165 Z"
                fill="#1e293b"
                stroke="url(#padangGold)"
                strokeWidth="2"
              />

              {/* House Facade (Dinding Ukiran Singkok Rumah Gadang) */}
              <polygon points="90,165 310,165 300,215 100,215" fill="url(#minangRed)" stroke="#f59e0b" strokeWidth="1.5" />

              {/* Stylized Windows with Flora Carvings */}
              {[120, 155, 190, 225, 260].map((x, idx) => (
                <rect key={idx} x={x} y="175" width="18" height="24" rx="2" fill="#0f172a" stroke="#d4af37" strokeWidth="1" />
              ))}

              {/* Stilt Pillars (Tiang Kayu Penopang) */}
              {[105, 140, 175, 210, 245, 280].map((x, idx) => (
                <line key={idx} x1={x} y1="215" x2={x} y2="245" stroke="#78350f" strokeWidth="3" />
              ))}
            </motion.g>
          </svg>
          {!compact && (
            <div className="absolute -bottom-3 text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-amber-300/80 font-cinzel">
                Rumah Gadang & Songket Minang
              </span>
            </div>
          )}
        </motion.div>
      );

    // ==========================================
    // PAPUA: Burung Cenderawasih, Ukiran Asmat & Tifa Papua
    // ==========================================
    case 'papua':
      return (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={`relative flex items-center justify-center select-none ${className}`}
        >
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full max-w-[420px] drop-shadow-[0_10px_25px_rgba(225,29,72,0.25)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cenderawasihGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <linearGradient id="papuaRed" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#e11d48" />
              </linearGradient>
            </defs>

            {/* Asmat Carving Motif Background Halo */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '200px', originY: '160px' }}
              opacity="0.25"
            >
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <path
                  key={i}
                  d="M 200 80 Q 220 120 200 160 Q 180 120 200 80 Z"
                  stroke="#e11d48"
                  strokeWidth="2"
                  fill="none"
                  transform={`rotate(${angle} 200 160)`}
                />
              ))}
              <circle cx="200" cy="160" r="95" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 6" />
            </motion.g>

            {/* Majestic Burung Cenderawasih (Bird of Paradise) Silhouette */}
            <motion.g
              animate={{
                y: [0, -10, 0],
                rotate: [-2, 3, -2]
              }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '180px', originY: '130px' }}
            >
              {/* Bird Body and Head */}
              <path
                d="M 160 110 
                   C 170 95, 195 90, 205 105 
                   C 215 118, 200 135, 180 140 
                   C 165 145, 150 130, 160 110 Z"
                fill="url(#papuaRed)"
              />
              {/* Slender Beak */}
              <polygon points="205,103 225,108 203,112" fill="#fde047" />

              {/* Elegant Upward Wings */}
              <path
                d="M 175 110 
                   C 185 70, 215 45, 235 55 
                   C 220 80, 195 105, 175 110 Z"
                fill="url(#cenderawasihGold)"
              />
              <path
                d="M 165 115 
                   C 145 75, 125 50, 105 65 
                   C 125 90, 145 110, 165 115 Z"
                fill="url(#cenderawasihGold)"
              />

              {/* Flowing Wire Feathers (Bulu Ekor Kembar Menjuntai Anggun) */}
              <motion.path
                d="M 175 140 
                   C 185 180, 240 220, 220 270 
                   C 200 240, 170 200, 175 140 Z"
                fill="url(#cenderawasihGold)"
                animate={{
                  d: [
                    "M 175 140 C 185 180, 240 220, 220 270 C 200 240, 170 200, 175 140 Z",
                    "M 175 140 C 195 180, 255 210, 235 270 C 210 235, 180 195, 175 140 Z",
                    "M 175 140 C 185 180, 240 220, 220 270 C 200 240, 170 200, 175 140 Z"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.path
                d="M 170 140 
                   C 155 180, 110 220, 130 270 
                   C 145 240, 165 200, 170 140 Z"
                fill="url(#cenderawasihGold)"
                animate={{
                  d: [
                    "M 170 140 C 155 180, 110 220, 130 270 C 145 240, 165 200, 170 140 Z",
                    "M 170 140 C 145 180, 95 210, 115 270 C 135 235, 160 195, 170 140 Z",
                    "M 170 140 C 155 180, 110 220, 130 270 C 145 240, 165 200, 170 140 Z"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              />
            </motion.g>

            {/* Authentic Tifa Papua Drum on Left */}
            <g transform="translate(65, 175)">
              <ellipse cx="25" cy="10" rx="14" ry="5" fill="#fde047" stroke="#78350f" strokeWidth="1.5" />
              <path
                d="M 11 10 
                   Q 20 50 14 90 
                   L 36 90 
                   Q 30 50 39 10 Z"
                fill="#78350f"
                stroke="#d4af37"
                strokeWidth="1.5"
              />
              <ellipse cx="25" cy="90" rx="11" ry="4" fill="#451a03" />
              {/* Tifa Handle (Pegangan Ukir) */}
              <path d="M 14 40 Q 5 50 14 60" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
            </g>
          </svg>
          {!compact && (
            <div className="absolute -bottom-3 text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-rose-300/80 font-cinzel">
                Burung Cenderawasih & Tifa Papua
              </span>
            </div>
          )}
        </motion.div>
      );

    // ==========================================
    // SULAWESI: Perahu Layar Pinisi & Ukiran Toraja
    // ==========================================
    case 'sulawesi':
      return (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={`relative flex items-center justify-center select-none ${className}`}
        >
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full max-w-[420px] drop-shadow-[0_10px_25px_rgba(59,130,246,0.25)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pinisiGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>

            {/* Ocean Waves at bottom */}
            <motion.path
              d="M 50 250 Q 100 240 150 250 Q 200 260 250 250 Q 300 240 350 250"
              stroke="#60a5fa"
              strokeWidth="2"
              fill="none"
              animate={{
                d: [
                  "M 50 250 Q 100 240 150 250 Q 200 260 250 250 Q 300 240 350 250",
                  "M 50 250 Q 100 260 150 250 Q 200 240 250 250 Q 300 260 350 250",
                  "M 50 250 Q 100 240 150 250 Q 200 260 250 250 Q 300 240 350 250"
                ]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Majestic Pinisi Ship Sailing on Waves */}
            <motion.g
              animate={{
                y: [0, -6, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '200px', originY: '230px' }}
            >
              {/* Ship Wooden Hull (Lambung Kapal Kayu Ulin) */}
              <path
                d="M 90 205 
                   C 130 240, 270 240, 310 200 
                   L 290 220 
                   C 260 250, 140 250, 110 225 Z"
                fill="#78350f"
                stroke="#d4af37"
                strokeWidth="1.5"
              />
              {/* Bowsprit (Anjong Haluan Runcing) */}
              <line x1="310" y1="200" x2="350" y2="175" stroke="#92400e" strokeWidth="3" />

              {/* Main Masts (Dua Tiang Layar Utama) */}
              <line x1="180" y1="75" x2="180" y2="215" stroke="#d4af37" strokeWidth="2.5" />
              <line x1="250" y1="85" x2="250" y2="210" stroke="#d4af37" strokeWidth="2.5" />

              {/* Seven Sails of Pinisi (Tujuh Helai Layar Terkembang) */}
              {/* Main Mast Sails */}
              <path d="M 180 80 Q 140 125 180 150 L 180 80 Z" fill="#f8fafc" opacity="0.9" stroke="#cbd5e1" />
              <path d="M 180 152 Q 135 185 180 205 L 180 152 Z" fill="#f1f5f9" opacity="0.9" stroke="#cbd5e1" />

              {/* Rear Mast Sails */}
              <path d="M 250 90 Q 215 130 250 155 L 250 90 Z" fill="#f8fafc" opacity="0.9" stroke="#cbd5e1" />
              <path d="M 250 157 Q 210 185 250 205 L 250 157 Z" fill="#f1f5f9" opacity="0.9" stroke="#cbd5e1" />

              {/* Front Jib Sails (Layar Cocor Depan) */}
              <polygon points="250,90 320,185 250,185" fill="#f8fafc" opacity="0.8" />
              <polygon points="180,80 270,175 220,175" fill="#f1f5f9" opacity="0.8" />
            </motion.g>
          </svg>
          {!compact && (
            <div className="absolute -bottom-3 text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-blue-300/80 font-cinzel">
                Perahu Layar Pinisi
              </span>
            </div>
          )}
        </motion.div>
      );

    // ==========================================
    // KALIMANTAN: Motif Dayak Batang Garing & Mandau
    // ==========================================
    case 'kalimantan':
      return (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={`relative flex items-center justify-center select-none ${className}`}
        >
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full max-w-[420px] drop-shadow-[0_10px_25px_rgba(6,182,212,0.25)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="borneoCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a5f3fc" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0e7490" />
              </linearGradient>
            </defs>

            {/* Dayak Batang Garing (Tree of Life) Sacred Pattern */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              style={{ originX: '200px', originY: '160px' }}
              opacity="0.25"
            >
              {[0, 90, 180, 270].map((angle, i) => (
                <g key={i} transform={`rotate(${angle} 200 160)`}>
                  <path d="M 200 80 C 220 100, 230 130, 200 160 C 170 130, 180 100, 200 80 Z" stroke="#06b6d4" strokeWidth="1.5" />
                  <circle cx="200" cy="80" r="4" fill="#06b6d4" />
                </g>
              ))}
              <circle cx="200" cy="160" r="85" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 4" />
            </motion.g>

            {/* Sacred Mandau Dayak Blade */}
            <motion.g
              animate={{
                y: [0, -6, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '200px', originY: '160px' }}
            >
              {/* Mandau Hilt (Hulu Burung Enggang Kayu Ulin) */}
              <path
                d="M 130 90 
                   C 145 75, 160 85, 155 105 
                   C 150 115, 140 115, 130 90 Z"
                fill="#78350f"
                stroke="#f59e0b"
                strokeWidth="1.5"
              />
              {/* Hair/Tuft Ornaments */}
              <line x1="130" y1="85" x2="115" y2="75" stroke="#ef4444" strokeWidth="2" />
              <line x1="135" y1="80" x2="125" y2="65" stroke="#eab308" strokeWidth="2" />

              {/* Mandau Curved Steel Blade with Brass Inlay */}
              <path
                d="M 152 105 
                   L 255 185 
                   C 265 195, 275 210, 270 225 
                   L 255 215 
                   L 165 125 Z"
                fill="url(#borneoCyan)"
                stroke="#fff"
                strokeWidth="1.5"
              />
              {/* Holes and Brass Inlays */}
              <circle cx="210" cy="155" r="2" fill="#fde047" />
              <circle cx="225" cy="168" r="2" fill="#fde047" />
              <circle cx="240" cy="180" r="2" fill="#fde047" />
            </motion.g>
          </svg>
          {!compact && (
            <div className="absolute -bottom-3 text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-cyan-300/80 font-cinzel">
                Mandau Dayak & Batang Garing
              </span>
            </div>
          )}
        </motion.div>
      );

    // Default / Aceh / Medan / Other: Pinto Aceh or Royal Emblem
    default:
      return (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className={`relative flex items-center justify-center select-none ${className}`}
        >
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full max-w-[420px] drop-shadow-[0_10px_25px_rgba(212,175,55,0.25)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="acehGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#854d0e" />
              </linearGradient>
            </defs>

            {/* Pinto Aceh Sacred Monumental Motif */}
            <motion.g
              animate={{
                scale: [1, 1.03, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ originX: '200px', originY: '160px' }}
            >
              {/* Central Arch Portal (Gerbang Pinto Aceh) */}
              <path
                d="M 160 220 
                   L 160 140 
                   C 160 110, 240 110, 240 140 
                   L 240 220"
                stroke="url(#acehGold)"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M 175 220 
                   L 175 145 
                   C 175 125, 225 125, 225 145 
                   L 225 220"
                stroke="url(#acehGold)"
                strokeWidth="2"
                strokeDasharray="3 3"
                fill="none"
              />

              {/* Crown Finial at top */}
              <polygon points="200,85 190,110 210,110" fill="url(#acehGold)" />
              <circle cx="200" cy="80" r="4" fill="#fde047" />

              {/* Side Wing Floral Leaves */}
              <path d="M 160 140 C 130 130, 120 160, 160 180" stroke="url(#acehGold)" strokeWidth="2.5" fill="none" />
              <path d="M 240 140 C 270 130, 280 160, 240 180" stroke="url(#acehGold)" strokeWidth="2.5" fill="none" />
            </motion.g>
          </svg>
          {!compact && (
            <div className="absolute -bottom-3 text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-amber-300/80 font-cinzel">
                Pinto Aceh & Ornamen Keraton
              </span>
            </div>
          )}
        </motion.div>
      );
  }
}

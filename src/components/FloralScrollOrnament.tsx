import React from 'react';

/**
 * Lace Floral Ornament — pure SVG, vertical.
 * Gaya: batang berkelok, daun berurat detail, spiral curl, dot bead clusters.
 * Mirip ornamen renda kertas putih pada referensi.
 * Mirror dengan CSS `transform: scaleX(-1)` untuk sisi kanan.
 */
interface FloralScrollOrnamentProps {
  color?: string;
  opacity?: number;
}

export default function FloralScrollOrnament({
  color = '#7A5C20',
  opacity = 0.1,
}: FloralScrollOrnamentProps) {
  return (
    <svg
      viewBox="0 0 220 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMinYMid meet"
      style={{ color, opacity, height: '100%', width: 'auto', display: 'block' }}
    >
      {/* ═══════════════════════════════════════════
          MAIN STEM — sinuous vine from top to bottom
          ═══════════════════════════════════════════ */}
      <path
        d="M 60,20
           C 55,80  40,130  60,180
           C 80,230  100,250  85,310
           C 70,370  40,390  55,450
           C 70,510  100,530  90,590
           C 80,650  50,670  60,730
           C 70,790  95,820  80,880
           C 65,940  50,960  55,990"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ═══════════════════════════════════════════
          TOP SECTION — large leaf cluster + spiral
          ═══════════════════════════════════════════ */}

      {/* ── Top spiral curl ── */}
      <path
        d="M 60,20 C 80,10 105,15 110,35
           C 115,55 100,72 80,68
           C 60,64 52,48 60,38"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
      />
      {/* Inner spiral detail */}
      <path
        d="M 60,38 C 68,32 78,34 80,42 C 82,50 74,55 68,52"
        stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"
      />

      {/* ── Large leaf upper-right (main) ── */}
      <path
        d="M 75,85 C 110,60 165,55 175,80
           C 185,105 155,125 120,118
           C 90,112 70,100 75,85 Z"
        stroke="currentColor" strokeWidth="1.4"
        fill="currentColor" fillOpacity="0.06"
      />
      {/* Leaf veins upper-right */}
      <path d="M 75,85 C 110,75 150,72 175,80" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M 90,92 C 115,82 145,80 168,88" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M 100,100 C 120,92 148,90 165,97" stroke="currentColor" strokeWidth="0.45" strokeLinecap="round" />
      <path d="M 108,108 C 125,102 148,100 162,107" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" />
      <path d="M 112,115 C 128,110 148,108 158,114" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" />

      {/* ── Small leaf upper-left ── */}
      <path
        d="M 60,70 C 35,55 15,60 18,78
           C 21,96 45,100 60,90 Z"
        stroke="currentColor" strokeWidth="1.1"
        fill="currentColor" fillOpacity="0.05"
      />
      <path d="M 60,70 C 42,65 24,68 18,78" stroke="currentColor" strokeWidth="0.55" strokeLinecap="round" />
      <path d="M 56,78 C 40,74 26,76 20,83" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" />
      <path d="M 52,86 C 40,84 30,85 24,90" stroke="currentColor" strokeWidth="0.35" strokeLinecap="round" />

      {/* ── Dot beads upper cluster ── */}
      <circle cx="95" cy="125" r="3.2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.08" />
      <circle cx="108" cy="132" r="2.8" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.08" />
      <circle cx="120" cy="137" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.08" />
      <circle cx="132" cy="140" r="2.2" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.07" />
      <circle cx="143" cy="141" r="1.8" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.07" />
      <circle cx="83" cy="136" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />

      {/* ═══════════════════════════════════════════
          UPPER-MID — leaf pair + curl ~y=200
          ═══════════════════════════════════════════ */}

      {/* Stem branch right */}
      <path
        d="M 70,190 C 100,170 145,168 155,190
           C 165,212 140,232 110,226
           C 82,220 65,208 70,190 Z"
        stroke="currentColor" strokeWidth="1.3"
        fill="currentColor" fillOpacity="0.06"
      />
      <path d="M 70,190 C 102,178 140,176 155,190" stroke="currentColor" strokeWidth="0.65" strokeLinecap="round" />
      <path d="M 78,198 C 106,188 138,186 152,198" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M 84,207 C 108,199 136,197 148,207" stroke="currentColor" strokeWidth="0.45" strokeLinecap="round" />
      <path d="M 88,215 C 110,209 132,207 144,215" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" />

      {/* Left curl mid-upper */}
      <path
        d="M 55,170 C 30,160 18,170 20,188
           C 22,206 42,210 55,198
           C 68,186 62,172 52,170"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
      />
      <path
        d="M 52,170 C 44,168 38,174 40,182 C 42,190 50,192 55,186"
        stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"
      />

      {/* Dot beads mid-upper */}
      <circle cx="45" cy="225" r="3" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.08" />
      <circle cx="56" cy="230" r="2.6" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.08" />
      <circle cx="66" cy="234" r="2.2" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />
      <circle cx="75" cy="237" r="1.8" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.07" />
      <circle cx="35" cy="218" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />

      {/* ═══════════════════════════════════════════
          MID SECTION — large leaf + spiral ~y=310–400
          ═══════════════════════════════════════════ */}

      {/* Large leaf mid right */}
      <path
        d="M 60,300 C 100,272 160,268 172,296
           C 184,324 152,350 115,344
           C 82,338 55,320 60,300 Z"
        stroke="currentColor" strokeWidth="1.5"
        fill="currentColor" fillOpacity="0.07"
      />
      <path d="M 60,300 C 100,282 155,278 172,296" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M 66,310 C 102,294 152,290 168,308" stroke="currentColor" strokeWidth="0.55" strokeLinecap="round" />
      <path d="M 72,320 C 105,306 150,302 165,318" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M 76,330 C 108,318 148,314 162,328" stroke="currentColor" strokeWidth="0.45" strokeLinecap="round" />
      <path d="M 78,340 C 108,330 144,326 158,338" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" />

      {/* Mid left curl/spiral */}
      <path
        d="M 55,360 C 25,345 10,358 14,380
           C 18,402 42,408 58,392
           C 74,376 66,358 52,358"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"
      />
      <path
        d="M 52,358 C 42,354 34,362 36,374 C 38,386 50,388 56,380"
        stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"
      />
      {/* Tiny inner spiral */}
      <path
        d="M 56,380 C 50,376 46,378 47,384 C 48,390 54,390 56,386"
        stroke="currentColor" strokeWidth="0.55" strokeLinecap="round"
      />

      {/* Dot beads mid cluster */}
      <circle cx="78" cy="352" r="3.2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.08" />
      <circle cx="90" cy="356" r="2.8" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.08" />
      <circle cx="102" cy="358" r="2.4" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />
      <circle cx="113" cy="359" r="2" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.07" />
      <circle cx="66" cy="346" r="2.8" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />
      <circle cx="55" cy="338" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />

      {/* ═══════════════════════════════════════════
          CENTER — small leaf + curl ~y=440–520
          ═══════════════════════════════════════════ */}

      {/* Small leaf center right */}
      <path
        d="M 68,440 C 100,420 148,418 158,440
           C 168,462 142,480 112,474
           C 84,468 62,455 68,440 Z"
        stroke="currentColor" strokeWidth="1.2"
        fill="currentColor" fillOpacity="0.06"
      />
      <path d="M 68,440 C 100,428 145,426 158,440" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
      <path d="M 74,450 C 102,440 142,438 154,450" stroke="currentColor" strokeWidth="0.45" strokeLinecap="round" />
      <path d="M 78,460 C 104,452 138,450 150,460" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" />

      {/* Left curl center */}
      <path
        d="M 55,490 C 30,478 18,488 20,504
           C 22,520 40,524 52,514
           C 64,504 58,490 48,490"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
      />
      <path
        d="M 48,490 C 40,488 34,494 36,502 C 38,510 46,511 52,506"
        stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"
      />

      {/* Dot beads center */}
      <circle cx="70" cy="484" r="3" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.08" />
      <circle cx="82" cy="488" r="2.6" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />
      <circle cx="93" cy="491" r="2.2" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />
      <circle cx="103" cy="493" r="1.8" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.07" />
      <circle cx="58" cy="479" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />

      {/* ═══════════════════════════════════════════
          LOWER-MID SECTION ~y=560–680
          ═══════════════════════════════════════════ */}

      {/* Large leaf lower-mid right */}
      <path
        d="M 62,570 C 100,545 158,542 168,568
           C 178,594 148,618 114,612
           C 84,606 58,586 62,570 Z"
        stroke="currentColor" strokeWidth="1.5"
        fill="currentColor" fillOpacity="0.07"
      />
      <path d="M 62,570 C 100,554 152,550 168,568" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M 68,580 C 102,566 150,562 165,578" stroke="currentColor" strokeWidth="0.55" strokeLinecap="round" />
      <path d="M 72,590 C 104,578 148,574 162,588" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
      <path d="M 75,600 C 106,590 146,586 158,598" stroke="currentColor" strokeWidth="0.45" strokeLinecap="round" />
      <path d="M 76,610 C 106,602 142,598 155,608" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" />

      {/* Left large spiral lower-mid */}
      <path
        d="M 55,640 C 22,624 6,638 10,662
           C 14,686 42,694 60,676
           C 78,658 68,636 50,636"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      />
      <path
        d="M 50,636 C 38,632 28,642 30,656 C 32,670 46,673 55,665"
        stroke="currentColor" strokeWidth="0.85" strokeLinecap="round"
      />
      <path
        d="M 55,665 C 46,660 40,664 42,672 C 44,680 52,681 56,675"
        stroke="currentColor" strokeWidth="0.55" strokeLinecap="round"
      />

      {/* Dot beads lower-mid cluster */}
      <circle cx="80" cy="622" r="3.2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.08" />
      <circle cx="92" cy="627" r="2.8" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.08" />
      <circle cx="104" cy="630" r="2.4" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />
      <circle cx="115" cy="632" r="2" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.07" />
      <circle cx="68" cy="616" r="2.8" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />
      <circle cx="56" cy="608" r="2.5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />

      {/* ═══════════════════════════════════════════
          LOWER SECTION ~y=720–860
          ═══════════════════════════════════════════ */}

      {/* Leaf right lower */}
      <path
        d="M 65,730 C 105,705 162,702 174,730
           C 186,758 154,782 118,775
           C 86,768 60,750 65,730 Z"
        stroke="currentColor" strokeWidth="1.4"
        fill="currentColor" fillOpacity="0.07"
      />
      <path d="M 65,730 C 106,715 158,712 174,730" stroke="currentColor" strokeWidth="0.68" strokeLinecap="round" />
      <path d="M 71,740 C 108,726 155,722 170,740" stroke="currentColor" strokeWidth="0.52" strokeLinecap="round" />
      <path d="M 76,752 C 110,740 152,736 165,752" stroke="currentColor" strokeWidth="0.46" strokeLinecap="round" />
      <path d="M 79,763 C 112,753 150,749 162,762" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" />
      <path d="M 80,774 C 110,765 146,762 158,772" stroke="currentColor" strokeWidth="0.38" strokeLinecap="round" />

      {/* Left small curl lower */}
      <path
        d="M 58,800 C 32,788 20,798 22,814
           C 24,830 44,835 58,824
           C 72,813 66,798 54,798"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"
      />
      <path
        d="M 54,798 C 44,795 38,803 40,812 C 42,821 52,822 57,815"
        stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"
      />

      {/* Dot beads lower */}
      <circle cx="84" cy="788" r="3" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.08" />
      <circle cx="96" cy="793" r="2.6" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />
      <circle cx="108" cy="796" r="2.2" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />
      <circle cx="118" cy="798" r="1.9" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.07" />
      <circle cx="72" cy="782" r="2.6" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />

      {/* ═══════════════════════════════════════════
          BOTTOM TIP — small leaf + tiny curl
          ═══════════════════════════════════════════ */}

      {/* Bottom small leaf */}
      <path
        d="M 58,880 C 88,862 130,860 138,878
           C 146,896 124,910 100,905
           C 78,900 54,892 58,880 Z"
        stroke="currentColor" strokeWidth="1.1"
        fill="currentColor" fillOpacity="0.06"
      />
      <path d="M 58,880 C 88,870 128,868 138,878" stroke="currentColor" strokeWidth="0.55" strokeLinecap="round" />
      <path d="M 64,889 C 90,880 124,878 134,888" stroke="currentColor" strokeWidth="0.42" strokeLinecap="round" />
      <path d="M 68,898 C 90,891 118,889 130,897" stroke="currentColor" strokeWidth="0.38" strokeLinecap="round" />

      {/* Bottom tip accent dots */}
      <circle cx="62" cy="912" r="2.8" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />
      <circle cx="74" cy="917" r="2.3" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.07" />
      <circle cx="85" cy="920" r="1.9" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.07" />
      <circle cx="95" cy="922" r="1.5" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.06" />
      <circle cx="52" cy="906" r="2.2" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.07" />

      {/* Bottom finial tiny curl */}
      <path
        d="M 55,958 C 70,945 85,950 82,965
           C 79,980 64,978 58,968
           C 55,960 60,952 67,955"
        stroke="currentColor" strokeWidth="1" strokeLinecap="round"
      />
      <path d="M 67,955 C 72,952 76,955 74,961 C 72,967 66,967 64,963" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
    </svg>
  );
}

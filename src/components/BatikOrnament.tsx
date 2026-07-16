import React from 'react';

interface BatikOrnamentProps {
  className?: string;
  opacity?: number;
  size?: number;
}

export default function BatikOrnament({ className = '', opacity = 0.08, size = 320 }: BatikOrnamentProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      {/* Outer frame */}
      <rect x="4" y="4" width="312" height="312" rx="4" stroke="#C89B5B" strokeWidth="0.8" fill="none" />
      <rect x="12" y="12" width="296" height="296" rx="3" stroke="#C89B5B" strokeWidth="0.5" fill="none" />

      {/* Corner ornaments */}
      <g stroke="#C89B5B" strokeWidth="0.7" fill="none">
        {/* TL */}
        <path d="M4 40 Q20 20 40 4" />
        <path d="M4 60 Q30 30 60 4" />
        <circle cx="28" cy="28" r="6" />
        <circle cx="28" cy="28" r="3" />
        <path d="M22 22 Q28 15 34 22 Q28 29 22 22Z" fill="#C89B5B" fillOpacity="0.3" />

        {/* TR */}
        <path d="M280 4 Q300 20 316 40" />
        <path d="M260 4 Q290 30 316 60" />
        <circle cx="292" cy="28" r="6" />
        <circle cx="292" cy="28" r="3" />
        <path d="M286 22 Q292 15 298 22 Q292 29 286 22Z" fill="#C89B5B" fillOpacity="0.3" />

        {/* BL */}
        <path d="M4 280 Q20 300 40 316" />
        <path d="M4 260 Q30 290 60 316" />
        <circle cx="28" cy="292" r="6" />
        <circle cx="28" cy="292" r="3" />
        <path d="M22 286 Q28 279 34 286 Q28 293 22 286Z" fill="#C89B5B" fillOpacity="0.3" />

        {/* BR */}
        <path d="M316 280 Q300 300 280 316" />
        <path d="M316 260 Q290 290 260 316" />
        <circle cx="292" cy="292" r="6" />
        <circle cx="292" cy="292" r="3" />
        <path d="M286 286 Q292 279 298 286 Q292 293 286 286Z" fill="#C89B5B" fillOpacity="0.3" />
      </g>

      {/* Central mandala pattern */}
      <g stroke="#C89B5B" strokeWidth="0.6" fill="none" transform="translate(160, 160)">
        <circle r="80" />
        <circle r="60" />
        <circle r="40" />
        <circle r="20" />
        <circle r="8" />
        {/* Radial petals */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <g key={i} transform={`rotate(${angle})`}>
            <path d="M0 -40 Q8 -60 0 -80 Q-8 -60 0 -40Z" fill="#C89B5B" fillOpacity="0.15" />
            <line x1="0" y1="-20" x2="0" y2="-80" strokeWidth="0.4" />
          </g>
        ))}
        {/* Mid-ring parang motif */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <g key={i} transform={`rotate(${angle})`}>
            <path d="M0 -60 Q5 -50 0 -40 Q-5 -50 0 -60Z" fill="#C89B5B" fillOpacity="0.2" />
          </g>
        ))}
      </g>

      {/* Side ornaments */}
      <g stroke="#C89B5B" strokeWidth="0.5" fill="none">
        {/* Top center */}
        <path d="M140 4 Q160 0 180 4" />
        <path d="M145 4 Q160 12 175 4" />
        <circle cx="160" cy="4" r="3" fill="#C89B5B" fillOpacity="0.4" />

        {/* Bottom center */}
        <path d="M140 316 Q160 320 180 316" />
        <path d="M145 316 Q160 308 175 316" />
        <circle cx="160" cy="316" r="3" fill="#C89B5B" fillOpacity="0.4" />

        {/* Left center */}
        <path d="M4 140 Q0 160 4 180" />
        <path d="M4 145 Q12 160 4 175" />
        <circle cx="4" cy="160" r="3" fill="#C89B5B" fillOpacity="0.4" />

        {/* Right center */}
        <path d="M316 140 Q320 160 316 180" />
        <path d="M316 145 Q308 160 316 175" />
        <circle cx="316" cy="160" r="3" fill="#C89B5B" fillOpacity="0.4" />
      </g>

      {/* Scattered small motifs */}
      {[
        [70, 70], [250, 70], [70, 250], [250, 250],
        [160, 70], [160, 250], [70, 160], [250, 160],
      ].map(([cx, cy], i) => (
        <g key={i} transform={`translate(${cx}, ${cy})`} stroke="#C89B5B" strokeWidth="0.5" fill="none">
          <circle r="8" />
          <circle r="4" fill="#C89B5B" fillOpacity="0.1" />
          <line x1="-8" y1="0" x2="8" y2="0" />
          <line x1="0" y1="-8" x2="0" y2="8" />
          <line x1="-6" y1="-6" x2="6" y2="6" />
          <line x1="6" y1="-6" x2="-6" y2="6" />
        </g>
      ))}
    </svg>
  );
}

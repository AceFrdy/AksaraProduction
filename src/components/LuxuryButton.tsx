import React, { useId } from 'react';

/**
 * End ornament SVG — botanical scroll design for each pointed tip.
 * Mirror with scaleX(-1) for the right side.
 */
const EndOrnament = ({ dark = true }: { dark?: boolean }) => {
  const c = dark ? '#1A0E06' : '#C89B5B';
  return (
    <svg
      width="34" height="54" viewBox="0 0 34 54"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {/* Upper baroque S-scroll */}
      <path
        d="M 17,23 C 17,16 23,10 28,14 C 33,18 29,26 22,24 C 19,23 17,23 17,23"
        stroke={c} strokeWidth="1.7" fill="none" strokeLinecap="round"
      />
      {/* Tiny upper branch */}
      <path
        d="M 28,14 C 30,9 33,8 32,12"
        stroke={c} strokeWidth="1.0" fill="none" strokeLinecap="round"
      />

      {/* Lower baroque S-scroll (mirror of upper) */}
      <path
        d="M 17,31 C 17,38 23,44 28,40 C 33,36 29,28 22,30 C 19,31 17,31 17,31"
        stroke={c} strokeWidth="1.7" fill="none" strokeLinecap="round"
      />
      {/* Tiny lower branch */}
      <path
        d="M 28,40 C 30,45 33,46 32,42"
        stroke={c} strokeWidth="1.0" fill="none" strokeLinecap="round"
      />

      {/* Left upper leaf — faces toward the tip (left side) */}
      <path
        d="M 14,20 Q 5,16 4,20 Q 5,24 14,23 Z"
        fill={c} fillOpacity="0.75"
      />
      {/* Left lower leaf */}
      <path
        d="M 14,34 Q 5,30 4,34 Q 5,38 14,37 Z"
        fill={c} fillOpacity="0.75"
      />

      {/* Small secondary upper leaf */}
      <path
        d="M 15,18 Q 9,14 8,18 Q 9,21 15,20 Z"
        fill={c} fillOpacity="0.5"
      />
      {/* Small secondary lower leaf */}
      <path
        d="M 15,36 Q 9,32 8,36 Q 9,39 15,38 Z"
        fill={c} fillOpacity="0.5"
      />

      {/* Central medallion */}
      <circle cx="17" cy="27" r="5" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.1" />
      <circle cx="17" cy="27" r="2.5" fill={c} fillOpacity="0.55" />
      <circle cx="17" cy="27" r="1" fill={c} fillOpacity="0.3" />
    </svg>
  );
};

interface LuxuryButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  className?: string;
  href?: string;
  size?: 'sm' | 'md';
  type?: 'button' | 'submit' | 'reset';
}

export default function LuxuryButton({
  children,
  variant = 'primary',
  onClick,
  className = '',
  href,
  size = 'md',
  type = 'button',
}: LuxuryButtonProps) {
  const uniqueId = useId().replace(/:/g, '');
  const primaryGradId = `luxBtnPrimary-${uniqueId}`;
  const outlineGradId = `luxBtnOutline-${uniqueId}`;
  const height = size === 'sm' ? 44 : 54;
  const minWidth = size === 'sm' ? 180 : 230;
  const fontSize = size === 'sm' ? '0.7rem' : '0.79rem';
  const padH = size === 'sm' ? 40 : 50;

  const isPrimary = variant === 'primary';

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height,
    minWidth,
    padding: `0 ${padH}px`,
    cursor: 'pointer',
    textDecoration: 'none',
    border: 'none',
    background: 'none',
    outline: 'none',
    transition: 'transform 0.3s ease, filter 0.3s ease',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    el.style.transform = 'translateY(-2px) scale(1.035)';
    el.style.filter = isPrimary
      ? 'drop-shadow(0 6px 18px rgba(200,155,91,0.55)) brightness(1.06)'
      : 'drop-shadow(0 4px 12px rgba(200,155,91,0.35)) brightness(1.04)';
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    el.style.transform = '';
    el.style.filter = '';
  };

  const content = (
    <>
      {/* ─── SVG background shape ─── */}
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          {isPrimary ? (
            <linearGradient id={primaryGradId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="#E6C264" />
              <stop offset="18%"  stopColor="#F2D880" />
              <stop offset="48%"  stopColor="#F8E898" />
              <stop offset="72%"  stopColor="#D4A84C" />
              <stop offset="100%" stopColor="#A87428" />
            </linearGradient>
          ) : (
            <linearGradient id={outlineGradId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor="rgba(200,155,91,0.06)" />
              <stop offset="100%" stopColor="rgba(200,155,91,0.02)" />
            </linearGradient>
          )}
        </defs>

        {isPrimary ? (
          <>
            {/* Outer dark frame — acts as border */}
            <path
              d="M 12,0 L 88,0 L 100,50 L 88,100 L 12,100 L 0,50 Z"
              fill="#1A0E06"
              vectorEffect="non-scaling-stroke"
            />
            {/* Inner gold gradient fill */}
            <path
              d="M 13.8,4 L 86.2,4 L 97.5,50 L 86.2,96 L 13.8,96 L 2.5,50 Z"
              fill={`url(#${primaryGradId})`}
              vectorEffect="non-scaling-stroke"
            />
            {/* Subtle inner highlight (top-edge shimmer) */}
            <path
              d="M 15,7 L 85,7 L 92,30 L 85,7 L 15,7 L 8,30 Z"
              fill="rgba(255,255,255,0.14)"
              vectorEffect="non-scaling-stroke"
            />
            {/* Subtle inner shadow (bottom-edge depth) */}
            <path
              d="M 14,93 L 86,93 L 97,50 L 86,93 L 14,93 L 3,50 Z"
              fill="rgba(0,0,0,0.1)"
              vectorEffect="non-scaling-stroke"
            />
          </>
        ) : (
          <>
            {/* Outline variant: transparent fill + gold stroke */}
            <path
              d="M 12.5,1.5 L 87.5,1.5 L 99,50 L 87.5,98.5 L 12.5,98.5 L 1,50 Z"
              fill={`url(#${outlineGradId})`}
              stroke="#C89B5B"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
            />
            {/* Inner thinner accent line */}
            <path
              d="M 14.5,5.5 L 85.5,5.5 L 95.5,50 L 85.5,94.5 L 14.5,94.5 L 4.5,50 Z"
              fill="none"
              stroke="rgba(200,155,91,0.25)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </>
        )}
      </svg>

      {/* ─── Left end ornament ─── */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        <EndOrnament dark={isPrimary} />
      </div>

      {/* ─── Label ─── */}
      <span
        style={{
          position: 'relative',
          zIndex: 2,
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize,
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: isPrimary ? '#1A0E06' : '#D8B67C',
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </span>

      {/* ─── Right end ornament (mirrored) ─── */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          zIndex: 2,
          transform: 'scaleX(-1)',
        }}
      >
        <EndOrnament dark={isPrimary} />
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={className}
        style={containerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
}

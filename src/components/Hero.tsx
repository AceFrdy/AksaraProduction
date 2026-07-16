import { useEffect, useRef } from 'react';
import LuxuryButton from './LuxuryButton';

const TempleSilhouette = () => (
  <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="sunGlow" cx="73%" cy="53%" r="35%">
        <stop offset="0%" stopColor="#FFE6A3" stopOpacity="1" />
        <stop offset="12%" stopColor="#F5B041" stopOpacity="0.9" />
        <stop offset="40%" stopColor="#C05808" stopOpacity="0.55" />
        <stop offset="70%" stopColor="#5C2400" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#0B0A09" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="atmosGlow" cx="70%" cy="55%" r="60%">
        <stop offset="0%" stopColor="#8A4F08" stopOpacity="0.4" />
        <stop offset="60%" stopColor="#4A2700" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#0B0A09" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="sunDisc" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFFDF0" stopOpacity="1" />
        <stop offset="35%" stopColor="#FFE080" stopOpacity="1" />
        <stop offset="100%" stopColor="#F5B041" stopOpacity="0.5" />
      </radialGradient>
      <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1E140F" stopOpacity="1" />
        <stop offset="100%" stopColor="#0B0A09" stopOpacity="1" />
      </linearGradient>
      <filter id="blurReflect" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="15" />
      </filter>
      <radialGradient id="vignette" cx="50%" cy="50%" r="75%">
        <stop offset="40%" stopColor="transparent" />
        <stop offset="100%" stopColor="#050403" stopOpacity="0.94" />
      </radialGradient>
      <g id="megaMendung">
        <path d="M 0 50 C -30 50, -50 20, -10 -10 C 10 -30, 60 -30, 80 -10 C 100 -30, 140 -20, 150 10 C 170 0, 200 10, 200 30 C 200 50, 170 60, 150 50 C 140 65, 100 65, 80 50 C 60 65, 20 65, 0 50 Z" stroke="#B88945" strokeWidth="0.8" fill="none" opacity="0.25" />
        <path d="M 15 45 C -10 45, -25 20, 5 0 C 20 -15, 55 -15, 70 0 C 85 -15, 120 -10, 130 10 C 145 2, 170 10, 170 25 C 170 40, 145 48, 130 40 C 120 52, 90 52, 75 40 C 60 52, 30 52, 15 45 Z" stroke="#B88945" strokeWidth="0.6" fill="none" opacity="0.18" />
        <path d="M 30 40 C 10 40, 0 20, 20 10 C 30 0, 50 0, 60 10 C 70 0, 100 0, 110 10 C 120 4, 140 10, 140 20 C 140 30, 120 36, 110 30 C 100 38, 80 38, 70 30 C 60 38, 40 38, 30 40 Z" stroke="#B88945" strokeWidth="0.5" fill="none" opacity="0.12" />
      </g>
    </defs>
    <rect width="1440" height="900" fill="#0B0A09" />
    <ellipse cx="1050" cy="500" rx="600" ry="450" fill="url(#atmosGlow)" />
    <ellipse cx="1050" cy="480" rx="350" ry="280" fill="url(#sunGlow)" />
    <circle cx="1050" cy="480" r="28" stroke="#D8B67C" strokeWidth="0.5" strokeDasharray="3 3" fill="none" opacity="0.3" />
    <circle cx="1050" cy="480" r="16" stroke="#D8B67C" strokeWidth="0.8" fill="none" opacity="0.5" />
    <circle cx="1050" cy="480" r="6" stroke="#D8B67C" strokeWidth="1.2" fill="none" opacity="0.7" />
    <g stroke="#D8B67C" strokeWidth="0.6" strokeOpacity="0.15">
      <line x1="1050" y1="480" x2="650" y2="250" />
      <line x1="1050" y1="480" x2="720" y2="180" />
      <line x1="1050" y1="480" x2="820" y2="100" />
      <line x1="1050" y1="480" x2="550" y2="380" />
      <line x1="1050" y1="480" x2="480" y2="500" />
      <line x1="1050" y1="480" x2="1350" y2="250" />
      <line x1="1050" y1="480" x2="1400" y2="380" />
    </g>
    <rect width="1440" height="900" fill="url(#vignette)" />
  </svg>
);

const AksaraPattern = () => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="aksaraGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#C89B5B" stopOpacity="0.15" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <circle cx="200" cy="200" r="180" fill="url(#aksaraGlow)" />
    <circle cx="200" cy="200" r="160" stroke="#C89B5B" strokeWidth="0.5" strokeOpacity="0.2" fill="none" strokeDasharray="4 8" />
    <circle cx="200" cy="200" r="120" stroke="#C89B5B" strokeWidth="0.4" strokeOpacity="0.15" fill="none" />
  </svg>
);

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const items = el.querySelectorAll('[data-fade]');
    items.forEach((item, i) => {
      setTimeout(() => {
        (item as HTMLElement).style.opacity = '1';
        (item as HTMLElement).style.transform = 'translateY(0)';
      }, 300 + i * 180);
    });
  }, []);

  return (
    <section
      id="beranda"
      className="relative h-auto flex items-center overflow-hidden"
      style={{ backgroundImage: "url('/assets/images/background.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/images/background.png" alt="hero background" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(11,10,9,0.65) 0%, rgba(24,18,15,0.15) 50%, rgba(11,10,9,0.85) 100%)' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(200,155,91,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(200,155,91,0.025) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center min-h-fit lg:min-h-[65vh]">

          {/* Left: Text */}
          <div ref={textRef} className="flex flex-col gap-6 lg:gap-10 max-w-xl">
            {/* Label */}
            <div
              data-fade
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}
              className="flex items-center gap-3"
            >
              <span className="block w-8 h-px bg-gold-warm" />
              <span className="section-label">Teknologi Modern, Nilai Tradisi</span>
            </div>

            {/* Headline */}
            <div
              data-fade
              style={{ opacity: 0, transform: 'translateY(28px)', transition: 'all 0.8s ease' }}
            >
              <h1 className="font-serif text-[clamp(2.4rem,5vw,5.5rem)] font-light leading-[1.02] text-shadow-gold">
                <span className="block text-cream-soft">Solusi Digital</span>
                <span className="block text-gold-gradient mt-1">Berakar Budaya,</span>
                <span className="block text-cream-soft mt-1">Berkelas Dunia.</span>
              </h1>
            </div>

            {/* Separator */}
            <div
              data-fade
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.7s ease' }}
              className="flex items-center gap-4"
            >
              <span className="block w-12 h-px bg-gradient-to-r from-gold-warm to-transparent" />
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#C89B5B" strokeWidth="0.8" />
                <circle cx="8" cy="8" r="2" fill="#C89B5B" fillOpacity="0.5" />
                <line x1="8" y1="0" x2="8" y2="16" stroke="#C89B5B" strokeWidth="0.6" />
                <line x1="0" y1="8" x2="16" y2="8" stroke="#C89B5B" strokeWidth="0.6" />
              </svg>
              <span className="block flex-1 h-px bg-gradient-to-l from-gold-warm to-transparent" />
            </div>

            {/* Description */}
            <p
              data-fade
              style={{ opacity: 0, transform: 'translateY(22px)', transition: 'all 0.7s ease' }}
              className="font-sans text-sm sm:text-base md:text-md text-cream-soft/75 leading-relaxed max-w-md"
            >
              Kami menghadirkan solusi digital berkelas dengan sentuhan warisan budaya Jawa yang kaya.
              Website development, konsultasi IT, branding, dan transformasi digital untuk bisnis Anda.
            </p>

            {/* CTAs */}
            <div
              data-fade
              style={{ opacity: 0, transform: 'translateY(22px)', transition: 'all 0.7s ease' }}
              className="flex flex-col sm:flex-row gap-4 pt-2 items-start"
            >
              <LuxuryButton href="#kontak" variant="primary">Konsultasi Gratis</LuxuryButton>
              <LuxuryButton href="#layanan" variant="outline">Lihat Layanan</LuxuryButton>
            </div>

            {/* Trust badges */}
            {/* <div
              data-fade
              style={{ opacity: 0, transform: 'translateY(18px)', transition: 'all 0.7s ease' }}
              className="flex items-center gap-4 sm:gap-6 pt-2"
            >
              {[
                { num: '50+', label: 'Proyek' },
                { num: '30+', label: 'Klien' },
                { num: '5+', label: 'Tahun' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4">
                  {i > 0 && <span className="w-px h-8 bg-gold-warm/20" />}
                  <div>
                    <div className="font-serif text-lg sm:text-xl text-gold-luxury font-semibold">{s.num}</div>
                    <div className="font-sans text-[10px] sm:text-xs text-cream-soft/50 tracking-wider uppercase">{s.label}</div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right: Logo — hidden on small mobile, shown md+ */}
          <div className="hidden md:flex relative items-center justify-center h-[320px] md:h-[380px] lg:h-[480px]">
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <AksaraPattern />
            </div>
            <div
              className="absolute"
              style={{
                width: 'clamp(280px, 35vw, 420px)',
                height: 'clamp(280px, 35vw, 420px)',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200,155,91,0.14) 0%, transparent 70%)',
                animation: 'glowBreathe 4s ease-in-out infinite',
              }}
            />
            <div
              className="relative z-10 flex items-center justify-center"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            >
              <img
                src="/assets/images/Logo_A.png"
                alt="AksaraProduction"
                className="object-contain drop-shadow-2xl"
                style={{
                  width: 'clamp(160px, 20vw, 320px)',
                  height: 'clamp(160px, 20vw, 320px)',
                  filter: 'drop-shadow(0 0 48px rgba(200,155,91,0.45)) drop-shadow(0 0 96px rgba(200,155,91,0.18))',
                }}
              />
            </div>
            <div className="absolute bottom-8 flex flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                <span className="w-10 h-px bg-gradient-to-r from-transparent to-gold-warm" />
                <span className="font-serif text-base sm:text-lg tracking-[0.3em] text-gold-luxury">AKSARA</span>
                <span className="font-sans text-xs sm:text-sm tracking-[0.2em] text-cream-soft/50 font-light">PRODUCTION</span>
                <span className="w-10 h-px bg-gradient-to-l from-transparent to-gold-warm" />
              </div>
              <p className="font-sans text-xs tracking-[0.25em] text-cream-soft/35 uppercase">Digital Agency</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 opacity-50">
        <span className="font-sans text-[10px] sm:text-xs tracking-widest text-cream-soft/40 uppercase">Scroll</span>
        <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-gold-warm/50 to-transparent" />
      </div>
    </section>
  );
}

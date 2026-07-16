import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 50, suffix: '+', label: 'Proyek Selesai', sublabel: 'Projects Completed' },
  { number: 30, suffix: '+', label: 'Klien Puas', sublabel: 'Happy Clients' },
  { number: 5, suffix: '+', label: 'Tahun Pengalaman', sublabel: 'Years Experience' },
  { number: 24, suffix: '/7', label: 'Dukungan Teknis', sublabel: 'Technical Support' },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

const StatItem = ({ stat, active }: { stat: typeof stats[0]; active: boolean }) => {
  const count = useCountUp(stat.number, 2000, active);
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 group cursor-default">
      <div
        className="relative flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105"
        style={{
          width: 'clamp(88px, 14vw, 112px)',
          height: 'clamp(88px, 14vw, 112px)',
          border: '1px solid rgba(200,155,91,0.25)',
          background: 'rgba(200,155,91,0.04)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,155,91,0.5)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(200,155,91,0.2)';
          (e.currentTarget as HTMLDivElement).style.background = 'rgba(200,155,91,0.08)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,155,91,0.25)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
          (e.currentTarget as HTMLDivElement).style.background = 'rgba(200,155,91,0.04)';
        }}
      >
        <div className="absolute rounded-full" style={{ inset: 6, border: '1px solid rgba(200,155,91,0.12)' }} />
        <div className="relative z-10 text-center">
          <span className="font-serif text-2xl sm:text-3xl font-semibold text-gold-luxury">
            {count}{stat.suffix}
          </span>
        </div>
      </div>
      <div className="text-center">
        <div className="font-serif text-base sm:text-lg text-cream-soft">{stat.label}</div>
        <div className="font-sans text-[10px] sm:text-xs text-cream-soft/35 tracking-wider mt-0.5">{stat.sublabel}</div>
      </div>
    </div>
  );
};

export default function Statistics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-14 sm:py-16 md:py-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B0A09 0%, #130E0B 50%, #0B0A09 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,155,91,0.4), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(200,155,91,0.4), transparent)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 100% at 50% 50%, rgba(200,155,91,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="reveal flex items-center justify-center gap-3 mb-8 sm:mb-12">
          <span className="block w-8 h-px bg-gold-warm" />
          <span className="section-label">Pencapaian Kami</span>
          <span className="block w-8 h-px bg-gold-warm" />
        </div>

        {/* 2 kolom di mobile, 4 kolom di lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal">
              <StatItem stat={stat} active={active} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

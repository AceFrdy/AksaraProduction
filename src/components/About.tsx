import React, { useEffect, useRef } from 'react';
import { Shield, ThumbsUp, Rocket } from 'lucide-react';
import LaptopImage from '/assets/images/laptop.png';

const features = [
  {
    icon: Shield,
    title: 'Berpengalaman',
    description: 'Tim profesional dengan pengalaman di berbagai industri.',
  },
  {
    icon: ThumbsUp,
    title: 'Terpercaya',
    description: 'Mengutamakan kualitas, keamanan, dan kepuasan klien.',
  },
  {
    icon: Rocket,
    title: 'Berteknologi',
    description: 'Menggunakan teknologi terkini untuk hasil yang optimal.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    section.querySelectorAll('.about-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ minHeight: 'clamp(480px, 70vw, 680px)' }}
    >
      {/* ── Full-section background ── */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${LaptopImage})`,
          backgroundColor: '#0d0805',
          backgroundSize: '70% auto',
          backgroundPosition: 'right center',
        }}
      />

      {/* ── Gradient overlay: kiri gelap → kanan transparan ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(8,4,2,1) 0%, rgba(12,6,2,0.97) 22%, rgba(15,8,3,0.88) 38%, rgba(18,10,4,0.55) 55%, rgba(20,12,5,0.15) 72%, rgba(18,10,4,0.08) 100%)',
        }}
      />
      {/* Mobile: overlay lebih tebal agar teks mudah dibaca */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: 'rgba(8,4,2,0.55)' }}
      />

      {/* ── Top fade — solid lebar agar celah tertutup walau gambar 70% ── */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: '42%',
          background: 'linear-gradient(to bottom, #0d0805 0%, #0d0805 18%, rgba(13,8,5,0.92) 38%, rgba(13,8,5,0.55) 65%, transparent 100%)',
        }}
      />
      {/* ── Bottom fade — solid lebar ── */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: '42%',
          background: 'linear-gradient(to top, #0d0805 0%, #0d0805 18%, rgba(13,8,5,0.92) 38%, rgba(13,8,5,0.55) 65%, transparent 100%)',
        }}
      />

      {/* ── Warm amber glow ── */}
      <div
        className="absolute pointer-events-none hidden sm:block"
        style={{
          top: '10%',
          right: '8%',
          width: 'clamp(200px, 30vw, 460px)',
          height: 'clamp(160px, 25vw, 380px)',
          background: 'radial-gradient(ellipse, rgba(180,100,30,0.22) 0%, rgba(150,80,20,0.10) 45%, transparent 72%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-28">
        <div className="max-w-[540px]">

          {/* Label */}
          <div
            className="about-reveal mb-4 flex items-center gap-3 sm:mb-5"
            style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
          >
            <span
              className="inline-block h-px w-6 sm:w-8"
              style={{ background: 'linear-gradient(to right, #C89A5D, transparent)' }}
            />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 'clamp(0.6rem, 1.8vw, 0.68rem)',
                fontWeight: 600,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: '#C89A5D',
              }}
            >
              TENTANG KAMI
            </span>
          </div>

          {/* Heading */}
          <h2
            className="about-reveal mb-5 sm:mb-7"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.75s ease 0.12s, transform 0.75s ease 0.12s',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              color: '#F0EAE0',
            }}
          >
            Menggabungkan Teknologi
            <br />
            dengan{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C89A5D 0%, #D9B97A 42%, #F0D898 60%, #C89A5D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Nilai dan Budaya
            </span>
          </h2>

          {/* Description */}
          <p
            className="about-reveal mb-8 max-w-[440px] sm:mb-10"
            style={{
              opacity: 0,
              transform: 'translateY(22px)',
              transition: 'opacity 0.75s ease 0.22s, transform 0.75s ease 0.22s',
              fontSize: 'clamp(13px, 2vw, 15px)',
              lineHeight: 1.85,
              color: 'rgba(235,220,200,0.72)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Kami percaya bahwa teknologi terbaik lahir dari pemahaman yang
            mendalam akan kebutuhan dan nilai yang dipegang. Aksara Production
            hadir sebagai partner digital yang tidak hanya memberikan solusi,
            tetapi juga membangun masa depan bersama Anda.
          </p>

          {/* Feature cards */}
          <div
            className="about-reveal grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6"
            style={{
              opacity: 0,
              transform: 'translateY(22px)',
              transition: 'opacity 0.75s ease 0.34s, transform 0.75s ease 0.34s',
            }}
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-start gap-3 sm:flex-col sm:items-start sm:gap-3">
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      minWidth: '40px',
                      borderRadius: '50%',
                      border: '1px solid rgba(200,154,93,0.45)',
                      background: 'rgba(200,154,93,0.07)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={16} style={{ color: '#C89A5D' }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                        fontWeight: 600,
                        color: '#F0EAE0',
                        marginBottom: '3px',
                      }}
                    >
                      {feature.title}
                    </div>
                    <div
                      style={{
                        fontSize: 'clamp(0.78rem, 1.8vw, 0.875rem)',
                        lineHeight: 1.65,
                        color: 'rgba(220,200,175,0.62)',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {feature.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
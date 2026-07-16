import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FloralScrollOrnament from './FloralScrollOrnament';

const testimonials = [
  {
    quote: 'AksaraProduction menghadirkan website yang jauh melampaui ekspektasi kami. Perpaduan estetika budaya dan teknologi modern benar-benar membuat brand kami tampil berbeda di pasar.',
    name: 'Raden Ayu Kusuma',
    title: 'CEO, Warisan Luxury Group',
    initials: 'RK',
  },
  {
    quote: 'Tim mereka sangat profesional dan penuh dedikasi. Mereka tidak sekadar membangun website, mereka memahami jiwa bisnis kami dan menuangkannya ke dalam setiap detail digital.',
    name: 'Bimo Prakoso',
    title: 'Founder, Batik Nusantara',
    initials: 'BP',
  },
  {
    quote: 'Layanan maintenance dari AksaraProduction membuat saya tenang. Website kami selalu optimal dan tim mereka sangat responsif setiap ada kebutuhan mendadak.',
    name: 'Dewi Ratnasari',
    title: 'Director, Prambanan Heritage',
    initials: 'DR',
  },
  {
    quote: 'Konsultasi IT yang kami dapat sangat bernilai. Mereka memberikan perspektif strategis yang akhirnya mengubah cara kami memandang transformasi digital bisnis.',
    name: 'Arjuna Wibisono',
    title: 'CTO, Nusantara Tech',
    initials: 'AW',
  },
];

const QuoteIcon = () => (
  <svg width="30" height="24" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 28V18.4C0 13.6 1.2 9.73333 3.6 6.8C6 3.86667 9.6 1.73333 14.4 0.4L16 4C12.8 5.06667 10.4 6.6 8.8 8.6C7.2 10.6 6.4 13.0667 6.4 16V16.8H14.4V28H0ZM21.6 28V18.4C21.6 13.6 22.8 9.73333 25.2 6.8C27.6 3.86667 31.2 1.73333 36 0.4L37.6 4C34.4 5.06667 32 6.6 30.4 8.6C28.8 10.6 28 13.0667 28 16V16.8H36V28H21.6Z"
      fill="#C89B5B"
      fillOpacity="0.5"
    />
  </svg>
);

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    section.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const go = (dir: 1 | -1) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 200);
  };

  const t = testimonials[active];

  return (
    <>
      {/* Wave: dark -> cream */}
      <div className="relative overflow-hidden leading-none" style={{ background: '#0B0A09', marginBottom: '-2px' }}>
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: 60, display: 'block' }}
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,20 1440,40 L1440,100 L0,100Z"
            fill="#F8F4EE"
          />
        </svg>
      </div>

      <section
        ref={sectionRef}
        className="relative py-12 sm:py-20 md:py-24 overflow-hidden"
        style={{ background: '#F8F4EE' }}
      >
        <div
          className="pointer-events-none select-none absolute left-0 hidden sm:block"
          style={{
            top: '-1%',
            left: '-350px',
            width: 'clamp(600px, 600vw, 720px)',
            height: '150%',
            backgroundImage: "url('/assets/images/corak.svg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            backgroundSize: 'contain',
            opacity: 0.10,
          }}
        />

        <div
          className="pointer-events-none select-none absolute right-0 hidden sm:block"
          style={{
            top: '-1%',
            right: '-350px',
            width: 'clamp(600px, 600vw, 720px)',
            height: '150%',
            backgroundImage: "url('/assets/images/corak.svg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            backgroundSize: 'contain',
            opacity: 0.10,
            transform: 'scaleX(-1)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-14">
            <div className="reveal flex items-center justify-center gap-3 mb-5 sm:mb-6">
              <span className="block w-8 h-px" style={{ background: '#C89B5B' }} />
              <span className="font-sans text-xs font-semibold tracking-[0.35em] uppercase" style={{ color: '#C89B5B' }}>
                Testimoni
              </span>
              <span className="block w-8 h-px" style={{ background: '#C89B5B' }} />
            </div>
            <h2
              className="reveal reveal-delay-1 font-serif font-light"
              style={{ color: '#18120F', fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
            >
              Kata Mereka
            </h2>
          </div>

          {/* Testimonial card */}
          <div
            className="reveal reveal-delay-2 relative rounded-2xl p-6 sm:p-10 md:p-14"
            style={{
              background: 'white',
              boxShadow: '0 8px 48px rgba(11,10,9,0.08)',
              border: '1px solid rgba(200,155,91,0.12)',
              transition: 'opacity 0.25s ease',
              opacity: animating ? 0 : 1,
            }}
          >
            {/* Gold corner accents */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8" style={{ border: '1px solid rgba(200,155,91,0.3)', borderRight: 'none', borderBottom: 'none' }} />
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8" style={{ border: '1px solid rgba(200,155,91,0.3)', borderLeft: 'none', borderBottom: 'none' }} />
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8" style={{ border: '1px solid rgba(200,155,91,0.3)', borderRight: 'none', borderTop: 'none' }} />
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8" style={{ border: '1px solid rgba(200,155,91,0.3)', borderLeft: 'none', borderTop: 'none' }} />

            <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
              <QuoteIcon />
              <p
                className="font-serif font-light leading-relaxed"
                style={{ color: '#18120F', fontStyle: 'italic', fontSize: 'clamp(1rem, 2.5vw, 1.35rem)' }}
              >
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <span className="block w-10 sm:w-12 h-px" style={{ background: 'rgba(200,155,91,0.4)' }} />
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="4" stroke="#C89B5B" strokeWidth="0.8" />
                  <circle cx="6" cy="6" r="1.5" fill="#C89B5B" fillOpacity="0.5" />
                </svg>
                <span className="block w-10 sm:w-12 h-px" style={{ background: 'rgba(200,155,91,0.4)' }} />
              </div>

              {/* Author */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-serif text-sm sm:text-base font-medium"
                  style={{ background: 'linear-gradient(135deg, #C89B5B, #D8B67C)', color: '#0B0A09' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-serif text-base sm:text-lg font-medium" style={{ color: '#18120F' }}>{t.name}</div>
                  <div className="font-sans text-xs sm:text-sm" style={{ color: '#C89B5B' }}>{t.title}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="reveal reveal-delay-3 flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
            <button
              onClick={() => go(-1)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ border: '1px solid rgba(200,155,91,0.3)', color: '#C89B5B', background: 'transparent' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#C89B5B'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(200,155,91,0.08)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(200,155,91,0.3)'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAnimating(true); setTimeout(() => { setActive(i); setAnimating(false); }, 200); }}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i === active ? 22 : 6, height: 6, background: i === active ? '#C89B5B' : 'rgba(200,155,91,0.3)' }}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ border: '1px solid rgba(200,155,91,0.3)', color: '#C89B5B', background: 'transparent' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#C89B5B'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(200,155,91,0.08)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(200,155,91,0.3)'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>

  );
}

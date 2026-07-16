import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Wrench, Server, ArrowRight } from 'lucide-react';
import FloralScrollOrnament from './FloralScrollOrnament';

const services = [
  {
    icon: Monitor,
    title: 'Website Consultation',
    subtitle: 'Strategi Digital',
    description:
      'Kami menganalisis kebutuhan bisnis Anda dan merancang strategi website yang optimal—dari arsitektur informasi hingga teknologi yang paling sesuai untuk pertumbuhan jangka panjang.',
    tags: ['UI/UX Design', 'Tech Architecture', 'SEO Strategy'],
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    subtitle: 'Perawatan Berkala',
    description:
      'Layanan pemeliharaan website profesional yang memastikan performa, keamanan, dan ketersediaan website Anda selalu dalam kondisi prima tanpa gangguan bisnis.',
    tags: ['Security Updates', 'Performance', '24/7 Monitoring'],
    featured: true,
  },
  {
    icon: Server,
    title: 'IT Resource',
    subtitle: 'Sumber Daya Teknologi',
    description:
      'Tim developer berpengalaman yang siap menjadi perpanjangan tangan tim teknologi Anda—fleksibel, andal, dan terampil dalam berbagai stack teknologi modern.',
    tags: ['Dedicated Team', 'Full-Stack Dev', 'Cloud Solutions'],
  },
];

const ServiceIcon = ({ Icon, featured }: { Icon: React.ElementType; featured?: boolean }) => (
  <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
    <div
      className="absolute inset-0 rounded-full"
      style={{
        border: '1px solid rgba(200,155,91,0.3)',
        boxShadow: featured ? '0 0 20px rgba(200,155,91,0.2)' : 'none',
      }}
    />
    <div className="absolute inset-2 rounded-full" style={{ border: '1px solid rgba(200,155,91,0.15)' }} />
    <Icon size={20} style={{ color: '#C89B5B' }} className="relative z-10" />
  </div>
);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderServiceCard = (
    service: (typeof services)[number],
    i: number,
    forceVisible = false
  ) => (
    <div
      key={service.title}
      className={`group relative rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-400 flex flex-col gap-5 sm:gap-6 ${(forceVisible ? 'visible' : `reveal reveal-delay-${i + 2}`) + ' ' +
        (service.featured
          ? 'bg-gradient-to-b from-brown-dark to-black-deep border border-gold-warm/30'
          : 'bg-white border border-cream-mid')
        }`}
      style={{
        boxShadow: service.featured
          ? '0 8px 40px rgba(0,0,0,0.3), 0 0 20px rgba(200,155,91,0.1)'
          : '0 4px 24px rgba(11,10,9,0.06)',
        transition: 'all 0.35s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(-6px)';
        el.style.boxShadow = service.featured
          ? '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(200,155,91,0.2)'
          : '0 16px 48px rgba(11,10,9,0.12), 0 0 20px rgba(200,155,91,0.08)';
        el.style.borderColor = 'rgba(200,155,91,0.5)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = '';
        el.style.boxShadow = service.featured
          ? '0 8px 40px rgba(0,0,0,0.3), 0 0 20px rgba(200,155,91,0.1)'
          : '0 4px 24px rgba(11,10,9,0.06)';
        el.style.borderColor = service.featured
          ? 'rgba(200,155,91,0.3)'
          : 'rgb(237,228,216)';
      }}
    >
      {service.featured && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 font-sans text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
          style={{
            background: 'linear-gradient(135deg, #C89B5B, #D8B67C)',
            color: '#0B0A09',
            clipPath: 'polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)',
          }}
        >
          Most Popular
        </div>
      )}

      <ServiceIcon Icon={service.icon} featured={service.featured} />

      <div>
        <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase mb-2" style={{ color: '#C89B5B' }}>
          {service.subtitle}
        </p>
        <h3 className="font-serif text-xl sm:text-2xl font-medium" style={{ color: service.featured ? '#F8F4EE' : '#18120F' }}>
          {service.title}
        </h3>
      </div>

      <p
        className="font-sans text-sm leading-relaxed flex-1"
        style={{ color: service.featured ? 'rgba(248,244,238,0.65)' : 'rgba(24,18,15,0.65)' }}
      >
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="font-sans text-xs px-3 py-1 rounded-full"
            style={{
              background: service.featured ? 'rgba(200,155,91,0.12)' : 'rgba(200,155,91,0.08)',
              color: '#C89B5B',
              border: '1px solid rgba(200,155,91,0.2)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href="#kontak"
        className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 group-hover:gap-3"
        style={{ color: '#C89B5B' }}
      >
        Pelajari Lebih Lanjut
        <ArrowRight size={14} />
      </a>
    </div>
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    section.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Wave Divider: dark -> cream */}
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
        id="layanan"
        ref={sectionRef}
        className="relative py-16 sm:py-20 md:py-24 overflow-hidden"
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

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Section header */}
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <div className="reveal flex items-center justify-center gap-3 mb-5 sm:mb-6">
              <span className="block w-8 h-px" style={{ background: '#C89B5B' }} />
              <span className="font-sans text-xs font-semibold tracking-[0.35em] uppercase" style={{ color: '#C89B5B' }}>
                Layanan Kami
              </span>
              <span className="block w-8 h-px" style={{ background: '#C89B5B' }} />
            </div>
            <h2
              className="reveal reveal-delay-1 font-serif font-light leading-tight"
              style={{ color: '#18120F', fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
            >
              Solusi Digital{' '}
              <span style={{ color: '#C89B5B', fontStyle: 'italic' }}>Terpadu</span>
            </h2>
            <p
              className="reveal reveal-delay-2 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto mt-4"
              style={{ color: '#3D2B1F', opacity: 0.7 }}
            >
              Dari konsultasi strategis hingga implementasi penuh, kami menghadirkan solusi teknologi yang memperkuat bisnis Anda.
            </p>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-8">
            {services.map((service, i) => renderServiceCard(service, i))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <div>{renderServiceCard(services[activeIndex], activeIndex, true)}</div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev - 1 + services.length) % services.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C89B5B]/30 bg-white/80 text-[#C89B5B] shadow-sm transition hover:-translate-y-0.5"
                aria-label="Layanan sebelumnya"
              >
                <ArrowRight size={16} className="rotate-180" />
              </button>

              <div className="flex flex-1 justify-center gap-2">
                {services.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Tampilkan ${service.title}`}
                    className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-7 bg-[#C89B5B]' : 'w-2 bg-[#C89B5B]/30'
                      }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev + 1) % services.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C89B5B]/30 bg-white/80 text-[#C89B5B] shadow-sm transition hover:-translate-y-0.5"
                aria-label="Layanan berikutnya"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

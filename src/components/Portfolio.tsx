import { useState, useEffect, useRef, TouchEvent } from 'react';
import { ExternalLink } from 'lucide-react';
import BatikOrnament from './BatikOrnament';

const projects = [
  {
    title: 'Warisan Luxury Hotel',
    category: 'Website Development',
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
    size: 'large',
  },
  {
    title: 'Batik Nusantara Store',
    category: 'E-Commerce',
    image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=600',
    size: 'small',
  },
  {
    title: 'Prambanan Digital',
    category: 'Branding & Identity',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
    size: 'small',
  },
  {
    title: 'Keraton Heritage Museum',
    category: 'Web Application',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    size: 'large',
  },
  {
    title: 'Javanese Artisan Platform',
    category: 'IT Consultation',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    size: 'small',
  },
  {
    title: 'Nusantara Tech Hub',
    category: 'IT Resource',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    size: 'small',
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayRef = useRef<number | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3500);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current !== null) {
      window.clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
    stopAutoPlay();
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;
    if (diff > swipeThreshold) {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    } else if (diff < -swipeThreshold) {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
    startAutoPlay();
  };

  const goToSlide = (index: number) => {
    stopAutoPlay();
    setCurrentIndex(index);
    startAutoPlay();
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.06 }
    );
    section.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B0A09 0%, #18120F 60%, #0B0A09 100%)' }}
    >
      {/* Batik ornaments – reduced opacity on mobile */}
      <div className="ornament-corner left-0 top-0 -translate-x-1/3 -translate-y-1/4 hidden sm:block">
        <BatikOrnament opacity={0.06} size={400} />
      </div>
      <div className="ornament-corner right-0 bottom-0 translate-x-1/3 translate-y-1/4 hidden sm:block">
        <BatikOrnament opacity={0.06} size={400} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-5 sm:mb-6">
            <span className="block w-8 h-px bg-gold-warm" />
            <span className="section-label">Karya Terbaik</span>
            <span className="block w-8 h-px bg-gold-warm" />
          </div>
          <h2
            className="reveal reveal-delay-1 font-serif font-light text-cream-soft"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
          >
            Portfolio{' '}
            <span className="text-gold-gradient italic">Pilihan</span>
          </h2>
          <p className="reveal reveal-delay-2 font-sans text-sm sm:text-base text-cream-soft/55 max-w-lg mx-auto mt-4 leading-relaxed">
            Setiap proyek adalah perpaduan antara fungsi, estetika, dan nilai—mencerminkan standar premium yang kami jaga.
          </p>
        </div>

        {/* Masonry grid – 1 col mobile, 2 col sm, 3 col lg */}
        {/* Desktop View: Masonry grid – 2 col sm, 3 col lg */}
        <div className="hidden sm:block sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal reveal-delay-${(i % 4) + 1} break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer ${
                project.size === 'large' ? 'h-56 sm:h-72 md:h-80' : 'h-44 sm:h-52 md:h-60'
              }`}
              style={{ transition: 'all 0.35s ease' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Default subtle overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(11,10,9,0.6) 0%, transparent 60%)' }}
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3"
                style={{ background: 'rgba(11,10,9,0.82)', border: '1px solid rgba(200,155,91,0.4)' }}
              >
                <span
                  className="font-sans text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ color: '#C89B5B', border: '1px solid rgba(200,155,91,0.3)' }}
                >
                  {project.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-cream-soft text-center px-4">{project.title}</h3>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mt-1"
                  style={{ border: '1px solid rgba(200,155,91,0.4)', color: '#C89B5B' }}
                >
                  <ExternalLink size={13} />
                </div>
              </div>

              {/* Always visible title */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 group-hover:opacity-0 transition-opacity duration-200">
                <p className="font-sans text-[10px] sm:text-xs text-gold-warm/70 tracking-wider uppercase mb-0.5">{project.category}</p>
                <h3 className="font-serif text-sm sm:text-base text-cream-soft">{project.title}</h3>
              </div>

              {/* Gold corner accents */}
              <div className="absolute top-3 right-3 w-5 h-5 sm:w-6 sm:h-6 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ border: '1px solid rgba(200,155,91,0.5)', borderBottom: 'none', borderLeft: 'none' }} />
              <div className="absolute bottom-3 left-3 w-5 h-5 sm:w-6 sm:h-6 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ border: '1px solid rgba(200,155,91,0.5)', borderTop: 'none', borderRight: 'none' }} />
            </div>
          ))}
        </div>

        {/* Mobile View: Aesthetic Auto-Slider */}
        <div className="block sm:hidden relative w-full overflow-hidden py-4">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${currentIndex * 82}% + 9%))` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project, i) => {
              const isActive = i === currentIndex;
              return (
                <div
                  key={project.title}
                  className="w-[82%] flex-shrink-0 px-2.5 transition-all duration-500 ease-out"
                  style={{
                    transform: isActive ? 'scale(1)' : 'scale(0.92)',
                    opacity: isActive ? 1 : 0.4,
                  }}
                  onClick={() => {
                    if (!isActive) {
                      goToSlide(i);
                    }
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-2xl h-72 w-full cursor-pointer transition-all duration-500"
                    style={{
                      border: isActive
                        ? '1px solid rgba(200, 155, 91, 0.45)'
                        : '1px solid rgba(200, 155, 91, 0.1)',
                      boxShadow: isActive
                        ? '0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(200, 155, 91, 0.15)'
                        : '0 4px 20px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isActive ? 'scale-105' : 'scale-100'
                      }`}
                    />

                    {/* Dark gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(11, 10, 9, 0.95) 0%, rgba(11, 10, 9, 0.4) 50%, transparent 100%)',
                      }}
                    />

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end min-h-[50%]">
                      <span
                        className="font-sans text-[10px] tracking-widest uppercase mb-1.5 inline-block w-fit"
                        style={{ color: '#C89B5B' }}
                      >
                        {project.category}
                      </span>
                      <h3 className="font-serif text-lg text-cream-soft leading-snug mb-3">
                        {project.title}
                      </h3>
                      
                      {/* View button - expands smoothly for active slide */}
                      <div
                        className={`flex items-center gap-2 text-gold-warm font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-500 origin-left ${
                          isActive ? 'opacity-100 translate-y-0 h-5 mt-1' : 'opacity-0 translate-y-2 h-0 overflow-hidden'
                        }`}
                      >
                        <span>Lihat Proyek</span>
                        <ExternalLink size={11} className="animate-pulse" />
                      </div>
                    </div>

                    {/* Elegant Gold Corner Accents on Active card */}
                    <div
                      className={`absolute top-4 right-4 w-4 h-4 transition-all duration-700 ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                      style={{ borderTop: '1px solid rgba(200, 155, 91, 0.6)', borderRight: '1px solid rgba(200, 155, 91, 0.6)' }}
                    />
                    <div
                      className={`absolute bottom-4 left-4 w-4 h-4 transition-all duration-700 ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}
                      style={{ borderBottom: '1px solid rgba(200, 155, 91, 0.6)', borderLeft: '1px solid rgba(200, 155, 91, 0.6)' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel dots indicators */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {projects.map((_, i) => {
              const isActive = i === currentIndex;
              return (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out focus:outline-none ${
                    isActive ? 'w-6 bg-gold-gradient shadow-gold-sm' : 'w-1.5 bg-cream-soft/20'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-3 text-center mt-10 sm:mt-14">
          <a
            href="#kontak"
            className="inline-flex items-center gap-3 font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-gold-warm hover:text-gold-luxury transition-colors duration-300 group"
          >
            Lihat Semua Proyek
            <span className="w-8 h-px bg-gold-warm group-hover:w-12 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

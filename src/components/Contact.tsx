import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import LuxuryButton from './LuxuryButton';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@aksaraproduction.com' },
  { icon: Phone, label: 'Telepon', value: '+62 812 3456 7890' },
  { icon: MapPin, label: 'Lokasi', value: 'Yogyakarta, Jawa Tengah' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', service: '', message: '' });
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(200,155,91,0.2)',
    color: '#F8F4EE',
    outline: 'none',
    transition: 'all 0.3s ease',
    borderRadius: '8px',
    padding: '12px 16px',
    width: '100%',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: '0.875rem',
  };

  return (
    <section
      id="kontak"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B0A09 0%, #18120F 50%, #0B0A09 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(200,155,91,0.05) 0%, transparent 70%)' }} />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: 'clamp(280px, 50vw, 600px)', height: 300, background: 'radial-gradient(ellipse, rgba(200,155,91,0.12) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'glowBreathe 5s ease-in-out infinite' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-5 sm:mb-6">
            <span className="block w-8 h-px bg-gold-warm" />
            <span className="section-label">Hubungi Kami</span>
            <span className="block w-8 h-px bg-gold-warm" />
          </div>
          <h2
            className="reveal reveal-delay-1 font-serif font-light text-cream-soft"
            style={{ fontSize: 'clamp(1.9rem, 5vw, 3.75rem)' }}
          >
            Mari Berkolaborasi
          </h2>
          <p className="reveal reveal-delay-2 font-sans text-sm sm:text-base text-cream-soft/55 max-w-lg mx-auto mt-4 leading-relaxed">
            Ceritakan visi digital Anda kepada kami. Konsultasi pertama selalu gratis, tanpa komitmen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          {/* Left: Contact info */}
          <div className="flex flex-col gap-7 sm:gap-10">
            <div className="reveal reveal-delay-1">
              <h3 className="font-serif text-xl sm:text-2xl text-cream-soft mb-2">Mulai Percakapan</h3>
              <p className="font-sans text-sm text-cream-soft/55 leading-relaxed">
                Kami siap mendengar, memahami, dan merancang solusi terbaik yang sesuai dengan kebutuhan unik bisnis Anda.
              </p>
            </div>

            <div className="reveal reveal-delay-2 flex flex-col gap-4 sm:gap-5">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl group cursor-default transition-all duration-300"
                  style={{ background: 'rgba(200,155,91,0.04)', border: '1px solid rgba(200,155,91,0.1)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,155,91,0.3)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(200,155,91,0.07)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(200,155,91,0.1)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(200,155,91,0.04)'; }}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ border: '1px solid rgba(200,155,91,0.3)' }}>
                    <info.icon size={16} style={{ color: '#C89B5B' }} />
                  </div>
                  <div>
                    <div className="font-sans text-[10px] sm:text-xs text-gold-warm/70 tracking-wider uppercase mb-0.5">{info.label}</div>
                    <div className="font-sans text-xs sm:text-sm text-cream-soft/80">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA strip */}
            <div
              className="reveal reveal-delay-3 p-5 sm:p-6 rounded-xl relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(200,155,91,0.1) 0%, rgba(200,155,91,0.05) 100%)', border: '1px solid rgba(200,155,91,0.2)' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 opacity-10" style={{ background: 'radial-gradient(circle, #C89B5B 0%, transparent 70%)' }} />
              <p className="font-serif text-lg sm:text-xl text-cream-soft mb-2">Konsultasi Gratis</p>
              <p className="font-sans text-xs sm:text-sm text-cream-soft/55 mb-4 sm:mb-5">
                Jadwalkan sesi konsultasi 30 menit bersama tim kami—tanpa biaya, tanpa kewajiban.
              </p>
              <a
                href="mailto:hello@aksaraproduction.com"
                className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-widest uppercase text-gold-warm hover:text-gold-luxury transition-colors duration-300"
              >
                Kirim Email Sekarang <Send size={12} />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-2">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:gap-5 p-5 sm:p-8 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(200,155,91,0.12)' }}
            >
              {submitted && (
                <div
                  className="py-3 px-4 sm:py-4 sm:px-5 rounded-xl text-center"
                  style={{ background: 'rgba(200,155,91,0.12)', border: '1px solid rgba(200,155,91,0.3)', color: '#D8B67C', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.875rem' }}
                >
                  Pesan terkirim. Kami akan menghubungi Anda segera.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] sm:text-xs text-gold-warm/70 tracking-wider uppercase">Nama Lengkap</label>
                  <input type="text" required placeholder="Nama Anda" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} onFocus={(e) => (e.target.style.borderColor = 'rgba(200,155,91,0.5)')} onBlur={(e) => (e.target.style.borderColor = 'rgba(200,155,91,0.2)')} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] sm:text-xs text-gold-warm/70 tracking-wider uppercase">Email</label>
                  <input type="email" required placeholder="email@domain.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} onFocus={(e) => (e.target.style.borderColor = 'rgba(200,155,91,0.5)')} onBlur={(e) => (e.target.style.borderColor = 'rgba(200,155,91,0.2)')} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] sm:text-xs text-gold-warm/70 tracking-wider uppercase">Layanan yang Diminati</label>
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} style={{ ...inputStyle, cursor: 'pointer' }} onFocus={(e) => (e.target.style.borderColor = 'rgba(200,155,91,0.5)')} onBlur={(e) => (e.target.style.borderColor = 'rgba(200,155,91,0.2)')}>
                  <option value="" style={{ background: '#18120F' }}>Pilih layanan...</option>
                  <option value="website" style={{ background: '#18120F' }}>Website Development</option>
                  <option value="consultation" style={{ background: '#18120F' }}>IT Consultation</option>
                  <option value="maintenance" style={{ background: '#18120F' }}>Website Maintenance</option>
                  <option value="branding" style={{ background: '#18120F' }}>Branding & Identity</option>
                  <option value="resource" style={{ background: '#18120F' }}>IT Resource</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] sm:text-xs text-gold-warm/70 tracking-wider uppercase">Pesan</label>
                <textarea rows={4} placeholder="Ceritakan proyek atau kebutuhan Anda..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }} onFocus={(e) => (e.target.style.borderColor = 'rgba(200,155,91,0.5)')} onBlur={(e) => (e.target.style.borderColor = 'rgba(200,155,91,0.2)')} />
              </div>

              <LuxuryButton variant="primary" type="submit">Kirim Pesan</LuxuryButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

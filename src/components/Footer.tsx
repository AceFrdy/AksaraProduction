import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Kontak', href: '#kontak' },
];

const services = [
  'Website Development',
  'IT Consultation',
  'Website Maintenance',
  'Branding & Identity',
  'IT Resource',
  'Digital Solutions',
];

const social = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Mail, href: '#', label: 'Email' },
];

const BatikTopBorder = () => (
  <svg viewBox="0 0 1440 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ height: 24 }}>
    <defs>
      <pattern id="batikBorder" x="0" y="0" width="72" height="24" patternUnits="userSpaceOnUse">
        <path d="M0 12 Q9 4 18 12 Q27 20 36 12 Q45 4 54 12 Q63 20 72 12" stroke="#C89B5B" strokeWidth="0.6" strokeOpacity="0.35" fill="none" />
        <circle cx="18" cy="12" r="2" fill="#C89B5B" fillOpacity="0.2" />
        <circle cx="54" cy="12" r="2" fill="#C89B5B" fillOpacity="0.2" />
        <circle cx="36" cy="6" r="1" fill="#C89B5B" fillOpacity="0.15" />
      </pattern>
    </defs>
    <rect width="1440" height="24" fill="url(#batikBorder)" />
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: '#0B0A09' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 sm:py-14 lg:py-16">
        {/* Grid: 1 kolom mobile, 2 kolom sm, 4 kolom lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5 sm:gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/Logo_A.png"
                alt="AksaraProduction"
                className="h-10 sm:h-12 w-auto"
                style={{ filter: 'drop-shadow(0 0 8px rgba(200,155,91,0.3))' }}
              />
              <div>
                <div className="font-serif text-base sm:text-lg text-gold-luxury tracking-wide">Aksara</div>
                <div className="font-sans text-[10px] sm:text-xs text-cream-soft/40 tracking-widest">PRODUCTION</div>
              </div>
            </div>
            <p className="font-sans text-sm text-cream-soft/50 leading-relaxed max-w-xs">
              Digital agency premium yang mengintegrasikan teknologi modern dengan warisan budaya Jawa.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ border: '1px solid rgba(200,155,91,0.2)', color: 'rgba(248,244,238,0.4)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(200,155,91,0.5)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#C89B5B';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(200,155,91,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(200,155,91,0.2)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(248,244,238,0.4)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  <s.icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-gold-warm/80 mb-4 sm:mb-5">Navigasi</h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-cream-soft/50 hover:text-gold-warm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold-warm group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-gold-warm/80 mb-4 sm:mb-5">Layanan</h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#layanan"
                    className="font-sans text-sm text-cream-soft/50 hover:text-gold-warm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold-warm group-hover:w-4 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact brief */}
          <div>
            <h4 className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-gold-warm/80 mb-4 sm:mb-5">Kontak</h4>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div>
                <div className="font-sans text-[10px] text-gold-warm/50 tracking-wider uppercase mb-1">Email</div>
                <a href="mailto:hello@aksaraproduction.com" className="font-sans text-xs sm:text-sm text-cream-soft/60 hover:text-gold-warm transition-colors duration-300 break-all">
                  hello@aksaraproduction.com
                </a>
              </div>
              <div>
                <div className="font-sans text-[10px] text-gold-warm/50 tracking-wider uppercase mb-1">Telepon</div>
                <a href="tel:+6281234567890" className="font-sans text-xs sm:text-sm text-cream-soft/60 hover:text-gold-warm transition-colors duration-300">
                  +62 812 3456 7890
                </a>
              </div>
              <div>
                <div className="font-sans text-[10px] text-gold-warm/50 tracking-wider uppercase mb-1">Lokasi</div>
                <span className="font-sans text-xs sm:text-sm text-cream-soft/60">Yogyakarta, Jawa Tengah</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 sm:mt-14 pt-5 sm:pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left"
          style={{ borderTop: '1px solid rgba(200,155,91,0.1)' }}
        >
          <p className="font-sans text-[11px] sm:text-xs text-cream-soft/30">
            &copy; {new Date().getFullYear()} AksaraProduction. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-sans text-[11px] sm:text-xs text-cream-soft/25">Dibuat dengan</span>
            <span className="font-sans text-[11px] sm:text-xs text-gold-warm/50">kecintaan terhadap budaya nusantara</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" className="font-sans text-[11px] sm:text-xs text-cream-soft/30 hover:text-gold-warm transition-colors duration-300">Kebijakan Privasi</a>
            <span className="text-cream-soft/15">|</span>
            <a href="#" className="font-sans text-[11px] sm:text-xs text-cream-soft/30 hover:text-gold-warm transition-colors duration-300">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { User, Menu, X } from 'lucide-react';
import logo from '../assets/logo_techminds.png';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    if (language === 'pt') setLanguage('en');
    else if (language === 'en') setLanguage('es');
    else setLanguage('pt');
  };

  const navLinks = [
    { href: '#home', label: t('header.home') },
    { href: '#about', label: t('header.about') },
    { href: '#projects', label: t('header.projects') },
    { href: '#contact', label: t('header.contact') },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <header style={{
        position: 'fixed', // Changed from sticky to fixed
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100, // Highest z-index to stay above everything
        width: '100%',
        background: 'rgba(15, 23, 42, 0.9)', // Dark slate-900 with blue undertone
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(100, 116, 139, 0.2)' // Subtle slate-500 border
      }}>
        <div style={{ maxWidth: '1920px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            {/* Logo */}
            <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <img src={logo} alt="TechMinds" style={{ height: '36px', width: 'auto' }} />
              <span style={{ fontWeight: 700, fontSize: '20px', color: 'white', letterSpacing: '-0.5px' }}>TechMinds</span>
            </a>

            {/* Desktop Nav */}
            {!isMobile && (
              <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    style={{ padding: '8px 16px', fontSize: '14px', fontWeight: 500, borderRadius: '8px', textDecoration: 'none' }}
                  >
                    {link.label}
                  </a>
                ))}

                {/* Divider */}
                <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)', margin: '0 8px' }} />

                {/* Language Flags */}
                <div className="flex items-center gap-2">
                  {/* PT - Brazil */}
                  <button
                    onClick={() => setLanguage('pt')}
                    style={{ width: '24px', height: '16px' }}
                    className={`relative rounded-sm overflow-hidden flex-shrink-0 transition-all duration-300 ${language === 'pt' ? 'ring-2 ring-cyan-400 scale-110 opacity-100 shadow-lg shadow-cyan-500/20' : 'opacity-60 hover:opacity-100 hover:scale-105 grayscale hover:grayscale-0'}`}
                    title="Português"
                  >
                    <svg viewBox="0 0 640 480" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                      <path fill="#009c3b" d="M0 0h640v480H0z" />
                      <path fill="#ffdf00" d="m320 40 277 200-277 200L43 240z" />
                      <circle fill="#002776" cx="320" cy="240" r="106" />
                      <path fill="#fff" fillRule="evenodd" d="M320 240l100-30a106 106 0 0 1-200 60z" opacity=".01" />
                    </svg>
                  </button>

                  {/* EN - USA */}
                  <button
                    onClick={() => setLanguage('en')}
                    style={{ width: '24px', height: '16px' }}
                    className={`relative rounded-sm overflow-hidden flex-shrink-0 transition-all duration-300 ${language === 'en' ? 'ring-2 ring-cyan-400 scale-110 opacity-100 shadow-lg shadow-cyan-500/20' : 'opacity-60 hover:opacity-100 hover:scale-105 grayscale hover:grayscale-0'}`}
                    title="English"
                  >
                    <svg viewBox="0 0 1235 650" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                      <rect width="1235" height="650" fill="#b22234" />
                      <path d="M0 50h1235M0 150h1235M0 250h1235M0 350h1235M0 450h1235M0 550h1235" stroke="#fff" strokeWidth="50" />
                      <rect width="494" height="350" fill="#3c3b6e" />
                    </svg>
                  </button>

                  {/* ES - Spain */}
                  <button
                    onClick={() => setLanguage('es')}
                    style={{ width: '24px', height: '16px' }}
                    className={`relative rounded-sm overflow-hidden flex-shrink-0 transition-all duration-300 ${language === 'es' ? 'ring-2 ring-cyan-400 scale-110 opacity-100 shadow-lg shadow-cyan-500/20' : 'opacity-60 hover:opacity-100 hover:scale-105 grayscale hover:grayscale-0'}`}
                    title="Español"
                  >
                    <svg viewBox="0 0 750 500" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                      <path fill="#aa151b" d="M0 0h750v500H0z" />
                      <path fill="#f1bf00" d="M0 125h750v250H0z" />
                    </svg>
                  </button>
                </div>

                <button
                  className="bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
                  style={{ marginLeft: '8px', padding: '8px 20px', borderRadius: '50px', fontWeight: 600, fontSize: '14px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <User size={16} />
                  {t('header.login')}
                </button>
              </nav>
            )}

            {/* Mobile Actions */}
            {isMobile && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button
                  onClick={toggleLanguage}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>{language.toUpperCase()}</span>
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  style={{ padding: '8px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'white' }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 90 }}>
          <div
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
            onClick={() => setIsMenuOpen(false)}
          />
          <nav style={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            width: '280px',
            background: '#0b1121',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
            padding: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <span style={{ fontWeight: 700, fontSize: '18px', color: 'white' }}>Menu</span>
              <button onClick={() => setIsMenuOpen(false)} style={{ background: 'transparent', border: 'none', color: '#9ca3af', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                style={{ display: 'block', padding: '12px 16px', fontSize: '16px', borderRadius: '12px', marginBottom: '8px', textDecoration: 'none', fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '24px 0' }} />
            <button
              className="bg-cyan-500/10 text-cyan-400 w-full"
              style={{ padding: '12px', borderRadius: '12px', fontWeight: 600, border: '1px solid rgba(6,182,212,0.2)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <User size={18} />
              {t('header.login')}
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

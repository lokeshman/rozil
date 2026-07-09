import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import useFetch from '../../hooks/useFetch';

const DEFAULT_LINKS = [
  { id: 1, label: 'Overview', url: '/#overview' },
  { id: 2, label: 'About CEO', url: '/about-ceo' },
  { id: 3, label: 'Leadership', url: '/leadership' },
  { id: 4, label: 'Vision', url: '/vision' },
  { id: 5, label: 'Achievements', url: '/achievements' },
  { id: 6, label: 'Media', url: '/media' },
  { id: 7, label: 'Gallery', url: '/gallery' },
  { id: 8, label: 'Contact', url: '/contact' },
];

export default function Navbar() {
  const [links, setLinks] = useState(DEFAULT_LINKS);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { data: fetchLinks } = useFetch('home/navbar-links/');

  useEffect(() => {
    if (fetchLinks && fetchLinks.length > 0) {
      setLinks(fetchLinks);
    }
  }, [fetchLinks]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isLinkActive = (linkUrl) => {
    if (linkUrl.startsWith('/#')) {
      return location.pathname === '/' && location.hash === linkUrl.substring(1);
    }
    return location.pathname === linkUrl;
  };

  const handleNavClick = useCallback((e, linkUrl) => {
    if (linkUrl.startsWith('/#')) {
      e.preventDefault();
      const hash = linkUrl.substring(1); // e.g. "#overview"

      if (location.pathname === '/') {
        // Already on homepage — just scroll
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', linkUrl);
        }
      } else {
        // On a different page — navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', linkUrl);
          }
        }, 300);
      }
    }
    // For non-hash links (e.g. /vision), let <Link> handle it normally
  }, [location.pathname, navigate]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 border-b border-glass-stroke bg-background/80 backdrop-blur-xl shadow-[0_0_10px_rgba(0,255,65,0.2)] flex justify-between items-center px-6 lg:px-grid-margin h-16">
        
        {/* Left side: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="font-headline-md text-headline-md font-bold tracking-tighter text-nightvision-neon">
            ROZIL THAPA
          </Link>
        </div>
        
        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden xl:flex flex-grow justify-center items-center gap-4 xl:gap-6 overflow-hidden px-4">
          {links.map(link => (
            <Link 
              key={link.id} 
              to={link.url} 
              onClick={(e) => handleNavClick(e, link.url)}
              className={`font-label-md text-label-md uppercase tracking-widest whitespace-nowrap transition-colors ${
                isLinkActive(link.url) ? 'text-nightvision-neon font-bold' : 'text-on-surface-variant hover:text-nightvision-neon'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: Hamburger button on mobile/tablet */}
        <div className="flex xl:hidden items-center justify-end">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-on-surface hover:text-nightvision-neon transition-colors p-2 focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay Backdrop */}
      <div 
        className={`fixed inset-0 bg-void-black/70 backdrop-blur-sm z-[98] transition-opacity duration-300 xl:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer (Sidebar) */}
      <div className={`fixed top-0 right-0 h-full w-[280px] max-w-[80vw] bg-surface-container-lowest/95 backdrop-blur-xl border-l border-glass-stroke z-[99] transform transition-transform duration-300 ease-in-out xl:hidden flex flex-col p-6 ${
        isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
      }`}>
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-glass-stroke/30">
          <span className="font-headline-sm text-headline-sm font-bold tracking-tighter text-nightvision-neon">ROZIL THAPA</span>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-on-surface-variant hover:text-nightvision-neon p-1 transition-colors"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {links.map(link => (
            <Link 
              key={link.id} 
              to={link.url} 
              onClick={(e) => {
                handleNavClick(e, link.url);
                setIsOpen(false);
              }}
              className={`font-label-md text-label-md uppercase tracking-widest transition-colors block py-2 ${
                isLinkActive(link.url) ? 'text-nightvision-neon font-bold' : 'text-on-surface-variant hover:text-nightvision-neon'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}


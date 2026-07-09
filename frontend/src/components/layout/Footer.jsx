import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import useFetch from '../../hooks/useFetch';

const DEFAULT_QUICK_LINKS = [
  { id: 1, label: 'Home', url: '/' },
  { id: 2, label: 'About CEO', url: '/about-ceo' },
  { id: 3, label: 'Leadership', url: '/leadership' },
  { id: 4, label: 'Vision', url: '/vision' },
  { id: 5, label: 'Media', url: '/media' },
  { id: 6, label: 'Gallery', url: '/gallery' },
  { id: 7, label: 'Contact', url: '/contact' },
];

const DEFAULT_CONNECT_LINKS = [
  { id: 1, platform: 'Contact', url: '/contact' },
  { id: 2, platform: 'LinkedIn', url: 'https://linkedin.com' },
  { id: 3, platform: 'Facebook', url: 'https://facebook.com' },
  { id: 4, platform: 'Instagram', url: 'https://instagram.com' },
];

const DEFAULT_CONTACT_INFO = {
  name: 'NV//NIGHTVISION HQ',
  email: 'ceo.rozilthapagroup@gmail.com',
  phone: '+65 6812 9000',
  address: 'Radhe Radhe, Kathmandu, Nepal',
  office_hours: 'Sun - Fri: 10:00 - 18:00',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [quickLinks, setQuickLinks] = useState(DEFAULT_QUICK_LINKS);
  const [connectLinks, setConnectLinks] = useState(DEFAULT_CONNECT_LINKS);
  const [contactInfo, setContactInfo] = useState(DEFAULT_CONTACT_INFO);

  const { data: navLinksData } = useFetch('home/navbar-links/');
  const { data: socialLinksData } = useFetch('home/social-links/');
  const { data: officesData } = useFetch('contact/offices/');

  useEffect(() => {
    // 1. Process Quick Links (Navbar Links)
    if (navLinksData && navLinksData.length > 0) {
      const mapped = navLinksData.map(link => ({
        ...link,
        label: link.label === 'Overview' ? 'Home' : link.label,
        url: link.url === '/#overview' ? '/' : link.url
      })).filter(link => link.label !== 'Achievements'); 
      setQuickLinks(mapped);
    }
  }, [navLinksData]);

  useEffect(() => {
    // 2. Process Connect Links (Social Links)
    if (socialLinksData && socialLinksData.length > 0) {
      setConnectLinks(socialLinksData);
    }
  }, [socialLinksData]);

  useEffect(() => {
    // 3. Process Contact Info (First Office Location)
    if (officesData) {
      const data = officesData.results || officesData;
      if (data && data.length > 0) {
        setContactInfo(data[0]);
      }
    }
  }, [officesData]);

  return (
    <footer className="mt-20 border-t border-glass-stroke bg-surface-container-lowest/70 backdrop-blur-xl p-6 lg:p-16 text-on-surface" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site Footer</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand / Logo */}
        <div className="space-y-4">
          <Link to="/" className="font-headline-md text-headline-md font-bold tracking-tighter text-nightvision-neon">
            ROZIL THAPA
          </Link>
          <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
            Premium executive leadership dashboard, tracking ventures, cinematic operations, and global strategy nodes.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="font-label-md text-label-md text-nightvision-neon uppercase tracking-widest mb-6 border-b border-glass-stroke/30 pb-2">Quick Links</h3>
          <ul className="space-y-3 p-0 m-0 list-none font-body-md text-sm">
            {quickLinks.map((link) => (
              <li key={link.id}>
                {link.url.startsWith('/#') ? (
                  <a href={link.url} className="text-on-surface-variant hover:text-nightvision-neon transition-colors">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.url} className="text-on-surface-variant hover:text-nightvision-neon transition-colors">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Column */}
        <div>
          <h3 className="font-label-md text-label-md text-nightvision-neon uppercase tracking-widest mb-6 border-b border-glass-stroke/30 pb-2">Connect</h3>
          <ul className="space-y-3 p-0 m-0 list-none font-body-md text-sm">
            {connectLinks.map((link) => (
              <li key={link.id}>
                {link.url.startsWith('/') ? (
                  <Link to={link.url} className="text-on-surface-variant hover:text-nightvision-neon transition-colors">
                    {link.platform}
                  </Link>
                ) : (
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-nightvision-neon transition-colors inline-flex items-center gap-1.5">
                    {link.platform}
                    <span className="material-symbols-outlined text-[10px]">arrow_outward</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h3 className="font-label-md text-label-md text-nightvision-neon uppercase tracking-widest mb-6 border-b border-glass-stroke/30 pb-2">Contact Information</h3>
          <ul className="space-y-4 p-0 m-0 list-none font-body-md text-sm text-on-surface-variant">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-xs mt-0.5 text-nightvision-neon">corporate_fare</span>
              <div>
                <span className="block text-xs font-bold text-white uppercase tracking-wider">Executive Office</span>
                <span className="text-xs">{contactInfo.name}</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-xs mt-0.5 text-nightvision-neon">mail</span>
              <div>
                <span className="block text-xs font-bold text-white uppercase tracking-wider">Business Email</span>
                <a href={`mailto:${contactInfo.email}`} className="text-xs hover:text-nightvision-neon transition-colors">{contactInfo.email}</a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-xs mt-0.5 text-nightvision-neon">location_on</span>
              <div>
                <span className="block text-xs font-bold text-white uppercase tracking-wider">Office Address</span>
                <span className="text-xs leading-relaxed">{contactInfo.address}</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-xs mt-0.5 text-nightvision-neon">schedule</span>
              <div>
                <span className="block text-xs font-bold text-white uppercase tracking-wider">Business Hours</span>
                <span className="text-xs">{contactInfo.office_hours}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-glass-stroke/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-label-sm text-on-surface-variant">
        <address className="not-italic">
          ©{currentYear} ROZIL_THAPA_SYSTEMS. All rights reserved.
        </address>
        <div className="flex gap-6">
          <a href="#" className="hover:text-nightvision-neon transition-colors">PRIVACY_POLICY</a>
          <a href="#" className="hover:text-nightvision-neon transition-colors">TERMS_OF_ENGAGEMENT</a>
        </div>
      </div>
    </footer>
  );
}

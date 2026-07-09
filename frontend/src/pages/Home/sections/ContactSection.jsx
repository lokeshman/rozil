import { useState } from 'react';
import api from '../../../services/api';
import Button from '../../../components/common/Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await api.post('contact/message/', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Send failed:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 px-6 lg:px-grid-margin bg-void-black">
      <div className="max-w-4xl mx-auto border-2 border-nightvision-neon p-1 lg:p-2 bg-nightvision-neon/5 relative">
        {/* Corner Decor */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-nightvision-neon -translate-x-1 -translate-y-1"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-nightvision-neon translate-x-1 translate-y-1"></div>

        <div className="bg-void-black border border-glass-stroke p-6 lg:p-12">
          <div className="flex justify-between items-start mb-12 border-b border-glass-stroke/30 pb-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-md text-on-surface uppercase tracking-wide">
                CONTACT_SECTION
              </h2>
              <p className="font-label-sm text-[10px] text-nightvision-neon tracking-[0.2em] mt-2">
                CONTACT US
              </p>
            </div>
            <div className="w-10 h-10 border border-glass-stroke flex items-center justify-center bg-surface-container-lowest">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">dashboard</span>
            </div>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
                  IDENTIFIER [NAME]
                </label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="John Doe"
                  className="w-full bg-surface-container-lowest border border-glass-stroke focus:border-nightvision-neon text-on-surface px-4 py-3 font-label-md text-label-md outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
                  EMAIL_ADDRESS
                </label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="contact@domain.com"
                  className="w-full bg-surface-container-lowest border border-glass-stroke focus:border-nightvision-neon text-on-surface px-4 py-3 font-label-md text-label-md outline-none transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
                YOUR_MESSAGE
              </label>
              <textarea 
                rows="4"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                required
                placeholder="Type your message here..."
                className="w-full bg-surface-container-lowest border border-glass-stroke focus:border-nightvision-neon text-on-surface px-4 py-3 font-label-md text-label-md outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full animate-pulse ${status === 'error' ? 'bg-alert-red' : status === 'success' ? 'bg-terminal-cyan' : 'bg-nightvision-neon'}`}></span>
                <span className={`font-label-sm text-[10px] tracking-widest uppercase ${status === 'error' ? 'text-alert-red' : status === 'success' ? 'text-terminal-cyan' : 'text-nightvision-neon'}`}>
                  {status === 'loading' ? 'SENDING...' : status === 'success' ? 'MESSAGE_SENT' : status === 'error' ? 'SEND_FAILED' : 'SEND MESSAGE'}
                </span>
              </div>
              
              <Button type="submit" disabled={status === 'loading'} variant="action" className="w-full md:w-auto px-10 py-3 bg-nightvision-neon text-void-black hover:bg-primary-fixed-dim transition-colors mb-0 flex items-center justify-center gap-3 font-bold border-0 disabled:opacity-50">
                SEND_SIGNAL
                <span className="material-symbols-outlined text-sm">send</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

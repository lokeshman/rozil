import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import api from '../../services/api';
import useFetch from '../../hooks/useFetch';
import { LoadingState, ErrorState, EmptyState } from '../../components/common/StateDisplays';

export default function Contact() {
  const { data: officesData, loading: loadingOffices, error: errorOffices } = useFetch('contact/offices/');
  const offices = officesData?.results || officesData || [];

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Business Inquiry',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errors) setErrors(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrors({ non_field_errors: ["Please fill in all required fields."] });
      return;
    }

    setSubmitting(true);
    setErrors(null);
    setSuccess(false);

    try {
      await api.post('contact/message/', formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        category: 'Business Inquiry',
        message: '',
      });
    } catch (err) {
      console.error("Error submitting contact message:", err);
      if (err.response && err.response.data) {
        setErrors(err.response.data);
      } else {
        setErrors({ non_field_errors: ["Failed to transmit message. Please check your network connection."] });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-on-surface selection:bg-nightvision-neon selection:text-void-black min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-grid-margin py-12">
          
          {/* Hero Section */}
          <section className="mb-16 relative overflow-hidden bg-surface-container-lowest border border-glass-stroke p-6 lg:p-10">
            <div className="absolute inset-0 opacity-10" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 255, 65, 0.05) 50%)', backgroundSize: '100% 4px' }}></div>
            <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t-2 border-l-2 border-nightvision-neon"></div>
            <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-2 border-r-2 border-nightvision-neon"></div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-glass-stroke pb-8 mb-8">
              <div>
                <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white leading-tight">CONTACT_OFFICE</h1>
              </div>
              <div className="text-right">
              </div>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Initiate direct contact channels to our executive offices. Whether you have corporate business inquiries, press and media requests, or seek strategic global partnerships, our active communication layer ensures your message reaches the correct leadership team.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Contact Form Section */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-low border border-glass-stroke p-6 lg:p-8 relative">
                <div className="absolute top-[-1px] left-[-1px] w-3.5 h-3.5 border-t-2 border-l-2 border-nightvision-neon"></div>
                <div className="absolute bottom-[-1px] right-[-1px] w-3.5 h-3.5 border-b-2 border-r-2 border-nightvision-neon"></div>
                
                <h2 className="font-headline-md text-headline-md text-white mb-6 uppercase tracking-wider">CONTACT_SUBMISSION_FORM</h2>
                
                {success && (
                  <div className="mb-6 p-4 bg-nightvision-neon/10 border border-nightvision-neon text-nightvision-neon font-label-md">
                    [SUCCESS] MESSAGE_SENT: Verification code queued. Thank you for your inquiry.
                  </div>
                )}

                {errors && errors.non_field_errors && (
                  <div className="mb-6 p-4 bg-alert-red/10 border border-alert-red text-alert-red font-label-md">
                    [ERROR] {errors.non_field_errors.join(' ')}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">YOUR_NAME *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-void-black border border-glass-stroke p-3 text-white focus:outline-none focus:border-nightvision-neon transition-colors"
                        required
                        disabled={submitting}
                      />
                      {errors?.name && <span className="text-alert-red text-xs mt-1 block">{errors.name.join(' ')}</span>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">YOUR_EMAIL *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-void-black border border-glass-stroke p-3 text-white focus:outline-none focus:border-nightvision-neon transition-colors"
                        required
                        disabled={submitting}
                      />
                      {errors?.email && <span className="text-alert-red text-xs mt-1 block">{errors.email.join(' ')}</span>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">INQUIRY_CATEGORY</label>
                    <select 
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-void-black border border-glass-stroke p-3 text-white focus:outline-none focus:border-nightvision-neon transition-colors appearance-none"
                      disabled={submitting}
                    >
                      <option value="Business Inquiry">Business Inquiry</option>
                      <option value="Media Inquiry">Media Inquiry</option>
                      <option value="Partnership Inquiry">Partnership Inquiry</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">INQUIRY_CONTENT *</label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-void-black border border-glass-stroke p-3 text-white focus:outline-none focus:border-nightvision-neon transition-colors resize-none"
                      required
                      disabled={submitting}
                    ></textarea>
                    {errors?.message && <span className="text-alert-red text-xs mt-1 block">{errors.message.join(' ')}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-nightvision-neon text-void-black hover:bg-transparent hover:text-nightvision-neon border-2 border-nightvision-neon py-3 font-bold uppercase transition-all tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <span className="w-2.5 h-2.5 rounded-full bg-void-black animate-ping"></span>
                        SENDING_MESSAGE...
                      </>
                    ) : (
                      'SEND_MESSAGE'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Office Locations */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {loadingOffices ? (
                <div className="flex-grow bg-surface-container-low border border-glass-stroke p-8 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-nightvision-neon">
                    <span className="w-2.5 h-2.5 rounded-full bg-nightvision-neon animate-pulse"></span>
                    SYNCING_OFFICES_DATA...
                  </div>
                </div>
              ) : errorOffices ? (
                <div className="flex-grow bg-surface-container-low border border-glass-stroke p-8 flex items-center justify-center text-alert-red font-label-md">
                  [CRITICAL_ERROR] {errorOffices}
                </div>
              ) : offices.length === 0 ? (
                <div className="flex-grow bg-surface-container-low border border-glass-stroke p-8 flex items-center justify-center text-on-surface-variant font-label-md">
                  [NO_OFFICE_LOCATIONS_LOADED]
                </div>
              ) : (
                offices.map(office => (
                  <div key={office.id} className="bg-surface-container border border-glass-stroke p-6 hover:border-nightvision-neon/40 transition-colors relative">
                    <div className="absolute top-[-1px] left-[-1px] w-2.5 h-2.5 border-t border-l border-nightvision-neon/40"></div>
                    
                    <h3 className="font-label-md text-label-md text-nightvision-neon uppercase mb-4 tracking-wider">{office.name}</h3>
                    
                    <div className="space-y-3 font-body-md text-sm text-on-surface-variant">
                      <p className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-xs mt-0.5 text-nightvision-neon">location_on</span>
                        <span>{office.address}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs text-nightvision-neon">mail</span>
                        <a href={`mailto:${office.email}`} className="hover:text-nightvision-neon transition-colors">{office.email}</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs text-nightvision-neon">phone</span>
                        <span>{office.phone}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-xs text-nightvision-neon">schedule</span>
                        <span>{office.office_hours}</span>
                      </p>

                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <Footer />
        </div>
      </main>


    </div>
  );
}

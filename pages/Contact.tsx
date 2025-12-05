import React, { useState } from 'react';
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle, Github, Linkedin, ExternalLink } from 'lucide-react';
import { SITE_CONFIG, SOCIALS } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // In a real app, fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      console.log('Form Submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white dark:bg-dark min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss modern web technologies? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Email</p>
                    <p className="text-slate-600 dark:text-slate-400">{SITE_CONFIG.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                   <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Location</p>
                    <p className="text-slate-600 dark:text-slate-400">4/116 Vaikunthan, Salem, Tamil Nadu</p>
                  </div>
                </div>

                {/* Social Profiles in Contact Info */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm font-medium text-slate-900 dark:text-white mb-4">Social Profiles</p>
                  <div className="flex flex-col space-y-3">
                    {SOCIALS.map((social) => {
                       const Icon = social.platform === 'GitHub' ? Github : Linkedin;
                       return (
                         <a 
                           key={social.platform} 
                           href={social.url} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center group"
                         >
                           <div className="flex-shrink-0">
                              <Icon className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                           </div>
                           <div className="ml-4 flex items-center">
                             <span className="text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">{social.platform}</span>
                             <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                           </div>
                         </a>
                       );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">Availability</h3>
                <p className="text-blue-800 dark:text-blue-200">
                    Currently accepting new projects. Let's schedule a discovery call.
                </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-dark rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white transition-all ${
                  status === 'success' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-primary hover:bg-blue-700 shadow-lg shadow-blue-500/30'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="-ml-1 mr-3 h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
              
              {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 mt-2 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>Something went wrong. Please try again.</span>
                  </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
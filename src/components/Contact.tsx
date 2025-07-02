'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
    
    alert('Message sent successfully! I\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'limreynaldojr@gmail.com',
      href: 'mailto:limreynaldojr@gmail.com',
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+63 (968) 648 9760',
      href: 'tel:+15551234567',
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Iloilo City, Philippines',
      href: '#',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'https://www.linkedin.com/in/rey-lim-jr',
      href: 'https://www.linkedin.com/in/rey-lim-jr',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  I'm currently available for freelance work and full-time opportunities. 
                  Whether you have a project in mind or just want to chat about technology, 
                  I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'GitHub', icon: '📁', href: '#' },
                    { name: 'LinkedIn', icon: '💼', href: '#' },
                    { name: 'Twitter', icon: '🐦', href: '#' },
                    { name: 'Instagram', icon: '📷', href: '#' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform shadow-md hover:shadow-lg"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-10 shadow-2xl flex flex-col items-center justify-center min-h-[320px] border border-blue-100 dark:border-gray-800 relative overflow-hidden">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-200 dark:bg-blue-900 opacity-20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-200 dark:bg-purple-900 opacity-20 rounded-full blur-2xl animate-pulse" />
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight text-center">
                Let's Connect
              </h3>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 text-center max-w-2xl leading-relaxed">
                For inquiries, collaborations, or just to say hello, please email me directly:
              </p>
              <a
                href="mailto:limreynaldojr@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg md:text-xl font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                aria-label="Send email to limreynaldojr@gmail.com"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0l-4 4-4-4" />
                </svg>
                limreynaldojr@gmail.com
              </a>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mt-8 text-center max-w-xl">
                I look forward to connecting with you and will respond as soon as possible!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-fade').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError('Email service configuration missing. Please reach out directly via email.');
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form,
        publicKey
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to send message. Please try again.');
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--stock)' }}
    >
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: '1px', background: 'rgba(26,26,26,0.1)' }}
      />

      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal-fade mb-6 flex justify-center">
            <div className="trade-badge">
              <Icon name="EnvelopeIcon" size={12} style={{ color: 'var(--brass)' } as React.CSSProperties} />
              <span>Let&apos;s Connect</span>
            </div>
          </div>

          <h2
            className="font-serif reveal-up"
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
              lineHeight: '1.06',
              letterSpacing: '-0.025em',
              color: 'var(--ink)',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            Let’s build something impactful.
            <br />
            <em style={{ color: 'var(--brass)', fontStyle: 'italic' }}>Let’s connect.</em>
          </h2>

          <p
            className="font-sans reveal-up delay-100"
            style={{
              fontSize: '17px',
              lineHeight: '1.7',
              color: 'var(--ink-muted)',
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            I’m open to opportunities in software development and project-oriented roles.
            Whether you have a role, collaboration, or idea to discuss — feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 reveal-fade delay-100">
            {[
              { icon: 'EnvelopeIcon', label: 'Email', href: 'mailto:kiruthir2609@gmail.com' },
              { icon: 'GlobeAltIcon', label: 'LinkedIn', href: 'https://www.linkedin.com/in/kiruthi-r-257132268' },
              { icon: 'CodeBracketIcon', label: 'GitHub', href: 'https://github.com/Kiruthiii' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name={item.icon} size={18} style={{ color: 'var(--brass)' } as React.CSSProperties} />
                </div>
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal-up delay-200">
            {!submitted ? (
              <div className="paper-card" style={{ borderRadius: '20px', padding: '32px' }}>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">

                    <div>
                      <label htmlFor="contact-name" className="sr-only">Your Name</label>
                      <input
                        id="contact-name"
                        name="from_name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        aria-label="Your Name"
                        className="ink-input w-full"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="sr-only">Your Email</label>
                      <input
                        id="contact-email"
                        name="from_email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        aria-label="Your Email"
                        className="ink-input w-full"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="sr-only">Your Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message"
                        aria-label="Your Message"
                        rows={4}
                        className="ink-input w-full"
                        required
                      />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full flex justify-center items-center gap-2"
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                      {!loading && <Icon name="ArrowRightIcon" size={14} />}
                    </button>

                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-semibold">Message Sent!</h3>
                <p className="text-gray-600 mt-2">I’ll get back to you soon.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
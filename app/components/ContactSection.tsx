'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) { setError('Please enter your name.'); return; }
    if (!email) { setError('Please enter your email address.'); return; }
    if (!message) { setError('Please enter a message.'); return; }
    setError('');
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--stock)' }}>

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
            }}>
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
            }}>
            I’m open to opportunities in software development and project-oriented roles. 
            Whether you have a role, collaboration, or idea to discuss — feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6 reveal-fade delay-100">
            {[
              {
  icon: 'EnvelopeIcon',
  label: 'Email',
  // value: 'kiruthir2609@gmail.com',
  href: 'mailto:kiruthir2609@gmail.com',
},
{
  icon: 'GlobeAltIcon',
  label: 'LinkedIn',
  // value: 'linkedin.com/in/kiruthi-r-257132268',
  href: 'https://www.linkedin.com/in/kiruthi-r-257132268',
},
{
  icon: 'CodeBracketIcon',
  label: 'GitHub',
  // value: 'github.com/Kiruthiii',
  href: 'https://github.com/Kiruthiii',
},
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 group"
                style={{ textDecoration: 'none' }}>
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
                    flexShrink: 0,
                    transition: 'background 0.2s',
                  }}>
                  <Icon
                    name={item.icon as 'EnvelopeIcon'}
                    size={18}
                    style={{ color: 'var(--brass)' } as React.CSSProperties}
                  />
                </div>
                <div>
                  <div
                    className="font-sans font-semibold"
                    style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: '2px' }}>
                    {item.label}
                  </div>
                  {/* <div
                    className="font-sans"
                    style={{ fontSize: '14px', color: 'var(--ink-muted)', fontWeight: 500 }}>
                    {item.value}
                  </div> */}
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal-up delay-200">
            {!submitted ? (
              <div
                className="paper-card"
                style={{ borderRadius: '20px', padding: 'clamp(24px, 4vw, 40px)' }}>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="font-sans font-semibold"
                        style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', marginBottom: '8px' }}>
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Smith"
                        className="ink-input w-full"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="font-sans font-semibold"
                        style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', marginBottom: '8px' }}>
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@company.com"
                        className="ink-input w-full"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="font-sans font-semibold"
                        style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', marginBottom: '8px' }}>
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your project or opportunity..."
                        rows={4}
                        className="ink-input w-full"
                        aria-required="true"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    {error && (
                      <p className="font-sans text-sm" style={{ color: '#C0392B' }}>
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="btn-primary w-full"
                      disabled={loading}
                      style={{
                        marginTop: '8px',
                        opacity: loading ? 0.7 : 1,
                        cursor: loading ? 'wait' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                      }}>
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Icon name="ArrowRightIcon" size={14} style={{ color: 'inherit', position: 'relative', zIndex: 1 } as React.CSSProperties} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div
                className="paper-card text-center"
                style={{ borderRadius: '20px', padding: '48px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(201,168,76,0.12)',
                    border: '2px solid rgba(201,168,76,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}>
                  <Icon name="CheckIcon" size={28} style={{ color: 'var(--brass)' } as React.CSSProperties} />
                </div>
                <h3
                  className="font-serif mb-3"
                  style={{ fontSize: '1.6rem', color: 'var(--ink)', fontWeight: 600 }}>
                  Message sent!
                </h3>
                <p
                  className="font-sans"
                  style={{ fontSize: '15px', color: 'var(--ink-muted)', lineHeight: 1.7 }}>
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


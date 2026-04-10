'use client';

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-stock/95 backdrop-blur-md border-b border-ink/8 py-3' :'bg-transparent py-5'
      }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Name / Logo */}
        <a
          href="#"
          className="font-serif font-bold tracking-tight"
          style={{
            fontSize: '18px',
            color: scrolled ? 'var(--ink)' : 'var(--stock)',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}>
          KR
          <span
            className="font-sans font-medium ml-2"
            style={{ fontSize: '13px', color: scrolled ? 'var(--ink-faint)' : 'rgba(245,240,232,0.55)', letterSpacing: '0.02em' }}>
            Kiruthi Raghavendran
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              className="font-sans font-medium transition-colors"
              style={{
                fontSize: '14px',
                color: scrolled ? 'var(--ink-muted)' : 'rgba(245,240,232,0.7)',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = scrolled ? 'var(--ink)' : 'var(--stock)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? 'var(--ink-muted)' : 'rgba(245,240,232,0.7)')}>
              {link?.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary hidden sm:inline-block"
            style={{ padding: '10px 24px', fontSize: '13px' }}>
            <span>Let's Connect</span>
          </a>
        </nav>

        {/* Mobile menu button */}
<button
  className="md:hidden"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-expanded={menuOpen}
  aria-label="Toggle menu"
  style={{
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: scrolled ? 'var(--ink)' : 'var(--stock)',
    padding: '4px',
  }}
>
          <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ display: 'block', height: '2px', background: 'currentColor', borderRadius: '2px', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ display: 'block', height: '2px', background: 'currentColor', borderRadius: '2px', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ display: 'block', height: '2px', background: 'currentColor', borderRadius: '2px', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </div>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: 'var(--stock)',
            borderTop: '1px solid rgba(26,26,26,0.1)',
            padding: '16px 24px 24px',
          }}>
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="block font-sans font-medium py-3"
              style={{ fontSize: '16px', color: 'var(--ink-muted)', textDecoration: 'none', borderBottom: '1px solid rgba(26,26,26,0.06)' }}>
              {link?.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary inline-block text-center mt-4"
            style={{ padding: '12px 28px', fontSize: '14px' }}>
            <span>Let's Connect</span>
          </a>
        </div>
      )}
    </header>
  );
}
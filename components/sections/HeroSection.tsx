'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const floatingRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingRef.current || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      floatingRef.current.style.transform = `
        translateY(-8px)
        rotateX(${-y * 5}deg)
        rotateY(${x * 5}deg)
      `;
    };
    const hero = heroRef.current;
    hero?.addEventListener('mousemove', handleMouseMove);
    return () => hero?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('.reveal-up, .reveal-fade');
    const timer = setTimeout(() => {
      elements?.forEach((el) => el.classList.add('visible'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: 'var(--ink)' }}>

      {/* Animated gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 20% 80%, rgba(59,109,143,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--ink))' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div className="space-y-8">
            <div className="reveal-fade">
              <div className="trade-badge">
                <span style={{ color: 'var(--brass)', fontSize: '10px' }}>●</span>
                <span style={{ color: 'var(--brass-dark)', fontFamily: 'DM Sans' }}>
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>
            </div>

            <h1
              className="font-serif reveal-up"
              style={{
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                lineHeight: '0.95',
                letterSpacing: '-0.03em',
                color: 'var(--stock)',
                fontWeight: 700,
              }}>
              Kiruthi
              <br />
              <em className="brass-shine" style={{ fontStyle: 'italic' }}>
                Raghavendran
              </em>
            </h1>

            <p
              className="font-sans reveal-up delay-100"
              style={{
                fontSize: '18px',
                lineHeight: '1.65',
                color: 'rgba(245,240,232,0.7)',
                maxWidth: '400px',
                fontWeight: 400,
              }}>
              Software developer with a strong foundation in building responsive applications and structured data systems. 
Also experienced in coordinating projects, managing workflows, and contributing to efficient team execution.
            </p>

            <div className="flex flex-wrap gap-3 reveal-up delay-200">
              {['React', 'JavaScript', 'SQL', 'Project Coordination', 'Problem Solving'].map((skill) => (
                <span
                  key={skill}
                  className="font-sans font-medium"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.06em',
                    color: 'var(--brass)',
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    borderRadius: '4px',
                    padding: '6px 14px',
                  }}>
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 reveal-up delay-300">
              <a
                href="#contact"
                className="btn-primary inline-block text-center">
                <span>Get In Touch</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 font-sans font-medium"
                style={{
                  color: 'rgba(245,240,232,0.55)',
                  fontSize: '14px',
                  letterSpacing: '0.02em',
                  padding: '16px 0',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brass)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,240,232,0.55)')}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '32px',
                    height: '1px',
                    background: 'currentColor',
                    transition: 'width 0.3s',
                  }}
                />
                View my work
              </a>
            </div>
          </div>

          {/* Right: Profile card */}
          <div className="flex justify-center lg:justify-end reveal-fade delay-400">
            <div
              ref={floatingRef}
              className="float-animation"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.12s ease',
                maxWidth: '300px',
                width: '100%',
              }}>
              <div
                className="digital-card"
                style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.2)' }}>

                {/* Avatar placeholder */}
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.3) 0%, rgba(59,109,143,0.3) 100%)',
                    border: '2px solid rgba(201,168,76,0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}>
                  <span
                    className="font-serif font-bold"
                    style={{ fontSize: '28px', color: 'var(--brass)', lineHeight: 1 }}>
                    KR
                  </span>
                </div>

                <div
                  className="font-serif font-bold mb-1"
                  style={{ fontSize: '20px', color: 'var(--stock)', lineHeight: 1.1 }}>
                  Kiruthi Raghavendran
                </div>
                <div
                  className="font-sans"
                  style={{ fontSize: '11px', color: 'var(--brass)', letterSpacing: '0.06em', fontWeight: 500, marginBottom: '16px' }}>
                  SOFTWARE DEVELOPER
                </div>

                <div className="brass-rule-full mb-5" />

                <div className="space-y-3 mb-6">
                  {[
                    { icon: 'CodeBracketIcon', text: 'Front end  & Web development' },
                    { icon: 'ClipboardDocumentListIcon', text: 'Project Coordinaton and Execution' },
                    { icon: 'StarIcon', text: 'Open to new opportunities' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <Icon
                        name={item.icon as 'StarIcon'}
                        size={14}
                        className="flex-shrink-0"
                        style={{ color: 'var(--brass)' } as React.CSSProperties}
                      />
                      <span
                        className="font-sans"
                        style={{ fontSize: '12px', color: 'rgba(245,240,232,0.65)', fontWeight: 400 }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="w-full font-sans font-semibold"
                  style={{
                    background: 'var(--brass)',
                    color: 'var(--ink)',
                    padding: '13px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                  }}>
                  <Icon name="EnvelopeIcon" size={14} variant="solid" />
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: 'rgba(245,240,232,0.3)' }}>
          <span className="font-sans" style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>
            Scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, rgba(245,240,232,0.3), transparent)',
            }}
          />
        </div>
      </div>
    </section>
  );
}


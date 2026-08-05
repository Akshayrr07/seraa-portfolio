'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const experiences = [
  {
    role: 'Frontend Intern',
    company: 'Mind Bridges Technologies',
    period: '2026 (3 Months)',
    description:
      'Worked as a Frontend Intern in an onsite environment for 3 months, developing responsive and reusable user interface components using React. Contributed to API integration and frontend feature implementation while collaborating closely with team members.',
    highlights: [
      'Developed responsive and reusable UI components using React',
      'Contributed to API integration and frontend feature implementation',
      'Worked extensively with React, HTML, CSS, and TypeScript in an agile environment',
    ],
  },
  {
    role: 'Frontend Developer Trainee',
    company: 'Encipher Health',
    period: '2024 (2 Months)',
    description:
      'Completed a 2-month remote training internship as a Frontend Developer Trainee, focusing on developing responsive UI components for the Fine Dine web application. Built frontend features with emphasis on usability, clean interface design, and functionality.',
    highlights: [
      'Developed responsive UI components for the Fine Dine web application',
      'Used React, JavaScript, HTML, and CSS with emphasis on usability and design',
      'Demonstrated effective communication and remote collaboration',
    ],
  },
];

const education = [
  {
    degree: 'B.Tech – Artificial Intelligence and Data Science',
    institution: 'Jai Shriram Engineering College, Anna University',
    period: '2022 – 2026',
    detail:
      'CGPA: 8.8/10. Focused on web development, database systems, and structured problem solving with hands-on project execution.',
  },
];

export default function ExperienceSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32"
      style={{ background: 'var(--stock-dark)' }}>

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-6 reveal-up mb-4">
          <div className="brass-rule" style={{ width: '48px', height: '2px', flexShrink: 0 }} />
          <span
            className="font-sans font-semibold"
            style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass-dark)' }}>
            Experience &amp; Education
          </span>
        </div>

        <h2
          className="font-serif reveal-up delay-100 mb-16"
          style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            lineHeight: '1.08',
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
            fontWeight: 700,
          }}>
          Where I&apos;ve
          <br />
          <em style={{ color: 'var(--brass)', fontStyle: 'italic' }}>grown &amp; learned.</em>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Experience */}
          <div className="space-y-8 reveal-up delay-100">
            <h3
              className="font-sans font-semibold"
              style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
              Work Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.role + exp.company}
                  style={{
                    paddingLeft: '20px',
                    borderLeft: '2px solid rgba(201,168,76,0.3)',
                  }}>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div
                        className="font-serif font-semibold"
                        style={{ fontSize: '1.15rem', color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                        {exp.role}
                      </div>
                      <div
                        className="font-sans font-medium"
                        style={{ fontSize: '13px', color: 'var(--brass-dark)' }}>
                        {exp.company}
                      </div>
                    </div>
                    <span
                      className="font-sans flex-shrink-0"
                      style={{ fontSize: '12px', color: 'var(--ink-faint)', fontWeight: 500 }}>
                      {exp.period}
                    </span>
                  </div>
                  <p
                    className="font-sans mb-3"
                    style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--ink-muted)' }}>
                    {exp.description}
                  </p>
                  <ul className="space-y-1">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2">
                        <Icon
                          name="CheckCircleIcon"
                          size={13}
                          style={{ color: 'var(--brass)', flexShrink: 0 } as React.CSSProperties}
                        />
                        <span className="font-sans" style={{ fontSize: '13px', color: 'var(--ink-muted)' }}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8 reveal-fade delay-200">
            <h3
              className="font-sans font-semibold"
              style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="paper-card"
                  style={{ borderRadius: '12px', padding: '24px' }}>
                  <div
                    className="font-serif font-semibold mb-1"
                    style={{ fontSize: '1.1rem', color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                    {edu.degree}
                  </div>
                  <div
                    className="font-sans font-medium mb-1"
                    style={{ fontSize: '13px', color: 'var(--brass-dark)' }}>
                    {edu.institution}
                  </div>
                  <div
                    className="font-sans mb-3"
                    style={{ fontSize: '12px', color: 'var(--ink-faint)' }}>
                    {edu.period}
                  </div>
                  <p
                    className="font-sans"
                    style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--ink-muted)' }}>
                    {edu.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
  { value: '3+', label: 'Projects Completed' },
  { value: '5+', label: 'Technologies Used' },
  { value: '2+', label: 'Training Experience' },
  { value: '100%', label: 'Commitment to Learning' },
].map((stat) => (
                <div
                  key={stat.label}
                  className="paper-card text-center"
                  style={{ borderRadius: '12px', padding: '20px 16px' }}>
                  <div
                    className="font-serif brass-shine"
                    style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1, marginBottom: '4px' }}>
                    {stat.value}
                  </div>
                  <div
                    className="font-sans"
                    style={{ fontSize: '11px', color: 'var(--ink-faint)', fontWeight: 500, lineHeight: 1.4 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Legal Document AI',
    description:
      'Developed an AI-powered legal document analysis and risk detection application. Performed data collection, document processing, testing, and validation to analyse legal content and generate meaningful insights. Focused on improving accuracy, reliability, and overall system functionality.',
    tags: ['Python', 'AI', 'NLP', 'Data Collection'],
    link: '#',
    featured: true,
  },
  {
    title: 'School Timetable Generator',
    description:
      'Developed a web-based school timetable generation application to automate class scheduling and resource allocation. Implemented conflict-free timetable generation by managing teachers, subjects, classes, and scheduling constraints. Performed testing and validation to ensure accuracy, reliability, and efficient timetable planning.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Algorithms'],
    link: '#',
    featured: true,
  },
  {
    title: 'The Fine Dine',
    description:
      'Developed a web application to enhance the digital dining experience. Implemented user authentication, digital menu management, and interactive functionalities that enable customers to browse and place orders seamlessly. Conducted testing and validation to improve usability and performance.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    link: '#',
  },
];

export default function ProjectsSection() {
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
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'var(--ink)' }}>

      <div className="grain-dark absolute inset-0 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex items-center gap-6 reveal-up mb-4">
          <div className="brass-rule" style={{ width: '48px', height: '2px', flexShrink: 0 }} />
          <span
            className="font-sans font-semibold"
            style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--brass)' }}>
            Selected Work
          </span>
        </div>

        <h2
          className="font-serif reveal-up delay-100 mb-16"
          style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            lineHeight: '1.08',
            letterSpacing: '-0.025em',
            color: 'var(--stock)',
            fontWeight: 700,
            maxWidth: '520px',
          }}>
          Projects I&apos;ve
          <br />
          <em style={{ color: 'var(--brass)', fontStyle: 'italic' }}>built &amp; shipped.</em>
        </h2>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal-up ${i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : i === 3 ? 'delay-300' : ''}`}
              style={{
                background: project.featured ? 'rgba(201,168,76,0.05)' : 'rgba(245,240,232,0.03)',
                border: `1px solid ${project.featured ? 'rgba(201,168,76,0.2)' : 'rgba(245,240,232,0.08)'}`,
                borderRadius: '16px',
                padding: '32px',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.35)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(201,168,76,0.07)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = project.featured
                  ? 'rgba(201,168,76,0.2)'
                  : 'rgba(245,240,232,0.08)';
                (e.currentTarget as HTMLDivElement).style.background = project.featured
                  ? 'rgba(201,168,76,0.05)'
                  : 'rgba(245,240,232,0.03)';
              }}>

              {project.featured && (
                <div
                  className="font-sans font-semibold mb-4 inline-block"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--brass)',
                    background: 'rgba(201,168,76,0.12)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    borderRadius: '4px',
                    padding: '4px 10px',
                  }}>
                  Featured
                </div>
              )}

              <h3
                className="font-serif mb-3"
                style={{ fontSize: '1.4rem', color: 'var(--stock)', fontWeight: 600, letterSpacing: '-0.01em' }}>
                {project.title}
              </h3>

              <p
                className="font-sans mb-5"
                style={{ fontSize: '14px', lineHeight: '1.75', color: 'rgba(245,240,232,0.6)' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans"
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'rgba(245,240,232,0.5)',
                      background: 'rgba(245,240,232,0.06)',
                      border: '1px solid rgba(245,240,232,0.1)',
                      borderRadius: '4px',
                      padding: '4px 10px',
                    }}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : undefined}
                rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 font-sans font-semibold"
                style={{
                  fontSize: '13px',
                  color: 'var(--brass)',
                  letterSpacing: '0.02em',
                  transition: 'gap 0.2s',
                  textDecoration: 'none',
                }}>
                View Project
                <Icon name="ArrowRightIcon" size={14} style={{ color: 'inherit' } as React.CSSProperties} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


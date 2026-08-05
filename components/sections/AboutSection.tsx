'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const skills = [
  { category: 'Development', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'AI & Databases', items: ['Python', 'Machine Learning', 'SQL', 'MySQL'] },
  {
    category: 'Coordination & Tools',
    items: ['Project Coordination', 'Git', 'Problem Solving', 'Team Collaboration'],
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal-up, .reveal-fade');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#F5F0E8] text-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Label */}
        <div className="flex items-center gap-4 reveal-up mb-6">
          <div className="w-10 h-[2px] bg-yellow-600" />
          <span className="text-xs tracking-[0.3em] uppercase text-yellow-700 font-semibold">
            About Me
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Bio */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight reveal-up">
              Building solutions
              <br />
              that deliver results.
            </h2>

            <p className="text-base leading-relaxed text-gray-700 reveal-up delay-100 max-w-lg">
              I’m Kiruthi Raghavendran, a developer with a strong foundation in building responsive web applications and working with structured data systems. Alongside development, I actively contribute to planning, organizing, and executing projects efficiently.
            </p>

            <p className="text-base leading-relaxed text-gray-700 reveal-up delay-200 max-w-lg">
              I have hands-on experience working on academic and real-time projects where I handled responsibilities such as coordinating tasks, ensuring smooth workflows, validating outputs, and improving overall system reliability. I focus on combining technical skills with clear execution and team collaboration.
            </p>

            {/* Info Tags */}
            <div className="flex flex-wrap gap-3 reveal-up delay-300 pt-2">
              {[
                { icon: 'MapPinIcon', text: 'India' },
                { icon: 'BriefcaseIcon', text: 'Open to Opportunities' },
                { icon: 'AcademicCapIcon', text: 'B.Tech AI & Data Science' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1 rounded-md shadow-sm"
                >
                  <Icon name={item.icon} size={14} className="text-yellow-700" />
                  <span className="text-sm font-medium text-gray-700">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div className="space-y-8 reveal-fade delay-200">
            <h3 className="text-xl font-semibold text-gray-900">
              Skills & Technologies
            </h3>

            <div className="space-y-6">
              {skills.map((group) => (
                <div key={group.category}>
                  <div className="text-xs uppercase tracking-wider text-yellow-700 font-semibold mb-2">
                    {group.category}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md px-3 py-1 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
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
/**
 * About Section Component
 * 
 * Displays:
 * - About me introduction
 * - Experience/qualifications with icons
 * - Skills with proficiency bars
 * - Tools/technologies grid
 * 
 * Design: Two-column layout with cards and progress bars
 */

import { Briefcase, Zap, BookOpen, Trophy } from 'lucide-react';
import { EXPERIENCES, SKILLS, TOOLS } from '@/../../shared/const';

/**
 * Icon map for experience items
 */
const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase size={24} className="text-accent" />,
  Zap: <Zap size={24} className="text-accent" />,
  Trophy: <Trophy size={24} className="text-accent" />,
  BookOpen: <BookOpen size={24} className="text-accent" />,
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About me
          </h2>
          <div className="h-1 w-24 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Introduction & Experience */}
          <div className="space-y-8">
            {/* Bio */}
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a Front-End Developer who loves turning ideas into clean, user-friendly web experiences. 
              I enjoy crafting interfaces that are not only functional but also delightful.
            </p>

            {/* Experience Cards */}
            <div className="space-y-4">
              {EXPERIENCES.map((exp, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="shrink-0">
                    {iconMap[exp.icon || 'Briefcase']}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                    <p className="text-sm text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SKILLS →</h3>

              {/* Skill Bars */}
              <div className="space-y-6">
                {SKILLS.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-accent h-full rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">TOOLS I USE</h3>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {TOOLS.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">{tool.name.split('').slice(0, 1).join('')}</div>
                <p className="text-sm font-medium text-gray-700 text-center">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

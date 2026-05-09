/**
 * Projects Section Component
 * 
 * Displays featured projects in a grid layout.
 * Features:
 * - Project cards with images
 * - Project title and description
 * - Technology tags
 * - Hover effects
 * - View Project link
 * 
 * Design: 3-column grid with card-based layout
 */

import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/../../shared/const';
import Button from './Button';

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Selected Projects
            </h2>
            <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
          </div>
          <Button variant="primary" size="lg" icon href="#projects">
            View All Projects
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group/link"
                >
                  View Project
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Projects Page Component
 * 
 * Displays all projects with:
 * - Filter sidebar (by category, technology)
 * - Project grid with pagination
 * - Search functionality
 * 
 * Design: Clean layout with left sidebar for filters
 */

import { useState, useMemo } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '@/../../shared/const';
import type { Project } from '@/../../shared/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

// Projects per page
const ITEMS_PER_PAGE = 6;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique categories and technologies
  const categories = useMemo(() => {
    const cats = new Set(PROJECTS.map(p => p.category).filter(Boolean) as string[]);
    return Array.from(cats) as string[];
  }, []);

  const technologies = useMemo(() => {
    const techs = new Set<string>();
    PROJECTS.forEach(p => {
      p.technologies?.forEach(t => techs.add(t));
    });
    return Array.from(techs);
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const categoryMatch = !selectedCategory || project.category === selectedCategory;
      const techMatch = !selectedTech || project.technologies?.includes(selectedTech);
      return categoryMatch && techMatch;
    });
  }, [selectedCategory, selectedTech]);

  // Paginate
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  // Reset to page 1 when filters change
  const handleFilterChange = (callback: () => void) => {
    setCurrentPage(1);
    callback();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container">
          {/* Page Header */}
          <div className="mb-16">
            <p className="text-blue-600 font-semibold text-lg mb-2">My Work</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              All Projects<span className="text-blue-600">.</span>
            </h1>
            <p className="text-xl text-gray-600 italic mb-4">Ideas. Code. Design. Results.</p>
            <div className="h-1 w-24 bg-blue-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Category Filter */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase">Filter</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleFilterChange(() => setSelectedCategory(null))}
                      className={`block text-sm font-medium transition-colors ${
                        !selectedCategory
                          ? 'text-blue-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      All Projects <span className="text-gray-400">({PROJECTS.length})</span>
                    </button>
                    {(categories as string[]).map((cat: string) => {
                      const count = PROJECTS.filter(p => p.category === cat).length;
                      return (
                        <button
                          key={cat}
                          onClick={() => handleFilterChange(() => setSelectedCategory(cat))}
                          className={`block text-sm font-medium transition-colors capitalize ${
                            selectedCategory === cat
                              ? 'text-blue-600'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {cat?.replace(/-/g, ' ')} <span className="text-gray-400">({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Technology Filter */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase">Technology</h3>
                  <div className="space-y-2">
                    {technologies.map(tech => (
                      <button
                        key={tech}
                        onClick={() => handleFilterChange(() => setSelectedTech(tech))}
                        className={`block text-sm font-medium transition-colors ${
                          selectedTech === tech
                            ? 'text-blue-600'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - Projects Grid */}
            <div className="lg:col-span-3">
              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {paginatedProjects.map(project => (
                  <div
                    key={project.id}
                    className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      {/* Category Badge */}
                      {project.category && (
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-3 capitalize">
                          {project.category.replace(/-/g, ' ')}
                        </span>
                      )}

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
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'border border-gray-200 text-gray-900 hover:border-blue-300'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

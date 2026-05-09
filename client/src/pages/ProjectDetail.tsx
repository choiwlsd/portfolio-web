/**
 * Project Detail Page Component
 * 
 * Displays detailed information about a single project:
 * - Project header with metadata
 * - Project gallery
 * - Challenge, Approach, Solution sections
 * - Results with metrics
 * - Related projects
 * - CTA to contact
 * 
 * Design: Full-width layout with rich content sections
 */

import { useRoute } from 'wouter';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '@/../../shared/const';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function ProjectDetail() {
  const [match, params] = useRoute('/projects/:id');

  if (!match) {
    return null;
  }

  const projectId = params?.id as string;
  const project = PROJECTS.find(p => p.id === projectId);
  const relatedProjects = PROJECTS.filter(p => p.id !== projectId).slice(0, 3);

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <a href="/projects" className="text-blue-600 font-semibold hover:underline">
            Back to Projects
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Back Button */}
        <div className="container mb-12">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </a>
        </div>

        {/* Project Header */}
        <div className="bg-gray-50 py-16 border-b border-gray-200">
          <div className="container">
            <div className="max-w-3xl">
              {/* Category */}
              {project.category && (
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full mb-4 capitalize">
                  {project.category.replace(/-/g, ' ')}
                </span>
              )}

              {/* Title */}
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-600 italic mb-8">
                {project.shortDescription}
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.duration && (
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">Duration</p>
                    <p className="text-gray-900 font-semibold">{project.duration}</p>
                  </div>
                )}
                {project.team && project.team.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">Team</p>
                    <p className="text-gray-900 font-semibold">{project.team.join(', ')}</p>
                  </div>
                )}
                {project.liveLink && (
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">Live Site</p>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      Visit <ExternalLink size={16} />
                    </a>
                  </div>
                )}
                {project.githubLink && (
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">GitHub</p>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      View <Github size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Project Image */}
        {project.image && (
          <div className="py-16 border-b border-gray-200">
            <div className="container">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Challenge Section */}
              {project.challenge && (
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">1. The Challenge</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{project.challenge}</p>
                </section>
              )}

              {/* Approach Section */}
              {project.approach && (
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">2. The Approach</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{project.approach}</p>
                </section>
              )}

              {/* Solution Section */}
              {project.solution && (
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">3. The Solution</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{project.solution}</p>
                </section>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${project.title} - ${idx + 1}`}
                        className="w-full rounded-lg shadow-lg"
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Results Section */}
              {project.results && project.results.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">4. The Results</h2>
                  <ul className="space-y-4">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="text-blue-600 font-bold text-xl mt-1">✓</span>
                        <span className="text-lg text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Box */}
                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-2">Interested in working together?</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Let's discuss your next project and create something amazing.
                  </p>
                  <Button variant="primary" size="sm" href="#contact" className="w-full">
                    Say Hello
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="bg-gray-50 py-20 border-t border-gray-200">
            <div className="container">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map(relatedProject => (
                  <a
                    key={relatedProject.id}
                    href={relatedProject.link}
                    className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                  >
                    <div className="relative h-40 overflow-hidden bg-gray-200">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-1 mt-1">
                        {relatedProject.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-20">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's build something amazing together.
            </p>
            <Button
              variant="secondary"
              size="lg"
              href="#contact"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Say Hello
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

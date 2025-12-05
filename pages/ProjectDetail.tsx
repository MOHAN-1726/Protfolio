import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Layers, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="bg-gray-50 dark:bg-dark min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 bg-white dark:bg-gray-800">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
               e.currentTarget.src = `https://picsum.photos/1200/675?random=${project.id}`;
            }}
          />
          <div className="absolute top-4 right-4 flex gap-3">
             <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 backdrop-blur-sm dark:bg-black/50 text-slate-800 dark:text-white rounded-full hover:bg-primary hover:text-white transition-all shadow-lg"
              aria-label="View Source Code"
              title="View Source Code"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 backdrop-blur-sm dark:bg-black/50 text-slate-800 dark:text-white rounded-full hover:bg-primary hover:text-white transition-all shadow-lg"
              aria-label="View Live Demo"
              title="View Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  <Layers className="w-4 h-4 mr-2" />
                  {project.type}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                    Featured Project
                  </span>
                )}
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Overview</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {project.features && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-900/30">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Interested in this?</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                Check out the code or see it live to learn more about how it was built.
              </p>
              <div className="flex flex-col gap-3">
                <a 
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-800 text-slate-700 dark:text-white rounded-lg hover:text-primary transition-colors border border-gray-200 dark:border-gray-700 font-medium"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Repository
                </a>
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg shadow-blue-500/20"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
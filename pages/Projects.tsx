import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <Link to={`/projects/${project.id}`} className="block relative overflow-hidden aspect-video cursor-pointer">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = `https://picsum.photos/800/600?random=${project.id}`;
          }}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full font-medium border border-white/30">
            View Details
          </span>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
            {project.type}
          </span>
          <div className="flex gap-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
              aria-label="View Code"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
              aria-label="View Live"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <Link to={`/projects/${project.id}`} className="block group-hover:text-primary transition-colors">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
        </Link>

        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs text-slate-500 dark:text-slate-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-gray-50 dark:bg-dark min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl mb-4">
            Featured Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of projects I've worked on, ranging from web applications to open source libraries.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {PROJECTS.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No projects available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

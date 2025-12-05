import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Download } from 'lucide-react';
import { SITE_CONFIG, PROJECTS } from '../constants';

const Home = () => {
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 flex content-center items-center justify-center min-h-[90vh]">
        <div className="absolute top-0 w-full h-full bg-center bg-cover opacity-10 dark:opacity-5 bg-[url('https://picsum.photos/1920/1080?blur=10')]"></div>
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full">
                Frontend Developer
              </div>
              <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white sm:text-6xl mb-6 leading-tight">
                Hi, I'm <span className="text-primary">{SITE_CONFIG.name}</span>
              </h1>
              <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                {SITE_CONFIG.about.short}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                >
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            {/* Visual Element / Profile Image Placeholder */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
               <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                  <img 
                    src="/assets/images/profile.jpg" 
                    alt="Mohanraj K" 
                    className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
                    onError={(e) => {
                      // Fallback if local image is missing
                      e.currentTarget.src = "https://picsum.photos/600/600";
                    }}
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Recent Projects */}
      <section className="py-20 bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Recent Work</h2>
              <p className="mt-2 text-slate-500 dark:text-slate-400">Some of my latest highlighted projects.</p>
            </div>
            <Link to="/projects" className="hidden sm:flex items-center text-primary font-medium hover:underline">
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {featuredProjects.map(project => (
                <Link key={project.id} to={`/projects/${project.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                     <img 
                       src={project.imageUrl} 
                       alt={project.title} 
                       className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                       onError={(e) => {
                          e.currentTarget.src = `https://picsum.photos/800/600?random=${project.id}`;
                       }}
                     />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{project.type}</p>
                </Link>
             ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/projects" className="text-primary font-medium hover:underline">
              View all projects &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
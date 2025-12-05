import React from 'react';
import { Download, Code2, Layout, Coffee, Github, Linkedin, ExternalLink, Briefcase, Award, Terminal } from 'lucide-react';
import { SITE_CONFIG, SOCIALS } from '../constants';

const About = () => {
  const skills = [
    { 
      category: 'Frontend Web', 
      icon: Layout, 
      items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'Next.js'] 
    },
    { 
      category: 'Programming & Data', 
      icon: Code2, 
      items: ['Java', 'Python', 'Pandas', 'NumPy', 'Matplotlib'] 
    },
    { 
      category: 'Tools & CI/CD', 
      icon: Terminal, 
      items: ['VS Code', 'Vercel', 'GitHub Actions'] 
    },
  ];

  const internships = [
    { company: 'Null class', role: 'Full Stack Web Development' },
    { company: 'Codsoft', role: 'Web Development' },
    { company: 'Kodacy', role: 'AI & ML' },
  ];

  const achievements = [
    'Cuvette — SQL Micro Course',
    'Introduction to Artificial Intelligence',
    'Springboard — Natural Language Processing',
    'Springboard — Robotic Process Automation',
    'Springboard — Computer Vision 101'
  ];

  return (
    <div className="bg-gray-50 dark:bg-dark min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Intro Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl mb-6">
            About Me
          </h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Hello! I'm <span className="text-primary font-bold">Mohanraj K</span>, a 3rd-year B.Tech Information Technology student.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
              {SITE_CONFIG.about.long}
            </p>
          </div>
          
          <div className="mt-8">
            <a 
                href="/assets/pdf/resume.pdf" 
                download="Mohanraj_K_Resume.pdf"
                aria-label="Download Resume PDF"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-16 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => {
              const Icon = skillGroup.icon;
              return (
                <div key={skillGroup.category} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{skillGroup.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Internships Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-16 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Internships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{internship.company}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">{internship.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-16 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Achievements</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-lg">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Connect Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Connect With Me</h2>
          <div className="flex flex-col sm:flex-row gap-4">
             {SOCIALS.map((social) => {
               const Icon = social.platform === 'GitHub' ? Github : Linkedin;
               return (
                 <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-slate-700 dark:text-slate-200 hover:text-primary hover:border-primary dark:hover:border-primary transition-all group"
                    aria-label={`Visit my ${social.platform} profile`}
                 >
                    <Icon className="w-6 h-6 mr-3 text-slate-400 group-hover:text-primary transition-colors" />
                    <span className="font-medium">Find me on {social.platform}</span>
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </a>
               );
             })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
import type { Project, BlogPost, SocialLink } from './types';

export const SITE_CONFIG = {
  name: "MOHANRAJ K",
  title: "Frontend Developer",
  email: "mohanraj.k1729@gmail.com",
  about: {
    short: "Frontend Developer passionate about building clean, fast web interfaces.",
    long: "I am a 3rd-year B.Tech Information Technology student with a strong focus on Frontend Development. My technical expertise lies in building responsive and performance-optimized web applications using React and Next.js. I also have a solid foundation in programming languages like Java and Python. When I'm not coding, I enjoy playing cricket, hockey, and online games."
  }
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Health and Medical Records',
    description: 'Web-based Health and Medical Records Management system featuring secure data handling and intuitive UI workflows.',
    longDescription: 'This comprehensive Health and Medical Records Management system is designed to streamline the storage and retrieval of patient data. It prioritizes security and privacy, ensuring that sensitive medical information is protected while remaining accessible to authorized healthcare providers. The application features a user-friendly interface that simplifies complex workflows, allowing medical professionals to focus more on patient care and less on administrative tasks.',
    features: [
      'Secure User Authentication & Authorization',
      'Digital Patient Record Management',
      'Appointment Scheduling System',
      'Medical History Tracking',
      'Role-based Access Control (Doctor/Patient/Admin)'
    ],
    tech: ['React.js', 'Bootstrap', 'Secure Storage'],
    type: 'Full Stack',
    imageUrl: '/assets/images/project1.png', 
    repoUrl: 'https://github.com/MOHAN-1726',
    liveUrl: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'Student Activities Tracking',
    description: 'Frontend application for Student Activities Tracking providing clear visualization and streamlined data management.',
    longDescription: 'The Student Activities Tracking application serves as a central hub for monitoring and managing extracurricular engagement within educational institutions. It provides administrators and students with clear, real-time visualizations of participation data. By replacing manual tracking methods with a streamlined digital solution, it enhances data accuracy and simplifies the generation of comprehensive activity reports.',
    features: [
      'Interactive Activity Dashboard',
      'Real-time Participation Analytics',
      'Student Profile Management',
      'Event Logging & History',
      'Responsive Data Visualization'
    ],
    tech: ['React.js', 'JavaScript', 'CSS3'],
    type: 'Frontend',
    imageUrl: '/assets/images/project2.png',
    repoUrl: 'https://github.com/MOHAN-1726',
    liveUrl: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'Scientific Calculator',
    description: 'A web-based Scientific Calculator featuring advanced expression parsing, error handling, and a clean responsive UI.',
    longDescription: 'This web-based Scientific Calculator goes beyond basic arithmetic to support complex mathematical operations directly in the browser. Built with a focus on precision and usability, it features a robust expression parser that handles nested operations and scientific functions. The responsive design ensures a seamless experience across desktop and mobile devices, making it a versatile tool for students and professionals alike.',
    features: [
      'Advanced Mathematical Functions (Trig, Log, Exp)',
      'Complex Expression Parsing',
      'Real-time Error Handling & Validation',
      'Calculation History Tape',
      'Fully Responsive Mobile-First Design'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    type: 'Frontend',
    imageUrl: '/assets/images/project3.png',
    repoUrl: 'https://github.com/MOHAN-1726',
    liveUrl: '#',
    featured: false,
  },
  {
    id: '4',
    title: 'IoT Fire & Smoke Detection',
    description: 'IoT-Enabled Fire and Smoke Detection System providing real-time mobile alerts for safety monitoring.',
    longDescription: 'The IoT-Enabled Fire and Smoke Detection System bridges the gap between hardware sensors and user safety protocols. By integrating real-time monitoring with instant mobile alert capabilities, it provides immediate notifications in case of emergencies. The system utilizes cloud connectivity to log data and ensure that critical alerts are delivered without delay, significantly enhancing safety monitoring standards.',
    features: [
      'Real-time Smoke & Temperature Monitoring',
      'Instant Mobile Push Notifications',
      'Cloud Data Logging',
      'Remote Status Dashboard',
      'Automated Emergency Alert Triggers'
    ],
    tech: ['IoT', 'Python', 'Java'],
    type: 'Full Stack',
    imageUrl: '/assets/images/project4.jpg',
    repoUrl: 'https://github.com/MOHAN-1726',
    liveUrl: '#',
    featured: false,
  },
];


export const SOCIALS: SocialLink[] = [
  { 
    platform: 'GitHub', 
    url: 'https://github.com/MOHAN-1726', 
    icon: 'Github' 
  },
  { 
    platform: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/mohanraj-kandasamy-a4288928b', 
    icon: 'Linkedin' 
  },
];
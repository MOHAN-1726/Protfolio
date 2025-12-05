export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  tech: string[];
  type: 'Frontend' | 'Backend' | 'Full Stack' | 'Mobile';
  imageUrl: string;
  repoUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string; // Simplified for this demo (plain text or HTML string)
  tags: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
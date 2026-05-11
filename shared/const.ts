export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;
import { ReactNode } from 'react';

/**
 * Shared constants and static data for the developer portfolio
 * Contains portfolio information, projects, skills, and tools
 */

import type { NavItem, Project, Skill, Tool, Experience, SocialLink } from './types';

/**
 * Navigation menu items
 */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Social media links
 */
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'github', url: 'https://github.com/choiwlsd', icon: 'Github' },
  { platform: 'blog', url: 'https://oiblog.tistory.com/', icon: 'BookOpen' },
  { platform: 'linkedin', url: 'https://linkedin.com/in/choiwlsd', icon: 'Linkedin' },
  { platform: 'instagram', url: 'https://instagram.com/_oiwlsx', icon: 'Instagram' },
  { platform: 'email', url: 'mailto:choiwlsd@gmail.com', icon: 'Mail' },
];

/**
 * Featured projects with detailed information
 */
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Pose-Agent',
    description: '[캡스톤디자인] 자율협력지원 Agentic AI: 협주 가능 악기 레슨 Agent AI 플랫폼 기술 개발',
    shortDescription: '협주가능 악기 레슨 Agent AI 플랫폼',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    ],
    tags: ['Python', 'MediaPipe', 'AI'],
    link: '/projects/1',
    featured: true,
    category: 'web-development',
    duration: 'Jan 2025 - May 2025',
    team: ['Jinyeong Choi', 'Team Members'],
    technologies: ['Python', 'MediaPipe', 'OpenCV', 'PyTorch', 'TCN', 'CNN'],
    challenge: 'Create a real-time music learning AI system that analyzes user performance and provides integrated feedback on pitch, rhythm, and posture.',
    approach: 'Implemented multi-agent architecture where each agent handles specific aspects (Pose, Pitch, Rhythm) and collaborates for comprehensive feedback.',
    solution: 'Developed Pose Agent using MediaPipe for pose estimation, TCN for posture classification, and rule-based feedback generation for real-time analysis.',
    results: ['Successfully implemented pose estimation and analysis', 'Integrated multi-agent system architecture', 'Real-time feedback generation capability'],
    liveLink: 'https://github.com/choiwlsd/Pose-Agent',
    githubLink: 'https://github.com/choiwlsd/Pose-Agent',
  },
  {
    id: '2',
    title: 'KHUTHON 2025 - Micro Fertilizer Trading Platform',
    description: '🏆KHUTHON 최우수상 수상작: 마이크로 비료 거래 플랫폼',
    shortDescription: 'Micro fertilizer trading platform',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    ],
    tags: ['JavaScript', 'React', 'Node.js'],
    link: '/projects/2',
    featured: true,
    category: 'web-development',
    duration: 'Mar 2025 - May 2025',
    team: ['Frontend Developer', 'Backend Developer', 'Designer'],
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    challenge: 'Build a platform for farmers to buy and sell micro fertilizers efficiently.',
    approach: 'Created a user-friendly marketplace with real-time inventory management and secure transactions.',
    solution: 'Developed full-stack web application with React frontend and Node.js backend, integrated payment system.',
    results: ['Won Grand Prize at KHUTHON 2025', 'Positive user feedback', 'Scalable architecture'],
    liveLink: 'https://github.com/choiwlsd/khuthon2025',
    githubLink: 'https://github.com/choiwlsd/khuthon2025',
  },
  {
    id: '3',
    title: 'Semothon 2025 - Classroom Rental Platform',
    description: '🏆세모톤 대상 수상작: 강의실 대여 플랫폼',
    shortDescription: 'Classroom rental platform',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
    ],
    tags: ['JavaScript', 'React', 'TypeScript'],
    link: '/projects/3',
    featured: true,
    category: 'web-development',
    duration: 'Apr 2025 - Apr 2025',
    team: ['Frontend Developer', 'UI/UX Designer'],
    technologies: ['JavaScript', 'React', 'TypeScript', 'CSS'],
    challenge: 'Design and develop a platform for university classroom reservations.',
    approach: 'Built responsive web interface with intuitive booking system and real-time availability.',
    solution: 'Created modern React application with TypeScript for type safety and better developer experience.',
    results: ['Won Grand Prize at Semothon 2025', 'Excellent UI/UX feedback', 'Responsive design'],
    liveLink: 'https://github.com/choiwlsd/2025_TEAM_6_FE',
    githubLink: 'https://github.com/choiwlsd/2025_TEAM_6_FE',
  },
  {
    id: '4',
    title: 'KHUTHON 2024 - Personal Power Monitoring System',
    description: '🏆KHUTHON 우수상/인기상 수상작: 개인화된 전력 모니터링 시스템',
    shortDescription: 'Personal power monitoring system',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['JavaScript', 'React', 'IoT'],
    link: '/projects/4',
    featured: false,
    category: 'web-development',
    duration: 'May 2024 - May 2024',
    team: ['Developer', 'Designer'],
    technologies: ['JavaScript', 'React', 'IoT'],
    challenge: 'Create a system to monitor and optimize household electricity consumption.',
    approach: 'Developed IoT-integrated web application with real-time data visualization.',
    solution: 'Built dashboard with charts and analytics for electricity usage tracking.',
    results: ['Won Excellence Award and Popularity Award at KHUTHON 2024'],
  },
  {
    id: '5',
    title: 'Track Study Project - AI Cover Song Video Generator',
    description: '🏆TrackStudy Project 2등 수상작: 음성 및 영상 생성 모델을 활용한 노래 커버 영상 제작 서비스',
    shortDescription: 'AI-powered cover song video generator',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['Python', 'AI', 'Video Generation'],
    link: '/projects/5',
    featured: false,
    category: 'personal',
    duration: 'Apr 2024 - Apr 2024',
    team: ['Solo'],
    technologies: ['Python', 'AI Models', 'Video Processing'],
    challenge: 'Create a service that generates cover song videos using AI voice and video generation.',
    approach: 'Integrated multiple AI models for voice synthesis and video generation.',
    solution: 'Built end-to-end pipeline for AI-powered music video creation.',
    results: ['Won 2nd Prize at Track Study Project 2023'],
  },
  {
    id: '6',
    title: 'Done-Check',
    description: 'To-do Chrome extension service. Done? then check what you did!🌱🐾',
    shortDescription: 'Chrome extension for task tracking',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    tags: ['JavaScript', 'Chrome Extension'],
    link: '/projects/6',
    featured: false,
    category: 'personal',
    duration: 'Aug 2025',
    team: ['Solo'],
    technologies: ['JavaScript', 'Chrome API'],
    challenge: 'Create a simple yet effective task tracking tool as a browser extension.',
    approach: 'Built lightweight Chrome extension with local storage for task management.',
    solution: 'Developed user-friendly interface for quick task creation and completion tracking.',
    results: ['Functional Chrome extension', 'Positive user feedback'],
  },
];

/**
 * Skills with proficiency levels
 */
export const SKILLS: Skill[] = [
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Python', level: 85, category: 'frontend' },
  { name: 'UI / UX', level: 80, category: 'frontend' },
];

/**
 * Tools and technologies
 */
export const TOOLS: Tool[] = [
  { name: 'JavaScript', icon: 'Code', category: 'frontend' },
  { name: 'TypeScript', icon: 'Zap', category: 'frontend' },
  { name: 'React', icon: 'Zap', category: 'frontend' },
  { name: 'Python', icon: 'Zap', category: 'frontend' },
  { name: 'Vite', icon: 'Zap', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'Wind', category: 'frontend' },
  { name: 'Node.js', icon: 'Server', category: 'tools' },
  { name: 'Git', icon: 'GitBranch', category: 'tools' },
];

/**
 * Experience/qualifications
 */
export const EXPERIENCES: Experience[] = [
  {
    title: 'Kyung Hee University',
    description: 'Undergraduate of Computer Science and Engineering',
    icon: 'Briefcase',
  },
  {
    title: 'Passionate about AI & Web Development',
    description: 'Tackling new challenges and experiencing AI service development',
    icon: 'Zap',
  },
  {
    title: 'Multiple Hackathon Awards',
    description: 'KHUTHON Grand Prize, Semothon Grand Prize, and more',
    icon: 'Trophy',
  },
];

/**
 * Contact information
 */
export const CONTACT_INFO = {
  email: 'choiwlsd@gmail.com',
  phone: '+82 10-8265-XXXX',
  location: 'South Korea',
  blog: 'https://oiblog.tistory.com/',
};

/**
 * Portfolio metadata
 */
interface PORTFOLIO_META {
  name: string;
  title: string;
  tagline: ReactNode;
  subtitle: string;
  bio: string;
  cta: {
    primary: string;
    secondary: string;
  };
}

export const PORTFOLIO_META = {
  name: 'Jinyeong Choi',
  title: 'Full-Stack Developer & AI Enthusiast',
  subtitle: 'Passionate about tackling new challenges and experiencing the overall flow of AI service development',
  bio: "I'm a Computer Science student passionate about building innovative solutions at the intersection of AI and web development. I love collaborating with people and believe in the power of synergy. With multiple hackathon awards and real-world project experience, I'm committed to creating impactful digital experiences.",
  cta: {
    primary: 'View My Work',
    secondary: 'Get in Touch',
  },
};

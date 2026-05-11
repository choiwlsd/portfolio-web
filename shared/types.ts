/**
 * Shared type definitions for the developer portfolio website
 * Used across pages and components for type safety
 */

/**
 * Represents a single project in the portfolio
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  image: string;
  gallery?: string[];
  tags: string[];
  link: string;
  featured?: boolean;
  category?: 'web-development' | 'mobile-app' | 'ui-ux-design' | 'personal';
  duration?: string;
  team?: string[];
  technologies?: string[];
  challenge?: string;
  approach?: string;
  solution?: string;
  results?: string[];
  liveLink?: string;
  githubLink?: string;
}

/**
 * Represents a skill with proficiency level
 */
export interface Skill {
  name: string;
  level: number; // 0-100 percentage
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

/**
 * Represents a tool/technology used
 */
export interface Tool {
  name: string;
  icon: string; // Icon name or path
  category: string;
}

/**
 * Represents experience/qualification
 */
export interface Experience {
  title: string;
  description: string;
  icon?: string;
}

/**
 * Social media link
 */
export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'instagram' | 'blog';
  url: string;
  icon?: string;
}

/**
 * Navigation menu item
 */
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

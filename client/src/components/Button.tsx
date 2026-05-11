/**
 * Button Component
 * 
 * Reusable button component with multiple variants.
 * Variants:
 * - primary: Blue background with white text (main CTA)
 * - secondary: White background with border (secondary CTA)
 * - outline: Transparent background with border
 * 
 * Features:
 * - Smooth transitions
 * - Hover effects
 * - Responsive sizing
 * - Icon support
 */

import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = false,
  onClick,
  href,
  className = '',
  disabled = false,
}: ButtonProps) {
  // Base styles
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed';

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Variant styles
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-black active:scale-95',
    secondary: 'bg-white text-gray-900 border-2 border-gray-200 hover:border-primary hover:text-primary',
    outline: 'bg-transparent text-gray-900 border-2 border-gray-300 hover:border-primary hover:text-primary',
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
        {icon && <ArrowRight size={20} className="ml-2" />}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button onClick={onClick} disabled={disabled} className={combinedClassName}>
      {children}
      {icon && <ArrowRight size={20} className="ml-2" />}
    </button>
  );
}

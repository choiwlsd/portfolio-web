/**
 * Hero Section Component
 * 
 * Main hero section with:
 * - Large headline "I build digital experiences"
 * - Subheading with tagline
 * - CTA buttons (View My Work, Get in Touch)
 * - Decorative elements (underline, asterisk)
 * - Responsive design
 * 
 * Design: Bold typography with asymmetric layout
 * Left side: Text content
 * Right side: Decorative elements (in desktop view)
 */

import Button from './Button';
import { PORTFOLIO_META } from '@/../../shared/const';
import OIimage from '../assets/favicon.png';
import Baguetteimage from '../assets/baguette.png';
import Barcodeimage from '../assets/barcode.png';
import Basketimage from '../assets/basket.png';
import Pastaimage from '../assets/pasta.png';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Greeting */}
            <div className="inline-block">
              <p className="text-primary font-semibold text-lg">
                <span className='text-2xl leading-none tracking-wide text-gray-900 antialiased'>
                  {PORTFOLIO_META.name}
                </span>
              </p>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                I build 
                <span className="relative inline-block border-4 border-primary px-4 py-1 ml-2 font-serif">digital</span>
                experiences
              </h1>

              {/* Decorative Underline */}
              <div className="flex items-center gap-3">
                <div className="h-1 w-16 bg-primary rounded-full"></div>
                <span className="text-2xl font-bold text-gray-900">*</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {PORTFOLIO_META.subtitle}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
              {PORTFOLIO_META.bio}
            </p>

            {/* Role Badge */}
            <div className="inline-block">
              <span className="text-primary font-semibold">{PORTFOLIO_META.title}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" icon href="#projects" className='bg-primary'>
                {PORTFOLIO_META.cta.primary}
              </Button>
              <Button variant="secondary" size="lg" icon href="#contact">
                {PORTFOLIO_META.cta.secondary}
              </Button>
            </div>
          </div>

          {/* Right Decorative Area */}
          <div className="hidden md:flex items-center justify-center relative h-96">
            {/* Decorative Elements */}
              <div className="relative w-125 h-125">
              {/* Large Circle Background */}
              <div className="absolute w-72 h-72 bg-red-500 rounded-full opacity-20 blur-3xl z-0"></div>

              <img 
                src={Baguetteimage} 
                alt="Decorative" 
                className="absolute w-80 h-80 bottom-80 z-20" />
              <img 
                src={Barcodeimage} 
                alt="Decorative" 
                className="absolute w-40 h-40 bottom-40 left-20 rotate-50 z-20" />
              <img 
                src={Basketimage} 
                alt="Decorative" 
                className="absolute w-100 h-70 mb-4 rotate-90 z-10" />
              <img 
                src={Pastaimage} 
                alt="Decorative" 
                className="absolute w-60 h-40 top-10 right-20 z-20" />

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-600">Scroll to explore</p>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

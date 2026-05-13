/**
 * About Page
 * 
 * Displays information about the developer:
 * - Introduction
 * - Experience
 * - Skills
 * - Tools/Technologies
 * 
 * Design: Two-column layout with cards and progress bars
 */

import { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

// Projects per page
const ITEMS_PER_PAGE = 6;

export default function AboutPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container">
          {/* Page Header */}
          <div className="mb-16">
            <p className="text-primary font-semibold text-lg mb-2">About me</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Jinyeong Choi<span className="text-primary">.</span>
            </h1>
            <p className="text-xl text-gray-600 italic mb-4">Love to collaborate and create innovative solutions.</p>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
           
            {/* Main Content - Projects Grid */}
            <div className="lg:col-span-3">
                            
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/**
 * Contact Section Component (v2 - Handcrafted Collage)
 * 
 * Displays:
 * - Call-to-action message (handwritten style)
 * - Contact information with icons
 * - Primary CTA button
 * 
 * Design: Blue background with paper texture, scattered elements
 */

import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/../../shared/const';
import Button from './Button';

export default function ContactV2() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-blue-600 text-white relative overflow-hidden paper-texture">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Scattered decorative shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 border-4 border-white opacity-20 rounded-lg transform rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Main Heading - Handwritten */}
          <div className="fade-in-up">
            <h2 className="handwritten text-5xl md:text-6xl font-bold mb-4">
              Let's work together
            </h2>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              I'm currently open to new opportunities and exciting projects.
            </p>
          </div>

          {/* Contact Information - Scattered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y-2 border-blue-400 fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Email */}
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all transform hover:scale-105">
              <Mail size={32} className="text-blue-100" />
              <div>
                <p className="text-sm text-blue-100 mb-1">Email</p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="font-bold text-white hover:text-blue-200 transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all transform hover:scale-105">
              <Phone size={32} className="text-blue-100" />
              <div>
                <p className="text-sm text-blue-100 mb-1">Phone</p>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="font-bold text-white hover:text-blue-200 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all transform hover:scale-105">
              <MapPin size={32} className="text-blue-100" />
              <div>
                <p className="text-sm text-blue-100 mb-1">Location</p>
                <p className="font-bold text-white">{CONTACT_INFO.location}</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              variant="secondary"
              size="lg"
              icon
              href={`mailto:${CONTACT_INFO.email}`}
              className="bg-white text-blue-600 hover:bg-blue-50 border-white hover:border-blue-100 font-bold"
            >
              Say Hello
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

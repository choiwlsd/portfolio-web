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
import FloatingBadge from './ui/floating-bagde';
import FloatingIcon from './ui/floating-icon';
import { Camera, Film, Headphones, Clapperboard, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="overflow-x-auto overflow-y-hidden">
      <div
        className="
          relative
          w-[1440px]
          mx-auto
          min-h-[820px]
          px-8
          pt-6
        ">
          {/* intro */}
        <div className="absolute left-8 top-14 max-w-[230px]">
          <p className="text-[#2f6dff] font-medium italic text-base mb-3">
            Welcome to my Portfolio!
          </p>

          <p className="text-[30px] leading-[1.2] font-light">
            I&apos;m <span className="font-bold underline">Monelo</span>, a
            Designer and Content Creator based in{" "}
            <span className="font-bold underline">Seoul.</span>
          </p>
        </div>

        {/* main title */}
        <div className="flex flex-col items-center justify-center pt-12 select-none">
          <div className="relative">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2">
              <div className="w-20 h-20 rounded-[24px] bg-black shadow-2xl rotate-6 flex items-center justify-center">
                <Play
                  fill="#2f6dff"
                  color="#2f6dff"
                  size={32}
                  className="translate-x-1"
                />
              </div>
            </div>

            <h1 className="text-[120px] leading-[0.92] font-black tracking-[-0.08em] text-center">
              Shoot.
              <br />
              Edit.
              <br />
              Deliver.
              <br />
              Repeat.
            </h1>
          </div>
        </div>

        {/* floating badges */}
        <FloatingBadge
          className="left-[18%] top-[29%] rotate-6"
          text="Studio & On-Location Shoots"
        />

        <FloatingBadge
          className="right-[24%] top-[44%] -rotate-3"
          text="Post - Production"
        />

        <FloatingBadge
          className="left-[22%] top-[58%] rotate-3"
          text="High - Quality Production"
        />

        <FloatingBadge
          className="left-[47%] top-[73%] rotate-2"
          text="Reel Shoots"
        />

        {/* icons */}
        <div className="absolute left-[13%] top-[40%]">
          <FloatingIcon>
            <Headphones size={45} strokeWidth={1.7} />
          </FloatingIcon>
        </div>

        <div className="absolute left-[18%] top-[67%]">
          <FloatingIcon>
            <Camera size={48} strokeWidth={1.7} />
          </FloatingIcon>
        </div>

        <div className="absolute right-[18%] top-[48%]">
          <FloatingIcon>
            <Film size={45} strokeWidth={1.7} />
          </FloatingIcon>
        </div>

        <div className="absolute right-[22%] top-[75%]">
          <FloatingIcon>
            <Clapperboard size={42} strokeWidth={1.7} />
          </FloatingIcon>
        </div>

        {/* polaroid */}
        <div className="absolute right-[7%] top-[18%] rotate-[7deg]">
          <div className="bg-white p-3 shadow-2xl border border-neutral-200 w-[220px]">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-62.5 object-cover"
            />

            <div className="mt-3 flex justify-end">
              <span className="bg-yellow-300 px-3 py-1 text-xs font-semibold rotate-[-2deg]">
                monelo
              </span>
            </div>
          </div>
        </div>

        {/* sticky note */}
        <div className="absolute right-[5%] bottom-[12%] rotate-[-5deg]">
          <div className="bg-[#f2e8d8] p-5 shadow-lg w-55">
            <div className="absolute top-[-10px] left-10 w-24 h-6 bg-[#d6b78d]/70 rotate-[-2deg]" />

            <ul className="space-y-2 text-base font-medium text-neutral-700">
              <li>— Graphic Design</li>
              <li>— Photography</li>
              <li>— Videography</li>
              <li>— Branding</li>
              <li>— Content Creation</li>
            </ul>
          </div>
        </div>

        {/* handwriting */}
        <div className="absolute left-[4%] bottom-[21%] rotate-[-6deg]">
          <p className="text-2xl leading-snug font-light italic">
            Ready to make your
            <br />
            Brands Unforgettable
          </p>

          <button className="mt-5 border-[3px] border-[#2f6dff] text-[#2f6dff] px-6 py-2 rounded-full text-2xl font-semibold italic hover:bg-[#2f6dff] hover:text-white transition">
            Let&apos;s Roll!
          </button>
        </div>
      </div>
    </section>
  );
}

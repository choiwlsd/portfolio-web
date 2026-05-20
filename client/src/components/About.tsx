/**
 * About Section Component
 *
 * - 기존 About 로직 유지
 * - 새 editorial portfolio 디자인 적용
 * - EXPERIENCE / SKILLS / TOOLS 제거된 상태 기준
 */

import { ArrowUpRight } from "lucide-react";
import { navigate } from "wouter/use-browser-location";
import Milanimage from "@/assets/milan.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="
        max-w-[1500px]
        mx-auto
        px-8
        py-24
      "
    >
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        {/* image */}
        <div className="relative">
          {/* tape */}
          <div
            className="
              absolute
              -top-1
              right-1
              w-20
              h-6
              bg-[#59a8dc]
              rotate-[25deg]
              z-10
            "
          />

          {/* polaroid */}
          <div
            className="
              bg-white
              p-4
              rotate-[-3deg]
              shadow-[0_25px_60px_rgba(0,0,0,0.12)]
            "
          >
            <img
              src={Milanimage}
              alt="Jinyeong Choi"
              className="
                w-full
                h-[420px]
                object-cover
              "
            />
          </div>
        </div>

        {/* text */}
        <div>
          {/* small label */}
          <p className="text-[#2f6dff] italic text-lg mb-4">
            About Me
          </p>

          {/* title */}
          <h2
            className="
              text-[52px]
              leading-[1.05]
              font-black
              tracking-tight
            "
          >
            <span className="relative inline-block border-4 border-[#59a8dc] px-4 py-2 ml-2 mr-2">Jinyeong</span>
            <span className="font-serif">Choi</span>
          </h2>

          {/* bio */}
          <p
            className="
              mt-8
              text-neutral-600
              text-lg
              leading-relaxed
              max-w-[650px]
            "
          >
            I&apos;m a Front-End Developer who loves
            turning ideas into clean, user-friendly
            web experiences.
            <br />
            <br />
            I enjoy crafting interfaces that are not
            only functional but also delightful.
          </p>

          {/* button */}
          <button
            className="
              mt-10
              bg-black
              text-white
              px-7
              py-4
              rounded-xl
              flex
              items-center
              gap-3
              font-semibold
              hover:scale-105
              transition
            "
            onClick = {() => navigate('/about')}
          >
            MORE ABOUT ME
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
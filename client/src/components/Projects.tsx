/**
 * Projects Section Component
 *
 * - 기존 프로젝트 로직 유지
 * - href / navigate 동작 유지
 * - 디자인만 새 포트폴리오 스타일로 변경
 */

import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/../../shared/const";
import Button from "./Button";
import { navigate } from "wouter/use-browser-location";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-[1500px] mx-auto px-8 py-24"
    >
      {/* header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
        <div>
          <p className="text-[32px] font-black inline-block relative">
            FEATURED WORK
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#2f6dff]" />
          </p>
        </div>

        {/* 기존 버튼 로직 유지 */}
        <Button
          variant="secondary"
          size="md"
          icon
          href="/projects"
        >
          View All Projects
        </Button>
      </div>

      {/* projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {PROJECTS.slice(0, 4).map((project) => (
          <div
            key={project.id}
            onClick={() => navigate(project.link)}
            className="
              group
              cursor-pointer
              bg-white
              rounded-[28px]
              overflow-hidden
              border border-neutral-200
              hover:-translate-y-2
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              transition-all duration-500
            "
          >
            {/* image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-65
                  object-cover
                  group-hover:scale-[1.03]
                  transition-transform duration-700
                "
              />

              {/* overlay */}
              <div
                className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-300
                "
              />
            </div>

            {/* content */}
            <div className="p-5">
              {/* title */}
              <h3
                className="
                  text-[22px]
                  font-bold
                  tracking-tight
                  text-black
                "
              >
                {project.title}
              </h3>

              {/* description */}
              <p className="text-neutral-500 text-sm mt-1 line-clamp-2">
                {project.description}
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="
                      px-3 py-1
                      rounded-full
                      bg-[#f3f5f7]
                      text-neutral-700
                      text-xs
                      font-medium
                      hover:bg-[#2f6dff]
                      hover:text-white
                      transition-colors
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* view project */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(project.link);
                }}
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-[#2f6dff]
                  font-semibold
                  group/link
                "
              >
                View Project

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover/link:translate-x-1
                  "
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* dots */}
      <div className="flex justify-center gap-3 mt-10">
        <div className="w-2.5 h-2.5 rounded-full bg-[#2f6dff]" />
        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
      </div>
    </section>
  );
}
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  return (
    <section id="work" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Featured Projects"
          sub="🚀 Building Innovative Solutions"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {projects.map((project, index) => (
            <GlowCard card={project} key={index} index={index}>
              <div className="mb-4">
               
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-xl">{project.title}</h3>
                <p className="text-white-50 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
               
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;

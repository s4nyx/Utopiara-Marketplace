import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type AnimationProps = {
  y?: number;
  x?: number;
  opacity?: number;
  scale?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  scrub?: boolean;
  markers?: boolean;
  start?: string;
  end?: string;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  transformOrigin?: string;
  scaleX?: number;
  scaleY?: number;
};

export const useScrollAnimation = (
  selector: string,
  animation: AnimationProps = {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  }
) => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(selector) as Element[];
      elements.forEach((element) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: animation.start || "top bottom-=100",
            end: animation.end,
            toggleActions: "play none none reverse",
            scrub: animation.scrub || false,
            markers: animation.markers || false,
          },
        });

        timeline.from(element, {
          y: animation.y,
          x: animation.x,
          opacity: animation.opacity ?? 0,
          scale: animation.scale,
          scaleX: animation.scaleX,
          scaleY: animation.scaleY,
          rotateX: animation.rotateX,
          rotateY: animation.rotateY,
          rotateZ: animation.rotateZ,
          transformOrigin: animation.transformOrigin || "center center",
          duration: animation.duration ?? 1,
          delay: animation.delay ?? 0,
          ease: animation.ease ?? "power2.out",
          stagger: animation.stagger,
        });
      });
    }, component);

    return () => ctx.revert();
  }, [selector, animation]);

  return component;
};

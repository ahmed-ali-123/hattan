"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete = () => {},
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    
    // Split text into characters
    const chars = text.split("").map((char, index) => {
      if (char === " ") {
        return `<span style="display: inline-block; width: 0.25em;"></span>`;
      }
      return `<span style="display: inline-block; transform: translateY(${from.y}px); opacity: ${from.opacity};">${char}</span>`;
    });
    
    element.innerHTML = chars.join("");
    
    const charElements = element.querySelectorAll("span");
    
    // Create intersection observer for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate characters
            gsap.fromTo(
              charElements,
              from,
              {
                ...to,
                duration: duration,
                ease: ease,
                stagger: delay / 1000,
                onComplete: onLetterAnimationComplete,
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [text, delay, duration, ease, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  return (
    <div
      ref={textRef}
      className={className}
      style={{ textAlign }}
    />
  );
};

export default SplitText;
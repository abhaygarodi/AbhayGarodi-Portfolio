"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let pointerX = -100;
    let pointerY = -100;
    let ringX = pointerX;
    let ringY = pointerY;
    let animationFrame = 0;

    document.documentElement.classList.add("custom-cursor-enabled");

    const moveCursor = (event: MouseEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
    };

    const animateRing = () => {
      ringX += (pointerX - ringX) * 0.16;
      ringY += (pointerY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      animationFrame = window.requestAnimationFrame(animateRing);
    };

    const updateHover = (event: MouseEvent) => {
      const target = event.target;
      const isInteractive =
        target instanceof Element &&
        target.closest("a, button, input, textarea, select, [role='button']");
      ring.classList.toggle("cursor-follower-ring-active", Boolean(isInteractive));
    };

    const updatePressed = (event: MouseEvent) => {
      ring.classList.toggle("cursor-follower-ring-pressed", event.type === "mousedown");
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", updateHover);
    document.addEventListener("mousedown", updatePressed);
    document.addEventListener("mouseup", updatePressed);
    animationFrame = window.requestAnimationFrame(animateRing);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", updateHover);
      document.removeEventListener("mousedown", updatePressed);
      document.removeEventListener("mouseup", updatePressed);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="cursor-follower" aria-hidden="true">
      <div className="cursor-follower-ring" ref={ringRef} />
      <div className="cursor-follower-dot" ref={dotRef} />
    </div>
  );
}
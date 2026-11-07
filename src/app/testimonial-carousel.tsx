"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLayoutEffect, useRef, type ReactNode } from "react";

export function TestimonialCarousel({ cards }: { cards: ReactNode[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const manualUntil = useRef(0);
  const dragging = useRef(false);
  const looping = cards.length > 1;

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || !looping) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let frame = 0;
    let previous = 0;
    let position = track.scrollLeft;
    let cycle = 0;

    function measure() {
      if (!track) return;
      cycle = track.children[cards.length].getBoundingClientRect().left
        - track.children[0].getBoundingClientRect().left;
      normalize();
    }

    function normalize() {
      if (!track || !cycle) return;
      position = track.scrollLeft;
      if (position < cycle - 2) position += cycle;
      else if (position >= cycle * 2 - 2) position -= cycle;
      track.scrollLeft = position;
    }

    function animate(time: number) {
      if (!track) return;
      const elapsed = Math.min(time - (previous || time), 40);
      previous = time;
      if (!dragging.current && time >= manualUntil.current && visible && !document.hidden && !reduced.matches) {
        position += elapsed * .028;
        if (position >= cycle * 2) position -= cycle;
        track.scrollLeft = position;
      } else {
        position = track.scrollLeft;
      }
      frame = requestAnimationFrame(animate);
    }

    function settle() {
      if (performance.now() < manualUntil.current || reduced.matches) normalize();
    }

    function release() {
      if (!dragging.current) return;
      dragging.current = false;
      manualUntil.current = performance.now() + 800;
    }

    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    const resize = new ResizeObserver(measure);
    measure();
    observer.observe(track);
    resize.observe(track);
    track.addEventListener("scrollend", settle);
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      track.removeEventListener("scrollend", settle);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
    };
  }, [cards.length, looping]);

  function move(direction: number) {
    const track = trackRef.current;
    if (!track) return;
    manualUntil.current = performance.now() + 1000;
    const step = track.children[1].getBoundingClientRect().left
      - track.children[0].getBoundingClientRect().left;
    track.scrollBy({
      left: step * direction,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <div className="testimonial-carousel">
      {looping && <div className="testimonial-controls">
        <button type="button" aria-label="Previous testimonial" aria-controls="testimonial-track" onClick={() => move(-1)}><ChevronLeft size={20} aria-hidden="true" /></button>
        <button type="button" aria-label="Next testimonial" aria-controls="testimonial-track" onClick={() => move(1)}><ChevronRight size={20} aria-hidden="true" /></button>
      </div>}
      <div
        className="testimonial-track"
        id="testimonial-track"
        ref={trackRef}
        role="region"
        aria-label="Client testimonials"
        tabIndex={looping ? 0 : undefined}
        onPointerDown={() => { dragging.current = true; }}
        onWheel={() => { manualUntil.current = performance.now() + 800; }}
        onKeyDown={(event) => {
          if (!looping || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }}
      >
        {(looping ? [0, 1, 2] : [1]).flatMap((group) => cards.map((card, index) => (
          <div className="testimonial-slide" key={`${group}-${index}`} aria-hidden={group !== 1 || undefined}>{card}</div>
        )))}
      </div>
    </div>
  );
}

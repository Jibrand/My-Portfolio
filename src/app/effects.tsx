"use client";

import { LazyMotion, domAnimation, m, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, type PointerEvent, type ReactNode } from "react";

export function Effects({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation} strict><CursorGlow />{children}</LazyMotion>;
}

function CursorGlow() {
  const x = useSpring(-100, { stiffness: 140, damping: 24, mass: .4 });
  const y = useSpring(-100, { stiffness: 140, damping: 24, mass: .4 });
  const opacity = useMotionValue(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const pointer = window.matchMedia("(pointer: fine)");
    function follow(event: globalThis.PointerEvent) {
      if (!pointer.matches || event.pointerType !== "mouse") return;
      x.set(event.clientX - 15);
      y.set(event.clientY - 15);
      opacity.set(1);
    }
    function hide() { opacity.set(0); }
    window.addEventListener("pointermove", follow, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    return () => {
      window.removeEventListener("pointermove", follow);
      document.documentElement.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
      opacity.set(0);
    };
  }, [x, y, opacity, reduced]);

  return <m.div className="cursor-glow" style={{ x, y, opacity }} aria-hidden="true" />;
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <m.div
      initial={false}
      whileInView={reduced ? undefined : { y: [14, 0], opacity: [.72, 1] }}
      viewport={{ once: true, amount: .12 }}
      transition={{ duration: .5, delay, ease: [.22, 1, .36, 1] }}
    >
      {children}
    </m.div>
  );
}

export function Spotlight({ children, feature = false }: { children: ReactNode; feature?: boolean }) {
  function track(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  }

  return <article className={feature ? "project-card project-card-lead" : "project-card"} onPointerMove={track}>{children}</article>;
}

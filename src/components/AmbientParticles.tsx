import { useEffect, useRef } from "react";

/**
 * Subtle drifting dust motes rendered on a full-viewport canvas.
 * Fixed, pointer-events-none, low opacity — pure ambience.
 */
export function AmbientParticles({ count = 32 }: { count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; r: number; vx: number; vy: number; a: number; da: number };
    const particles: P[] = [];

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 0.4 + Math.random() * 1.6,
          vx: (Math.random() - 0.5) * 0.08,
          vy: -0.05 - Math.random() * 0.12,
          a: 0.05 + Math.random() * 0.25,
          da: (Math.random() - 0.5) * 0.003,
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.a += p.da;
        if (p.a < 0.04 || p.a > 0.35) p.da *= -1;
        if (p.y < -4) { p.y = height + 4; p.x = Math.random() * width; }
        if (p.x < -4) p.x = width + 4;
        if (p.x > width + 4) p.x = -4;

        ctx.beginPath();
        ctx.fillStyle = `rgba(245, 239, 228, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    seed();
    tick();

    const onResize = () => { resize(); seed(); };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [count]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full mix-blend-soft-light opacity-70"
    />
  );
}

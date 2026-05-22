"use client";

import { useEffect, useRef } from "react";

/** Lightweight drifting neural constellation — nodes wired by proximity. */
export default function NeuralField({ density = 1, className = "" }: { density?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let w = (canvas.width = canvas.clientWidth * dpr);
    let h = (canvas.height = canvas.clientHeight * dpr);

    type N = { x: number; y: number; vx: number; vy: number; r: number; hue: number };
    const COUNT = Math.max(14, Math.min(70, Math.floor((w * h) / (52000 * dpr) * density)));
    const mk = (): N => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25 * dpr,
      vy: (Math.random() - 0.5) * 0.25 * dpr,
      r: (0.8 + Math.random() * 1.8) * dpr,
      hue: Math.random(),
    });
    let nodes: N[] = Array.from({ length: COUNT }, mk);
    const LINK = 130 * dpr;

    const onResize = () => {
      w = canvas.width = canvas.clientWidth * dpr;
      h = canvas.height = canvas.clientHeight * dpr;
      nodes = Array.from({ length: Math.max(14, Math.min(70, Math.floor((w * h) / (52000 * dpr) * density))) }, mk);
    };
    window.addEventListener("resize", onResize);

    const col = (hue: number, a: number) => {
      // blend violet → cyan → rose
      if (hue < 0.5) {
        const k = hue / 0.5;
        return `rgba(${Math.round(124 + k * (79 - 124))},${Math.round(77 + k * (214 - 77))},${Math.round(255 + k * (224 - 255))},${a})`;
      }
      const k = (hue - 0.5) / 0.5;
      return `rgba(${Math.round(79 + k * (255 - 79))},${Math.round(214 + k * (109 - 214))},${Math.round(224 + k * (168 - 224))},${a})`;
    };

    let frame = 0;
    const tick = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            const o = (1 - d / LINK) * 0.4;
            ctx.strokeStyle = col((a.hue + b.hue) / 2, o);
            ctx.lineWidth = 0.6 * dpr;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      // nodes
      for (const n of nodes) {
        const pulse = 0.6 + 0.4 * Math.sin(frame * 0.03 + n.x * 0.01);
        ctx.fillStyle = col(n.hue, 0.85 * pulse);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [density]);

  return <canvas ref={ref} className={`h-full w-full ${className}`} />;
}

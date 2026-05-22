"use client";

import { useState } from "react";
import { useLang } from "./lang";
import { EVOLUTION } from "./content";

/** Ascending deep-time ribbon: imagination climbing from prediction to AI. */
export default function EvolutionTimeline() {
  const { lang } = useLang();
  const [active, setActive] = useState(EVOLUTION.length - 1);
  const W = 1000, H = 360, padX = 60, padB = 70, padT = 40;

  const pts = EVOLUTION.map((s, i) => {
    const x = padX + (i / (EVOLUTION.length - 1)) * (W - padX * 2);
    const y = H - padB - s.level * (H - padB - padT);
    return { x, y, s, i };
  });

  const path = pts.map((p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = pts[i - 1];
    const cx = (prev.x + p.x) / 2;
    return `C ${cx} ${prev.y}, ${cx} ${p.y}, ${p.x} ${p.y}`;
  }).join(" ");

  const a = EVOLUTION[active];

  return (
    <div className="glass rounded-2xl p-5 md:p-7">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img">
        <defs>
          <linearGradient id="evoLine" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#27aebd" />
            <stop offset="55%" stopColor="#9b6dff" />
            <stop offset="100%" stopColor="#ff6da8" />
          </linearGradient>
          <linearGradient id="evoFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(155,109,255,0.22)" />
            <stop offset="100%" stopColor="rgba(155,109,255,0)" />
          </linearGradient>
        </defs>

        {/* baseline */}
        <line x1={padX} y1={H - padB} x2={W - padX} y2={H - padB} stroke="rgba(231,226,255,0.12)" strokeWidth={1} />
        <text x={padX} y={H - padB + 26} fill="#867ca8" fontSize={11} fontFamily="JetBrains Mono">
          {lang === "zh" ? "受困于当下" : "TRAPPED IN THE PRESENT"}
        </text>
        <text x={W - padX} y={H - padB + 26} textAnchor="end" fill="#867ca8" fontSize={11} fontFamily="JetBrains Mono">
          {lang === "zh" ? "脱离当下而模拟" : "SIMULATING BEYOND THE NOW"}
        </text>

        {/* area + line */}
        <path d={`${path} L ${pts[pts.length - 1].x} ${H - padB} L ${pts[0].x} ${H - padB} Z`} fill="url(#evoFill)" />
        <path d={path} fill="none" stroke="url(#evoLine)" strokeWidth={2.4} className="flow" />

        {/* nodes */}
        {pts.map((p) => (
          <g key={p.i} onClick={() => setActive(p.i)} className="cursor-pointer">
            <circle cx={p.x} cy={p.y} r={p.i === active ? 9 : 5.5}
              fill={p.i === active ? "#cdb6ff" : "#13102e"}
              stroke={p.i === active ? "#ff9ac4" : "#9b6dff"} strokeWidth={2}
              className={p.i === active ? "breathe" : ""} />
            <text x={p.x} y={p.y - 16} textAnchor="middle" fill={p.i === active ? "#f4f1ff" : "#bcb4dd"}
              fontSize={11} fontFamily="JetBrains Mono">
              {p.s.when[lang]}
            </text>
          </g>
        ))}
      </svg>

      <div key={`${active}-${lang}`} className="lang-fade mt-2 grid gap-2 border-t border-mist-100/10 pt-5 md:grid-cols-[200px_1fr] md:gap-6">
        <div className={`display text-2xl text-dream-300 ${lang === "zh" ? "zh" : ""}`}>{a.title[lang]}</div>
        <p className={`text-mist-300 leading-relaxed ${lang === "zh" ? "zh" : ""}`}>{a.body[lang]}</p>
      </div>
    </div>
  );
}

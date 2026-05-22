"use client";

import { useState } from "react";
import { useLang } from "./lang";
import { AXES, MINDS } from "./content";

/** Seven-axis radar of the Imagination Power equation, profiled per mind-type. */
export default function ImaginationRadar() {
  const { lang } = useLang();
  const [sel, setSel] = useState(1); // artist
  const mind = MINDS[sel];

  const W = 460, C = W / 2, R = 150;
  const n = AXES.length;
  const angle = (i: number) => -Math.PI / 2 + (i / n) * Math.PI * 2;
  const pt = (i: number, r: number) => ({
    x: C + Math.cos(angle(i)) * R * (r / 100),
    y: C + Math.sin(angle(i)) * R * (r / 100),
  });

  const poly = AXES.map((ax, i) => {
    const p = pt(i, mind.scores[ax.key]);
    return `${p.x},${p.y}`;
  }).join(" ");

  const total = AXES.reduce((s, ax) => s + mind.scores[ax.key], 0);
  const power = Math.round(total / AXES.length);

  return (
    <div className="glass rounded-2xl p-5 md:p-7">
      <div className="grid items-center gap-6 lg:grid-cols-[460px_1fr]">
        <div className="mx-auto">
          <svg viewBox={`0 0 ${W} ${W}`} className="w-full max-w-[460px]">
            <defs>
              <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={`${mind.accent}66`} />
                <stop offset="100%" stopColor={`${mind.accent}10`} />
              </radialGradient>
            </defs>

            {/* rings */}
            {[0.25, 0.5, 0.75, 1].map((r, k) => (
              <polygon key={k}
                points={AXES.map((_, i) => { const p = pt(i, r * 100); return `${p.x},${p.y}`; }).join(" ")}
                fill="none" stroke="rgba(231,226,255,0.09)" strokeWidth={1} />
            ))}
            {/* spokes + labels */}
            {AXES.map((ax, i) => {
              const edge = pt(i, 100);
              const lab = pt(i, 122);
              return (
                <g key={ax.key}>
                  <line x1={C} y1={C} x2={edge.x} y2={edge.y} stroke="rgba(231,226,255,0.08)" strokeWidth={1} />
                  <text x={lab.x} y={lab.y} textAnchor="middle" dominantBaseline="middle"
                    fill="#bcb4dd" fontSize={11} fontFamily="JetBrains Mono"
                    className={lang === "zh" ? "zh" : ""}>
                    {ax.short[lang]}
                  </text>
                </g>
              );
            })}
            {/* data polygon */}
            <polygon points={poly} fill="url(#radarFill)" stroke={mind.accent} strokeWidth={2}
              style={{ transition: "all 0.6s cubic-bezier(0.2,0.7,0.2,1)" }} />
            {AXES.map((ax, i) => {
              const p = pt(i, mind.scores[ax.key]);
              return <circle key={ax.key} cx={p.x} cy={p.y} r={3.5} fill={mind.accent}
                style={{ transition: "all 0.6s cubic-bezier(0.2,0.7,0.2,1)" }} />;
            })}
          </svg>
        </div>

        <div>
          <div className="label-mono">{lang === "zh" ? "想象力 = 七种官能之和" : "Imagination = sum of seven faculties"}</div>
          <div key={`${sel}-${lang}`} className="lang-fade mt-3">
            <div className="flex items-baseline gap-3">
              <span className="display text-3xl" style={{ color: mind.accent }}>
                <span className={lang === "zh" ? "zh" : ""}>{mind.name[lang]}</span>
              </span>
              <span className="font-mono text-sm text-mist-500">{lang === "zh" ? "总指数" : "power"} {power}</span>
            </div>
            <p className={`mt-2 text-mist-300 ${lang === "zh" ? "zh" : ""}`}>{mind.tagline[lang]}</p>
          </div>

          {/* selector */}
          <div className="mt-5 flex flex-wrap gap-2">
            {MINDS.map((m, i) => (
              <button key={m.key} onClick={() => setSel(i)}
                className="rounded-full border px-3 py-1 text-xs transition"
                style={{
                  borderColor: i === sel ? m.accent : "rgba(231,226,255,0.15)",
                  background: i === sel ? `${m.accent}1f` : "transparent",
                  color: i === sel ? "#f4f1ff" : "#867ca8",
                }}>
                <span className={lang === "zh" ? "zh" : ""}>{m.name[lang]}</span>
              </button>
            ))}
          </div>

          {/* per-axis bars */}
          <div className="mt-5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {AXES.map((ax) => (
              <div key={ax.key} className="flex items-center gap-2">
                <span className={`w-24 shrink-0 text-[0.7rem] text-mist-500 ${lang === "zh" ? "zh" : ""}`}>{ax.short[lang]}</span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-void-600">
                  <div className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${mind.scores[ax.key]}%`, background: mind.accent }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

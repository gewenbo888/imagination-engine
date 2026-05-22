"use client";

import { useState } from "react";
import { useLang } from "./lang";
import { Bi } from "./lang";

type Region = { key: string; name: Bi; role: Bi; x: number; y: number; accent: string };

const REGIONS: Region[] = [
  { key: "v1", name: { en: "Visual cortex", zh: "视觉皮层" }, role: { en: "Re-fires in near-real patterns when you picture an image — seeing without eyes.", zh: "当你想象一幅图像时，以接近真实的模式重新放电——无眼而见。" }, x: 760, y: 250, accent: "#7ef0f5" },
  { key: "dmn", name: { en: "Default mode network", zh: "默认模式网络" }, role: { en: "Active in rest: the simulation engine weaving memory, self, and 'what-if'.", zh: "休息时活跃：编织记忆、自我与「假如」的模拟引擎。" }, x: 470, y: 150, accent: "#9b6dff" },
  { key: "pfc", name: { en: "Prefrontal cortex", zh: "前额叶皮层" }, role: { en: "Holds the plan, runs the model forward, edits the inner scene.", zh: "持有计划，向前运行模型，编辑内在场景。" }, x: 250, y: 175, accent: "#ff6da8" },
  { key: "hpc", name: { en: "Hippocampus", zh: "海马体" }, role: { en: "Replays the past and recombines it into futures never lived.", zh: "重放过去，并将其重组为从未亲历的未来。" }, x: 540, y: 305, accent: "#f5c46b" },
  { key: "motor", name: { en: "Motor cortex", zh: "运动皮层" }, role: { en: "Fires faintly when you merely rehearse an action in the mind.", zh: "当你仅在心中预演一个动作时，也会微弱地放电。" }, x: 360, y: 110, accent: "#ff9ac4" },
];

const EDGES: [string, string][] = [["pfc", "dmn"], ["dmn", "v1"], ["dmn", "hpc"], ["pfc", "motor"], ["hpc", "v1"]];

export default function BrainSimulation() {
  const { lang } = useLang();
  const [hov, setHov] = useState("dmn");
  const W = 900, H = 400;
  const pos = (k: string) => REGIONS.find((r) => r.key === k)!;
  const active = REGIONS.find((r) => r.key === hov)!;

  return (
    <div className="glass rounded-2xl p-5 md:p-7">
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
          <defs>
            <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(155,109,255,0.18)" />
              <stop offset="100%" stopColor="rgba(155,109,255,0)" />
            </radialGradient>
          </defs>
          <ellipse cx={460} cy={210} rx={420} ry={185} fill="url(#brainGlow)" />

          {/* stylised cortical outline */}
          <path
            d="M150 230 C150 120 280 70 430 75 C560 78 700 95 770 150 C835 200 830 290 740 320 C640 352 520 360 420 350 C300 338 200 330 165 290 C150 272 150 250 150 230 Z"
            fill="none" stroke="rgba(231,226,255,0.16)" strokeWidth={1.5} />
          {/* a few sulci */}
          <path d="M300 110 C360 170 340 250 300 320" fill="none" stroke="rgba(231,226,255,0.08)" strokeWidth={1.2} />
          <path d="M470 90 C500 180 480 280 470 340" fill="none" stroke="rgba(231,226,255,0.08)" strokeWidth={1.2} />
          <path d="M620 100 C660 180 650 270 610 330" fill="none" stroke="rgba(231,226,255,0.08)" strokeWidth={1.2} />

          {/* edges = predictive signal flow */}
          {EDGES.map(([a, b], i) => {
            const A = pos(a), B = pos(b);
            const on = hov === a || hov === b;
            return (
              <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y}
                stroke={on ? "#cdb6ff" : "rgba(155,109,255,0.3)"} strokeWidth={on ? 2.2 : 1.2}
                className={on ? "flow" : ""} />
            );
          })}

          {/* region nodes */}
          {REGIONS.map((r) => {
            const on = hov === r.key;
            return (
              <g key={r.key} onMouseEnter={() => setHov(r.key)} onClick={() => setHov(r.key)} className="cursor-pointer">
                <circle cx={r.x} cy={r.y} r={on ? 16 : 11} fill={r.accent} opacity={on ? 0.95 : 0.6}
                  className={on ? "breathe" : "pulse"} />
                <circle cx={r.x} cy={r.y} r={on ? 26 : 18} fill="none" stroke={r.accent} strokeWidth={1} opacity={0.4} />
                <text x={r.x} y={r.y - (on ? 32 : 26)} textAnchor="middle" fill={on ? "#f4f1ff" : "#bcb4dd"}
                  fontSize={12} fontFamily="JetBrains Mono" className={lang === "zh" ? "zh" : ""}>
                  {r.name[lang]}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="flex flex-col justify-center">
          <div className="label-mono">{lang === "zh" ? "预测的脑" : "The predictive brain"}</div>
          <div key={`${hov}-${lang}`} className="lang-fade mt-3">
            <div className={`display text-2xl`} style={{ color: active.accent }}>
              <span className={lang === "zh" ? "zh" : ""}>{active.name[lang]}</span>
            </div>
            <p className={`mt-3 leading-relaxed text-mist-300 ${lang === "zh" ? "zh" : ""}`}>{active.role[lang]}</p>
          </div>
          <div className="mt-6 rounded-lg border border-neural-500/20 bg-void-800/60 p-4">
            <p className={`text-sm leading-relaxed text-mist-300 ${lang === "zh" ? "zh" : ""}`}>
              {lang === "zh"
                ? "自上而下的预测向感官奔流；自下而上的误差向回奔流。想象，就是这同一条回路在感官静默时独自运行。"
                : "Top-down predictions rush toward the senses; bottom-up errors rush back. Imagination is that same loop running alone when the senses fall silent."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useLang } from "./lang";
import { INVENTIONS } from "./content";

/** Imagined-first, built-later: the lag between vision and device. */
export default function InventionLag() {
  const { lang } = useLang();
  const minY = 1450, maxY = 2035;
  const W = 1000, rowH = 46, padL = 200, padR = 90, padT = 36;
  const H = padT + INVENTIONS.length * rowH + 30;
  const xOf = (y: number) => padL + ((y - minY) / (maxY - minY)) * (W - padL - padR);
  const ticks = [1500, 1600, 1700, 1800, 1900, 2000];

  return (
    <div className="glass rounded-2xl p-5 md:p-7">
      <div className="label-mono">{lang === "zh" ? "先被想象，后被建造" : "Imagined first, built later"}</div>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-4 w-full">
        <defs>
          <linearGradient id="lagLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9b6dff" />
            <stop offset="100%" stopColor="#7ef0f5" />
          </linearGradient>
        </defs>

        {/* year gridlines */}
        {ticks.map((y) => (
          <g key={y}>
            <line x1={xOf(y)} y1={padT - 8} x2={xOf(y)} y2={H - 24} stroke="rgba(231,226,255,0.07)" strokeWidth={1} />
            <text x={xOf(y)} y={H - 8} textAnchor="middle" fill="#867ca8" fontSize={11} fontFamily="JetBrains Mono">{y}</text>
          </g>
        ))}

        {/* legend */}
        <circle cx={padL} cy={18} r={4} fill="#9b6dff" />
        <text x={padL + 10} y={22} fill="#bcb4dd" fontSize={11} fontFamily="JetBrains Mono">{lang === "zh" ? "被想象" : "imagined"}</text>
        <circle cx={padL + 110} cy={18} r={4} fill="#7ef0f5" />
        <text x={padL + 120} y={22} fill="#bcb4dd" fontSize={11} fontFamily="JetBrains Mono">{lang === "zh" ? "被建造" : "built"}</text>

        {INVENTIONS.map((inv, i) => {
          const y = padT + i * rowH + rowH / 2;
          const x1 = xOf(inv.imaginedYear), x2 = xOf(inv.builtYear);
          return (
            <g key={i}>
              <text x={padL - 14} y={y + 4} textAnchor="end" fill="#e7e2ff" fontSize={13}
                className={lang === "zh" ? "zh" : ""} fontFamily={lang === "zh" ? "Noto Serif SC" : "Spectral"}>
                {inv.thing[lang]}
              </text>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke="url(#lagLine)" strokeWidth={2.4} className="flow" />
              <circle cx={x1} cy={y} r={6} fill="#9b6dff" stroke="#cdb6ff" strokeWidth={1.5} />
              <circle cx={x2} cy={y} r={6} fill="#7ef0f5" stroke="#7ef0f5" strokeWidth={1.5} />
              <text x={x2 + 12} y={y + 4} fill="#7ef0f5" fontSize={11} fontFamily="JetBrains Mono">{inv.lag[lang]}</text>
              <text x={x1} y={y - 12} textAnchor="middle" fill="#867ca8" fontSize={10}
                className={lang === "zh" ? "zh" : ""}>{inv.imagined[lang]}</text>
            </g>
          );
        })}
      </svg>
      <p className={`mt-3 text-sm leading-relaxed text-mist-300 ${lang === "zh" ? "zh" : ""}`}>
        {lang === "zh"
          ? "从达·芬奇的扑翼机到莱特兄弟，隔着四个多世纪；从图灵的想象到能与人对话的机器，仅七十余年。现实正在加速追赶想象。"
          : "Four centuries separate Da Vinci's wing from the Wright brothers; barely seventy years separate Turing's vision from a machine that talks back. Reality is catching up to imagination faster and faster."}
      </p>
    </div>
  );
}

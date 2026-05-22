"use client";

import { useState } from "react";
import { useLang } from "./lang";
import { SIM_SEEDS, SIM_MATRIX, SIM_FACULTIES } from "./content";

const FAC_ACCENT: Record<string, string> = {
  memory: "#7ef0f5",
  predict: "#4fd6e0",
  narrative: "#9b6dff",
  invention: "#b794ff",
  myth: "#f5c46b",
  art: "#ff9ac4",
  ai: "#ff6da8",
};

/**
 * Recursive imagination simulator: pick a seed, watch it transform through
 * the seven faculties — memory, prediction, story, invention, myth, art, AI.
 */
export default function SimulationConsole() {
  const { lang } = useLang();
  const [seed, setSeed] = useState("fire");
  const [run, setRun] = useState(0); // bump to re-stagger the reveal
  const matrix = SIM_MATRIX[seed];
  const seedLabel = SIM_SEEDS.find((s) => s.key === seed)!.label[lang];

  return (
    <div className="glass rounded-2xl p-5 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="label-mono text-neural-400">{lang === "zh" ? "递归想象模拟器" : "Recursive imagination simulator"}</div>
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-mist-500">imagine( seed ) → worlds</div>
      </div>

      <p className={`mt-3 max-w-2xl text-sm leading-relaxed text-mist-300 ${lang === "zh" ? "zh" : ""}`}>
        {lang === "zh"
          ? "选择一颗种子。看同一套想象的机器如何将它折射成记忆、预测、故事、发明、神话、艺术，乃至合成想象——这正是文明从无到有的方式。"
          : "Choose a seed. Watch the same imaginative machinery refract it into memory, prediction, story, invention, myth, art, and synthetic imagination — the way civilisation is grown from almost nothing."}
      </p>

      {/* seed selector */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-mist-500">{lang === "zh" ? "种子" : "seed"}:</span>
        {SIM_SEEDS.map((s) => (
          <button key={s.key} onClick={() => { setSeed(s.key); setRun((r) => r + 1); }}
            className="rounded-md border px-3 py-1.5 text-sm transition"
            style={{
              borderColor: seed === s.key ? "#9b6dff" : "rgba(231,226,255,0.15)",
              background: seed === s.key ? "rgba(155,109,255,0.16)" : "transparent",
              color: seed === s.key ? "#f4f1ff" : "#bcb4dd",
            }}>
            <span className={lang === "zh" ? "zh" : ""}>{s.label[lang]}</span>
          </button>
        ))}
      </div>

      {/* transform chain */}
      <div key={`${seed}-${run}`} className="mt-6 space-y-2.5">
        {SIM_FACULTIES.map((f, i) => {
          const a = FAC_ACCENT[f.key];
          return (
            <div key={f.key} className="rise-in flex items-start gap-3 rounded-xl border border-mist-100/8 bg-void-800/40 p-3.5"
              style={{ animationDelay: `${i * 90}ms` }}>
              <div className="flex w-32 shrink-0 items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: a, boxShadow: `0 0 8px ${a}` }} />
                <span className={`text-[0.72rem] font-mono uppercase tracking-wide ${lang === "zh" ? "zh" : ""}`} style={{ color: a }}>
                  {f.name[lang]}
                </span>
              </div>
              <p className={`flex-1 text-sm leading-relaxed text-mist-200 ${lang === "zh" ? "zh" : ""}`}>
                {matrix[f.key][lang]}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-mist-100/10 pt-4">
        <p className={`text-sm text-mist-400 ${lang === "zh" ? "zh" : ""}`}>
          {lang === "zh"
            ? `「${seedLabel}」——一颗种子，七个世界。`
            : `"${seedLabel}" — one seed, seven worlds.`}
        </p>
        <button onClick={() => setRun((r) => r + 1)}
          className="rounded-full border border-dream-500/40 px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-dream-300 transition hover:bg-dream-500/15">
          {lang === "zh" ? "↻ 重新模拟" : "↻ re-simulate"}
        </button>
      </div>
    </div>
  );
}

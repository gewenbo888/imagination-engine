"use client";

import { useState } from "react";
import { useLang } from "./lang";
import { SPECTRUM } from "./content";

/** "Reality dial": one slider from controlled perception to free hallucination. */
export default function DreamSpectrum() {
  const { lang } = useLang();
  const [i, setI] = useState(0);
  const s = SPECTRUM[i];
  const senses = s.constraint;          // weight of sensory data
  const model = 100 - s.constraint;     // weight of the generative model

  return (
    <div className="glass rounded-2xl p-5 md:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="label-mono">{lang === "zh" ? "现实旋钮" : "The reality dial"}</div>
          <p className={`mt-2 max-w-xl text-sm leading-relaxed text-mist-300 ${lang === "zh" ? "zh" : ""}`}>
            {lang === "zh"
              ? "感知是被感官紧拴的「受控幻觉」。松开缰绳，同一台生成模型便说得更自由。拖动旋钮，穿过意识的光谱。"
              : "Perception is a 'controlled hallucination' leashed to the senses. Loosen the leash and the same generative model speaks more freely. Drag through the spectrum of consciousness."}
          </p>
        </div>
        <div className="text-right">
          <div key={`${i}-${lang}`} className="lang-fade display text-2xl" style={{ color: s.accent }}>
            <span className={lang === "zh" ? "zh" : ""}>{s.name[lang]}</span>
          </div>
        </div>
      </div>

      {/* gradient track with state markers */}
      <div className="relative mt-8 h-3 rounded-full"
        style={{ background: "linear-gradient(90deg,#7ef0f5,#4fd6e0,#9b6dff,#ff6da8,#f5c46b)" }}>
        {SPECTRUM.map((st, k) => {
          const left = `${100 - st.constraint}%`;
          return (
            <button key={st.key} onClick={() => setI(k)} aria-label={st.name[lang]}
              className="absolute -top-1.5 -translate-x-1/2 transition"
              style={{ left }}>
              <span className="block rounded-full border-2 transition"
                style={{
                  width: k === i ? 22 : 13, height: k === i ? 22 : 13,
                  background: k === i ? st.accent : "#0c0a1e",
                  borderColor: st.accent,
                  boxShadow: k === i ? `0 0 18px ${st.accent}` : "none",
                }} />
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex justify-between font-mono text-[0.6rem] uppercase tracking-[0.2em] text-mist-500">
        <span>{lang === "zh" ? "← 被感官紧拴" : "← leashed to senses"}</span>
        <span>{lang === "zh" ? "模型自由发声 →" : "model speaks freely →"}</span>
      </div>

      {/* sense vs model balance + note */}
      <div className="mt-7 grid gap-5 md:grid-cols-[1fr_1fr]">
        <div className="rounded-xl border border-mist-100/10 bg-void-800/50 p-5">
          <div className="flex justify-between text-[0.7rem] font-mono uppercase tracking-wider text-mist-500">
            <span>{lang === "zh" ? "感官数据" : "Sensory data"}</span><span>{senses}%</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-void-600">
            <div className="h-full rounded-full bg-neural-400 transition-all duration-500" style={{ width: `${senses}%` }} />
          </div>
          <div className="mt-4 flex justify-between text-[0.7rem] font-mono uppercase tracking-wider text-mist-500">
            <span>{lang === "zh" ? "生成模型" : "Generative model"}</span><span>{model}%</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-void-600">
            <div className="h-full rounded-full bg-synapse-500 transition-all duration-500" style={{ width: `${model}%` }} />
          </div>
        </div>
        <div key={`note-${i}-${lang}`} className="lang-fade flex items-center rounded-xl border p-5"
          style={{ borderColor: `${s.accent}40`, background: `${s.accent}0d` }}>
          <p className={`leading-relaxed text-mist-200 ${lang === "zh" ? "zh" : ""}`}>{s.note[lang]}</p>
        </div>
      </div>
    </div>
  );
}

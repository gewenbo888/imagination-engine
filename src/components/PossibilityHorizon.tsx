"use client";

import { useLang } from "./lang";
import { FUTURES } from "./content";

const ACCENTS = ["#7ef0f5", "#9b6dff", "#4fd6e0", "#ff6da8", "#cdb6ff"];

/** Future imagination systems, each carrying a body and a shadow. */
export default function PossibilityHorizon() {
  const { lang } = useLang();
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {FUTURES.map((f, i) => {
          const a = ACCENTS[i % ACCENTS.length];
          return (
            <div key={i} className="glass relative flex flex-col rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em]" style={{ color: a }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border px-2.5 py-0.5 text-[0.58rem] font-mono uppercase tracking-wider"
                  style={{ borderColor: `${a}55`, color: a }}>
                  <span className={lang === "zh" ? "zh" : ""}>{f.horizon[lang]}</span>
                </span>
              </div>
              <div className={`display mt-4 text-xl text-mist-50 ${lang === "zh" ? "zh" : ""}`}>{f.name[lang]}</div>
              <p key={`b-${lang}`} className={`lang-fade mt-3 flex-1 text-sm leading-relaxed text-mist-300 ${lang === "zh" ? "zh" : ""}`}>
                {f.body[lang]}
              </p>
              <div className="mt-4 flex items-start gap-2 rounded-lg border-l-2 bg-void-800/50 p-3"
                style={{ borderColor: "#ff6da8" }}>
                <span className="mt-0.5 text-synapse-500">▲</span>
                <p key={`s-${lang}`} className={`lang-fade text-[0.8rem] leading-relaxed text-synapse-400 ${lang === "zh" ? "zh" : ""}`}>
                  {f.shadow[lang]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

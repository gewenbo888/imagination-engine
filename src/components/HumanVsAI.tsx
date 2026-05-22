"use client";

import { useLang } from "./lang";
import { HUMAN_VS_AI } from "./content";

/** Side-by-side: lived human imagination vs ungrounded synthetic imagination. */
export default function HumanVsAI() {
  const { lang } = useLang();
  return (
    <div className="glass rounded-2xl p-5 md:p-7">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-b border-mist-100/10 pb-4">
        <div className="text-right">
          <div className="display text-xl text-dream-300">{lang === "zh" ? "人类想象" : "Human imagination"}</div>
          <div className="text-[0.65rem] font-mono uppercase tracking-wider text-mist-500">{lang === "zh" ? "具身 · 有利害" : "embodied · at stake"}</div>
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-full border border-mist-100/20 font-mono text-xs text-mist-500">vs</div>
        <div>
          <div className="display text-xl text-neural-400">{lang === "zh" ? "合成想象" : "Synthetic imagination"}</div>
          <div className="text-[0.65rem] font-mono uppercase tracking-wider text-mist-500">{lang === "zh" ? "无根基 · 海量" : "ungrounded · vast"}</div>
        </div>
      </div>

      <div className="divide-y divide-mist-100/8">
        {HUMAN_VS_AI.map((c, i) => (
          <div key={i} className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-3 py-4">
            <p key={`h-${lang}`} className={`lang-fade self-center text-right text-sm leading-relaxed text-mist-200 ${lang === "zh" ? "zh" : ""}`}>
              {c.human[lang]}
            </p>
            <div className="flex w-24 flex-col items-center justify-center">
              <span className="h-full w-px bg-gradient-to-b from-dream-500/40 via-mist-100/10 to-neural-500/40" />
              <span className={`my-1 whitespace-nowrap text-[0.62rem] font-mono uppercase tracking-[0.12em] text-ember-400 ${lang === "zh" ? "zh" : ""}`}>
                {c.dim[lang]}
              </span>
              <span className="h-full w-px bg-gradient-to-b from-dream-500/40 via-mist-100/10 to-neural-500/40" />
            </div>
            <p key={`a-${lang}`} className={`lang-fade self-center text-sm leading-relaxed text-mist-200 ${lang === "zh" ? "zh" : ""}`}>
              {c.ai[lang]}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-dream-500/25 bg-void-800/50 p-5 text-center">
        <p className={`leading-relaxed text-mist-200 ${lang === "zh" ? "zh" : ""}`}>
          {lang === "zh"
            ? "若想象终究是计算，则机器已在其中。若它需要一个「在场去感受」的自我，那么合成想象终将撞上一道精确的边界——而我们将第一次看清它在哪里。"
            : "If imagination is ultimately computation, machines are already inside it. If it needs a self for whom the dream is felt, synthetic imagination will hit a precise edge — and we will, for the first time, see exactly where it lies."}
        </p>
      </div>
    </div>
  );
}

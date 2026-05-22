"use client";

import { useState } from "react";
import { useLang } from "./lang";
import { FICTIONS } from "./content";

const ACCENTS = ["#ff6da8", "#f5c46b", "#b794ff", "#9b6dff", "#4fd6e0", "#7ef0f5"];

/** Strata of collective fiction hardening into civilisation infrastructure. */
export default function FictionStack() {
  const { lang } = useLang();
  const [open, setOpen] = useState(0);

  return (
    <div className="glass rounded-2xl p-5 md:p-7">
      <div className="label-mono">{lang === "zh" ? "共享虚构的地层" : "Strata of shared fiction"}</div>
      <p className={`mt-2 max-w-2xl text-sm leading-relaxed text-mist-300 ${lang === "zh" ? "zh" : ""}`}>
        {lang === "zh"
          ? "每一层都是一个仅存在于集体想象中的对象——却能调动真实的军队、财富与忠诚。它们一层叠一层，凝固为我们栖居其中的世界。"
          : "Each layer is an object that exists only in collective imagination — yet commands real armies, wealth, and loyalty. Stacked, they harden into the world we inhabit."}
      </p>

      <div className="mt-6 space-y-2">
        {FICTIONS.map((f, i) => {
          const isOpen = open === i;
          const a = ACCENTS[i % ACCENTS.length];
          return (
            <button key={i} onClick={() => setOpen(i)}
              className="block w-full overflow-hidden rounded-xl border text-left transition"
              style={{
                borderColor: isOpen ? `${a}66` : "rgba(231,226,255,0.10)",
                background: isOpen ? `${a}12` : "rgba(12,10,30,0.5)",
              }}>
              <div className="flex items-center gap-4 px-5 py-3.5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md font-mono text-xs"
                  style={{ background: `${a}22`, color: a, border: `1px solid ${a}55` }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`display flex-1 text-xl ${lang === "zh" ? "zh" : ""}`} style={{ color: isOpen ? "#f4f1ff" : "#bcb4dd" }}>
                  {f.name[lang]}
                </span>
                <span className={`hidden text-sm text-mist-500 sm:block ${lang === "zh" ? "zh" : ""}`}>{f.example[lang]}</span>
              </div>
              <div className="grid transition-all duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                <div className="overflow-hidden">
                  <p className={`px-5 pb-4 pl-[4.5rem] leading-relaxed text-mist-200 ${lang === "zh" ? "zh" : ""}`}>{f.power[lang]}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

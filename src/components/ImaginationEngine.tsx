"use client";

import { ReactNode } from "react";
import { LangProvider, LangToggle, T, useLang } from "./lang";
import { SECTIONS, CONCEPTS, AXES } from "./content";
import DreamField from "./DreamField";
import NeuralField from "./NeuralField";
import EvolutionTimeline from "./EvolutionTimeline";
import BrainSimulation from "./BrainSimulation";
import DreamSpectrum from "./DreamSpectrum";
import FictionStack from "./FictionStack";
import InventionLag from "./InventionLag";
import HumanVsAI from "./HumanVsAI";
import PossibilityHorizon from "./PossibilityHorizon";
import ImaginationRadar from "./ImaginationRadar";
import SimulationConsole from "./SimulationConsole";

/* ── concept panel grid (art / childhood / digital) ── */
function ConceptPanels({ setKey, accent }: { setKey: string; accent: string }) {
  const { lang } = useLang();
  const set = CONCEPTS[setKey];
  if (!set) return null;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {set.map((c, i) => (
        <div key={i} className="glass rounded-xl p-5">
          <div key={`t-${lang}`} className={`display text-lg lang-fade ${lang === "zh" ? "zh" : ""}`} style={{ color: accent }}>{c.t[lang]}</div>
          <p key={`d-${lang}`} className={`mt-2 text-sm leading-relaxed text-mist-300 lang-fade ${lang === "zh" ? "zh" : ""}`}>{c.d[lang]}</p>
        </div>
      ))}
    </div>
  );
}

function visFor(id: string, vis: string, accent: string): ReactNode {
  switch (vis) {
    case "evolution": return <EvolutionTimeline />;
    case "brain": return <BrainSimulation />;
    case "spectrum": return <DreamSpectrum />;
    case "fiction": return <FictionStack />;
    case "invention": return <InventionLag />;
    case "humanvsai": return <HumanVsAI />;
    case "future": return <PossibilityHorizon />;
    case "concept-art": return <ConceptPanels setKey="art" accent={accent} />;
    case "concept-childhood": return <ConceptPanels setKey="childhood" accent={accent} />;
    case "concept-digital": return <ConceptPanels setKey="digital" accent={accent} />;
    default: return null;
  }
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-mist-100/10 bg-void-950/80 px-5 py-3 backdrop-blur md:px-9">
      <div className="flex items-center gap-3">
        <div className="grid h-8 w-8 place-items-center rounded-md border border-dream-500/30 bg-void-800">
          <span className="display text-dream-400">ψ</span>
        </div>
        <div className="leading-tight">
          <div className="display text-base text-mist-50">Imagination Engine</div>
          <div className="zh text-[0.6rem] text-mist-500">想象力引擎</div>
        </div>
      </div>
      <nav className="hidden gap-5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist-500 lg:flex">
        <a href="#origin" className="hover:text-dream-400">Origin</a>
        <a href="#brain" className="hover:text-dream-400">Brain</a>
        <a href="#dreams" className="hover:text-dream-400">Dreams</a>
        <a href="#myth" className="hover:text-dream-400">Myth</a>
        <a href="#ai" className="hover:text-dream-400">AI</a>
        <a href="#simulate" className="hover:text-dream-400">Simulate</a>
        <a href="#model" className="hover:text-dream-400">Model</a>
      </nav>
      <div className="flex items-center gap-3">
        <LangToggle />
        <a href="https://psyverse.fun" className="hidden font-mono text-[0.6rem] uppercase tracking-[0.18em] text-neural-400 hover:text-dream-400 sm:block">← Psyverse</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <DreamField />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-void-950/40 via-transparent to-void-950" />
      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 md:px-12">
        <div className="label-mono">Psyverse · the reality simulator</div>
        <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-mist-500">
          EN · 中文 · simulation × creativity × consciousness × possibility
        </div>
        <h1 className="display mt-6 text-6xl leading-[0.95] text-mist-50 md:text-8xl">
          Imagination <span className="dream-text">Engine</span>
        </h1>
        <h2 className="zh mt-3 text-3xl text-mist-100 md:text-5xl">想象力引擎</h2>

        <p className="mt-9 max-w-2xl font-serif text-lg leading-relaxed text-mist-100 md:text-xl">
          <T v={{
            en: "Imagination is not fantasy. It is the brain's engine for simulating realities — recombining memory, predicting futures, generating symbols, and modelling worlds before they physically exist.",
            zh: "想象不是幻想。它是大脑模拟现实的引擎——重组记忆、预测未来、生成符号，并在事物物理存在之前，先在心中建模整个世界。",
          }} />
        </p>

        <div className="mt-10 max-w-2xl glass rounded-lg p-6">
          <div className="label-mono">Central thesis · 核心论点</div>
          <p className="mt-3 font-serif text-xl leading-relaxed text-mist-50 md:text-2xl">
            <T v={{
              en: "Humanity became powerful partly because humans could mentally simulate realities before they physically existed.",
              zh: "人类之所以强大，部分地，是因为人类能在事物物理存在之前，先在心智中模拟它们。",
            }} />
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mist-500">
          <span>10 systems · 十大系统</span>
          <span>origin → brain → dreams → myth → science → art → AI → future</span>
        </div>
      </div>
    </section>
  );
}

function SectionBlock({ s }: { s: (typeof SECTIONS)[number] }) {
  return (
    <section id={s.id} className="relative border-t border-mist-100/8 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-baseline gap-4">
          <span className="display text-5xl" style={{ color: `${s.accent}55` }}>{s.num}</span>
          <div>
            <h2 className="display text-4xl text-mist-50 md:text-5xl"><T v={s.title} /></h2>
            <h3 className="mt-1 text-lg" style={{ color: s.accent }}><T v={s.sub} /></h3>
          </div>
        </div>
        <div className="mt-5 h-px rule-dream opacity-50" />
        <p className="mt-8 max-w-3xl font-serif text-lg leading-relaxed text-mist-200"><T v={s.body} /></p>
        <div className="mt-12">{visFor(s.id, s.vis, s.accent)}</div>
      </div>
    </section>
  );
}

function Body() {
  const { lang } = useLang();
  return (
    <main className="relative bg-void-950 text-mist-100">
      <Header />
      <Hero />

      {/* drifting ticker */}
      <div className="border-y border-mist-100/10 bg-void-900/60 py-2.5 overflow-hidden">
        <div className="whitespace-nowrap font-mono text-[0.65rem] uppercase tracking-[0.3em] text-neural-400/80">
          {(lang === "zh"
            ? "起源 · 大脑 · 梦境 · 神话 · 科学 · 艺术 · 童年 · 数字 · 人工智能 · 未来 · 想象是意识最深的操作系统之一 · "
            : "ORIGIN · BRAIN · DREAMS · MYTH · SCIENCE · ART · CHILDHOOD · DIGITAL · AI · FUTURE · IMAGINATION IS A DEEP OS OF CONSCIOUSNESS · ").repeat(2)}
        </div>
      </div>

      {/* meta-model equation strip */}
      <section className="relative overflow-hidden px-6 py-16 md:px-12">
        <div className="absolute inset-0 -z-0 opacity-40"><NeuralField density={0.7} /></div>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="label-mono">Meta-model · 元模型</div>
          <p className="mt-4 font-mono text-sm leading-loose text-mist-200 md:text-base">
            <span className="ember-text">Imagination&nbsp;Power</span> =
            {" "}{AXES.map((ax, i) => (
              <span key={ax.key}>
                <span className="text-dream-300"><T v={ax.name} /></span>
                {i < AXES.length - 1 ? <span className="text-mist-500"> + </span> : null}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* the ten systems */}
      {SECTIONS.map((s) => <SectionBlock key={s.id} s={s} />)}

      {/* recursive simulation console */}
      <section id="simulate" className="relative border-t border-mist-100/8 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="label-mono">The AI layer · 合成想象层</div>
          <h2 className="display mt-3 text-4xl text-mist-50 md:text-5xl">
            <T v={{ en: "Run the engine yourself", zh: "亲自运行引擎" }} />
          </h2>
          <p className="mt-6 max-w-3xl font-serif text-lg leading-relaxed text-mist-200">
            <T v={{
              en: "Imagination is recursive: it feeds memory into prediction, prediction into story, story into invention, invention into myth, myth into art — and now, into machines. Pick a seed and watch a single thing branch into worlds.",
              zh: "想象是递归的：它把记忆喂给预测，预测喂给故事，故事喂给发明，发明喂给神话，神话喂给艺术——如今，又喂给机器。选一颗种子，看一件事物如何分叉成众多世界。",
            }} />
          </p>
          <div className="mt-12"><SimulationConsole /></div>
        </div>
      </section>

      {/* meta-model radar */}
      <section id="model" className="relative border-t border-mist-100/8 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="label-mono">Meta-model · 元模型</div>
          <h2 className="display mt-3 text-4xl text-mist-50 md:text-5xl">
            <T v={{ en: "The shape of a mind that imagines", zh: "一颗会想象的心智的形状" }} />
          </h2>
          <p className="mt-6 max-w-3xl font-serif text-lg leading-relaxed text-mist-200">
            <T v={{
              en: "If imagination is the sum of seven faculties, every kind of mind has a signature shape. The child, the artist, the scientist, the dreamer, the engineer, the generative model, and the coming imagination network each weight the equation differently.",
              zh: "如果想象是七种官能之和，那么每一种心智都有一个标志性的形状。孩童、艺术家、科学家、做梦者、工程师、生成模型，以及即将到来的想象网络，各自以不同的权重运行着这道方程。",
            }} />
          </p>
          <div className="mt-12"><ImaginationRadar /></div>
        </div>
      </section>

      {/* closing */}
      <section className="relative overflow-hidden border-t border-mist-100/8 px-6 py-32 md:px-12">
        <div className="absolute inset-0 -z-0 opacity-50"><NeuralField density={1} /></div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="display text-4xl leading-snug text-mist-50 md:text-6xl">
            <T v={{ en: "Every world first existed inside imagination.", zh: "每一个世界，都先存在于想象之中。" }} />
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg leading-relaxed text-mist-300">
            <T v={{
              en: "Every invention, myth, religion, empire, scientific theory, and work of art was simulated in a mind before it was made real. Imagination is not a decoration on cognition — it is one of the deepest operating systems of consciousness itself, and we are now teaching machines to run it.",
              zh: "每一项发明、每一则神话、每一种宗教、每一个帝国、每一条科学理论、每一件艺术作品，都先在某颗心智中被模拟，而后才成为现实。想象不是认知之上的装饰——它是意识本身最深的操作系统之一；而我们，正在教会机器去运行它。",
            }} />
          </p>
          <div className="mx-auto mt-10 max-w-xl rounded-lg border border-dream-500/25 bg-void-900/60 p-5">
            <p className="text-xs leading-relaxed text-mist-500">
              <T v={{
                en: "An interpretive exploration across neuroscience, philosophy of mind, and cultural history. It synthesises established ideas with speculation and is intended as a work of intellectual art, not clinical or scientific authority.",
                zh: "一次横跨神经科学、心智哲学与文化史的诠释性探索。它将既有观念与推测相综合，意在成为一件思想的艺术作品，而非临床或科学权威。",
              }} />
            </p>
          </div>
          <div className="mx-auto mt-12 h-px w-40 rule-dream" />
          <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-neural-400/70">
            Imagination Engine · 想象力引擎 · Psyverse · 2026
          </p>
        </div>
      </section>

      <footer className="border-t border-mist-100/10 bg-void-950 px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="display text-xl text-mist-50">Imagination Engine</div>
            <div className="zh mt-1 text-sm text-mist-300">想象力引擎</div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist-500">
              <T v={{
                en: "The nature of imagination, creativity, simulation, consciousness, and human possibility — bilingual.",
                zh: "想象、创造、模拟、意识与人类可能性的本质——双语呈现。",
              }} />
            </p>
          </div>
          <div>
            <div className="label-mono">Systems · 系统</div>
            <ul className="mt-4 space-y-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-mist-500">
              {SECTIONS.slice(0, 6).map((s) => (
                <li key={s.id}><a href={`#${s.id}`} className="hover:text-dream-400">{s.num} · <T v={s.title} /></a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="label-mono">Companion archives</div>
            <ul className="mt-4 space-y-1.5 text-sm text-mist-300">
              <li><a href="https://atlas-of-mind.psyverse.fun" className="hover:text-dream-300">Atlas of Mind · 心智图谱</a></li>
              <li><a href="https://vision-stack.psyverse.fun" className="hover:text-dream-300">Vision Stack · 视觉思维栈</a></li>
              <li><a href="https://dream-machine.psyverse.fun" className="hover:text-dream-300">Dream Machine · 造梦机器</a></li>
              <li className="pt-3"><a href="https://psyverse.fun" className="text-neural-400 hover:text-dream-300">↩ All Psyverse archives</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 h-px max-w-7xl rule-dream" />
        <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between text-[0.58rem] uppercase tracking-[0.3em] text-mist-500">
          <div>© 2026 Gewenbo · Psyverse</div>
          <div>EN · 中文 · interpretive</div>
        </div>
      </footer>
    </main>
  );
}

export default function ImaginationEngine() {
  return (
    <LangProvider>
      <Body />
    </LangProvider>
  );
}

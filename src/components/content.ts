import { Bi } from "./lang";

/* ───────────────────────── The ten systems ───────────────────────── */

export type Section = {
  num: string;
  id: string;
  title: Bi;
  sub: Bi;
  body: Bi;
  vis: string; // which visual component to mount
  accent: string;
};

export const SECTIONS: Section[] = [
  {
    num: "01",
    id: "origin",
    title: { en: "Imagination Origin Engine", zh: "想象力起源引擎" },
    sub: { en: "How a survival simulator became a world-builder", zh: "一台生存模拟器，如何成为世界的建造者" },
    body: {
      en: "Imagination did not arrive as art. It began as prediction. Long before humans, nervous systems learned to run tiny forward models — a frog computing where a fly will be, a wolf anticipating the deer's turn. Memory let animals replay the past; prediction let them rehearse the future. Somewhere in the human lineage these two faculties fused and broke free of the present moment: we could simulate things that were not in front of us, then things that had never happened, then things that could never happen. The hunter planning an ambush, the toolmaker seeing the blade inside the stone, the group sharing a plan that exists only in speech — each is the same machinery, scaled up. The question is not when humans started imagining, but when imagining stopped serving only survival and began building cathedrals in the mind.",
      zh: "想象力并非作为艺术降临。它始于预测。早在人类之前，神经系统就学会了运行微小的前向模型——青蛙计算苍蝇将出现在何处，狼预判鹿的转身。记忆让动物重放过去；预测让它们排演未来。在人类这一谱系的某处，这两种官能融合，并挣脱了「当下」：我们能模拟眼前没有的事物，进而模拟从未发生之事，再进而模拟永不可能之事。设伏的猎人、在石头中看见刀刃的工匠、共享一个仅存在于言语中的计划的群体——都是同一套机器的放大。问题不在于人类何时开始想象，而在于想象何时不再只为生存服务，转而在心智中建起教堂。",
    },
    vis: "evolution",
    accent: "#9b6dff",
  },
  {
    num: "02",
    id: "brain",
    title: { en: "Brain Simulation System", zh: "大脑模拟系统" },
    sub: { en: "Predictive processing, the default mode network & the inner screen", zh: "预测加工、默认模式网络与内在屏幕" },
    body: {
      en: "Modern neuroscience suggests the brain is not a camera but a prediction machine: it never sees the world directly, it generates a model and checks it against incoming signals. Imagination is that same generative model run offline, freed from the senses. When you picture a face, your visual cortex re-activates in patterns close to real seeing. When you rehearse a conversation, motor and language regions fire. The default mode network — active when you are doing 'nothing' — is the brain's simulation engine, weaving autobiographical memory, mental time-travel, and theory of mind into the wandering inner narrative we call thought. Imagination, on this view, is not a special module bolted onto cognition. It is what a predictive brain does whenever the world stops feeding it answers.",
      zh: "现代神经科学提示：大脑不是相机，而是一台预测机器——它从不直接看见世界，而是生成一个模型，再用涌入的信号去校验。想象，正是同一台生成模型在「离线」状态下运行，从感官中解放出来。当你想起一张脸，你的视觉皮层会以接近真实观看的模式重新激活；当你预演一段对话，运动与语言区会放电。默认模式网络——在你「什么都不做」时反而活跃——是大脑的模拟引擎，将自传体记忆、心理时间旅行与心智理论，编织成我们称之为「思考」的、游移的内在叙事。如此看来，想象并非外接于认知的特殊模块；它就是一个预测性大脑在世界停止喂给它答案时，所做的事。",
    },
    vis: "brain",
    accent: "#4fd6e0",
  },
  {
    num: "03",
    id: "dreams",
    title: { en: "Dreams, Hallucination & Reality", zh: "梦、幻觉与现实" },
    sub: { en: "Is perception just a hallucination we agree on?", zh: "感知，是否只是我们达成共识的幻觉？" },
    body: {
      en: "If perception is the brain's best guess constrained by the senses, then a hallucination is that same guess running with the constraints loosened — and a dream is the guess running with the senses switched off entirely. The neuroscientist's provocation is that waking reality is a 'controlled hallucination': vivid, stable, and useful precisely because it is tightly leashed to sensory data. Loosen the leash — through REM sleep, hypnagogic drift, sensory deprivation, fever, or psychedelics — and the generative model speaks more freely. Dreams are imagination with the editor asleep: emotionally charged, narratively loose, recombining the day's residue into impossible architectures. Lucid dreaming reveals that the editor can wake without ending the dream. The spectrum from sober perception to full hallucination is not a wall but a dial.",
      zh: "如果感知是大脑在感官约束下的最佳猜测，那么幻觉就是同一猜测在约束放松时的运行——而梦，则是这猜测在感官被完全关闭时的运行。神经科学家的挑衅之语是：清醒的现实是一种「受控的幻觉」——它鲜明、稳定、有用，恰恰因为它被牢牢拴在感官数据上。放松这条缰绳——通过快速眼动睡眠、入睡前的恍惚、感觉剥夺、高烧或致幻剂——生成模型便说得更自由。梦，是编辑睡着了的想象：饱含情绪、叙事松散，把白日的残留重组为不可能的建筑。清醒梦揭示：编辑可以醒来，而梦不必终止。从清醒感知到完全幻觉，其间不是一堵墙，而是一个旋钮。",
    },
    vis: "spectrum",
    accent: "#ff6da8",
  },
  {
    num: "04",
    id: "myth",
    title: { en: "Fiction & Myth Engine", zh: "虚构与神话引擎" },
    sub: { en: "Shared imagination as civilisation's invisible infrastructure", zh: "共享的想象，作为文明无形的基础设施" },
    body: {
      en: "A single imagined thing changes one mind. A shared imagined thing changes the world. Money has no value a chemist could measure; it works because millions believe the story together. Nations, corporations, gods, laws, human rights, brands, and borders are all objects that exist only in collective imagination — and yet they move armies, build cities, and outlive every individual who believes in them. This is humanity's strangest superpower: we can coordinate at planetary scale around fictions we agree to treat as real. Myth is the oldest version of this technology — a compressed simulation that encodes how to live, whom to trust, and what death means. The line from a campfire story to a constitution to a global currency is one continuous thread of shared imagination hardening into infrastructure.",
      zh: "一个被想象之物，只改变一颗心智。一个被共享之物，则改变整个世界。金钱没有化学家能测量的价值；它之所以运转，是因为千百万人共同相信同一个故事。国家、公司、神祇、法律、人权、品牌与边界，都是仅存在于集体想象中的对象——可它们却能调动军队、建起城市，并比每一个相信它们的个体活得更久。这是人类最奇异的超能力：我们能围绕着那些「同意当真」的虚构，在行星尺度上协同。神话是这项技术最古老的版本——一段被压缩的模拟，编码着如何生活、信任谁、死亡意味着什么。从篝火旁的故事，到一部宪法，再到一种全球货币，是同一条共享想象的连续线索，逐渐凝固为基础设施。",
    },
    vis: "fiction",
    accent: "#f5c46b",
  },
  {
    num: "05",
    id: "science",
    title: { en: "Science & Invention System", zh: "科学与发明系统" },
    sub: { en: "Discovery as imagination constrained by reality", zh: "发现，是被现实约束的想象" },
    body: {
      en: "Science is often cast as imagination's opposite — cold fact against warm fantasy. The truth is closer to the reverse: science is imagination held to its strictest constraint. Einstein rode an imagined beam of light. Kekulé saw the benzene ring in a daydream of a snake biting its tail. Faraday pictured invisible lines of force; Tesla is said to have run whole machines inside his head before touching metal. Mathematics is imagination about objects that exist nowhere — infinities, higher dimensions, impossible numbers — that nonetheless describe the world with eerie precision. The invention timeline is a long record of the same pattern: the thing is imagined first, sometimes for centuries, then reality is bent until it complies. Flight, the submarine, the rocket, the computer, the network — each was a vision before it was a device.",
      zh: "科学常被塑造为想象的对立面——冷峻的事实对抗温热的幻想。真相却更接近其反面：科学是被最严格约束所驯服的想象。爱因斯坦骑上一束想象中的光。凯库勒在一条咬住自己尾巴的蛇的白日梦中，看见了苯环。法拉第想象出无形的力线；据说特斯拉在触碰金属之前，已在脑中运转过整台机器。数学是关于无处存在之物的想象——无穷、高维、不可能的数——却以诡异的精确描述着世界。发明的时间线，是同一模式的漫长记录：事物先被想象，有时长达数个世纪，而后现实被弯折，直到它顺从。飞行、潜艇、火箭、计算机、网络——每一个都先是愿景，而后才是装置。",
    },
    vis: "invention",
    accent: "#7ef0f5",
  },
  {
    num: "06",
    id: "art",
    title: { en: "Art & Symbolic Creation", zh: "艺术与符号创造" },
    sub: { en: "How humans externalise the inner world into culture", zh: "人类如何将内在世界外化为文化" },
    body: {
      en: "Imagination is private until it is made. Art is the technology of externalisation — the means by which an interior simulation is encoded into pigment, sound, stone, language, or light so that it can be re-run inside another mind. A painting is a frozen percept; music is emotion given a temporal architecture; a novel is a machine for installing experiences you never had; cinema and animation are dreams manufactured for shared viewing. Each art form is a compression codec for a different layer of experience, and each new medium expands what can be imagined by giving it somewhere to land. The history of art is the history of humans inventing better ways to copy a vision out of one skull and into many — building, piece by piece, a shared imaginative commons we call culture.",
      zh: "想象是私密的，直到它被制作出来。艺术是外化的技术——是将一段内在模拟编码进颜料、声音、石头、语言或光的手段，从而能在另一颗心智中被重新运行。一幅画是被冻结的知觉；音乐是被赋予时间结构的情绪；一部小说是一台为你安装从未亲历之经验的机器；电影与动画，是为共同观看而制造的梦。每一种艺术形式，都是针对某一经验层的压缩编解码器；而每一种新媒介，都通过给想象一个「着陆点」，扩展了可被想象之物。艺术史，就是人类不断发明更好方法、把一个愿景从一颗头骨复制到众多头骨中的历史——一砖一瓦，建起我们称之为「文化」的共享想象公地。",
    },
    vis: "concept-art",
    accent: "#b794ff",
  },
  {
    num: "07",
    id: "childhood",
    title: { en: "Childhood Imagination Engine", zh: "童年想象力引擎" },
    sub: { en: "Why children imagine more freely than adults", zh: "为何儿童比成人想象得更自由" },
    body: {
      en: "A child holds a banana to their ear and it becomes a phone; a cardboard box becomes a spaceship, a fort, an ocean. Pretend play is not idle — it is the brain training its world-model, learning that symbols can stand for things and that reality is editable. Developmental psychologists find that the same prefrontal maturation that makes adults focused, rational, and inhibited also prunes the wild, low-constraint associations that make childhood imagination so fluid. Children imagine more freely partly because they know less and filter less: their priors are weaker, so the generative model wanders further. Imaginary friends, invented worlds, and magical thinking are not bugs to be outgrown but the first runs of the most powerful cognitive tool our species owns — often running at a richness adults spend their whole lives trying to recover.",
      zh: "孩子把香蕉举到耳边，它就成了电话；一个纸箱成了飞船、城堡、海洋。假装游戏并非无所事事——它是大脑在训练自己的世界模型，学习符号可以代表事物、现实是可编辑的。发展心理学家发现：那让成人变得专注、理性、克制的前额叶成熟，同时也修剪掉了那些狂野、低约束的联想——正是它们让童年的想象如此流动。儿童想象得更自由，部分是因为他们知道得更少、过滤得更少：他们的先验更弱，于是生成模型游荡得更远。想象中的朋友、虚构的世界、魔法式思维，并非待长大后摒弃的缺陷，而是我们这个物种最强大的认知工具的最初几次运行——其丰沛程度，常令成人穷尽一生去试图找回。",
    },
    vis: "concept-childhood",
    accent: "#ff9ac4",
  },
  {
    num: "08",
    id: "digital",
    title: { en: "Internet & Digital Imagination", zh: "互联网与数字想象" },
    sub: { en: "When imagination found infinite places to land", zh: "当想象找到了无限的着陆之地" },
    body: {
      en: "Every medium is a new continent for imagination to colonise. Writing froze it; print copied it; cinema animated it; the videogame let people walk inside it; the internet let billions build it together, in public, at the speed of a refresh. Digital media did not just store imagination — it networked it. Fan fiction, modding, anime fandoms, meme ecosystems, shared universes, and virtual worlds are imagination becoming participatory and collective at unprecedented scale. A meme is a unit of compressed shared imagination that mutates and spreads like an organism. Virtual reality promises to dissolve the last gap between the imagined and the experienced. The internet, seen this way, is less an information system than the largest imagination machine humans have ever built — a planetary canvas where the inner worlds of strangers continuously merge.",
      zh: "每一种媒介，都是一块供想象去殖民的新大陆。文字将它冻结；印刷将它复制；电影令它动起来；电子游戏让人走进其中；而互联网，让数十亿人共同建造它——在公开场合，以一次刷新的速度。数字媒介不只是储存想象，更将想象连成了网络。同人创作、模组、动漫同好、表情包生态、共享宇宙与虚拟世界，是想象在前所未有的尺度上变得参与式与集体化。一个表情包，是一个被压缩的共享想象单元，像生物一样变异、扩散。虚拟现实许诺要溶解「被想象」与「被体验」之间最后的缝隙。如此看来，互联网与其说是信息系统，不如说是人类有史以来建造的最大的想象机器——一块行星尺度的画布，陌生人的内在世界在其上持续融合。",
    },
    vis: "concept-digital",
    accent: "#4fd6e0",
  },
  {
    num: "09",
    id: "ai",
    title: { en: "AI & Synthetic Imagination", zh: "人工智能与合成想象" },
    sub: { en: "Can a machine imagine — or only recombine?", zh: "机器能想象——还是只能重组？" },
    body: {
      en: "For the first time, imagination has a non-human author. Generative models dream images from noise, write fiction, compose music, and simulate worlds that never existed — by learning the statistical shape of everything humans have imagined before. In one sense this is exactly what human imagination does: recombine remembered fragments into new configurations. In another sense something is missing. The model has no body, no stakes, no fear of death, no felt sense of the worlds it generates; it imagines without anyone home to experience the imagining. The hard question splits in two: is imagination ultimately computation — a process that substrate-independently any sufficient system can run — or does it require consciousness, a someone for whom the simulation is felt? Synthetic imagination forces the issue. Either we will discover that imagining never needed a self — or we will find the exact edge where it does.",
      zh: "想象第一次有了非人的作者。生成模型从噪声中梦出图像、撰写小说、谱写音乐、模拟从未存在的世界——靠的是学习人类此前想象过的一切的统计形状。从一个意义上说，这正是人类想象所做的：把记得的碎片重组为新的构型。从另一个意义上说，有些东西缺席了。模型没有身体、没有利害、不惧死亡、对它所生成的世界没有「被感受到」的体验；它在想象，却无人在场去经历这想象。那个艰难的问题一分为二：想象终究是计算吗——一种与基质无关、任何足够系统都能运行的过程——还是它需要意识，需要一个「模拟于其而言被感受到」的某人？合成想象逼出了这个抉择。要么我们将发现想象从不需要一个自我——要么我们将找到它确实需要自我的那道精确边界。",
    },
    vis: "humanvsai",
    accent: "#9b6dff",
  },
  {
    num: "10",
    id: "future",
    title: { en: "Future Possibility Engine", zh: "未来可能性引擎" },
    sub: { en: "Toward civilisation-scale imagination systems", zh: "迈向文明尺度的想象系统" },
    body: {
      en: "Imagination has always escaped the skull — into speech, then writing, then screens, then networks. The next leaps may dissolve the skull's wall entirely. Brain–computer interfaces aim to read and write the inner image directly. Generative models already manufacture endless dreams on demand. Put these together and you can sketch systems that today sound like science fiction: synthetic dreams authored while you sleep, virtual worlds rendered live from intention, shared imaginative spaces where many minds co-simulate one world, civilisation-scale imagination networks in which the boundary between thinking a thing and building it grows thin. Each carries a shadow — whose imagination gets amplified, who authors the dream you inhabit, what happens to a mind that never has to imagine alone. The deepest question of the coming century may be less 'what can we build' than 'what should we choose to imagine — and who decides.'",
      zh: "想象始终在逃出头骨——逃入言语，而后文字，而后屏幕，而后网络。下一次跃迁，或将彻底溶解头骨之壁。脑机接口意图直接读写内在的图像。生成模型已能按需制造无尽的梦。把它们合在一起，你便能勾勒出今日听来仍像科幻的系统：在你睡眠时被创作的合成梦、由意图实时渲染的虚拟世界、众多心智共同模拟同一个世界的共享想象空间、以及那种「想一件事」与「造一件事」之间的边界日渐稀薄的文明尺度想象网络。每一项都拖着一道阴影——谁的想象被放大，谁来创作你所栖居的梦，一颗从不必独自想象的心智会变成什么。未来一个世纪最深的问题，或许不在于「我们能造什么」，而在于「我们应当选择去想象什么——以及由谁来决定」。",
    },
    vis: "future",
    accent: "#cdb6ff",
  },
];

/* ───────────────────────── Deep-time emergence (System 01) ───────────────────────── */

export type Stage = {
  when: Bi;
  title: Bi;
  body: Bi;
  level: number; // 0..1 abstraction height
};

export const EVOLUTION: Stage[] = [
  {
    when: { en: "deep past", zh: "远古" },
    title: { en: "Forward models", zh: "前向模型" },
    body: { en: "Nervous systems predict the next instant — where the prey will be, where the branch is.", zh: "神经系统预测下一刻——猎物将在何处，枝条在哪里。" },
    level: 0.12,
  },
  {
    when: { en: "early mammals", zh: "早期哺乳动物" },
    title: { en: "Memory replay", zh: "记忆重放" },
    body: { en: "The hippocampus replays past routes offline, rehearsing space and consequence.", zh: "海马体离线重放过去的路径，排演空间与后果。" },
    level: 0.26,
  },
  {
    when: { en: "great apes", zh: "类人猿" },
    title: { en: "Social simulation", zh: "社会模拟" },
    body: { en: "Modelling other minds: what does the rival see, want, intend?", zh: "对他者心智的建模：对手看见什么、想要什么、意图为何？" },
    level: 0.4,
  },
  {
    when: { en: "~2 Mya", zh: "约200万年前" },
    title: { en: "Tool foresight", zh: "工具的预见" },
    body: { en: "Seeing the finished blade inside the raw stone before the first strike.", zh: "在第一次敲击之前，便在原石中看见成型的刀刃。" },
    level: 0.52,
  },
  {
    when: { en: "~500 kya", zh: "约50万年前" },
    title: { en: "Shared plans", zh: "共享的计划" },
    body: { en: "Coordinated hunts require a plan held in many minds at once — imagination spoken aloud.", zh: "协同狩猎要求一个计划同时存在于多颗心智中——被说出口的想象。" },
    level: 0.64,
  },
  {
    when: { en: "~100 kya", zh: "约10万年前" },
    title: { en: "Symbols & ornament", zh: "符号与装饰" },
    body: { en: "Pigment, beads, burial — marks that stand for meanings beyond their matter.", zh: "颜料、串珠、葬仪——超越其物质、代表意义的标记。" },
    level: 0.76,
  },
  {
    when: { en: "~40 kya", zh: "约4万年前" },
    title: { en: "Cave art & myth", zh: "洞穴艺术与神话" },
    body: { en: "Painted beasts and spirit-beings: imagined worlds rendered on rock for others to see.", zh: "被绘出的野兽与神灵：被想象的世界，绘于岩壁，供他人观看。" },
    level: 0.88,
  },
  {
    when: { en: "5 kya → now", zh: "5千年前 → 今" },
    title: { en: "Writing → science → AI", zh: "文字 → 科学 → 人工智能" },
    body: { en: "Imagination externalised into durable, copyable, computable media — and now authored by machines.", zh: "想象被外化为持久、可复制、可计算的媒介——如今更由机器执笔。" },
    level: 1.0,
  },
];

/* ───────────────────────── Consciousness spectrum (System 03) ───────────────────────── */

export type SpectrumState = {
  key: string;
  name: Bi;
  constraint: number; // 100 = tightly leashed to senses, 0 = free
  note: Bi;
  accent: string;
};

export const SPECTRUM: SpectrumState[] = [
  { key: "focus", name: { en: "Focused perception", zh: "专注感知" }, constraint: 96, note: { en: "Senses dominate; the model is tightly corrected by the world.", zh: "感官主导；模型被世界紧密校正。" }, accent: "#7ef0f5" },
  { key: "mindwander", name: { en: "Mind-wandering", zh: "走神" }, constraint: 72, note: { en: "Default mode network drifts into memory and 'what-if'.", zh: "默认模式网络飘向记忆与「假如」。" }, accent: "#4fd6e0" },
  { key: "daydream", name: { en: "Daydream", zh: "白日梦" }, constraint: 58, note: { en: "Deliberate inner cinema, still tethered to the room.", zh: "有意的内在影院，仍系于此刻的房间。" }, accent: "#b794ff" },
  { key: "hypnagogic", name: { en: "Hypnagogic drift", zh: "入睡幻象" }, constraint: 38, note: { en: "Falling asleep: images bloom unbidden as control fades.", zh: "入睡之际：随着控制消退，图像不请自来地绽放。" }, accent: "#9b6dff" },
  { key: "rem", name: { en: "REM dream", zh: "快速眼动梦境" }, constraint: 18, note: { en: "Senses offline; the generative model writes the whole scene.", zh: "感官离线；生成模型独自书写整个场景。" }, accent: "#ff6da8" },
  { key: "lucid", name: { en: "Lucid dream", zh: "清醒梦" }, constraint: 30, note: { en: "The editor wakes inside the dream and can steer it.", zh: "编辑在梦中醒来，并能操控它。" }, accent: "#ff9ac4" },
  { key: "psychedelic", name: { en: "Psychedelic / hallucination", zh: "致幻 / 幻觉" }, constraint: 10, note: { en: "Priors loosen while awake; the model speaks over the senses.", zh: "清醒时先验松动；模型盖过感官发声。" }, accent: "#f5c46b" },
];

/* ───────────────────────── Shared-fiction stack (System 04) ───────────────────────── */

export type FictionLayer = {
  name: Bi;
  example: Bi;
  power: Bi;
};

export const FICTIONS: FictionLayer[] = [
  { name: { en: "Myth & spirits", zh: "神话与神灵" }, example: { en: "ancestors, totems, gods", zh: "祖先、图腾、神祇" }, power: { en: "Encodes how to live and what death means.", zh: "编码如何生活、死亡何意。" } },
  { name: { en: "Religion", zh: "宗教" }, example: { en: "shared cosmologies & rites", zh: "共享的宇宙观与仪式" }, power: { en: "Binds strangers into one moral universe.", zh: "将陌生人结成同一道德宇宙。" } },
  { name: { en: "Money", zh: "金钱" }, example: { en: "shells → gold → numbers", zh: "贝壳 → 黄金 → 数字" }, power: { en: "A fiction everyone trusts becomes universal exchange.", zh: "一个人人信任的虚构，成为通用的交换。" } },
  { name: { en: "Nation & law", zh: "国家与法律" }, example: { en: "borders, constitutions, rights", zh: "边界、宪法、权利" }, power: { en: "Imagined communities that command real loyalty.", zh: "被想象的共同体，却能号令真实的忠诚。" } },
  { name: { en: "Corporation & brand", zh: "公司与品牌" }, example: { en: "legal persons, logos", zh: "法人、标识" }, power: { en: "Stories that own property and outlive founders.", zh: "能拥有财产、比创始人活得更久的故事。" } },
  { name: { en: "Virtual worlds", zh: "虚拟世界" }, example: { en: "games, metaverses, IP", zh: "游戏、元宇宙、知识产权" }, power: { en: "Fully synthetic realities we inhabit by choice.", zh: "我们自愿栖居的、完全合成的现实。" } },
];

/* ───────────────────────── Imagined → built (System 05) ───────────────────────── */

export type Invention = {
  thing: Bi;
  imagined: Bi;
  imaginedYear: number;
  builtYear: number;
  lag: Bi;
};

export const INVENTIONS: Invention[] = [
  { thing: { en: "Human flight", zh: "人类飞行" }, imagined: { en: "Da Vinci's ornithopter", zh: "达·芬奇的扑翼机" }, imaginedYear: 1490, builtYear: 1903, lag: { en: "413 yrs", zh: "413 年" } },
  { thing: { en: "Submarine", zh: "潜艇" }, imagined: { en: "Verne's Nautilus", zh: "凡尔纳的鹦鹉螺号" }, imaginedYear: 1870, builtYear: 1900, lag: { en: "30 yrs", zh: "30 年" } },
  { thing: { en: "Moon landing", zh: "登月" }, imagined: { en: "Verne · Tsiolkovsky", zh: "凡尔纳 · 齐奥尔科夫斯基" }, imaginedYear: 1865, builtYear: 1969, lag: { en: "104 yrs", zh: "104 年" } },
  { thing: { en: "Geostationary satellite", zh: "地球同步卫星" }, imagined: { en: "Arthur C. Clarke", zh: "亚瑟·克拉克" }, imaginedYear: 1945, builtYear: 1964, lag: { en: "19 yrs", zh: "19 年" } },
  { thing: { en: "Universal computer", zh: "通用计算机" }, imagined: { en: "Babbage · Turing", zh: "巴贝奇 · 图灵" }, imaginedYear: 1936, builtYear: 1945, lag: { en: "9 yrs", zh: "9 年" } },
  { thing: { en: "Video call", zh: "视频通话" }, imagined: { en: "Bell-era 'telephonoscope'", zh: "贝尔时代的「电话望远镜」" }, imaginedYear: 1878, builtYear: 1964, lag: { en: "86 yrs", zh: "86 年" } },
  { thing: { en: "Thinking machine (AI)", zh: "会思考的机器（AI）" }, imagined: { en: "Turing's imitation game", zh: "图灵的模仿游戏" }, imaginedYear: 1950, builtYear: 2022, lag: { en: "72 yrs", zh: "72 年" } },
];

/* ───────────────────────── Human vs synthetic imagination (System 09) ───────────────────────── */

export type Compare = { dim: Bi; human: Bi; ai: Bi };

export const HUMAN_VS_AI: Compare[] = [
  { dim: { en: "Source material", zh: "素材来源" }, human: { en: "Lived, embodied, multisensory memory.", zh: "亲历的、具身的、多感官的记忆。" }, ai: { en: "The recorded statistical residue of human output.", zh: "人类产出被记录下的统计残留。" } },
  { dim: { en: "Grounding", zh: "根基" }, human: { en: "Tied to a body with stakes — hunger, fear, death.", zh: "系于一具有利害的身体——饥饿、恐惧、死亡。" }, ai: { en: "Ungrounded; tokens about a world it never touches.", zh: "无根基；关于一个它从未触碰的世界的符号。" } },
  { dim: { en: "Novelty", zh: "新颖" }, human: { en: "Rare leaps that escape the training distribution.", zh: "罕见的、逃出训练分布的跃迁。" }, ai: { en: "Vast fluent recombination within the learned space.", zh: "在习得空间内海量而流畅的重组。" } },
  { dim: { en: "Intention", zh: "意图" }, human: { en: "Imagines toward goals it cares about.", zh: "朝向它在乎的目标而想象。" }, ai: { en: "Generates toward a prompt; cares about nothing.", zh: "朝向提示词而生成；无所在乎。" } },
  { dim: { en: "Speed & scale", zh: "速度与规模" }, human: { en: "One mind, one lifetime, slow.", zh: "一颗心智，一生，缓慢。" }, ai: { en: "Millions of variations per minute, tireless.", zh: "每分钟数百万种变体，不知疲倦。" } },
  { dim: { en: "Experience", zh: "体验" }, human: { en: "Someone is home; the dream is felt.", zh: "有人在场；梦是被感受到的。" }, ai: { en: "Unknown — perhaps no one is home at all.", zh: "未知——也许根本无人在场。" } },
];

/* ───────────────────────── Future systems (System 10) ───────────────────────── */

export type Future = {
  name: Bi;
  body: Bi;
  shadow: Bi;
  horizon: Bi;
};

export const FUTURES: Future[] = [
  {
    name: { en: "Direct neural imaging", zh: "直接神经成像" },
    body: { en: "Decoders reconstruct the inner image from brain activity — imagination made visible to others.", zh: "解码器从脑活动重建内在图像——让想象对他人可见。" },
    shadow: { en: "The last private space — the mind's eye — becomes readable.", zh: "最后的私密空间——心眼——变得可被读取。" },
    horizon: { en: "early & accelerating", zh: "早期且加速" },
  },
  {
    name: { en: "Synthetic dreams", zh: "合成梦境" },
    body: { en: "Generative models author dreams on demand, or while you sleep, tuned to mood and memory.", zh: "生成模型按需、或在你睡眠时创作梦境，依情绪与记忆调校。" },
    shadow: { en: "Who writes the dream you wake from — and to what end?", zh: "是谁书写了你从中醒来的梦——又为何目的？" },
    horizon: { en: "speculative", zh: "推测性" },
  },
  {
    name: { en: "Intention-rendered worlds", zh: "意图渲染的世界" },
    body: { en: "Virtual environments generated live from what you mean, not what you type.", zh: "由你「所指」而非「所打字」实时生成的虚拟环境。" },
    shadow: { en: "Frictionless wish-fulfilment may erode the patience that makes deep imagination.", zh: "毫无阻力的愿望满足，或将侵蚀那份成就深层想象的耐心。" },
    horizon: { en: "emerging", zh: "新兴" },
  },
  {
    name: { en: "Shared imaginative space", zh: "共享想象空间" },
    body: { en: "Many minds co-simulate one world in real time — collective imagination with a render engine.", zh: "众多心智实时共同模拟同一世界——配备渲染引擎的集体想象。" },
    shadow: { en: "Consensus reality could be authored, sold, or seized.", zh: "共识现实可能被创作、被售卖、被夺取。" },
    horizon: { en: "far", zh: "遥远" },
  },
  {
    name: { en: "Civilisation imagination network", zh: "文明想象网络" },
    body: { en: "A planetary system where imagining and building converge — thought close to manufacture.", zh: "一个想象与建造趋于合一的行星系统——思考几近于制造。" },
    shadow: { en: "If imagining a thing nearly builds it, error and intent both scale catastrophically.", zh: "若想象一物几近于造出它，错误与意图都将灾难性地放大。" },
    horizon: { en: "horizon", zh: "地平线" },
  },
];

/* ───────────────────────── Meta-model: the seven dimensions ───────────────────────── */

export type Axis = { key: string; name: Bi; short: Bi };

export const AXES: Axis[] = [
  { key: "memory", name: { en: "Memory compression", zh: "记忆压缩" }, short: { en: "Memory", zh: "记忆" } },
  { key: "depth", name: { en: "Simulation depth", zh: "模拟深度" }, short: { en: "Simulation", zh: "模拟" } },
  { key: "symbol", name: { en: "Symbolic capacity", zh: "符号能力" }, short: { en: "Symbol", zh: "符号" } },
  { key: "predict", name: { en: "Future prediction", zh: "未来预测" }, short: { en: "Prediction", zh: "预测" } },
  { key: "emotion", name: { en: "Emotional modelling", zh: "情绪建模" }, short: { en: "Emotion", zh: "情绪" } },
  { key: "narrative", name: { en: "Narrative generation", zh: "叙事生成" }, short: { en: "Narrative", zh: "叙事" } },
  { key: "abstract", name: { en: "Abstract thinking", zh: "抽象思维" }, short: { en: "Abstract", zh: "抽象" } },
];

export type Mind = {
  key: string;
  name: Bi;
  tagline: Bi;
  scores: Record<string, number>; // 0..100 per axis key
  accent: string;
};

export const MINDS: Mind[] = [
  {
    key: "child",
    name: { en: "The child", zh: "孩童" },
    tagline: { en: "Low constraint, boundless recombination.", zh: "低约束，无尽的重组。" },
    scores: { memory: 45, depth: 70, symbol: 60, predict: 35, emotion: 75, narrative: 85, abstract: 40 },
    accent: "#ff9ac4",
  },
  {
    key: "artist",
    name: { en: "The artist", zh: "艺术家" },
    tagline: { en: "Externalising the inner world into form.", zh: "将内在世界外化为形式。" },
    scores: { memory: 70, depth: 85, symbol: 95, predict: 50, emotion: 95, narrative: 90, abstract: 70 },
    accent: "#b794ff",
  },
  {
    key: "scientist",
    name: { en: "The scientist", zh: "科学家" },
    tagline: { en: "Imagination held to reality's constraint.", zh: "被现实约束驯服的想象。" },
    scores: { memory: 80, depth: 90, symbol: 80, predict: 95, emotion: 45, narrative: 55, abstract: 98 },
    accent: "#7ef0f5",
  },
  {
    key: "dreamer",
    name: { en: "The dreamer", zh: "做梦者" },
    tagline: { en: "The generative model with the editor asleep.", zh: "编辑睡着了的生成模型。" },
    scores: { memory: 55, depth: 95, symbol: 70, predict: 30, emotion: 90, narrative: 75, abstract: 50 },
    accent: "#ff6da8",
  },
  {
    key: "engineer",
    name: { en: "The engineer", zh: "工程师" },
    tagline: { en: "Simulating a machine before it is built.", zh: "在机器被造出之前模拟它。" },
    scores: { memory: 75, depth: 88, symbol: 72, predict: 90, emotion: 35, narrative: 45, abstract: 88 },
    accent: "#f5c46b",
  },
  {
    key: "llm",
    name: { en: "The generative model", zh: "生成模型" },
    tagline: { en: "Fluent recombination, no one home.", zh: "流畅的重组，无人在场。" },
    scores: { memory: 98, depth: 60, symbol: 90, predict: 70, emotion: 40, narrative: 92, abstract: 80 },
    accent: "#9b6dff",
  },
  {
    key: "network",
    name: { en: "Imagination network", zh: "想象网络" },
    tagline: { en: "Many minds and machines co-simulating.", zh: "众多心智与机器的共同模拟。" },
    scores: { memory: 96, depth: 92, symbol: 94, predict: 88, emotion: 70, narrative: 95, abstract: 92 },
    accent: "#cdb6ff",
  },
];

/* ───────────────────────── Concept panels (art / childhood / digital) ───────────────────────── */

export type Concept = { t: Bi; d: Bi };

export const CONCEPTS: Record<string, Concept[]> = {
  art: [
    { t: { en: "Painting", zh: "绘画" }, d: { en: "A frozen percept — one person's seeing, made durable for many.", zh: "被冻结的知觉——一个人的观看，化为众人可久存之物。" } },
    { t: { en: "Music", zh: "音乐" }, d: { en: "Emotion given a temporal architecture you can walk through in time.", zh: "被赋予时间结构的情绪，你可在时间中穿行其间。" } },
    { t: { en: "Literature", zh: "文学" }, d: { en: "A machine for installing experiences you never had into your mind.", zh: "一台把你从未亲历的经验安装进心智的机器。" } },
    { t: { en: "Cinema & animation", zh: "电影与动画" }, d: { en: "Dreams manufactured for shared viewing at 24 frames a second.", zh: "以每秒24格制造、供共同观看的梦。" } },
  ],
  childhood: [
    { t: { en: "Pretend play", zh: "假装游戏" }, d: { en: "A box becomes a spaceship — the world-model learning that reality is editable.", zh: "纸箱变飞船——世界模型在学习：现实是可编辑的。" } },
    { t: { en: "Imaginary friends", zh: "想象中的朋友" }, d: { en: "A full social simulation given a name, a voice, and a will of its own.", zh: "一场完整的社会模拟，被赋予姓名、声音与自己的意志。" } },
    { t: { en: "Weaker priors", zh: "更弱的先验" }, d: { en: "Knowing less, the generative model wanders further from the expected.", zh: "知道得更少，生成模型便游荡得离「常规」更远。" } },
    { t: { en: "The pruning", zh: "修剪" }, d: { en: "Prefrontal maturation grants focus — and quietly trims the wildest associations.", zh: "前额叶的成熟带来专注——也悄然修剪掉最狂野的联想。" } },
  ],
  digital: [
    { t: { en: "Fandom & fan fiction", zh: "同好与同人" }, d: { en: "Audiences seizing worlds and continuing them — imagination made participatory.", zh: "受众夺过世界并续写它——想象变得可参与。" } },
    { t: { en: "The meme", zh: "表情包 / 模因" }, d: { en: "A unit of compressed shared imagination that mutates and spreads like an organism.", zh: "一个被压缩的共享想象单元，像生物般变异、扩散。" } },
    { t: { en: "Game worlds", zh: "游戏世界" }, d: { en: "Imagination you don't just witness but walk inside and act upon.", zh: "你不只目睹、更能走入其中并施加行动的想象。" } },
    { t: { en: "VR & the metaverse", zh: "VR 与元宇宙" }, d: { en: "The promise to dissolve the gap between the imagined and the experienced.", zh: "溶解「被想象」与「被体验」之间缝隙的许诺。" } },
  ],
};

/* ───────────────────────── Recursive simulation console ───────────────────────── */

export type SimSeed = { key: string; label: Bi };

export const SIM_SEEDS: SimSeed[] = [
  { key: "fire", label: { en: "Fire", zh: "火" } },
  { key: "bird", label: { en: "A bird in flight", zh: "飞翔的鸟" } },
  { key: "death", label: { en: "Death", zh: "死亡" } },
  { key: "number", label: { en: "A number", zh: "一个数字" } },
  { key: "stranger", label: { en: "A stranger's face", zh: "陌生人的脸" } },
  { key: "city", label: { en: "An empty plain", zh: "一片空旷的平原" } },
];

// Each seed, transformed through the seven faculties of imagination.
export const SIM_MATRIX: Record<string, Record<string, Bi>> = {
  fire: {
    memory: { en: "Compress every fire ever seen into one schema: heat, light, danger, hearth.", zh: "把见过的每一团火压缩成一个图式：热、光、危险、炉灶。" },
    predict: { en: "Run it forward — the spark catches, the dry grass goes, the wind decides.", zh: "向前推演——火星点燃，干草蔓延，由风来裁决。" },
    narrative: { en: "Prometheus steals it; a hearth becomes a home; an empire burns.", zh: "普罗米修斯盗取它；一处炉灶成为家园；一个帝国焚毁。" },
    invention: { en: "Controlled, it cooks, smelts, drives the engine, launches the rocket.", zh: "被驯服后，它烹饪、冶炼、驱动引擎、发射火箭。" },
    myth: { en: "Becomes the sacred — sun gods, eternal flames, the soul as inner fire.", zh: "化为神圣——日神、长明之火、作为内在之火的灵魂。" },
    art: { en: "Rendered as light in paint, as warmth in poems, as the cut to black.", zh: "被绘为画中的光、诗中的暖、画面切入的黑。" },
    ai: { en: "A model that has never felt heat predicts the next frame of a flame.", zh: "一个从未感到过热的模型，预测火焰的下一帧。" },
  },
  bird: {
    memory: { en: "Store the shape of effortless lift — wings, updraft, the impossible ease.", zh: "储存那毫不费力的升起之形——翅膀、上升气流、不可能的轻盈。" },
    predict: { en: "Trace the arc it will carve, where it banks, when it stalls.", zh: "勾出它将划出的弧线，在何处侧倾，何时失速。" },
    narrative: { en: "Icarus rises and falls; freedom takes feathered form.", zh: "伊卡洛斯升起又坠落；自由化为羽翼之形。" },
    invention: { en: "Da Vinci sketches the wing; centuries later, aluminium answers.", zh: "达·芬奇绘下机翼；数个世纪后，铝给出回答。" },
    myth: { en: "Becomes the soul departing, the angel, the messenger between worlds.", zh: "化为离去的灵魂、天使、世界之间的信使。" },
    art: { en: "The motif of ascent in every medium that wants to mean transcendence.", zh: "在每种欲表达「超越」的媒介中，那个上升的母题。" },
    ai: { en: "A diffusion model dreams a bird that never flew, feather-perfect.", zh: "一个扩散模型梦出一只从未飞过的鸟，羽毛完美。" },
  },
  death: {
    memory: { en: "The one event no mind can recall — imagination's hardest blank to fill.", zh: "唯一无法被任何心智回忆的事件——想象最难填补的空白。" },
    predict: { en: "The future every model runs toward and cannot simulate from inside.", zh: "每个模型都奔向、却无法从内部模拟的未来。" },
    narrative: { en: "Every culture writes an ending: underworld, rebirth, the long sleep.", zh: "每种文化都写下一个结局：冥界、重生、长眠。" },
    invention: { en: "Drives medicine, cryonics, the dream of uploaded minds.", zh: "驱动医学、人体冷冻、心智上传之梦。" },
    myth: { en: "The mother of religion — the fiction built to make the blank bearable.", zh: "宗教之母——为使那空白可被承受而建的虚构。" },
    art: { en: "The pressure behind most great art: a finitude refusing to stay silent.", zh: "多数伟大艺术背后的压力：一种拒绝缄默的有限性。" },
    ai: { en: "A system with no death to fear — and so, perhaps, no reason to imagine.", zh: "一个无死亡可惧的系统——因而，或许，也无理由去想象。" },
  },
  number: {
    memory: { en: "Compress 'three apples, three days, three steps' into the pure idea: 3.", zh: "把「三个苹果、三天、三步」压缩成纯粹的观念：3。" },
    predict: { en: "Numbers let you simulate what you've never counted — the orbit, the bridge.", zh: "数字让你模拟从未数过之物——轨道、桥梁。" },
    narrative: { en: "Sacred sevens, unlucky fours: quantity wrapped in story.", zh: "神圣的七、不祥的四：被故事包裹的数量。" },
    invention: { en: "The most powerful imagined object ever — it builds everything else.", zh: "有史以来最强大的被想象之物——它建造其余一切。" },
    myth: { en: "Pythagoras hears the cosmos as ratio; number becomes divine.", zh: "毕达哥拉斯把宇宙听成比例；数成为神性。" },
    art: { en: "Rhythm, proportion, the golden mean — beauty as countable structure.", zh: "节奏、比例、黄金分割——美，作为可计数的结构。" },
    ai: { en: "Numbers are all it has; the model imagines only in vectors.", zh: "数字是它拥有的一切；模型只在向量中想象。" },
  },
  stranger: {
    memory: { en: "Assemble a never-seen face from a lifetime of remembered features.", zh: "用一生记得的五官，拼出一张从未见过的脸。" },
    predict: { en: "Model the mind behind it — friend or threat, what do they want?", zh: "对那脸背后的心智建模——友是敌？他们想要什么？" },
    narrative: { en: "Give them a backstory in an instant; the brain cannot help it.", zh: "瞬间为他们编出前史；大脑无法自抑。" },
    invention: { en: "The root of empathy, fiction, and the social contract itself.", zh: "共情、虚构与社会契约本身的根。" },
    myth: { en: "The stranger as god in disguise — hospitality made sacred.", zh: "陌生人作为乔装的神——好客被奉为神圣。" },
    art: { en: "Every character ever written is a stranger the author chose to know.", zh: "每一个被写下的角色，都是作者选择去认识的陌生人。" },
    ai: { en: "Trained on a billion faces, it imagines people who never existed.", zh: "在十亿张脸上训练，它想象出从未存在的人。" },
  },
  city: {
    memory: { en: "An empty plain recalls every dwelling — and offers itself as canvas.", zh: "一片空旷的平原唤起每一处居所——并把自己献作画布。" },
    predict: { en: "See the city before the first stone: roads, walls, the future crowd.", zh: "在第一块石头之前看见城市：道路、城墙、未来的人群。" },
    narrative: { en: "Founding myths, promised lands, utopias drawn on emptiness.", zh: "建城神话、应许之地，绘于空旷之上的乌托邦。" },
    invention: { en: "Architecture: the most literal act of building the imagined.", zh: "建筑：把被想象之物造出来，最字面的行动。" },
    myth: { en: "Babel, Eden, the heavenly city — space turned into meaning.", zh: "巴别、伊甸、天上之城——空间被化为意义。" },
    art: { en: "The plan, the model, the rendering: a city imagined into being.", zh: "图纸、模型、渲染图：一座被想象成真的城市。" },
    ai: { en: "Generative design proposes a thousand cities before lunch.", zh: "生成式设计在午餐前提出一千座城市。" },
  },
};

export const SIM_FACULTIES: { key: string; name: Bi }[] = [
  { key: "memory", name: { en: "Memory recombination", zh: "记忆重组" } },
  { key: "predict", name: { en: "Future prediction", zh: "未来预测" } },
  { key: "narrative", name: { en: "Storytelling", zh: "叙事" } },
  { key: "invention", name: { en: "Invention", zh: "发明" } },
  { key: "myth", name: { en: "Myth & religion", zh: "神话与宗教" } },
  { key: "art", name: { en: "Art", zh: "艺术" } },
  { key: "ai", name: { en: "Synthetic imagination", zh: "合成想象" } },
];

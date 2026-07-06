// Content model — an AI/quantum-forward, utopian-futurist narrative.

export const IDENTITY = {
  name: 'Arun Babu',
  role: 'CTO & Co-Founder — TenshiLabs',
  org: 'TenshiLabs',
  roleTitle: 'Chief Technology Officer',
  since: 'EST. MMXXIV',
  location: 'Trivandrum, Kerala, India',
  github: 'https://github.com/ArunBabu98',
  linkedin: 'https://www.linkedin.com/in/arun-babu-370ab41bb/',
  email: '1runx3na@gmail.com',
  taglines: [
    'Engineering an AI- and quantum-forward future.',
    'Mobile · Blockchain · Rust · Machine Intelligence.',
    'Foundational technology, built from first principles.',
  ],
  intro:
    "I build the machinery of the next era — intelligent systems, verifiable networks, and the software that runs on both. From non-custodial wallets to autograd engines to a post-quantum blockchain, I rebuild foundational technology from first principles until I truly understand it.",
}

// The centrepiece credential — deliberately highlighted.
export const CTO = {
  seal: 'CURRENT POSTING',
  title: 'Chief Technology Officer & Co-Founder',
  org: 'TenshiLabs',
  since: '2024 — PRESENT',
  statement:
    "I co-founded TenshiLabs to build technology worth living with — AI-native products and deep-tech systems, engineered end to end. As CTO I set the technical vision and architecture, and ship the hard parts myself: Securus Wallet, Sellist, Formly AI, and the research beneath them.",
  ledger: [
    { k: 'Mandate', v: 'Technical vision, architecture & core engineering' },
    { k: 'Domains', v: 'AI · Blockchain · Mobile · Systems · Quantum' },
    { k: 'Shipped', v: 'Securus Wallet · Sellist · Formly AI' },
  ],
}

export const STORY = {
  origin: {
    chapter: 'I',
    label: 'ORIGIN',
    heading: 'It began with one question — "but how does it actually work?"',
    body: [
      'In 2020 I graduated in Computer Science and went into freelance web work — Django, WordPress, React. Useful, but I kept hitting the same wall: I was assembling tools I did not understand.',
      'So I started taking things apart. Wallets. Compilers. Neural networks. Allocators. If I could not rebuild it from scratch, I decided I did not really know it. That instinct became a vocation.',
    ],
  },
  arsenal: {
    chapter: 'II',
    label: 'THE ARSENAL',
    heading: 'Four domains. One way of thinking.',
    body: [
      'I went deep in four fields — and the real advantage turned out to be the wiring between them. Below, each is rendered as the thing it truly is: intelligent, tangible, verifiable, fundamental.',
    ],
  },
  path: {
    chapter: 'III',
    label: 'THE PATH',
    heading: 'From freelancer to founder.',
    body: ['Five years, one clean line. Each step traded comfort for ownership and depth.'],
  },
  builds: {
    chapter: 'IV',
    label: 'THE WORKS',
    heading: 'The receipts.',
    body: ['145+ repositories — products with real users, and foundational tech built by hand. A selection follows.'],
  },
  doctrine: {
    chapter: 'V',
    label: 'THE DOCTRINE',
    heading: 'The principles I actually build by.',
    body: [],
  },
}

export const STATS = [
  { value: '145+', label: 'repositories authored' },
  { value: '15+', label: 'blockchains, SDKs built' },
  { value: '5', label: 'years at the frontier' },
  { value: '6', label: 'languages, written in anger' },
]

export const PILLARS = [
  {
    id: 'ai',
    object: 'bot',
    tag: 'I',
    title: 'Machine Intelligence',
    lead: 'The engines behind the frameworks — built by hand.',
    body: 'Reverse-mode autograd engines, neural-network primitives, and LLMs from scratch. Applied ML pipelines with MLflow and FastAPI. Voice- and AI-native products.',
    tech: ['Autograd from scratch', 'PyTorch / TensorFlow', 'LLMs', 'MLflow', 'FastAPI'],
  },
  {
    id: 'mobile',
    object: 'phone',
    tag: 'II',
    title: 'Mobile Engineering',
    lead: 'Flutter / Dart — my primary craft for five years.',
    body: 'Production cross-platform apps and published pub.dev packages. State management across GetX, Bloc, and Riverpod; Firebase, secure storage, native channels.',
    tech: ['Flutter', 'Dart', 'GetX / Bloc / Riverpod', 'Firebase', 'FVM'],
  },
  {
    id: 'blockchain',
    object: 'chain',
    tag: 'III',
    title: 'Blockchain & Crypto',
    lead: 'Non-custodial wallets and low-level SDKs across 15+ chains.',
    body: 'BIP-39/44/49/84 wallet cryptography, a swap exchange, WalletConnect, a novel on-chain keystore, and now a post-quantum eUTXO chain design.',
    tech: ['Bitcoin / UTXO', 'Cardano', 'Solana', 'Monero', 'WalletConnect', 'Post-quantum'],
  },
  {
    id: 'systems',
    object: 'quantum',
    tag: 'IV',
    title: 'Systems & Quantum',
    lead: 'Foundations, rebuilt from scratch.',
    body: 'A from-scratch heap allocator, interpreters, and a new programming language in Rust. Quantum state simulators and hybrid quantum-classical models.',
    tech: ['Rust', 'Allocators', 'C / C++', 'Quantum sims', 'QAOA / VQE'],
  },
]

export const TRAJECTORY = [
  {
    year: '2020',
    title: 'B.Tech, Computer Science',
    org: 'Sree Chitra Thirunal College of Engineering',
    body: 'Graduated into freelance web development — Django, WordPress, React / Node.js.',
  },
  {
    year: '2022',
    title: 'Flutter / Blockchain Developer',
    org: 'ChangeAngel',
    body: 'Built the ChangeAngel swap exchange, non-custodial wallets, and NFT features. Owned frontends, backends, VPS deployment, and the DigiByte Digi-ID integration.',
  },
  {
    year: '2024',
    title: 'CTO & Co-Founder',
    org: 'TenshiLabs',
    body: 'Co-founded a deep-tech studio. Architected Securus Wallet, Sellist, and Formly AI — owning client, server, and infrastructure end to end.',
  },
  {
    year: '2026',
    title: 'Systems, ML & Quantum Research',
    org: 'Building at the frontier',
    body: 'From-scratch autograd engines, allocators, a post-quantum blockchain, and sovereign hybrid quantum-classical compute.',
  },
]

export const WORK = [
  {
    name: 'autodiff-rs / autodiff-nd',
    kind: 'Rust · Open Source',
    desc: 'From-scratch automatic-differentiation engines — dynamic computational graphs, reverse-mode backprop, broadcast-aware gradients. The machinery behind PyTorch, rebuilt.',
    href: 'https://github.com/ArunBabu98/autodiff-nd',
  },
  {
    name: 'rusty-alloc',
    kind: 'Rust · Open Source',
    desc: 'A from-scratch heap allocator: size-class free lists, coalescing, alignment-aware allocation, and rigorously documented unsafe invariants.',
    href: 'https://github.com/ArunBabu98/rusty-alloc',
  },
  {
    name: 'huxplex',
    kind: 'Rust · Research',
    desc: 'A post-quantum eUTXO blockchain — DAG-BFT consensus, Dilithium signatures, and a triple-token model. Cryptography, consensus, and AI in one design.',
    href: 'https://github.com/ArunBabu98/huxplex',
  },
  {
    name: 'DigiByte Keystore',
    kind: 'Dart · Open Source',
    desc: 'A novel mechanism for decentralized encrypted key storage using the DigiByte blockchain OP_RETURN field. MIT-licensed.',
    href: 'https://github.com/ArunBabu98/DigiByte_Keystore',
  },
  {
    name: 'Securus Wallet',
    kind: 'Flutter · TenshiLabs',
    desc: 'A multi-chain non-custodial wallet — Flutter client plus Node / TypeScript servers, with in-house Dart SDKs for a dozen-plus blockchains and integrated swaps.',
    href: 'https://github.com/ArunBabu98',
  },
  {
    name: 'Sellist',
    kind: 'Flutter + AI · TenshiLabs',
    desc: 'An AI-powered cross-platform seller-listing tool — voice and AI turn raw input into structured, publishable listings across marketplaces.',
    href: 'https://github.com/ArunBabu98',
  },
]

export const PRINCIPLES = [
  {
    k: 'First principles',
    v: "If I do not understand how it works underneath, I build it from scratch until I do. Understanding is earned, not imported.",
  },
  {
    k: 'Cross-domain synthesis',
    v: 'The interesting problems live where AI meets systems meets cryptography meets quantum. Breadth is a moat when real depth sits behind it.',
  },
  {
    k: 'Leverage through artifacts',
    v: 'Code, open source, and clear writing do the talking. Build things that work while you sleep and let the work speak.',
  },
  {
    k: 'Build what you would live with',
    v: 'Technology should be worth inhabiting. Ship deliberately; a finished, humane thing beats a perfect idea.',
  },
]

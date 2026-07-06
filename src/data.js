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

// ============ Full project archive (separate page) ============
export const SKILL_TYPES = [
  {
    k: 'Systems Programming',
    v: 'Low-level Rust and C — memory allocators, unsafe invariants, interpreters, and language runtimes built from the metal up.',
    tags: ['Rust', 'unsafe', 'C / C++', 'Allocators', 'Compilers'],
  },
  {
    k: 'Cryptography & Blockchain',
    v: 'Wallet cryptography (BIP-39/44/49/84), multi-chain SDKs, consensus, and post-quantum protocol design.',
    tags: ['BIP standards', 'UTXO', 'Consensus', 'Post-quantum', 'WalletConnect'],
  },
  {
    k: 'Machine Learning Engineering',
    v: 'Autograd engines and neural nets from scratch, LLMs, and production ML pipelines — I understand the frameworks because I have rebuilt them.',
    tags: ['Autograd', 'PyTorch', 'LLMs', 'MLflow', 'FastAPI'],
  },
  {
    k: 'Mobile Engineering',
    v: 'Five years of production Flutter / Dart — cross-platform apps, published packages, and every major state-management paradigm.',
    tags: ['Flutter', 'Dart', 'Bloc / GetX / Riverpod', 'Firebase'],
  },
  {
    k: 'Full-Stack & Backend',
    v: 'Node, Next.js, TypeScript, and Rust services; Firebase, AWS, and hands-on VPS deployment. Client to infrastructure, end to end.',
    tags: ['Node.js', 'Next.js', 'TypeScript', 'Axum', 'VPS / DevOps'],
  },
  {
    k: 'Quantum & Research',
    v: 'Quantum state simulators, QAOA / VQE, and hybrid quantum-classical models — plus a habit of reproducing research from first principles.',
    tags: ['Quantum sims', 'QAOA / VQE', 'Hybrid QML', 'Research'],
  },
]

export const PROJECT_GROUPS = [
  {
    title: 'Machine Intelligence',
    blurb: 'The engines behind the frameworks — reverse-mode autodiff, neural nets, and LLMs, built from scratch.',
    items: [
      {
        name: 'autodiff-rs / autodiff-nd',
        stack: ['Rust', 'ndarray'],
        desc: 'From-scratch automatic-differentiation engines: dynamic computational graphs, reverse-mode backprop via topological sort, broadcast-aware gradient reduction, and differentiable activations.',
        skills: ['ML Engineering', 'Systems', 'Mathematics'],
        href: 'https://github.com/ArunBabu98/autodiff-nd',
      },
      {
        name: 'rustmore',
        stack: ['Rust', 'Burn'],
        desc: "A character-level language-model library implementing Karpathy's makemore series — from bigrams to transformers — in Rust.",
        skills: ['ML Engineering', 'Rust'],
        href: 'https://github.com/ArunBabu98/rustmore',
      },
      {
        name: 'tensorgrad-rs / deeplearn-rs',
        stack: ['Rust'],
        desc: 'Tensor autograd and deep-learning primitives from scratch — computational graph, chain rule, and gradient accumulation for tensor ops.',
        skills: ['ML Engineering', 'Systems'],
        href: 'https://github.com/ArunBabu98/tensorgrad-rs',
      },
      {
        name: 'credit-risk-ml-system',
        stack: ['Python', 'MLflow', 'FastAPI'],
        desc: 'Production-grade end-to-end ML system for credit-risk prediction — leakage-safe pipelines, reproducible experiments, and a deployable inference service.',
        skills: ['ML Engineering', 'Backend', 'MLOps'],
        href: 'https://github.com/ArunBabu98',
      },
      {
        name: 'RNN-LSTM Stock Predictor',
        stack: ['Python', 'TensorFlow'],
        desc: 'End-to-end ML web app: scrapes market data, computes technical indicators and sentiment, and trains an LSTM-RNN to produce buy/sell signals.',
        skills: ['ML Engineering', 'Data'],
        href: 'https://github.com/ArunBabu98/RNN-LSTM-Stock-Market-Trend-Predictor',
      },
    ],
  },
  {
    title: 'Blockchain & Cryptography',
    blurb: 'Non-custodial wallets, low-level SDKs across 15+ chains, and a post-quantum protocol.',
    items: [
      {
        name: 'Securus Wallet',
        stack: ['Flutter', 'Node', 'TypeScript'],
        desc: 'A multi-chain non-custodial wallet — Flutter client plus Node/TS servers, with in-house Dart SDKs for a dozen-plus blockchains and integrated swaps.',
        skills: ['Mobile', 'Cryptography', 'Backend'],
        href: 'https://github.com/ArunBabu98',
      },
      {
        name: 'ChangeAngel Wallet Library',
        stack: ['Dart'],
        desc: 'Cross-chain, BIP-39/44/49/84-compliant wallet library — legacy/SegWit/Bech32 addresses across UTXO and non-UTXO coins, PBKDF2 derivation, encrypted local storage.',
        skills: ['Cryptography', 'Mobile'],
        href: 'https://github.com/ArunBabu98',
      },
      {
        name: 'huxplex',
        stack: ['Rust'],
        desc: 'A post-quantum eUTXO blockchain — DAG-BFT consensus, Dilithium signatures, and a triple-token model. Cryptography, consensus, and AI in one design.',
        skills: ['Cryptography', 'Systems', 'Research'],
        href: 'https://github.com/ArunBabu98/huxplex',
      },
      {
        name: 'DigiByte Keystore',
        stack: ['Dart'],
        desc: 'A novel mechanism for decentralized encrypted key storage using the DigiByte blockchain OP_RETURN field. MIT-licensed.',
        skills: ['Cryptography', 'Innovation'],
        href: 'https://github.com/ArunBabu98/DigiByte_Keystore',
      },
      {
        name: 'blockfrost (Cardano)',
        stack: ['Dart', 'pub.dev'],
        desc: 'A Cardano Blockfrost API client published to pub.dev — low-level, blockchain-specific bindings for light clients.',
        skills: ['Cryptography', 'Open Source'],
        href: 'https://github.com/ArunBabu98/blockfrost',
      },
      {
        name: 'Multi-chain Dart SDKs',
        stack: ['Dart'],
        desc: 'Authored SDKs for Solana, MultiversX, NEAR, VeChain, Tron, Monero, Litecoin (MWEB), Groestlcoin, and more — rare, high-effort specialisation.',
        skills: ['Cryptography', 'Mobile', 'Breadth'],
        href: 'https://github.com/ArunBabu98',
      },
    ],
  },
  {
    title: 'Systems & Languages',
    blurb: 'Foundations rebuilt from scratch — allocators, interpreters, and a new language.',
    items: [
      {
        name: 'rusty-alloc',
        stack: ['Rust', 'unsafe'],
        desc: 'A from-scratch heap allocator: size-class free lists, block splitting/coalescing, alignment-aware allocation, and rigorously documented unsafe invariants.',
        skills: ['Systems', 'Rust'],
        href: 'https://github.com/ArunBabu98/rusty-alloc',
      },
      {
        name: 'voxlang',
        stack: ['Rust'],
        desc: 'A new programming language, designed and implemented from scratch in Rust.',
        skills: ['Language Design', 'Systems'],
        href: 'https://github.com/ArunBabu98/voxlang',
      },
      {
        name: 'Interpreter',
        stack: ['C'],
        desc: 'A hand-written interpreter in C — lexing, parsing, and evaluation built to understand language runtimes first-hand.',
        skills: ['Language Design', 'Systems'],
        href: 'https://github.com/ArunBabu98/Interpreter',
      },
      {
        name: 'torintel',
        stack: ['Rust'],
        desc: 'A Tor onion-site intelligence-gathering tool in Rust — networking, parsing, and OSINT tradecraft.',
        skills: ['Systems', 'Security'],
        href: 'https://github.com/ArunBabu98/torintel',
      },
    ],
  },
  {
    title: 'Quantum Computing',
    blurb: 'Simulators and hybrid quantum-classical models — where the next decade is heading.',
    items: [
      {
        name: 'quantum-state-simulator',
        stack: ['Rust'],
        desc: 'A quantum state simulator in Rust — state-vector evolution and gate application from first principles.',
        skills: ['Quantum', 'Systems'],
        href: 'https://github.com/ArunBabu98/quantum-state-simulator',
      },
      {
        name: 'qognify',
        stack: ['Rust'],
        desc: 'A Rust-powered visual simulator unifying AI and quantum-computing concepts through interactive, real-time visualization.',
        skills: ['Quantum', 'ML Engineering', 'Visualization'],
        href: 'https://github.com/ArunBabu98/qognify',
      },
      {
        name: 'Quantum-AI-Rust',
        stack: ['Rust', 'Python interop'],
        desc: 'Hands-on, from-scratch simulators, QAOA/VQE, and hybrid QML models in Rust with small benchmarks.',
        skills: ['Quantum', 'Research'],
        href: 'https://github.com/ArunBabu98',
      },
    ],
  },
  {
    title: 'Products (TenshiLabs)',
    blurb: 'AI-native products shipped end to end — client, server, and infrastructure.',
    items: [
      {
        name: 'Sellist',
        stack: ['Flutter', 'AI', 'Node'],
        desc: 'An AI-powered cross-platform seller-listing tool — voice and AI turn raw input into structured, publishable listings across marketplaces.',
        skills: ['Product', 'Mobile', 'ML Engineering'],
        href: 'https://github.com/ArunBabu98',
      },
      {
        name: 'Formly AI',
        stack: ['Flutter', 'OpenAI', 'Firebase', 'Next.js'],
        desc: 'Voice-to-form product: speak a requirement and AI generates a structured, shareable form. Full client + backend.',
        skills: ['Product', 'Mobile', 'Full-stack'],
        href: 'https://github.com/ArunBabu98',
      },
      {
        name: 'cerebexis',
        stack: ['Flutter', 'AI', 'Crypto'],
        desc: 'An AI-powered personalized learning platform that generates custom syllabi, gamifies education, and rewards learners with tokens.',
        skills: ['Product', 'ML Engineering', 'Blockchain'],
        href: 'https://github.com/ArunBabu98',
      },
      {
        name: 'Artbytes',
        stack: ['MERN', 'Ethereum'],
        desc: 'An NFT marketplace on Ethereum built with the MERN stack — an early full-stack + blockchain product.',
        skills: ['Full-stack', 'Blockchain', 'Web'],
        href: 'https://github.com/ArunBabu98/Artbytes',
      },
    ],
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

export interface ParticipantFieldSpec {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "file" | "textarea";
  required: boolean;
  placeholder?: string;
  options?: string[];
  helpText?: string;
  accept?: string;
}

export interface RegistrationConfig {
  eventFormat: "individual" | "team";
  minTeamSize?: number;
  maxTeamSize?: number;
  coreTeamSize?: number;
  optionalSubstituteAllowed?: boolean;
  leaderWorkflow?: "direct_entry" | "invite_members";
  feeAmount: number;
  feeBasis: "per_team" | "per_player" | "per_participant";
  feeDisplay: string;
  deadline?: string;
  teamNameRequired?: boolean;
  teamLeaderRequired?: boolean;
  participantFields: ParticipantFieldSpec[];
  teamFields?: ParticipantFieldSpec[];
  declarations: string[];
  customDeclaration?: string;
  leaderDeclaration?: string;
  coordinator?: {
    name: string;
    phone: string;
    email: string;
    coCoordinator?: string;
  };
  details?: {
    committee?: string;
    agenda?: string;
    duration?: string;
    game?: string;
    maps?: string[];
    format?: string;
  };
}

export interface EventItem {
  id: string;
  aliases?: string[];
  name: string; // Crisp 1-2 word display title (e.g. "HACKATHON", "WEB DEVELOPMENT")
  fullTitle: string; // Complete descriptive name (e.g. "Crucible — Flagship 12-Hour Hackathon")
  badge: string;
  badgeLevel: "Crucible" | "Advanced" | "Intermediate" | "Beginner";
  isFlagship?: boolean;
  trackId: string;
  trackName: string;
  shortDesc: string;
  fullDesc: string;
  time: string;
  date: string;
  prize: string;
  price: string;
  team: string;
  venue: string;
  accentColor: string; // e.g. '#35e0c9'
  glowColor: string;   // rgba
  borderColor: string; // CSS border color
  image: string;
  highlights: string[];
  rules: string[];
  registrationConfig?: RegistrationConfig;
}

export interface TrackItem {
  id: string;
  num: string;
  letter: string;
  name: string;
  subtitle: string;
  description: string;
  accentColor: string;
  badgeClass: string;
}

export const TRACKS: TrackItem[] = [
  {
    id: "all",
    num: "00",
    letter: "ALL",
    name: "ALL ARENAS",
    subtitle: "Complete Directory",
    description: "Browse all competitive arenas across engineering, gaming, stage, and design.",
    accentColor: "#35e0c9",
    badgeClass: "border-circuit/60 text-circuit bg-circuit/10",
  },
  {
    id: "technical",
    num: "01",
    letter: "A",
    name: "TECHNICAL & CODING",
    subtitle: "Software & Systems",
    description: "Hackathons, competitive coding, bug hunting, data analytics, and web development.",
    accentColor: "#35e0c9",
    badgeClass: "border-[#35e0c9]/60 text-[#35e0c9] bg-[#35e0c9]/10",
  },
  {
    id: "ideation",
    num: "02",
    letter: "B",
    name: "KNOWLEDGE & IDEATION",
    subtitle: "AI & Intelligence",
    description: "AI prompt duels, tech history trivia, and academic paper defense.",
    accentColor: "#c084fc",
    badgeClass: "border-purple-400/60 text-purple-300 bg-purple-500/10",
  },
  {
    id: "gaming",
    num: "03",
    letter: "C",
    name: "GAMING & ADVENTURE",
    subtitle: "Esports & Challenges",
    description: "High-stakes squad esports tournaments, robotic obstacle races, and cryptographic hunts.",
    accentColor: "#60a5fa",
    badgeClass: "border-blue-400/60 text-blue-300 bg-blue-500/10",
  },
  {
    id: "stage-central",
    num: "04",
    letter: "D",
    name: "STAGE & CENTRAL",
    subtitle: "Stage & Central Events",
    description: "Ideathon innovation sprints and Model United Nations simulations.",
    accentColor: "#34d399",
    badgeClass: "border-emerald-400/60 text-emerald-300 bg-emerald-500/10",
  },
  {
    id: "learning",
    num: "05",
    letter: "E",
    name: "HANDS-ON LEARNING",
    subtitle: "Masterclasses & Workshops",
    description: "Intensive workshops on low-latency engineering, kernel systems, and AI.",
    accentColor: "#f472b6",
    badgeClass: "border-pink-400/60 text-pink-300 bg-pink-500/10",
  },
  {
    id: "suggested",
    num: "06",
    letter: "F",
    name: "SPECIAL ARENAS",
    subtitle: "Experimental Challenges",
    description: "Wildcard challenges like screenless blind coding and pure mental logic.",
    accentColor: "#f87171",
    badgeClass: "border-rose-400/60 text-rose-300 bg-rose-500/10",
  },
];

export const EVENTS: EventItem[] = [
  // --- TECHNICAL & CODING ---
  {
    id: "crucible",
    name: "HACKATHON",
    fullTitle: "Crucible — Flagship 12-Hour Hackathon",
    badge: "Crucible",
    badgeLevel: "Crucible",
    isFlagship: true,
    trackId: "technical",
    trackName: "TECHNICAL & CODING",
    shortDesc: "12 hours to build, hack, and demo a real working prototype from scratch.",
    fullDesc: "Crucible is XaviTech's flagship 12-hour hackathon. Bring your team, pick a real-world problem in AI, civic tech, or developer tools, and build a working prototype. Mentors will be on the floor throughout the sprint, leading up to live stage demos before our panel of industry judges.",
    time: "09:30 AM – 09:30 PM",
    date: "24 Oct 2026",
    prize: "₹50,000",
    price: "₹1,499",
    team: "2 to 4 Members",
    venue: "Aryabhata Computing Center",
    accentColor: "#ff6848",
    glowColor: "rgba(255,104,72,0.25)",
    borderColor: "rgba(255,104,72,0.5)",
    image: "/images/hackathon.jpeg",
    highlights: [
      "12-Hour Continuous Product Sprint",
      "Direct Mentorship by Senior Tech Architects",
      "Live 3-Minute Stage Pitch & Demo Session",
      "Cloud Credits & API Access Provided"
    ],
    rules: [
      "All code must be written during the 12-hour window.",
      "Open-source libraries and APIs are permitted.",
      "Teams must consist of 2 to 4 members.",
      "Final submission requires a working demo and public Git repo."
    ]
  },
  {
    id: "code-sprint",
    name: "CODE SPRINT",
    fullTitle: "Code Sprint — Competitive Algorithmic Arena",
    badge: "Advanced",
    badgeLevel: "Advanced",
    trackId: "technical",
    trackName: "TECHNICAL & CODING",
    shortDesc: "Battle through timed algorithmic challenges and prove your coding speed.",
    fullDesc: "Test your raw speed, logic, and data structure mastery. Code Sprint puts competitive programmers against a series of algorithmic problems with automated instant evaluation and strict runtime constraints.",
    time: "11:00 AM – 01:30 PM",
    date: "24 Oct 2026",
    prize: "₹15,000",
    price: "₹899",
    team: "Individual",
    venue: "Turing Computer Labs",
    accentColor: "#35e0c9",
    glowColor: "rgba(53,224,201,0.25)",
    borderColor: "rgba(53,224,201,0.4)",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Automated IO Judge Platform",
      "Speed-Based Time Penalties",
      "Language support: C++, Python, Java, Rust, Go"
    ],
    rules: [
      "Individual participation only.",
      "No external AI assistants or search engines allowed during rounds.",
      "Plagiarism detection will run automatically on all submissions."
    ]
  },
  {
    id: "debugging-crucible",
    name: "DEBUGGING",
    fullTitle: "Debugging Arena — Bug Hunting & Optimization",
    badge: "Advanced",
    badgeLevel: "Advanced",
    trackId: "technical",
    trackName: "TECHNICAL & CODING",
    shortDesc: "Track down memory leaks, concurrency bugs, and broken logic under pressure.",
    fullDesc: "Dive into deliberately broken codebases filled with memory leaks, race conditions, and deadlocks. Your goal: diagnose the root cause, fix the bugs, and make sure all unit tests pass before time runs out.",
    time: "02:00 PM – 04:00 PM",
    date: "24 Oct 2026",
    prize: "₹10,000",
    price: "₹699",
    team: "Individual or Pairs (1–2)",
    venue: "Systems Lab",
    accentColor: "#35e0c9",
    glowColor: "rgba(53,224,201,0.25)",
    borderColor: "rgba(53,224,201,0.4)",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Real Bug Diagnosis Scenarios",
      "Profiling & Debugging Tools Allowed",
      "Bonus Points for Runtime Speedups"
    ],
    rules: [
      "Fix bugs without breaking existing test suites.",
      "Time elapsed and test pass rate determine score."
    ]
  },
  {
    id: "data-analytics",
    name: "DATA ANALYTICS",
    fullTitle: "Data Analytics & Insight Sprint",
    badge: "Intermediate",
    badgeLevel: "Intermediate",
    trackId: "technical",
    trackName: "TECHNICAL & CODING",
    shortDesc: "Turn raw datasets into actionable insights and executive dashboards.",
    fullDesc: "Uncover hidden patterns in real-world datasets. Clean messy data, perform exploratory analysis, and present a compelling data dashboard to convince our panel of data scientists.",
    time: "01:30 PM – 04:30 PM",
    date: "24 Oct 2026",
    prize: "₹12,000",
    price: "₹999",
    team: "1 to 2 Members",
    venue: "Analytics Studio",
    accentColor: "#35e0c9",
    glowColor: "rgba(53,224,201,0.25)",
    borderColor: "rgba(53,224,201,0.4)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Real-World Industry Dataset",
      "Choice of Python, SQL, Excel, Power BI or Tableau",
      "Executive Dashboard Pitch Round"
    ],
    rules: [
      "Open choice of analytical tools.",
      "Final submission requires interactive dashboard + summary presentation."
    ]
  },
  {
    id: "ui-ux-designathon",
    name: "UI/UX DESIGN",
    fullTitle: "UI/UX Designathon — Design Systems & Workflows",
    badge: "Intermediate",
    badgeLevel: "Intermediate",
    trackId: "technical",
    trackName: "TECHNICAL & CODING",
    shortDesc: "Design high-fidelity interfaces and modern design systems for web apps.",
    fullDesc: "Take a user problem statement and transform it into a stunning, responsive UI prototype. Focus on micro-interactions, accessibility, component consistency, and visual hierarchy.",
    time: "10:30 AM – 02:00 PM",
    date: "24 Oct 2026",
    prize: "₹12,000",
    price: "₹899",
    team: "1 to 2 Members",
    venue: "Design Innovation Lab",
    accentColor: "#c084fc",
    glowColor: "rgba(192,132,252,0.25)",
    borderColor: "rgba(192,132,252,0.4)",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Figma / Framer Interactive Prototyping",
      "Design System & Accessibility Evaluation",
      "Live Design Critique by Senior Product Designers"
    ],
    rules: [
      "All designs must be original work created during the event.",
      "Prototypes must show desktop and mobile views."
    ]
  },
  {
    id: "web-craft",
    name: "WEB DEVELOPMENT",
    fullTitle: "Web Craft — Interactive Web App Build",
    badge: "Intermediate",
    badgeLevel: "Intermediate",
    trackId: "technical",
    trackName: "TECHNICAL & CODING",
    shortDesc: "Build interactive full-stack web applications with modern frameworks.",
    fullDesc: "Create dynamic, fast, and visually striking web apps using Next.js, React, Three.js, or Tailwind. Ship your app live by the deadline and demonstrate performance and polished UI.",
    time: "01:00 PM – 05:00 PM",
    date: "24 Oct 2026",
    prize: "₹12,000",
    price: "₹999",
    team: "1 to 2 Members",
    venue: "Computing Lab 5",
    accentColor: "#f0a15b",
    glowColor: "rgba(240,161,91,0.25)",
    borderColor: "rgba(240,161,91,0.4)",
    image: "/images/webdev.jpeg",
    highlights: [
      "Modern Web Stack: Next.js, React, Tailwind, Framer",
      "Performance & Responsive UI Evaluation",
      "Live Deployment Verification"
    ],
    rules: [
      "App must be deployed live on Vercel / Netlify / Render by deadline.",
      "Teams of 1 to 2 members."
    ]
  },

  // --- KNOWLEDGE & IDEATION ---
  {
    id: "ai-prompt-duel",
    name: "AI PROMPT BATTLE",
    fullTitle: "AI Prompt & Agent Duel",
    badge: "Intermediate",
    badgeLevel: "Intermediate",
    trackId: "ideation",
    trackName: "KNOWLEDGE & IDEATION",
    shortDesc: "Craft AI prompts and autonomous agents to outsmart rivals in real time.",
    fullDesc: "Put your prompt engineering skills to the test. Combine system prompts, context windows, and autonomous agent chains to solve complex logic puzzles faster than rival teams.",
    time: "03:00 PM – 05:00 PM",
    date: "24 Oct 2026",
    prize: "₹10,000",
    price: "₹799",
    team: "Individual",
    venue: "Cognitive Computing Theater",
    accentColor: "#c084fc",
    glowColor: "rgba(192,132,252,0.25)",
    borderColor: "rgba(192,132,252,0.4)",
    image: "/events/ai_prompt_duel.jpg",
    highlights: [
      "Prompt Optimization & Agentic Workflows",
      "Token Efficiency & Accuracy Scoring",
      "Live Arena Leaderboard"
    ],
    rules: [
      "Individual competition.",
      "Standard LLM API keys provided at event start."
    ]
  },
  {
    id: "chronos-tech-quiz",
    name: "TECH QUIZ",
    fullTitle: "The Chronos Tech Quiz & Trivia",
    badge: "Beginner",
    badgeLevel: "Beginner",
    trackId: "ideation",
    trackName: "KNOWLEDGE & IDEATION",
    shortDesc: "Fast-paced trivia covering computing history, silicon, and sci-fi lore.",
    fullDesc: "From the early days of computing to modern AI breakthroughs and internet lore, Chronos tests your team's knowledge across rapid-fire buzzer rounds and visual trivia.",
    time: "11:30 AM – 01:30 PM",
    date: "24 Oct 2026",
    prize: "₹8,000",
    price: "₹499",
    team: "Pairs (2 Members)",
    venue: "Auditorium Minor",
    accentColor: "#c084fc",
    glowColor: "rgba(192,132,252,0.25)",
    borderColor: "rgba(192,132,252,0.4)",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Buzzer & Audio-Visual Trivia Rounds",
      "Tech History, Silicon, Cryptography & Pop Culture",
      "Live Stage Finalist Showdown"
    ],
    rules: [
      "Teams of 2 members.",
      "No electronic devices during active rounds."
    ]
  },
  {
    id: "research-paper-symposium",
    name: "RESEARCH SYMPOSIUM",
    fullTitle: "Research Paper Symposium & Defense",
    badge: "Advanced",
    badgeLevel: "Advanced",
    trackId: "ideation",
    trackName: "KNOWLEDGE & IDEATION",
    shortDesc: "Present and defend original research in AI, systems, or cybersecurity.",
    fullDesc: "An academic defense stage for student researchers. Present your papers or literature reviews before computer science faculty, explain your methodology, and answer jury questions.",
    time: "02:00 PM – 05:00 PM",
    date: "24 Oct 2026",
    prize: "₹12,000",
    price: "₹999",
    team: "1 to 3 Authors",
    venue: "Academic Senate Chamber",
    accentColor: "#c084fc",
    glowColor: "rgba(192,132,252,0.25)",
    borderColor: "rgba(192,132,252,0.4)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "10-Minute Slide Defense + Q&A",
      "Faculty Peer Review Feedback",
      "Publication opportunity in Fest Proceedings"
    ],
    rules: [
      "10-minute presentation + 5-minute Q&A defense.",
      "1 to 3 authors per paper submission."
    ]
  },

  // --- HANDS-ON LEARNING ---
  {
    id: "masterclass-applied-systems",
    name: "MASTERCLASS",
    fullTitle: "Masterclass: Applied Systems & AI",
    badge: "Intermediate",
    badgeLevel: "Intermediate",
    trackId: "learning",
    trackName: "HANDS-ON LEARNING",
    shortDesc: "Hands-on workshop on low-latency systems and kernel engineering.",
    fullDesc: "An interactive session led by senior systems engineers. Learn how low-latency code works under the hood, how to profile performance, and how to optimize Linux systems.",
    time: "02:30 PM – 05:00 PM",
    date: "24 Oct 2026",
    prize: "Masterclass Badge",
    price: "₹1,299",
    team: "Individual Access",
    venue: "Auditorium Major",
    accentColor: "#f472b6",
    glowColor: "rgba(244,114,182,0.25)",
    borderColor: "rgba(244,114,182,0.4)",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Live Guided Code Walkthroughs",
      "Digital Certificate of Mastery",
      "Take-Home Code Repositories & Resources"
    ],
    rules: [
      "Open to all registered attendees.",
      "Bring a laptop with Python/Docker installed."
    ]
  },

  // --- FUN & ADVENTURE ---
  {
    id: "geodesic-cipher-hunt",
    name: "CIPHER HUNT",
    fullTitle: "The Geodesic Cipher Hunt — Treasure Quest",
    badge: "Intermediate",
    badgeLevel: "Intermediate",
    trackId: "adventure",
    trackName: "FUN & ADVENTURE",
    shortDesc: "Campus-wide cryptographic treasure hunt decoding steganography and ciphers.",
    fullDesc: "Race across campus solving steganographic images, QR codes, cipher riddles, and physical hardware beacons. First team to unlock the final master vault wins.",
    time: "03:30 PM – 06:00 PM",
    date: "24 Oct 2026",
    prize: "₹10,000",
    price: "₹699",
    team: "Teams of 3 to 4",
    venue: "Campus-wide",
    accentColor: "#fbbf24",
    glowColor: "rgba(251,191,36,0.25)",
    borderColor: "rgba(251,191,36,0.4)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Physical & Digital Hybrid Clues",
      "QR Codes & Hardware Beacon Intercepts",
      "Real-Time Leaderboard Tracking"
    ],
    rules: [
      "Teams of 3 to 4 members.",
      "All clues must be solved within campus boundaries."
    ]
  },
  {
    id: "death-race",
    name: "DEATH RACE",
    fullTitle: "Death Race: Robotic Obstacle Arena",
    badge: "Advanced",
    badgeLevel: "Advanced",
    isFlagship: true,
    trackId: "adventure",
    trackName: "FUN & ADVENTURE",
    shortDesc: "Custom robotic rovers battling through mud, inclines, and obstacles.",
    fullDesc: "Build your wired or wireless robotic rover and take on our rugged obstacle arena. Maneuver through incline ramps, rotating barriers, and tight bridges in a high-speed timed race.",
    time: "01:00 PM – 04:00 PM",
    date: "24 Oct 2026",
    prize: "₹15,000",
    price: "₹1,199",
    team: "2 to 3 Members",
    venue: "Outdoor Robotics Colosseum",
    accentColor: "#fbbf24",
    glowColor: "rgba(251,191,36,0.25)",
    borderColor: "rgba(251,191,36,0.4)",
    image: "/events/death_race.jpg",
    highlights: [
      "Custom Outdoor Obstacle Course",
      "Timed Speed Laps + Obstacle Clearances",
      "Bot Inspection & Pit Stop Area"
    ],
    rules: [
      "Bot weight must not exceed 5 kg.",
      "Maximum supply voltage ≤ 24V."
    ]
  },

  // --- GAMING ARENA ---
  {
    id: "battlefield-blitz",
    aliases: ["bgmi-arena"],
    name: "BATTLEFIELD BLITZ",
    fullTitle: "Battlefield Blitz — BGMI Esports Competition",
    badge: "Crucible",
    badgeLevel: "Crucible",
    isFlagship: true,
    trackId: "gaming",
    trackName: "GAMING & ADVENTURE (TRACK C)",
    shortDesc: "Squad-based BGMI Esports Tournament across Erangel, Miramar, and Rondo.",
    fullDesc: "Battlefield Blitz is a team-based BGMI esports competition under XAVITECH 2026. Squads of 4 core players + 1 optional substitute compete in BO3 matches across Erangel, Miramar, and Rondo using Advanced Custom Rooms.",
    time: "TBA",
    date: "20 Oct 2026",
    prize: "₹12,000",
    price: "₹200 / player",
    team: "4 Core + 1 Optional Sub (4–5 Players)",
    venue: "Esports Arena",
    accentColor: "#60a5fa",
    glowColor: "rgba(96,165,250,0.25)",
    borderColor: "rgba(96,165,250,0.4)",
    image: "/events/bgmi_arena.jpg",
    highlights: [
      "BO3 Matches on Erangel, Miramar & Rondo",
      "4 Core Players + 1 Optional Substitute",
      "₹200 per player fee (4 players = ₹800, 5 players = ₹1,000)",
      "Advanced Custom Room credentials released privately to Team Leader"
    ],
    rules: [
      "Mobile devices only (Emulators, macros, hacks, cheats, and unauthorized hardware prohibited).",
      "4 core players are mandatory. 5th player (substitute) is optional.",
      "Team Leader registers and submits all player details.",
      "BGMI IGN and Character ID/UID required for all players."
    ],
    registrationConfig: {
      eventFormat: "team",
      minTeamSize: 4,
      maxTeamSize: 5,
      coreTeamSize: 4,
      optionalSubstituteAllowed: true,
      leaderWorkflow: "direct_entry",
      feeAmount: 200,
      feeBasis: "per_player",
      feeDisplay: "₹200 per player (4 players = ₹800, 5 players = ₹1,000)",
      deadline: "20 October 2026",
      teamNameRequired: true,
      teamLeaderRequired: true,
      coordinator: {
        name: "Umang Sahni",
        phone: "9308463995",
        email: "umangsahni2008@gmail.com",
        coCoordinator: "Joshua Singh"
      },
      details: {
        game: "BGMI",
        maps: ["Erangel", "Miramar", "Rondo"],
        format: "BO3 — Best of 3 (Advanced Custom Room)"
      },
      participantFields: [
        { id: "fullName", label: "Full Name", type: "text", required: true, placeholder: "As per college ID or Govt photo ID" },
        { id: "college", label: "College / University", type: "text", required: true, placeholder: "Full institution name" },
        { id: "department", label: "Department / Course", type: "text", required: false, placeholder: "Optional for external players" },
        { id: "yearSem", label: "Year / Semester", type: "text", required: false, placeholder: "Optional" },
        { id: "mobile", label: "Mobile Number", type: "tel", required: true, placeholder: "Used for room-pass details" },
        { id: "email", label: "Email ID", type: "email", required: true, placeholder: "active.email@example.com" },
        { id: "bgmiIgn", label: "BGMI In-Game Name (IGN)", type: "text", required: true, placeholder: "Exact BGMI username" },
        { id: "bgmiUid", label: "BGMI Character ID / UID", type: "text", required: true, placeholder: "e.g. 5123456789" },
        { id: "studentId", label: "Student ID / Roll Number", type: "text", required: false, placeholder: "Required for XUP students, optional for external" },
        { id: "city", label: "City", type: "text", required: false, placeholder: "Current city" },
        { id: "collegeId", label: "Valid Identity Proof (College / Govt ID)", type: "file", required: true, accept: "image/*,application/pdf", helpText: "College ID or Govt ID for external players" },
        { id: "profilePhoto", label: "Profile Photo", type: "file", required: false, accept: "image/*", helpText: "Roster display photo (optional)" }
      ],
      declarations: [
        "Information provided is true and correct.",
        "Participant agrees to follow event rules.",
        "Participant agrees to the event's code of conduct.",
        "Participant permits use of submitted information for event administration.",
        "Participant permits event-related photographs/videos to be used for official promotional purposes."
      ],
      customDeclaration: "I/We declare that all information submitted (personal, institutional, and BGMI in-game IDs) is true and accurate; providing false, misleading, or fraudulent information will lead to immediate disqualification without refund. I/We will not use hacks, cheats, exploits, macros, or unauthorized software/hardware, and will not engage in match-fixing, account sharing, ID spoofing, or impersonation; any violation may lead to disqualification, forfeiture of prizes/certificates, and may be reported to the university administration.",
      leaderDeclaration: "Team Leader confirms all squad member details (including optional substitute) are accurate, every member has consented to participate, and the team will comply with tournament rules and Advanced Custom Room device restrictions."
    }
  },

  // --- GLOBAL AFFAIRS MUN ---
  {
    id: "model-united-nations",
    aliases: ["tech-mun", "mun"],
    name: "MODEL UNITED NATIONS",
    fullTitle: "Model United Nations (MUN)",
    badge: "Advanced",
    badgeLevel: "Advanced",
    trackId: "stage-central",
    trackName: "STAGE & CENTRAL (TRACK D)",
    shortDesc: "Individual Delegate Registration — United Nations CSTD Committee",
    fullDesc: "Model United Nations (MUN) simulation under XAVITECH 2026. Committee: United Nations Commission on Science and Technology for Development (CSTD). Agenda: Addressing the Opportunities and Risks of Artificial Intelligence and Emerging Technologies for Inclusive and Sustainable Development.",
    time: "5–5.5 hours",
    date: "To be announced",
    prize: "Best Delegate & Commendation Awards",
    price: "₹400",
    team: "Individual Delegate",
    venue: "Convention Hall Alpha",
    accentColor: "#34d399",
    glowColor: "rgba(52,211,153,0.25)",
    borderColor: "rgba(52,211,153,0.4)",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "UN CSTD Committee Simulation",
      "Agenda: Opportunities & Risks of AI for Inclusive Development",
      "Individual Delegate format (60–70 delegates)",
      "5–5.5 Hours expected duration"
    ],
    rules: [
      "By registering for Xavitech 2026 MUN, the participant confirms that the information submitted is accurate, agrees to comply with the committee procedure, event rules and code of conduct, and accepts the instructions of the organising team.",
      "One registration per delegate.",
      "Valid College ID & Profile Photo required for registration."
    ],
    registrationConfig: {
      eventFormat: "individual",
      feeAmount: 400,
      feeBasis: "per_participant",
      feeDisplay: "₹400 per delegate",
      deadline: "To be announced",
      coordinator: {
        name: "Archie Mrinal",
        phone: "7970352643",
        email: "archie22mrinal@gmail.com",
        coCoordinator: "Zoha Ashraf"
      },
      details: {
        committee: "United Nations Commission on Science and Technology for Development (CSTD)",
        agenda: "Addressing the Opportunities and Risks of Artificial Intelligence and Emerging Technologies for Inclusive and Sustainable Development",
        duration: "5–5.5 hours"
      },
      participantFields: [
        { id: "fullName", label: "Full Name", type: "text", required: true, placeholder: "As per college ID" },
        { id: "college", label: "College / University", type: "text", required: true, placeholder: "Full institution name" },
        { id: "department", label: "Department / Course", type: "text", required: true, placeholder: "e.g. BCA, B.Tech, BBA" },
        { id: "yearSem", label: "Year / Semester", type: "text", required: true, placeholder: "e.g. 2nd Year / 4th Sem" },
        { id: "section", label: "Section", type: "text", required: false, placeholder: "Optional section" },
        { id: "mobile", label: "Mobile Number", type: "tel", required: true, placeholder: "10-digit mobile number" },
        { id: "email", label: "Email ID", type: "email", required: true, placeholder: "active.email@example.com" },
        { id: "studentId", label: "Student ID / Roll Number", type: "text", required: true, placeholder: "College roll / registration number" },
        { id: "city", label: "City", type: "text", required: true, placeholder: "Current city" },
        { id: "collegeId", label: "Valid College ID Card", type: "file", required: true, accept: "image/*,application/pdf", helpText: "Clear image or PDF upload" },
        { id: "profilePhoto", label: "Profile Photo", type: "file", required: true, accept: "image/*", helpText: "Recent passport-style photograph" }
      ],
      declarations: [
        "Information provided is true and correct.",
        "Participant agrees to follow event rules.",
        "Participant agrees to the event's code of conduct.",
        "Participant permits use of submitted information for event administration.",
        "Participant permits event-related photographs/videos to be used for official promotional purposes."
      ],
      customDeclaration: "By registering for Xavitech 2026 MUN, the participant confirms that the information submitted is accurate, agrees to comply with the committee procedure, event rules and code of conduct, and accepts the instructions of the organising team."
    }
  },

  // --- STAGE & CENTRAL ---
  {
    id: "ideathon",
    aliases: ["xavitech-ideathon"],
    name: "IDEATHON",
    fullTitle: "XAVITECH 2026 — Ideathon",
    badge: "Advanced",
    badgeLevel: "Advanced",
    isFlagship: true,
    trackId: "stage-central",
    trackName: "STAGE & CENTRAL (TRACK D)",
    shortDesc: "Stage & Central Event — Innovate and pitch tech solutions.",
    fullDesc: "XAVITECH 2026 Ideathon is a team-based competition open to eligible college/university students. Submit team details, invite members (2–4 total), and present your proposed technical solution.",
    time: "TBA",
    date: "To be announced",
    prize: "TBA",
    price: "₹500 / team",
    team: "Team (2–4 Members)",
    venue: "Main Stage / Central Arena",
    accentColor: "#c084fc",
    glowColor: "rgba(192,132,252,0.25)",
    borderColor: "rgba(192,132,252,0.4)",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Team-based innovation sprint (2–4 members)",
      "₹500 flat team registration fee",
      "Invite/link workflow for member joining",
      "Valid College ID & Profile Photo required for all members"
    ],
    rules: [
      "By registering for Xavitech 2026 Ideathon, the participant confirms that the information submitted is accurate, agrees to comply with the committee procedure, event rules and code of conduct, and accepts the instructions of the organising team.",
      "Teams must consist of 2 to 4 members.",
      "One participant cannot belong to multiple teams.",
      "Separate independent member registrations are not allowed."
    ],
    registrationConfig: {
      eventFormat: "team",
      minTeamSize: 2,
      maxTeamSize: 4,
      leaderWorkflow: "invite_members",
      feeAmount: 500,
      feeBasis: "per_team",
      feeDisplay: "₹500 per team (Flat total for 2–4 members)",
      deadline: "To be announced",
      teamNameRequired: true,
      teamLeaderRequired: true,
      coordinator: {
        name: "Amanjeet Sinha",
        phone: "7970499973",
        email: "sinhaamanjeet@gmail.com"
      },
      participantFields: [
        { id: "fullName", label: "Full Name", type: "text", required: true, placeholder: "As per college ID" },
        { id: "college", label: "College / University", type: "text", required: true, placeholder: "Full institution name" },
        { id: "department", label: "Department / Course", type: "text", required: true, placeholder: "e.g. B.Tech Computer Science" },
        { id: "yearSem", label: "Year / Semester", type: "text", required: true, placeholder: "e.g. 3rd Year / 5th Sem" },
        { id: "mobile", label: "Mobile Number", type: "tel", required: true, placeholder: "10-digit mobile number" },
        { id: "email", label: "Email ID", type: "email", required: true, placeholder: "active.email@example.com" },
        { id: "city", label: "City", type: "text", required: true, placeholder: "Current city" },
        { id: "collegeId", label: "Valid College ID Card", type: "file", required: true, accept: "image/*,application/pdf", helpText: "Clear image or PDF upload" },
        { id: "profilePhoto", label: "Profile Photo", type: "file", required: true, accept: "image/*", helpText: "Recent passport-style photo" }
      ],
      teamFields: [
        { id: "proposedIdea", label: "Proposed Idea", type: "textarea", required: false, placeholder: "Brief outline or summary of proposed idea (optional)" }
      ],
      declarations: [
        "Information provided is true and correct.",
        "Participant agrees to follow event rules.",
        "Participant agrees to the event's code of conduct.",
        "Participant permits use of submitted information for event administration.",
        "Participant permits event-related photographs/videos to be used for official promotional purposes."
      ],
      customDeclaration: "By registering for Xavitech 2026 Ideathon, the participant confirms that the information submitted is accurate, agrees to comply with the committee procedure, event rules and code of conduct, and accepts the instructions of the organising team."
    }
  },

  // --- SUGGESTED ARENAS ---
  {
    id: "blind-coding",
    name: "BLIND CODING",
    fullTitle: "Blind Coding & Screenless Logic",
    badge: "Advanced",
    badgeLevel: "Advanced",
    trackId: "suggested",
    trackName: "SPECIAL ARENAS",
    shortDesc: "Write error-free code with your monitor switched off.",
    fullDesc: "No visual feedback allowed! You get the problem statement, but your screen is turned off while you type. Rely purely on mental syntax and compilation before running your code.",
    time: "04:00 PM – 05:30 PM",
    date: "24 Oct 2026",
    prize: "₹6,000",
    price: "₹499",
    team: "Individual",
    venue: "Retro Computing Lab",
    accentColor: "#f87171",
    glowColor: "rgba(248,113,113,0.25)",
    borderColor: "rgba(248,113,113,0.4)",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Monitors Turned Off During Typing Phase",
      "Mental Syntax & Compilation Test",
      "Instant Code Run at Final Bell"
    ],
    rules: [
      "Monitors must remain off during typing.",
      "Compilation or syntax errors incur point deductions."
    ]
  }
];

export function getEventByIdOrSlug(idOrSlug: string): EventItem | undefined {
  if (!idOrSlug) return undefined;
  const lower = idOrSlug.toLowerCase();
  return EVENTS.find(
    (e) => e.id.toLowerCase() === lower || e.aliases?.some((a) => a.toLowerCase() === lower)
  );
}

export function getEventRegistrationConfig(event: EventItem): RegistrationConfig {
  if (event.registrationConfig) {
    return event.registrationConfig;
  }

  const isTeam = Boolean(
    event.team &&
    (event.team.toLowerCase().includes("team") ||
      event.team.toLowerCase().includes("members") ||
      event.team.toLowerCase().includes("squad") ||
      event.team.toLowerCase().includes("pairs"))
  );
  const feeNum = parseInt(event.price.replace(/[^0-9]/g, "")) || 0;

  return {
    eventFormat: isTeam ? "team" : "individual",
    minTeamSize: isTeam ? 2 : 1,
    maxTeamSize: isTeam ? 4 : 1,
    feeAmount: feeNum,
    feeBasis: isTeam ? "per_team" : "per_participant",
    feeDisplay: event.price ? `${event.price} total` : "Free",
    deadline: event.date,
    teamNameRequired: isTeam,
    teamLeaderRequired: isTeam,
    participantFields: [
      { id: "fullName", label: "Full Name", type: "text", required: true, placeholder: "Enter full name" },
      { id: "email", label: "Email Address", type: "email", required: true, placeholder: "your.email@example.com" },
      { id: "mobile", label: "Phone Number", type: "tel", required: true, placeholder: "+91 98765 43210" },
      { id: "college", label: "College / Organization", type: "text", required: true, placeholder: "Institution name" },
      { id: "city", label: "City", type: "text", required: false, placeholder: "City name" }
    ],
    declarations: [
      "I confirm that all provided information is accurate.",
      "I agree to abide by XAVITECH 2026 code of conduct and event rules."
    ]
  };
}


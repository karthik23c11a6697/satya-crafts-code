import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useMotionValue,
  animate,
  AnimatePresence,
} from "framer-motion";
import {
  SiPython,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiJupyter,
} from "react-icons/si";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowUp,
  FaCode,
  FaBrain,
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaExternalLinkAlt,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaCertificate,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  profile,
  highlights,
  stats,
  skills,
  projects,
  education,
  navLinks,
  typewriterRoles,
  experience,
  certifications,
  achievements,
  projectCategories,
  type ProjectCategory,
} from "@/data/portfolio";
import resumeAsset from "@/assets/resume.asset.json";

const RESUME_URL = resumeAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Satya Karthik — Aspiring Machine Learning Engineer & Data Analyst",
      },
      {
        name: "description",
        content:
          "Portfolio of Satya Karthik — Python developer, ML enthusiast and Data Analyst. Projects in machine learning, data analysis, automation and EDA. Open to internships and full-time roles.",
      },
      {
        name: "keywords",
        content:
          "Satya Karthik, Machine Learning Engineer, Data Analyst, Python Developer, AI Intern, ML Portfolio, Data Science Portfolio",
      },
      {
        property: "og:title",
        content:
          "Satya Karthik — Aspiring Machine Learning Engineer & Data Analyst",
      },
      {
        property: "og:description",
        content:
          "Turning data into decisions and building intelligent, automation-first solutions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Satya Karthik — ML Engineer & Data Analyst",
      },
      {
        name: "twitter:description",
        content:
          "Python developer, ML enthusiast & Data Analyst. Open to internships and full-time opportunities.",
      },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Aspiring Machine Learning Engineer & Data Analyst",
          description: profile.summary,
          email: `mailto:${profile.email}`,
          telephone: profile.phone,
          url: "/",
          sameAs: [profile.github, profile.linkedin],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kodad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Anurag College of Engineering",
          },
          knowsAbout: [
            "Python",
            "Machine Learning",
            "Data Analysis",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Artificial Intelligence",
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

/* ───────────────────────── Particles ───────────────────────── */
function ParticleField() {
  const particles = Array.from({ length: 28 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 14 + 12;
        return (
          <motion.span
            key={i}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 1, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              background:
                i % 3 === 0
                  ? "var(--cyan)"
                  : i % 3 === 1
                    ? "var(--electric)"
                    : "white",
              boxShadow: "0 0 8px currentColor",
            }}
          />
        );
      })}
    </div>
  );
}

/* ───────────────────────── Navbar ───────────────────────── */
function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav className="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--electric)] to-[var(--cyan)] text-background">
            SK
          </span>
          <span className="hidden sm:inline">
            Satya<span className="text-gradient">.</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const id = l.href.slice(1);
            const isActive = active === id;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[var(--electric)] to-[var(--cyan)]"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-lg bg-gradient-to-r from-[var(--electric)] to-[var(--cyan)] px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-105 lg:inline-flex"
        >
          Hire me
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden rounded-lg p-2 text-foreground"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong mx-auto mt-2 max-w-6xl rounded-2xl p-3 lg:hidden"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ───────────────────────── Reveal wrapper ───────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────────── Counter ───────────────────────── */
function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, mv]);
  return <span ref={ref}>{val}+</span>;
}

/* ───────────────────────── Section title ───────────────────────── */
function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--cyan)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--electric)] to-[var(--cyan)]" />
    </Reveal>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
const techIcons = [
  { Icon: SiPython, name: "Python", color: "#3776AB" },
  { Icon: SiPandas, name: "Pandas", color: "#150458" },
  { Icon: SiNumpy, name: "NumPy", color: "#4DABCF" },
  { Icon: SiScikitlearn, name: "Scikit-learn", color: "#F7931E" },
  { Icon: SiMysql, name: "SQL", color: "#4479A1" },
  { Icon: FaBrain, name: "ML", color: "#22d3ee" },
];

function Typewriter({ words }: { words: string[] }) {
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    const speed = deleting ? 45 : 95;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words]);
  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] -translate-y-[2px] bg-[var(--cyan)] align-middle animate-pulse" />
    </span>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <ParticleField />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <Reveal>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cyan)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--cyan)]" />
            </span>
            {profile.availability}
          </motion.div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm <br />
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <div className="mt-5 min-h-[2em] text-lg font-medium sm:text-xl md:text-2xl">
            I'm an <Typewriter words={typewriterRoles} />
          </div>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[var(--electric)] to-[var(--cyan)] px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105 glow"
            >
              <FaRocket /> View Projects
            </a>
            <a
              href={RESUME_URL}
              download
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              <FaDownload /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
            >
              <FaEnvelope /> Contact
            </a>
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass grid h-10 w-10 place-items-center rounded-xl text-[var(--cyan)] transition-transform hover:scale-110 hover:text-foreground"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass grid h-10 w-10 place-items-center rounded-xl text-[var(--cyan)] transition-transform hover:scale-110 hover:text-foreground"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="glass grid h-10 w-10 place-items-center rounded-xl text-[var(--cyan)] transition-transform hover:scale-110 hover:text-foreground"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="relative">
          <div className="relative mx-auto aspect-square max-w-md">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--electric), var(--cyan), var(--electric), transparent 70%, var(--electric))",
                filter: "blur(2px)",
                padding: "2px",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))",
              }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--electric)]/40 to-[var(--cyan)]/30 blur-3xl" />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-dashed border-white/15"
            />
            <div className="absolute inset-[18%] grid place-items-center rounded-full bg-gradient-to-br from-[var(--electric)] to-[var(--cyan)] p-[3px] glow">
              <div className="grid h-full w-full place-items-center rounded-full bg-background font-display text-6xl font-bold text-gradient">
                SK
              </div>
            </div>
            {techIcons.map((t, i) => {
              const angle = (i / techIcons.length) * Math.PI * 2 - Math.PI / 2;
              const r = 48;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  transition={{
                    opacity: { delay: 0.6 + i * 0.1 },
                    scale: { delay: 0.6 + i * 0.1, type: "spring" },
                    y: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
                  }}
                  whileHover={{ scale: 1.15 }}
                  className="glass-strong absolute grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl text-2xl"
                  style={{
                    left: `${50 + x}%`,
                    top: `${50 + y}%`,
                    color: t.color,
                  }}
                  title={t.name}
                >
                  <t.Icon />
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── About ───────────────────────── */
const highlightIcons = [FaLightbulb, FaRocket, FaUsers, FaBrain, FaCode];

function About() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Who I am" title="About Me" />
        <div className="grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="glass-strong rounded-3xl p-8">
              <p className="text-base leading-relaxed text-muted-foreground">{profile.about}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {highlights.map((h, i) => {
                  const Icon = highlightIcons[i % highlightIcons.length];
                  return (
                    <span
                      key={h}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium"
                    >
                      <Icon className="text-[var(--cyan)]" /> {h}
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass group relative overflow-hidden rounded-2xl p-5 transition-transform hover:-translate-y-1"
                >
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[var(--electric)]/20 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="font-display text-3xl font-bold text-gradient">
                      <Counter to={s.value} />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Skills ───────────────────────── */
const skillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Python: SiPython,
  SQL: SiMysql,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  "Scikit-learn": SiScikitlearn,
  Matplotlib: FaCode,
  Git: SiGit,
  GitHub: FaGithub,
  "Jupyter Notebook": SiJupyter,
};

function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="What I work with" title="Skills & Tech Stack" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="glass-strong group h-full rounded-2xl p-6 transition-all hover:border-[var(--cyan)]/40 hover:shadow-[0_0_30px_-10px_var(--cyan)]">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--cyan)]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const Icon = skillIconMap[item];
                    return (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs font-medium transition-colors hover:border-[var(--electric)]/40 hover:bg-[var(--electric)]/10"
                      >
                        {Icon && <Icon className="text-[var(--cyan)]" />}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Experience ───────────────────────── */
function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Where I've worked" title="Experience" />
        <div className="relative space-y-6">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--electric)] via-[var(--cyan)] to-transparent" />
          {experience.map((e, i) => (
            <Reveal key={e.role + e.company} delay={i * 0.1}>
              <div className="relative pl-14">
                <div className="absolute left-0 top-2 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--electric)] to-[var(--cyan)] text-background glow">
                  <FaBriefcase />
                </div>
                <div className="glass-strong rounded-2xl p-6 transition-transform hover:-translate-y-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold">{e.role}</h3>
                      <p className="text-sm text-[var(--cyan)]">{e.company}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{e.location}</p>
                  <ul className="mt-4 space-y-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                        <FaCheckCircle className="mt-1 shrink-0 text-[var(--cyan)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Projects ───────────────────────── */
function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Selected work" title="Featured Projects" />
        <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
          {(["All", ...projectCategories] as const).map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  active
                    ? "text-background"
                    : "border border-white/10 bg-white/[0.03] text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--electric)] to-[var(--cyan)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            );
          })}
        </Reveal>
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass-strong group relative flex h-full flex-col overflow-hidden rounded-2xl"
              >
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[var(--electric)]/30 via-transparent to-[var(--cyan)]/20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
                  <div className="absolute inset-0 grid place-items-center font-display text-5xl font-bold text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold text-[var(--cyan)] backdrop-blur">
                    {p.category}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-black/40 px-2 py-0.5 text-[10px] font-medium backdrop-blur"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold transition-colors group-hover:text-[var(--cyan)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

                  <div className="mt-4 space-y-3 text-xs">
                    <div>
                      <p className="font-semibold text-[var(--cyan)]">Problem</p>
                      <p className="mt-0.5 text-muted-foreground">{p.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--cyan)]">Solution</p>
                      <p className="mt-0.5 text-muted-foreground">{p.solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--cyan)]">Impact</p>
                      <p className="mt-0.5 text-muted-foreground">{p.impact}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {p.features.slice(0, 3).map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <span className="h-1 w-1 rounded-full bg-[var(--cyan)]" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center justify-end gap-2 border-t border-white/10 pt-4">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-[var(--cyan)] hover:text-background"
                      >
                        <FaExternalLinkAlt className="text-[10px]" /> Demo
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-[var(--electric)] hover:text-background"
                    >
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────── GitHub ───────────────────────── */
function GitHubShowcase() {
  const username = profile.githubUsername;
  return (
    <section id="github" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Open source" title="GitHub Activity" />
        <Reveal>
          <div className="glass-strong overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <img
                  src={`https://ghchart.rshah.org/22d3ee/${username}`}
                  alt={`${username} GitHub contributions`}
                  loading="lazy"
                  className="w-full rounded-xl"
                />
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=22d3ee&icon_color=60a5fa&text_color=cbd5e1`}
                    alt="GitHub stats"
                    loading="lazy"
                    className="w-full"
                  />
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=22d3ee&text_color=cbd5e1`}
                    alt="Top languages"
                    loading="lazy"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="glass rounded-2xl p-5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">GitHub</p>
                  <p className="mt-1 font-display text-xl font-bold">@{username}</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Public repositories spanning machine learning, exploratory data analysis,
                    and Python automation.
                  </p>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--electric)] to-[var(--cyan)] px-4 py-2 text-sm font-semibold text-background transition-transform hover:scale-105"
                  >
                    <FaGithub /> Visit Profile <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=00000000&ring=22d3ee&fire=60a5fa&currStreakLabel=22d3ee`}
                  alt="GitHub streak"
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── Education ───────────────────────── */
function Education() {
  return (
    <section id="education" className="relative py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Background" title="Education" />
        <div className="relative space-y-6">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--electric)] via-[var(--cyan)] to-transparent" />
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <div className="relative pl-14">
                <div className="absolute left-0 top-2 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--electric)] to-[var(--cyan)] text-background glow">
                  <FaGraduationCap />
                </div>
                <div className="glass-strong rounded-2xl p-6 transition-transform hover:-translate-y-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold">{e.degree}</h3>
                      <p className="text-sm text-[var(--cyan)]">{e.institution}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold">
                      {e.year}
                    </span>
                  </div>
                  {e.score && (
                    <p className="mt-2 text-sm font-semibold text-gradient">{e.score}</p>
                  )}
                  {e.coursework.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Relevant Coursework
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {e.coursework.map((c) => (
                          <span
                            key={c}
                            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {e.achievements.length > 0 && (
                    <ul className="mt-4 space-y-1">
                      {e.achievements.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--cyan)]" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Achievements & Certifications ───────────────────────── */
function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Wins & credentials"
          title="Achievements & Certifications"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass-strong h-full rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--electric)] to-[var(--cyan)] text-background">
                  <FaCertificate />
                </span>
                <h3 className="text-lg font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-[var(--cyan)]/40"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="font-semibold">{c.title}</h4>
                      <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-[var(--cyan)]">
                        {c.period}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-strong h-full rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--electric)] to-[var(--cyan)] text-background">
                  <FaTrophy />
                </span>
                <h3 className="text-lg font-bold">Achievements</h3>
              </div>
              <div className="space-y-4">
                {achievements.map((a) => (
                  <div
                    key={a.title}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-[var(--cyan)]/40"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="font-semibold">{a.title}</h4>
                      <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-[var(--cyan)]">
                        {a.year}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Resume ───────────────────────── */
function Resume() {
  const keySkills = ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "SQL", "ML"];
  const highlightsList = [
    "B.Tech in CSE (AI & ML) — 2023-27",
    "Academic Project Intern (Aug 2025 – Present)",
    "6+ hands-on ML, EDA & automation projects",
    "Class X CGPA 10/10, Class XII CGPA 8/10",
    "Winner – Business Quiz Contest, 2023",
  ];
  return (
    <section id="resume" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="One-page snapshot" title="Resume" />
        <Reveal>
          <div className="glass-strong overflow-hidden rounded-3xl p-6 sm:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Preview card */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--electric)]/40 to-[var(--cyan)]/30 blur-3xl" />
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white to-slate-100 p-6 text-slate-900 shadow-2xl">
                  <div className="border-b-2 border-slate-900 pb-3">
                    <p className="font-display text-2xl font-bold tracking-tight">
                      {profile.name.toUpperCase()}
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-600">
                      Aspiring Machine Learning Engineer
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500">
                      {profile.location} · {profile.phone} · {profile.email}
                    </p>
                  </div>
                  <div className="mt-3 space-y-2 text-[10px] leading-relaxed text-slate-700">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-900">
                      Summary
                    </p>
                    <p>{profile.summary}</p>
                    <p className="pt-1 text-[10px] font-bold uppercase tracking-wider text-slate-900">
                      Skills
                    </p>
                    <p>Python · SQL · NumPy · Pandas · Matplotlib · ML · AI · Data Analysis</p>
                    <p className="pt-1 text-[10px] font-bold uppercase tracking-wider text-slate-900">
                      Experience
                    </p>
                    <p>
                      <strong>Academic Project Intern</strong> · Anurag College of Engineering ·
                      Aug 2025 – Present
                    </p>
                    <p className="pt-1 text-[10px] font-bold uppercase tracking-wider text-slate-900">
                      Education
                    </p>
                    <p>B.Tech CSE (AI & ML), Anurag College of Engineering — 2023-2027</p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <h3 className="font-display text-2xl font-bold">
                  Grab the <span className="text-gradient">full PDF</span>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A one-page resume with my background, projects, skills and contact details —
                  perfect for recruiter screens.
                </p>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--cyan)]">
                    Quick highlights
                  </p>
                  <ul className="mt-3 space-y-2">
                    {highlightsList.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <FaCheckCircle className="mt-1 shrink-0 text-[var(--cyan)]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--cyan)]">
                    Key skills snapshot
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {keySkills.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={RESUME_URL}
                    download
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--electric)] to-[var(--cyan)] px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-105 glow"
                  >
                    <FaDownload /> Download Resume
                  </a>
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Open in new tab
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── Contact ───────────────────────── */
function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Let's Connect" title="Let's Build Something Amazing" />
        <Reveal>
          <p className="-mt-6 mb-10 text-center text-sm text-muted-foreground sm:text-base">
            Available for internships and software engineering opportunities in
            Machine Learning, Data Analytics, and Python development.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <div className="glass-strong h-full space-y-3 rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold">Connect with me</h3>
              <p className="text-sm text-muted-foreground">
                Prefer a direct line? Reach out on any of these channels.
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all hover:border-[var(--cyan)]/40 hover:bg-white/[0.06]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--electric)]/20 text-[var(--cyan)]">
                    <FaEnvelope />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="truncate text-sm font-medium">{profile.email}</p>
                  </div>
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all hover:border-[var(--cyan)]/40 hover:bg-white/[0.06]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--electric)]/20 text-[var(--cyan)]">
                    <FaPhone />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="truncate text-sm font-medium">{profile.phone}</p>
                  </div>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all hover:border-[var(--cyan)]/40 hover:bg-white/[0.06]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--electric)]/20 text-[var(--cyan)]">
                    <FaLinkedin />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">LinkedIn</p>
                    <p className="truncate text-sm font-medium">satya-karthik</p>
                  </div>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all hover:border-[var(--cyan)]/40 hover:bg-white/[0.06]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--electric)]/20 text-[var(--cyan)]">
                    <FaGithub />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">GitHub</p>
                    <p className="truncate text-sm font-medium">@{profile.githubUsername}</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--electric)]/20 text-[var(--cyan)]">
                    <FaMapMarkerAlt />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="truncate text-sm font-medium">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const fd = new FormData(form);
                const subject = encodeURIComponent(`Portfolio enquiry from ${fd.get("name")}`);
                const body = encodeURIComponent(
                  `${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`,
                );
                window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
                setStatus("sent");
              }}
              className="glass-strong space-y-4 rounded-2xl p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    maxLength={100}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm outline-none transition-colors focus:border-[var(--cyan)]"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    maxLength={120}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm outline-none transition-colors focus:border-[var(--cyan)]"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  maxLength={1500}
                  rows={5}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm outline-none transition-colors focus:border-[var(--cyan)]"
                  placeholder="Tell me about the role or project…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--electric)] to-[var(--cyan)] px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02] glow sm:w-auto"
              >
                Send Message
              </button>
              {status === "sent" && (
                <p className="text-xs text-[var(--cyan)]">
                  Opening your mail client… thanks for reaching out!
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, TanStack & Framer Motion.
        </p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--cyan)]">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--cyan)]">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-[var(--cyan)]">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── Scroll-to-top ───────────────────────── */
function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[var(--electric)] to-[var(--cyan)] text-background shadow-lg glow"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ───────────────────────── Cursor glow ───────────────────────── */
function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-[55] hidden h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      aria-hidden
    >
      <div
        className="h-full w-full rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle at center, var(--electric), transparent 60%)",
          filter: "blur(60px)",
        }}
      />
    </motion.div>
  );
}

/* ───────────────────────── Loading screen ───────────────────────── */
function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1400);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-background"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4 rounded-2xl border-2 border-transparent border-t-[var(--electric)] border-r-[var(--cyan)]"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-[var(--electric)] to-[var(--cyan)] font-display text-3xl font-bold text-background glow"
        >
          SK
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────── Page ───────────────────────── */
function PortfolioPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>
      <CursorGlow />
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-[var(--electric)] to-[var(--cyan)]"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubShowcase />
        <Education />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

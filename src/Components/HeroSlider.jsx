import { useState, useEffect, useRef, useCallback } from "react";
import {
  FaShieldAlt, FaNetworkWired, FaBug, FaBolt,
  FaFire, FaSearch, FaSatelliteDish,
  FaCloud, FaAws, FaDocker, FaSyncAlt,
  FaRobot, FaPython, FaChartBar, FaBrain,
  FaArrowLeft, FaArrowRight, FaLaptopCode,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
   SiGooglecloud, SiKubernetes,
  SiTensorflow, SiPandas, SiMongodb,
  SiExpress,
  SiJavascript,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { MdSecurity, MdOutlineLanguage } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiNetworkChart } from "react-icons/bi";

// ─── Slide Data ────────────────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 0,
    accent: "#ff8c00",
    accentDark: "#e65100",
    glowRgb: "255,140,0",
    bgGradient: "linear-gradient(135deg,#06090f 0%,#0d1525 55%,#130c2a 100%)",
    patternStroke: "rgba(255,255,255,0.5)",
    patternType: "dots",
    badge: "Cyber Security",
    titlePre: "Master ",
    titleHighlight: "Cyber Security",
    titlePost: "\nfrom Experts",
    desc: "Hands-on labs, real-world scenarios & placement support. Build skills that matter in 2025.",
    stats: [
      { val: "12K+", lbl: "Students" },
      { val: "98%", lbl: "Placement" },
      { val: "50+", lbl: "Courses" },
    ],
    btnOutlineColor: "#4caf50",
    btnOutlineText: "#81c784",
    orbit: {
      center: { Icon: FaShieldAlt, label: "Security", color: "#ff8c00" },
      inner: [
        { label: "Network", Icon: FaNetworkWired, color: "#4fc3f7" },
        { label: "Malware", Icon: FaBug, color: "#ef5350" },
        { label: "Ethical Hack", Icon: FaBolt, color: "#66bb6a" },
      ],
      outer: [
        { label: "Firewall", Icon: FaFire, color: "#ffa726" },
        { label: "VAPT", Icon: FaSearch, color: "#ab47bc" },
        { label: "SOC", Icon: FaSatelliteDish, color: "#26c6da" },
      ],
    },
  },
  {
    id: 1,
    accent: "#1d9e75",
    accentDark: "#0f6e56",
    glowRgb: "29,158,117",
    bgGradient: "linear-gradient(135deg,#06120a 0%,#0a2010 55%,#062018 100%)",
    patternStroke: "rgba(29,158,117,0.35)",
    patternType: "lines",
    badge: "Cloud Computing",
    titlePre: "Launch Your ",
    titleHighlight: "AWS & Azure",
    titlePost: "\nCareer Today",
    desc: "Industry-certified cloud training with live projects. Get certified in 45 days or less.",
    stats: [
      { val: "500+", lbl: "Certified" },
      { val: "45", lbl: "Days Avg" },
      { val: "8+", lbl: "Platforms" },
    ],
    btnOutlineColor: "#1d9e75",
    btnOutlineText: "#5dcaa5",
    orbit: {
      center: { Icon: FaCloud, label: "Cloud", color: "#1d9e75" },
      inner: [
        { label: "AWS", Icon: FaAws, color: "#ff9900" },
        { label: "Azure", Icon: VscAzure, color: "#0078d4" },
        { label: "GCP", Icon: SiGooglecloud, color: "#4285f4" },
      ],
      outer: [
        { label: "Docker", Icon: FaDocker, color: "#2496ed" },
        { label: "K8s", Icon: SiKubernetes, color: "#326ce5" },
        { label: "DevOps", Icon: FaSyncAlt, color: "#5dcaa5" },
      ],
    },
  },
  {
    id: 2,
    accent: "#ba7517",
    accentDark: "#854f0b",
    glowRgb: "186,117,23",
    bgGradient: "linear-gradient(135deg,#120a02 0%,#251408 55%,#301a05 100%)",
    patternStroke: "rgba(239,159,39,0.35)",
    patternType: "squares",
    badge: "Data Science & AI",
    titlePre: "Become ",
    titleHighlight: "Data Scientist",
    titlePost: "\nwith Real Projects",
    desc: "Python, ML, Deep Learning & Power BI — learn from practitioners, not professors.",
    stats: [
      { val: "200+", lbl: "Projects" },
      { val: "4.9★", lbl: "Rating" },
      { val: "Live", lbl: "Classes" },
    ],
    btnOutlineColor: "#ba7517",
    btnOutlineText: "#fac775",
    orbit: {
      center: { Icon: FaRobot, label: "AI / ML", color: "#ba7517" },
      inner: [
        { label: "Python", Icon: FaPython, color: "#ffd43b" },
        { label: "TensorFlow", Icon: SiTensorflow, color: "#ff8f00" },
        { label: "Pandas", Icon: SiPandas, color: "#e040fb" },
      ],
      outer: [
        { label: "Power BI", Icon: FaChartBar, color: "#f2c811" },
        { label: "NLP", Icon: MdOutlineLanguage, color: "#ab47bc" },
        { label: "Deep Learn", Icon: FaBrain, color: "#ef5350" },
      ],
    },
  },
  {
  id: 3,
  accent: "#2563eb",
  accentDark: "#1e40af",
  glowRgb: "37,99,235",
  bgGradient: "linear-gradient(135deg,#050816 0%,#0b1225 55%,#111827 100%)",
  patternStroke: "rgba(96,165,250,0.35)",
  patternType: "circles",
  badge: "Full Stack Development",
  titlePre: "Become a ",
  titleHighlight: "Full Stack Developer",
  titlePost: "\nBuild Real Apps",
  desc: "Learn MERN Stack with live projects, APIs, databases & deployment. Industry-ready skills from frontend to backend.",
  stats: [
    { val: "10K+", lbl: "Developers" },
    { val: "100+", lbl: "Projects" },
    { val: "24/7", lbl: "Support" },
  ],
  btnOutlineColor: "#2563eb",
  btnOutlineText: "#93c5fd",
  orbit: {
    center: { Icon: FaLaptopCode, label: "MERN Stack", color: "#2563eb" },
    inner: [
      { label: "React", Icon: FaReact, color: "#61dafb" },
      { label: "Node.js", Icon: FaNodeJs, color: "#68a063" },
      { label: "MongoDB", Icon: SiMongodb, color: "#47a248" },
    ],
    outer: [
      { label: "Express", Icon: SiExpress, color: "#ffffff" },
      { label: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
      { label: "GitHub", Icon: FaGithub, color: "#f5f5f5" },
    ],
  },
}
];

const DURATION = 5000;

// ─── SVG Orbit Visual ──────────────────────────────────────────────────────────
function OrbitVisual({ slide, active }) {
  const [tick, setTick] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(Date.now());

  useEffect(() => {
    if (!active) return;
    const loop = () => {
      setTick(Date.now());
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  const t = (Date.now() - startRef.current) / 1000;
  const { accent, orbit } = slide;
  const cx = 225;
  const cy = 225;
  const R1 = 110;
  const R2 = 170;
  const pulse = 0.92 + 0.08 * Math.sin(t * 2.5);

  const innerPositions = orbit.inner.map((orb, i) => {
    const ang = i * ((Math.PI * 2) / 3) + t * 0.55;
    return { x: cx + R1 * Math.cos(ang), y: cy + R1 * Math.sin(ang), orb };
  });

  const outerPositions = orbit.outer.map((orb, i) => {
    const ang = i * ((Math.PI * 2) / 3) + 1.05 - t * 0.35;
    return { x: cx + R2 * Math.cos(ang), y: cy + R2 * Math.sin(ang), orb };
  });

  const sparks = Array.from({ length: 6 }, (_, sp) => {
    const sparkR = 38 + 3 * Math.sin(t * 4);
    const sa = t * 1.5 + sp * (Math.PI / 3);
    return { x: cx + sparkR * Math.cos(sa), y: cy + sparkR * Math.sin(sa) };
  });

  return (
    <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[430px] md:h-[430px]">
      <svg
        viewBox="0 0 450 450"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        {/* Radial glow bg */}
        <defs>
          <radialGradient id={`bg-${slide.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.16" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`center-${slide.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.87" />
            <stop offset="55%" stopColor={accent} stopOpacity="0.53" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.07" />
          </radialGradient>
        </defs>

        <circle cx={cx} cy={cy} r={148} fill={`url(#bg-${slide.id})`} />

        {/* Orbit rings */}
        <circle cx={cx} cy={cy} r={R1} fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="1.2" strokeDasharray="5 7" />
        <circle cx={cx} cy={cy} r={R2} fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="1.2" strokeDasharray="5 7" />

        {/* Orbiting nodes */}
        {[...innerPositions, ...outerPositions].map(({ x, y, orb }, idx) => (
          <g key={idx}>
            <circle cx={x} cy={y} r="24" fill={orb.color} fillOpacity="0.15" />
            <circle cx={x} cy={y} r="17" fill="rgba(10,15,26,0.93)" stroke={orb.color} strokeWidth="1.6" />
          </g>
        ))}

        {/* Center pulse */}
        <circle cx={cx} cy={cy} r={36 * pulse} fill={`url(#center-${slide.id})`} />
        <circle cx={cx} cy={cy} r={34} fill="none" stroke={accent} strokeWidth="1.8" />

        {/* Sparks */}
        {sparks.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r="1.5" fill={accent} opacity="0.65" />
        ))}
      </svg>

      {/* Overlay icons via HTML (foreignObject workaround using absolute positioned divs) */}
      <div className="absolute inset-0 pointer-events-none" style={{ width: "100%", height: "100%" }}>
        {/* Inner orbs */}
        {innerPositions.map(({ x, y, orb }, i) => {
          const pct = 450;
          const left = `${(x / pct) * 100}%`;
          const top = `${(y / pct) * 100}%`;
          const labelBelow = y > cy;
          return (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{ left, top, transform: "translate(-50%, -50%)" }}
            >
              <orb.Icon style={{ color: orb.color, fontSize: 13 }} />
              <span
                className="text-[8px] font-semibold mt-1 whitespace-nowrap"
                style={{
                  color: orb.color,
                  position: "absolute",
                  top: labelBelow ? "22px" : "auto",
                  bottom: labelBelow ? "auto" : "22px",
                }}
              >
                {orb.label}
              </span>
            </div>
          );
        })}

        {/* Outer orbs */}
        {outerPositions.map(({ x, y, orb }, i) => {
          const pct = 450;
          const left = `${(x / pct) * 100}%`;
          const top = `${(y / pct) * 100}%`;
          const labelBelow = y > cy;
          return (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{ left, top, transform: "translate(-50%, -50%)" }}
            >
              <orb.Icon style={{ color: orb.color, fontSize: 13 }} />
              <span
                className="text-[8px] font-semibold mt-1 whitespace-nowrap"
                style={{
                  color: orb.color,
                  position: "absolute",
                  top: labelBelow ? "22px" : "auto",
                  bottom: labelBelow ? "auto" : "22px",
                }}
              >
                {orb.label}
              </span>
            </div>
          );
        })}

        {/* Center icon */}
        <div
          className="absolute flex flex-col items-center justify-center"
          style={{ left: `${(cx / 450) * 100}%`, top: `${(cy / 450) * 100}%`, transform: "translate(-50%, -50%)" }}
        >
          <orbit.center.Icon style={{ color: "#fff", fontSize: 18 }} />
          <span className="text-[8px] font-bold text-white/75 mt-1 whitespace-nowrap">
            {orbit.center.label}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Background Pattern SVG ─────────────────
function BgPattern({ slide }) {
  const id = `pat-${slide.id}`;
  const s = slide.patternStroke;
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {slide.patternType === "dots" && (
          <pattern id={id} width="55" height="55" patternUnits="userSpaceOnUse">
            <circle cx="27" cy="27" r="1" fill={s} />
          </pattern>
        )}
        {slide.patternType === "lines" && (
          <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0L0 40M0 0L40 40" stroke={s} strokeWidth="0.5" />
          </pattern>
        )}
        {slide.patternType === "squares" && (
          <pattern id={id} width="50" height="50" patternUnits="userSpaceOnUse">
            <rect x="23" y="23" width="4" height="4" rx="1" fill={s} />
          </pattern>
        )}
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

// ─── Main Hero Slider ──────────────────────────────────────────────────────────
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const startRef = useRef(Date.now());
  const progRafRef = useRef(null);
  const [outlineHover, setOutlineHover] = useState(false);

  const goTo = useCallback((n) => {
    setCurrent((n + SLIDES.length) % SLIDES.length);
    startRef.current = Date.now();
    setProgress(0);
    setOutlineHover(false);
  }, []);

  useEffect(() => {
    const tick = () => {
      const p = (Date.now() - startRef.current) / DURATION;
      if (p >= 1) {
        goTo(current + 1);
        return;
      }
      setProgress(p * 100);
      progRafRef.current = requestAnimationFrame(tick);
    };
    progRafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progRafRef.current);
  }, [current, goTo]);

  const slide = SLIDES[current];

  return (
    <div className="relative w-full overflow-x-hidden bg-[#06090f] min-h-[760px] md:min-h-[480px]  px-4 sm:px-8 lg:px-20">
      {/* ── Slides ── */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 flex flex-col md:flex-row items-center transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <div className="absolute inset-0" style={{ background: s.bgGradient }} />
          <BgPattern slide={s} />

          {/* LEFT — Text */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-14 pt-10 pb-4 md:py-0 md:max-w-[55%] w-full">

            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-[1.5px] uppercase mb-3 w-fit"
              style={{
                background: `rgba(${s.glowRgb},0.12)`,
                border: `1px solid rgba(${s.glowRgb},0.32)`,
                color: s.accent,
                animation: i === current ? "fadeUp 0.6s 0.1s both" : "none",
              }}
            >
              <span
                className="w-[7px] h-[7px] rounded-full shrink-0"
                style={{
                  background: s.accent,
                  animation: "pulseDot 1.5s ease-in-out infinite",
                }}
              />
              {s.badge}
            </div>

            <div
              className="h-[3px] rounded-sm mb-3"
              style={{
                width: 50,
                background: `linear-gradient(90deg,${s.accent},transparent)`,
                animation: i === current ? "expandLine 0.8s 0.15s both" : "none",
              }}
            />

            <h1
              className="font-extrabold text-white leading-[1.1] mb-2 tracking-wider [word-spacing:4px] whitespace-pre-line"
              style={{
                fontSize: "clamp(22px, 3.8vw, 46px)",
                maxWidth: 600,
                textShadow: "0 2px 24px rgba(0,0,0,0.55)",
                animation: i === current ? "fadeUp 0.7s 0.25s both" : "none",
              }}
            >
              {s.titlePre}
              <span style={{ color: s.accent }}>{s.titleHighlight}</span>
              {s.titlePost}
            </h1>

            <p
              className="text-[13px] sm:text-[14px] text-white/70 mb-4 sm:mb-6 leading-relaxed py-3 font-light max-w-[390px]"
              style={{ animation: i === current ? "fadeUp 0.6s 0.4s both" : "none" }}
            >
              {s.desc}
            </p>

            <div
              className="flex flex-wrap gap-3"
              style={{ animation: i === current ? "fadeUp 0.6s 0.55s both" : "none" }}
            >
              <button
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-[10px] text-[13px] font-bold text-white border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg,${s.accent},${s.accentDark})`,
                  boxShadow: `0 4px 20px rgba(${s.glowRgb},0.38)`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 8px 28px rgba(${s.glowRgb},0.55)`; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 4px 20px rgba(${s.glowRgb},0.38)`; }}
                onClick={() => window.open("https://thedigicoders.com/placement", "_blank")}
              >
                Our Placements
              </button>

              <button
                className="px-5 py-2.5 sm:px-6 rounded-[10px] text-[13px] font-bold cursor-pointer transition-all duration-200"
                style={{
                  border: `1.5px solid ${s.btnOutlineColor}`,
                  color: outlineHover ? "#fff" : s.btnOutlineText,
                  background: outlineHover ? s.btnOutlineColor : "transparent",
                  transform: outlineHover ? "translateY(-2px)" : "translateY(0)",
                }}
                onMouseEnter={() => setOutlineHover(true)}
                onMouseLeave={() => setOutlineHover(false)}
                onClick={() => window.open("https://thedigicoders.com/summer-training", "_blank")}
              >
                Join Training
              </button>
            </div>

            <div
              className="flex items-center gap-0 mt-5 sm:mt-7 flex-wrap"
              style={{ animation: i === current ? "fadeUp 0.5s 0.7s both" : "none" }}
            >
              {s.stats.map((st, si) => (
                <div key={si} className="flex items-center">
                  {si > 0 && <div className="w-px h-8 bg-white/10 mx-4 sm:mx-5" />}
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-white leading-none tracking-tight">{st.val}</div>
                    <div className="text-[10px] sm:text-[11px] text-white/45 uppercase tracking-widest mt-0.5">{st.lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Orbit */}
          <div className="relative z-10 flex-shrink-0 flex items-center justify-center md:w-[45%] w-full py-10 md:py-0 overflow-hidden">
            <OrbitVisual slide={s} active={i === current} />
          </div>
        </div>
      ))}

      {/* ── Progress bar ── */}
      <div
        className="absolute bottom-0 left-0 h-[3px] z-20 transition-[width] duration-100 ease-linear"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg,${slide.accent},rgba(${slide.glowRgb},0.9))`,
          boxShadow: `0 0 10px rgba(${slide.glowRgb},0.7)`,
        }}
      />

      {/* ── Slide dots ── */}
      <div className="absolute bottom-4 left-6 sm:left-10 md:left-14 flex items-center gap-2 z-20">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="h-[4px] rounded-[3px] border-0 p-0 cursor-pointer transition-all duration-300"
            style={{
              width: i === current ? 26 : 9,
              background: i === current ? slide.accent : "rgba(255,255,255,0.28)",
            }}
          />
        ))}
      </div>

      {/* ── Slide counter ── */}
      <div className="absolute top-4 right-4 text-[12px] text-white/35 font-bold tracking-widest z-20">
        {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
      </div>

      {/* ── Nav arrows ── */}
      <NavBtn right={56} label="Previous" onClick={() => goTo(current - 1)} accent={slide.accent} glowRgb={slide.glowRgb}>
        <FaArrowLeft size={13} />
      </NavBtn>
      <NavBtn right={14} label="Next" onClick={() => goTo(current + 1)} accent={slide.accent} glowRgb={slide.glowRgb}>
        <FaArrowRight size={13} />
      </NavBtn>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandLine {
          from { width: 0; opacity: 0; }
          to   { width: 50px; opacity: 1; }
        }
        @keyframes pulseDot {
          0%,100% { box-shadow: 0 0 0 0 rgba(255,140,0,0.6); }
          50%      { box-shadow: 0 0 0 6px rgba(255,140,0,0); }
        }
      `}</style>
    </div>
  );
}

// ─── Nav Button ───────────────────────────────────────────────────────────────
function NavBtn({ right, label, onClick, children, glowRgb }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      aria-label={label}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="absolute top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/[0.14] text-white cursor-pointer flex items-center justify-center transition-all duration-200 z-20 hidden sm:flex"
      style={{
        right,
        background: hov ? `rgba(${glowRgb},0.22)` : "rgba(255,255,255,0.07)",
        transform: hov ? "translateY(-50%) scale(1.1)" : "translateY(-50%)",
      }}
    >
      {children}
    </button>
  );
}

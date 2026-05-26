import { useState, useEffect, useRef, useCallback } from "react";
import { FaShieldAlt } from "react-icons/fa";

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
      center: { emoji: "🛡️", label: "Security" },
      inner: [
        { label: "Network", emoji: "🌐", color: "#4fc3f7" },
        { label: "Malware", emoji: "🦠", color: "#ef5350" },
        { label: "Ethical Hack", emoji: "⚡", color: "#66bb6a" },
      ],
      outer: [
        { label: "Firewall", emoji: "🔥", color: "#ffa726" },
        { label: "VAPT", emoji: "🔍", color: "#ab47bc" },
        { label: "SOC", emoji: "📡", color: "#26c6da" },
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
      center: { emoji: "☁️", label: "Cloud" },
      inner: [
        { label: "AWS", emoji: "🅰", color: "#ff9900" },
        { label: "Azure", emoji: "🔷", color: "#0078d4" },
        { label: "GCP", emoji: "🌍", color: "#4285f4" },
      ],
      outer: [
        { label: "Docker", emoji: "🐳", color: "#2496ed" },
        { label: "K8s", emoji: "⚙️", color: "#326ce5" },
        { label: "DevOps", emoji: "🔄", color: "#5dcaa5" },
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
      center: { emoji: "🤖", label: "AI / ML" },
      inner: [
        { label: "Python", emoji: "🐍", color: "#ffd43b" },
        { label: "TensorFlow", emoji: "🔶", color: "#ff8f00" },
        { label: "Pandas", emoji: "🐼", color: "#e040fb" },
      ],
      outer: [
        { label: "Power BI", emoji: "📊", color: "#f2c811" },
        { label: "NLP", emoji: "💬", color: "#ab47bc" },
        { label: "Deep Learn", emoji: "🧠", color: "#ef5350" },
      ],
    },
  },
];

const DURATION = 5000;

// ─── Orbit Canvas ───────────────────────
function OrbitCanvas({ slide }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  const draw = useCallback(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const W = cv.width;
    const H = cv.height;
    const cx = W / 2;
    const cy = H / 2;
    const t = Date.now() / 1000;
    const { accent, orbit } = slide;

    ctx.clearRect(0, 0, W, H);

    const bgGr = ctx.createRadialGradient(cx, cy, 10, cx, cy, 148);
    bgGr.addColorStop(0, accent + "28");
    bgGr.addColorStop(1, "transparent");
    ctx.fillStyle = bgGr;
    ctx.beginPath();
    ctx.arc(cx, cy, 148, 0, Math.PI * 2);
    ctx.fill();

    [120, 180].forEach((r, ri) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = ri === 0 ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.10)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 9]);
      ctx.stroke();
      ctx.setLineDash([]);
    });

    orbit.inner.forEach((orb, i) => {
      const ang = (i * ((Math.PI * 2) / 3)) + t * 0.55;
      const ox = cx + 120 * Math.cos(ang);
      const oy = cy + 120 * Math.sin(ang);
      drawOrb(ctx, ox, oy, orb, cy);
    });

    orbit.outer.forEach((orb, i) => {
      const ang = (i * ((Math.PI * 2) / 3)) + 1.05 - t * 0.35;
      const ox = cx + 180 * Math.cos(ang);
      const oy = cy + 180 * Math.sin(ang);
      drawOrb(ctx, ox, oy, orb, cy);
    });

    const pulse = 0.92 + 0.08 * Math.sin(t * 2.5);
    const cGr = ctx.createRadialGradient(cx, cy, 0, cx, cy, 36 * pulse);
    cGr.addColorStop(0, accent + "dd");
    cGr.addColorStop(0.55, accent + "88");
    cGr.addColorStop(1, accent + "11");
    ctx.beginPath();
    ctx.arc(cx, cy, 36 * pulse, 0, Math.PI * 2);
    ctx.fillStyle = cGr;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx, cy, 34, 0, Math.PI * 2);
    ctx.strokeStyle = accent;
    ctx.lineWidth = 1.8;
    ctx.stroke();

    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff";
    ctx.fillText(orbit.center.emoji, cx, cy - 5);

    ctx.font = "bold 9px sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.75)";
    ctx.fillText(orbit.center.label, cx, cy + 14);

    const sparkR = 38 + 3 * Math.sin(t * 4);
    for (let sp = 0; sp < 6; sp++) {
      const sa = t * 1.5 + sp * (Math.PI / 3);
      const sx = cx + sparkR * Math.cos(sa);
      const sy = cy + sparkR * Math.sin(sa);
      ctx.beginPath();
      ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = accent;
      ctx.globalAlpha = 0.65;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    rafRef.current = requestAnimationFrame(draw);
  }, [slide]);

  function drawOrb(ctx, ox, oy, orb, cy) {
    const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, 24);
    g.addColorStop(0, orb.color + "55");
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(ox, oy, 24, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(ox, oy, 17, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(10,15,26,0.93)";
    ctx.fill();
    ctx.strokeStyle = orb.color;
    ctx.lineWidth = 1.6;
    ctx.stroke();

    ctx.font = "11px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff";
    ctx.fillText(orb.emoji, ox, oy);

    const offY = oy > cy ? 28 : -28;
    ctx.font = "600 9.5px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = orb.color;
    ctx.globalAlpha = 0.88;
    ctx.fillText(orb.label, ox, oy + offY);
    ctx.globalAlpha = 1;
  }

  useEffect(() => {
    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      width={450}
      height={450}
      className="block w-full max-w-[450px]"
    />
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
    <div
      className="relative w-full px-20 overflow-x-hidden bg-[#06090f]"
      style={{ minHeight: "480px", height: "clamp(480px, 88vh, 620px)" }}
    >
      {/* ── Slides ── */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 flex flex-col md:flex-row items-center transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {/* BG gradient */}
          <div className="absolute inset-0" style={{ background: s.bgGradient }} />
          <BgPattern slide={s} />

          {/* LEFT — Text content */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-14 pt-10 pb-4 md:py-0 md:max-w-[55%] w-full">

            {/* Badge */}
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

            {/* Accent line */}
            <div
              className="h-[3px] rounded-sm mb-3"
              style={{
                width: 50,
                background: `linear-gradient(90deg,${s.accent},transparent)`,
                animation: i === current ? "expandLine 0.8s 0.15s both" : "none",
              }}
            />

            {/* Headline */}
            <h1
              className="font-extrabold text-white leading-[1.1] mb-2 tracking-wider [word-spacing:4px]  whitespace-pre-line"
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

            {/* Desc */}
            <p
              className="text-[13px] sm:text-[14px] text-white/70 mb-4 sm:mb-6 leading-relaxed py-3 font-light max-w-[390px]"
              style={{
                animation: i === current ? "fadeUp 0.6s 0.4s both" : "none",
              }}
            >
              {s.desc}
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-3"
              style={{
                animation: i === current ? "fadeUp 0.6s 0.55s both" : "none",
              }}
            >
              <button
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-[10px] text-[13px] font-bold text-white border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg,${s.accent},${s.accentDark})`,
                  boxShadow: `0 4px 20px rgba(${s.glowRgb},0.38)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 28px rgba(${s.glowRgb},0.55)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 20px rgba(${s.glowRgb},0.38)`;
                }}
              >
                Explore Courses
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
              >
                Join Training
              </button>
            </div>

            {/* Stats */}
            <div
              className="flex items-center gap-0 mt-5 sm:mt-7 flex-wrap"
              style={{
                animation: i === current ? "fadeUp 0.5s 0.7s both" : "none",
              }}
            >
              {s.stats.map((st, si) => (
                <div key={si} className="flex items-center">
                  {si > 0 && (
                    <div className="w-px h-8 bg-white/10 mx-4 sm:mx-5" />
                  )}
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-white leading-none tracking-tight">
                      {st.val}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-white/45 uppercase tracking-widest mt-0.5">
                      {st.lbl}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Orbit Canvas */}
          <div className="relative z-10 flex-shrink-0 flex items-center justify-center md:w-[45%] w-full py-2 md:py-0 md:h-full overflow-visible">
            <div className="overflow-visible flex items-center justify-center w-full">
              <OrbitCanvas slide={s} active={i === current} />
            </div>
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
        ←
      </NavBtn>
      <NavBtn right={14} label="Next" onClick={() => goTo(current + 1)} accent={slide.accent} glowRgb={slide.glowRgb}>
        →
      </NavBtn>

      {/* ── Keyframes ── */}
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
      className="absolute top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/[0.14] text-white text-[15px] cursor-pointer flex items-center justify-center transition-all duration-200 z-20 hidden sm:flex"
      style={{
        right: right,
        background: hov ? `rgba(${glowRgb},0.22)` : "rgba(255,255,255,0.07)",
        transform: hov ? "translateY(-50%) scale(1.1)" : "translateY(-50%)",
      }}
    >
      {children}
    </button>
  );
}

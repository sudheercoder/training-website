import { useEffect, useRef } from "react";
import HeroImage from '../../public/Images/HeroSection.jpg';

const COURSES = [
  "Web Development","Python & Django","React & Next.js","Data Science",
  "Cybersecurity","Java & Spring","UI/UX Design","Cloud & DevOps",
  "Android Dev","Digital Marketing","Node.js","Machine Learning",
];

const STATS = [
  { num: "12", suf: "K+", label: "Students" },
  { num: "50", suf: "+",  label: "Courses"  },
  { num: "95", suf: "%",  label: "Placed"   },
  { num: "8",  suf: "+",  label: "Years"    },
];

const FLOATING = [
  {
    dot: "#1a7a3e",
    title: "Live Projects",
    sub: "Build real portfolio",
    cls: "top-4 left-1 md:top-8 md:left-2.5",
    delay: "0s",
  },
  {
    dot: "#e85d20",
    title: "Expert Mentors",
    sub: "Industry professionals",
    cls: "bottom-6 left-0 md:bottom-35",
    delay: "0.7s",
  },
  {
    dot: "#1a507a",
    title: "Job Placement",
    sub: "95% success rate",
    cls: "top-1/2 -translate-y-1/2 -right-1 md:-right-2.5",
    delay: "1.1s",
  },
];

export default function HeroSection() {
  const tickerRef = useRef(null);

  useEffect(() => {
    if (!tickerRef.current) return;
    const all = [...COURSES, ...COURSES];
    tickerRef.current.innerHTML = all
      .map(
        (c) =>
          `<span class="bg-white border border-[rgba(13,26,46,0.1)] rounded-md px-3 py-1 text-[11px] md:text-[11.5px] text-[#4a5870] whitespace-nowrap">${c}</span>`
      )
      .join("");
  }, []);

  return (
    <section className="relative overflow-hidden  flex flex-col bg-[#eef1f7]">
      <style>{`
        @keyframes fadeUp  { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatA  { 0%{transform:translateY(0)} 100%{transform:translateY(-8px)} }
        @keyframes pulse   { 0%,100%{box-shadow:0 0 0 0 rgba(26,122,62,0.4)} 50%{box-shadow:0 0 0 5px rgba(26,122,62,0)} }
        @keyframes scrollT { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        .anim-0 { animation: fadeUp .55s 0s    ease both; }
        .anim-1 { animation: fadeUp .55s .07s  ease both; }
        .anim-2 { animation: fadeUp .55s .14s  ease both; }
        .anim-3 { animation: fadeUp .55s .2s   ease both; }
        .anim-4 { animation: fadeUp .55s .27s  ease both; }
        .anim-img { animation: fadeUp .7s .1s ease both; }
        .anim-float { animation: floatA 3s ease-in-out infinite alternate; }
        .dc-badge-dot { animation: pulse 1.6s ease-in-out infinite; }
        .dc-ticker { animation: scrollT 22s linear infinite; }

        .dc-img {
          width: 105%; max-width: none; height: 100%;
          object-fit: cover; object-position: center;
          -webkit-mask-image:
            linear-gradient(to right, transparent 0%, black 18%, black 85%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 8%, black 86%, transparent 100%);
          -webkit-mask-composite: destination-in;
          mask-image:
            linear-gradient(to right, transparent 0%, black 18%, black 85%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 8%, black 86%, transparent 100%);
          mask-composite: intersect;
          mix-blend-mode: multiply;
          opacity: 0.92;
        }

        /* Mobile: softer fade for portrait image */
        @media (max-width: 767px) {
          .dc-img {
            width: 100%; height: 100%;
            object-position: top center;
            -webkit-mask-image:
              linear-gradient(to bottom, black 30%, black 60%, transparent 100%);
            mask-image:
              linear-gradient(to bottom, black 30%, black 60%, transparent 100%);
            -webkit-mask-composite: destination-in;
            mask-composite: intersect;
            opacity: 0.20;
          }
        }

        .dc-btn-p:hover { background: #145f30 !important; transform: translateY(-2px); }
        .dc-btn-s:hover { border-color: #1a7a3e !important; transform: translateY(-2px); }
      `}</style>

      {/* ── Background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(120deg,#eef1f7 0%,#e8edf5 40%,#dde4f0 100%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle,rgba(26,80,140,0.07) 1.5px,transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full pointer-events-none -top-[100px] -left-[60px]"
        style={{ background: "rgba(26,122,62,0.06)" }} />
      <div className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full pointer-events-none -bottom-[80px] right-[30%]"
        style={{ background: "rgba(26,80,140,0.07)" }} />

      {/* ── Main Content ── */}
      <div className="relative z-10 flex-1 flex flex-col md:grid md:grid-cols-2 max-w-[1060px] mx-auto w-full px-4 sm:px-6 md:px-5 lg:px-2">

        {/* ── LEFT ── */}
        <div className="anim-0 pt-5 pb-6 md:py-8 md:pr-8 text-center md:text-left relative z-10">

          {/* Badge */}
          <div className="anim-0 inline-flex items-center gap-1.5 bg-white border border-[rgba(26,122,62,0.22)] rounded-full pl-2 pr-4 py-1.5 mb-5 text-[10px] sm:text-[11px] font-bold tracking-[.07em] uppercase text-[#1a7a3e]"
            style={{ boxShadow: "0 2px 12px rgba(26,122,62,0.08)" }}>
            <span className="dc-badge-dot w-2 h-2 rounded-full bg-[#1a7a3e] inline-block shrink-0" />
            Lucknow's #1 IT Training Institute
          </div>

          {/* H1 */}
          <h1
            className="anim-1 font-extrabold text-[#0d1a2e] leading-[1.12] mb-3 md:mb-4"
            style={{ fontSize: "clamp(26px, 5vw, 42px)" }}
          >
            Turn Ideas Into<br />
            <span className="text-[#1a7a3e]">Real-World</span><br />
            <span className="text-[#e85d20] font-mono">{"{"}</span>
            {" Tech Skills "}
            <span className="text-[#e85d20] font-mono">{"}"}</span>
          </h1>

          {/* Tagline */}
          <p className="anim-2 text-[13.5px] md:text-sm text-[#4a5870] leading-[1.78] mb-6 mx-auto md:mx-0 max-w-[360px] md:max-w-[400px]">
            DigiCoders Technologies — hands-on training in Web Development, Data Science,
            Cloud &amp; more. Learn from industry experts. Get placed.
          </p>

          {/* CTA Buttons */}
          <div className="anim-3 flex gap-3 mb-7 justify-center md:justify-start flex-nowrap">
            <button
              onClick={() => window.open("https://thedigicoders.com/placement", "_blank")}
              className="dc-btn-p bg-[#1a7a3e] text-white border-none rounded-[9px] px-5 py-2.5 sm:px-6 sm:py-3 text-[13px] sm:text-[13.5px] font-bold cursor-pointer transition-all duration-150"
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            >
              Our Placement →
            </button>

            <button
              onClick={() => window.open("https://thedigicoders.com/summer-training", "_blank")}
              className="dc-btn-s bg-white text-green-700 border-[1.5px] border-[#d0d8e8] rounded-[9px] px-4 py-[10px] sm:px-5 text-[13px] sm:text-[13.5px] font-semibold cursor-pointer flex items-center justify-center gap-1.5 transition-all duration-150"
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            >
              Join Training →
            </button>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="relative w-full md:h-full md:min-h-[480px] flex  justify-center">
          <div className="relative w-full h-[300px] sm:h-[380px] md:h-[520px] flex items-center justify-center">

            {/* Image */}
            <div className="absolute inset-0 flex  justify-center overflow-hidden">
              <img
                className="dc-img anim-img transform -translate-y-6 md:-translate-y-10"
                src={HeroImage}
                alt="Developer coding at desk with holographic screens"
              />
            </div>

            {/* Floating cards — hidden on mobile, shown md+ */}
            <div className="hidden md:block">
              {FLOATING.map(({ dot, title, sub, cls, delay }) => (
                <div
                  key={title}
                  className={`anim-float absolute bg-white rounded-xl border border-[rgba(26,80,140,0.1)] px-3 py-2.5 flex items-center gap-2 text-[11px] lg:text-[11.5px] font-semibold text-[#0d1a2e] whitespace-nowrap z-10 ${cls}`}
                  style={{
                    boxShadow: "0 4px 20px rgba(13,26,46,0.08)",
                    animationDelay: delay,
                  }}
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: dot }} />
                  <span>
                    {title}
                    <span className="text-[10px] font-normal text-[#7a8fa8] block mt-px">{sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating cards on mobile — shown as a row below image */}
          <div className="md:hidden absolute bottom-2 left-0 right-0 flex justify-center gap-2 px-3 z-10">
            {FLOATING.map(({ dot, title }) => (
              <div
                key={title}
                className="bg-white rounded-lg border border-[rgba(26,80,140,0.1)] px-2.5 py-1.5 flex items-center gap-1.5 text-[10px] font-semibold text-[#0d1a2e] whitespace-nowrap"
                style={{ boxShadow: "0 2px 10px rgba(13,26,46,0.08)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: dot }} />
                {title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Course Ticker Strip ── */}
      <div className="relative z-10 border-t border-[rgba(13,26,46,0.08)] bg-[#e4e9f2] px-4 sm:px-8 md:px-10 py-3 flex items-center gap-4 sm:gap-5 overflow-hidden -mt-4 md:-mt-32">
        <span className="font-mono text-[9px] sm:text-[10px] text-[#7a8fa8] tracking-[.09em] uppercase whitespace-nowrap shrink-0">
          Courses →
        </span>
        <div
          ref={tickerRef}
          className="dc-ticker flex gap-2 sm:gap-2.5"
          style={{ willChange: "transform" }}
        />
      </div>
    </section>
  );
}

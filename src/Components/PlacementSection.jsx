
const about = "/Images/about.jpg";
const hero2  = "/Images/hero2.jpg";
const hero3  = "/Images/hero3.jpg";

// ─── Placement Data ────────────────────────────────────────────────────────────
const placements1 = [
  { name: "Rahul Sharma", role: "Security Analyst",   company: "Infosys",       salary: "8.5 LPA", tag: "Cyber Security",  bg: "#fff3e0", salBg: "#ffe0b2", salCol: "#e65100", image: about },
  { name: "Priya Singh",  role: "Cloud Engineer",     company: "TCS",           salary: "9.2 LPA", tag: "Cloud",           bg: "#fff3e0", salBg: "#ffe0b2", salCol: "#e65100", image: hero2 },
  { name: "Amit Verma",   role: "ML Engineer",        company: "Wipro",         salary: "11 LPA",  tag: "AI / ML",        bg: "#fff3e0", salBg: "#ffe0b2", salCol: "#e65100", image: hero3 },
  { name: "Sneha Patel",  role: "DevOps Engineer",    company: "HCL",           salary: "10 LPA",  tag: "DevOps",          bg: "#fff3e0", salBg: "#ffe0b2", salCol: "#e65100", image: about },
  { name: "Karan Mehta",  role: "Penetration Tester", company: "Tech Mahindra", salary: "7.8 LPA", tag: "VAPT",            bg: "#fff3e0", salBg: "#ffe0b2", salCol: "#e65100", image: hero3 },
  { name: "Riya Joshi",   role: "Data Scientist",     company: "Accenture",     salary: "12 LPA",  tag: "Data Science",    bg: "#fff3e0", salBg: "#ffe0b2", salCol: "#e65100", image: hero2 },
];

const placements2 = [
  { name: "Vikas Nair",   role: "SOC Analyst",      company: "Capgemini",  salary: "8 LPA",  tag: "Security",    bg: "#fff3e0", salBg: "#ffe0b2", salCol: "#e65100", image: about },
  { name: "Anjali Dubey", role: "AWS Architect",    company: "IBM",        salary: "14 LPA", tag: "Cloud",       bg: "#fff3e0", salBg: "#ffe0b2", salCol: "#e65100", image: hero2 },
  { name: "Dev Chauhan",  role: "Python Developer", company: "Mindtree",   salary: "7 LPA",  tag: "Python",      bg: "#fff3e0", salBg: "#ffe0b2", salCol: "#e65100", image: about },
  { name: "Pooja Rawat",  role: "NLP Engineer",     company: "Persistent", salary: "13 LPA", tag: "NLP",         bg: "#fff3e0", salBg: "#ffe0b2", salCol: "#e65100", image: hero3 },
  { name: "Harsh Pandey", role: "Network Engineer", company: "Cognizant",  salary: "9 LPA",  tag: "Networking",  bg: "#fff3e0", salBg: "#ffe0b2", salCol: "#e65100", image: hero2 },
  { name: "Neha Gupta",   role: "Power BI Analyst", company: "Hexaware",   salary: "10 LPA", tag: "BI",          bg: "#fff3e0", salBg: "#ffe0b2", salCol: "#e65100", image: hero3 },
];

// ─── Companies Data ────────────────────────────────────────────────────────────
const companies = [
  { name: "Infosys",       color: "#e25400" },
  { name: "TCS",           color: "#007a3b" },
  { name: "Wipro",         color: "#e25400" },
  { name: "HCL Tech",      color: "#e25400" },
  { name: "Accenture",     color: "#e25400" },
  { name: "Capgemini",     color: "#007a3b" },
  { name: "Tech Mahindra", color: "#e25400" },
  { name: "IBM",           color: "#007a3b" },
  { name: "Cognizant",     color: "#e25400" },
  { name: "Mindtree",      color: "#e25400" },
  { name: "Persistent",    color: "#e25400" },
  { name: "Hexaware",      color: "#007a3b" },
];

// ─── PlacementCard ─────────────────────────────────────────────────────────────
const PlacementCard = ({ p, index }) => (
  <div
    key={index}
    className="flex-shrink-0 w-[220px] mx-2 rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
    style={{ borderColor: "rgba(255,140,0,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
  >
    {/* Image */}
    <div className="relative w-full h-[180px] overflow-hidden" style={{ background: p.bg }}>
      <img src={p.image} alt={p.name} className="w-full h-full object-cover object-top" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top,rgba(0,0,0,0.18) 0%,transparent 55%)" }}
      />
      <span
        className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide text-white"
        style={{ background: "rgba(0,0,0,0.52)" }}
      >
        {p.tag}
      </span>
    </div>

    {/* Info */}
    <div className="px-3 pt-2.5 pb-3 bg-white">
      <p className="text-[13px] font-semibold text-gray-900 m-0 leading-tight">{p.name}</p>
      <p className="text-[11px] text-gray-500 m-0 mt-0.5">
        {p.role} · {p.company}
      </p>
      <span
        className="inline-block mt-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
        style={{ background: p.salBg, color: p.salCol }}
      >
        {p.salary}
      </span>
    </div>
  </div>
);

// ─── MarqueeRow ────────────────────────────────────────────────────────────────
const MarqueeRow = ({ items, direction = "left", speed = 30 }) => {
  const animName = direction === "left" ? "marqueeLeft" : "marqueeRight";
  return (
    <div className="relative overflow-hidden">
      {/* Edge fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right,#f9f5f0,transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-0 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left,#f9f5f0,transparent)" }}
      />

      <div
        className="flex w-max"
        style={{ animation: `${animName} ${speed}s linear infinite` }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {[...items, ...items].map((p, i) => (
          <PlacementCard key={i} p={p} index={i} />
        ))}
      </div>
    </div>
  );
};

// ─── Main Section ──────────────────────────────────────────────────────────────
const PlacementSection = () => {
  return (
    <section className="py-12 overflow-hidden md:px-10" style={{ background: "#f9f5f0" }}>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes marqueeLeft  { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes marqueeRight { from { transform: translateX(-50%); } to { transform: translateX(0);    } }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* Shimmer — brand orange */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #e65100, #ff8c00, #ffb74d, #ff8c00, #e65100);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        /* Why-card hover bar */
        .why-card:hover .why-bar { width: 80px; }
        .why-bar { transition: width 0.3s ease; }
      `}</style>

      {/* ── Heading ── */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Recent &nbsp;Placement&nbsp; Highlights
        </h2>
        <div className="mx-auto mt-3 h-[2px] w-52 rounded-full bg-gradient-to-r from-orange-500 to-transparent mb-5" />
      </div>

      {/* ── Row 1 — scrolls left ── */}
      <div className="mb-2">
        <MarqueeRow items={placements1} direction="left" speed={20} />
      </div>

      {/* ── Row 2 — scrolls right (uncomment to enable) ── */}
      {/* <div className="mt-4 mb-8">
        <p className="text-[11px] font-bold uppercase tracking-[1.2px] text-gray-400 mb-2 px-1 text-right">
          Featured alumni ←
        </p>
        <MarqueeRow items={placements2} direction="right" speed={24} />
      </div> */}

      {/* ── Hiring Partners ── */}
      <div>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 my-8">
            Hiring &nbsp;Partners
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-42 rounded-full bg-gradient-to-r from-orange-500 to-transparent mb-5" />
        </div>

        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div
            className="absolute left-0 top-0 bottom-0 w-0 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right,#f9f5f0,transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-0 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left,#f9f5f0,transparent)" }}
          />

          <div
            className="flex w-max py-1"
            style={{ animation: "marqueeLeft 18s linear infinite" }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          >
            {[...companies, ...companies, ...companies].map((c, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-2 bg-white rounded-full px-5 py-2 text-[13px] font-bold mx-1.5 border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default"
                style={{ borderColor: c.color + "40", color: c.color }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: c.color }}
                />
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default PlacementSection;

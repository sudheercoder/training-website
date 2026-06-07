import React from 'react'

import placement417 from '/Images/placement-417.jpeg'
import placement418 from '/Images/placement-418.jpeg'
import placement420 from '/Images/placement-420.jpeg'
import placement413 from '/Images/placement-413.jpeg'
import placement410 from '/Images/placement-410.jpeg'
import placement409 from '/Images/placement-409.jpeg'
import placement403 from '/Images/placement-403.jpeg'
import placement401 from '/Images/placement-401.jpeg'
import placement397 from '/Images/placement-397.jpeg'
import placement385 from '/Images/placement-385.jpeg'
import placement388 from '/Images/placement-388.jpeg'
import placement391 from '/Images/placement-391.jpeg'

// ─── Placement Data ────────────────────────────────────────────────────────────
const placements1 = [
  {
    name: "Isha Devi",
    role: "Adroid Developer",
    company: "Achyuta Software",
    salary: "5 LPA",
    tag: "Android",
    bg: "#fff3e0",
    salBg: "#ffe0b2",
    salCol: "#e65100",
    image: placement397,
  },
  {
    name: "Km. Nikita",
    role: "ASP.Net Core",
    company: "Fact Find Tech",
    salary: "9.2 LPA",
    tag: "Full Stack",
    bg: "#fff3e0",
    salBg: "#ffe0b2",
    salCol: "#e65100",
    image: placement401,
  },
  {
    name: "Preeti Yadav",
    role: "Business Dev. Executive",
    company: "Founder COde",
    salary: "3.2 LPA",
    tag: "BDE",
    bg: "#fff3e0",
    salBg: "#ffe0b2",
    salCol: "#e65100",
    image: placement403,
  },
  {
    name: "Ravi Gupta",
    role: "Associate Executive",
    company: "Namisite Tech.",
    salary: "3.2 LPA",
    tag: "DevOps",
    bg: "#fff3e0",
    salBg: "#ffe0b2",
    salCol: "#e65100",
    image: placement409,
  },
  {
    name: "Riddhi Shukla",
    role: "MERN Stack Dev.",
    company: "UP24NEWS",
    salary: "7.8 LPA",
    tag: "VAPT",
    bg: "#fff3e0",
    salBg: "#ffe0b2",
    salCol: "#e65100",
    image: placement410,
  },
  {
    name: "Samreen Fatima",
    role: "Executive Operations",
    company: "Stacker",
    salary: "2.8 LPA",
    tag: "Executive Operations",
    bg: "#fff3e0",
    salBg: "#ffe0b2",
    salCol: "#e65100",
    image: placement413,
  },
];

const placements2 = [
  {
    name: "Shrashti Singh",
    role: "Digital Marketer",
    company: "Code Crafter",
    salary: "8 LPA",
    tag: "Security",
    bg: "#fff3e0",
    salBg: "#ffe0b2",
    salCol: "#e65100",
    image: placement417,
  },
  {
    name: "Sudhanshu Ojha",
    role: "PHP & Laravel Developer",
    company: "Askpolicy",
    salary: "14 LPA",
    tag: "Cloud",
    bg: "#fff3e0",
    salBg: "#ffe0b2",
    salCol: "#e65100",
    image: placement420,
  },
  {
    name: "Vivek Chaurasiya",
    role: "MERN Stack Developer",
    company: "Digicoders",
    salary: "2.8 LPA",
    tag: "MERN",
    bg: "#fff3e0",
    salBg: "#ffe0b2",
    salCol: "#e65100",
    image: placement418,
  },
  {
    name: "Akhlesh Verma",
    role: "Full Stack developer",
    company: "Ecomsyncify",
    salary: "3.5 LPA",
    tag: "Full Stack",
    bg: "#fff3e0",
    salBg: "#ffe0b2",
    salCol: "#e65100",
    image: placement385,
  },
  {
    name: "Chandrama Prashad",
    role: "Java Developer",
    company: "Digicoders",
    salary: "3.4 LPA",
    tag: "JAVA",
    bg: "#fff3e0",
    salBg: "#ffe0b2",
    salCol: "#e65100",
    image: placement388,
  },
  {
    name: "Neha Gupta",
    role: "Power BI Analyst",
    company: "Hexaware",
    salary: "10 LPA",
    tag: "BI",
    bg: "#fff3e0",
    salBg: "#ffe0b2",
    salCol: "#e65100",
    image: placement391,
  },
];

// ─── Companies Data ────────────────────────────────────────────────────────────
const companies = [
  { name: "Stacker",       color: "#e25400" },
  { name: "TCS",           color: "#007a3b" },
  { name: "Founder Code",         color: "#e25400" },
  { name: "UP24NEWS",        color: "#007a3b" },
  { name: "Tech Mahindra",     color: "#e25400" },
  { name: "VVDN",           color: "#007a3b" },
  { name: "CodeCrafter", color: "#e25400" },
  { name: "IBM",           color: "#007a3b" },
  { name: "Career Alfa",     color: "#e25400" },
  { name: "Chetu",      color: "#007a3b" },
  { name: "Coders Tech",    color: "#e25400" },
  { name: "Info Tech",      color: "#007a3b" },
  { name: "WEBSOFY",      color: "#e25400" },
  { name: "Genpact",      color: "#007a3b" },
  { name: "HCL",      color: "#e25400" },
  { name: "ICICI Bank",      color: "#007a3b" },
  { name: "Infosys",      color: "#e25400" },
  { name: "IPX",      color: "#007a3b" },
  { name: "Orkes",      color: "#e25400" },
  { name: "IndiCorp",      color: "#007a3b" },
  { name: "DXC",      color: "#e25400" },
  { name: "Singsys",      color: "#007a3b" },
  { name: "Sysfo",      color: "#e25400" },
  { name: "EXL",      color: "#007a3b" },
  { name: "Edoro",      color: "#e25400" },
  { name: "CodingClave",      color: "#007a3b" },
  { name: "TeleIndia",      color: "#e25400" },
];

// ─── PlacementCard ─────────────────────────────────────────────────────────────
const PlacementCard = ({ p, index }) => (
  <div
    key={index}
    className="flex-shrink-0 w-[240px] mx-2 rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
    style={{ borderColor: "rgba(255,140,0,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
  >
    {/* Image */}
    <div className="relative w-full h-[200px] overflow-hidden" style={{ background: p.bg }}>
      <img src={p.image} alt={p.name} className="w-full h-full object-fit object-top" />
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
      <p className="text-md font-semibold text-gray-900 m-0 leading-tight">{p.name}</p>
      <p className="text-sm text-gray-500 m-0 my-1">
        {p.role} 
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm"> {p.company} </span>
        <span
          className="inline-block mt-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
          style={{ background: p.salBg, color: p.salCol }}
        >
          {p.salary}
        </span>
      </div>
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

      {/* ── Hiring Partners ── */}
      <div>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8">
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
            style={{ animation: "marqueeLeft 45s linear infinite" }}
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

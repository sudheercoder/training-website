// ──────── DATA ─────────
const trainingData = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Vocational Training",
    audience: "For Polytechnic Diploma",
    description: "Practical skill development aligned with diploma curriculum.",
    featured: false,
    btnVariant: "blue",
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m8.66-10h-1M4.34 12h-1m15.07-6.07-.71.71M6.34 17.66l-.71.71m12.02 0-.71-.71M6.34 6.34l-.71-.71M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
    title: "Summer Training",
    audience: "For CS/IT/Electronics",
    description: "Intensive 4-6 weeks summer program on latest technologies.",
    featured: false,
    btnVariant: "blue",
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1M6.5 5.5l.7.7M17.5 5.5l-.7.7M3 12h1m17 0h-1M5 19l1-1m12 0 1 1M12 8a4 4 0 014 4" />
      </svg>
    ),
    title: "Winter Training",
    audience: "Short-term Program",
    description: "Quick skill enhancement during winter break.",
    featured: false,
    btnVariant: "blue",
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Industrial Training",
    audience: "For B.Tech/MCA Final Year",
    description: "Comprehensive 6-month industry exposure program.",
    featured: true,
    btnVariant: "orange",
  },
  {
    id: 5,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Apprenticeship Training",
    audience: "Govt. Approved",
    description: "Official apprenticeship programs with stipends.",
    featured: false,
    btnVariant: "blue",
  },
  {
    id: 6,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Internship Training",
    audience: "Live Project Based",
    description: "Work on real client projects under senior developers.",
    featured: true,
    btnVariant: "orange",
  },
  {
    id: 7,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Project Training",
    audience: "Final Year Guidance",
    description: "End-to-end guidance for major academic projects.",
    featured: false,
    btnVariant: "blue",
  },
  {
    id: 8,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Syllabus Training",
    audience: "For B.Tech 1st-3rd Year",
    description: "Academic syllabus coverage with practical approach.",
    featured: false,
    btnVariant: "blue",
  },
  {
    id: 9,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Faculty Training",
    audience: "For College Teachers",
    description: "FDPs on advanced tech stacks and industry trends.",
    featured: false,
    btnVariant: "blue",
  },
];

// ─────────── SUB-COMPONENTS ────────────

// Featured badge
const Badge = () => (
  <span
    className="absolute top-4 right-4 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide"
    style={{ background: "#ff8c00" }}
  >
    Featured
  </span>
);

// Icon wrapper
const IconBox = ({ children }) => (
  <div
    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white"
    style={{ background: "#fff3e0", color: "#ff8c00" }}
  >
    {children}
  </div>
);

// Register button
const RegisterBtn = ({ variant }) => {
  const base =
    "mt-5 w-full py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none";

  if (variant === "orange") {
    return (
      <button
        className={base}
        style={{ background: "#ff8c00", color: "white" }}
        onMouseEnter={(e) => {
          e.target.style.background = "white";
          e.target.style.color = "#ff8c00";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "#ff8c00";
          e.target.style.color = "white";
        }}
      >
        Register
      </button>
    );
  }

  return (
    <button
      className={`${base} group-hover:bg-white`}
      style={{ background: "#2e7d32", color: "white" }}
      onMouseEnter={(e) => {
        e.target.style.background = "white";
        e.target.style.color = "#2e7d32";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "#2e7d32";
        e.target.style.color = "white";
      }}
    >
      Register
    </button>
  );
};

// Training card
const TrainingCard = ({ icon, title, audience, description, featured, btnVariant }) => (
  <div
    className="group relative bg-gray-100 text-black p-7 flex flex-col border border-gray-100 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
    style={{ borderRadius: "24px 4px 24px 4px" }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#0d1b2a";
      e.currentTarget.style.borderRadius = "2px 24px 2px 24px";
      e.currentTarget.style.borderColor = "#ff8c00";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "#f3f4f6";
      e.currentTarget.style.borderRadius = "24px 2px 24px 2px";
      e.currentTarget.style.borderColor = "#f3f4f6";
    }}
  >
    {featured && <Badge />}
    <IconBox>{icon}</IconBox>
    <h3 className="text-lg font-bold mb-2 text-[#1a1a1a] transition-colors duration-300 group-hover:text-white">
      {title}
    </h3>
    <span
      className="inline-block text-xs font-medium px-3 py-1 rounded-md mb-3 w-fit transition-all duration-300 group-hover:bg-white/10 group-hover:text-orange-200"
      style={{ background: "#f3f4f6", color: "#6b7280" }}
    >
      {audience}
    </span>

    <p
      className="text-sm leading-relaxed flex-1 transition-colors duration-300 group-hover:text-gray-300"
      style={{ color: "#6b7280" }}
    >
      {description}
    </p>

    <RegisterBtn variant={btnVariant} />
  </div>
);

// ──────── TRAINING SECTION ──────────
const TrainingSection = () => (
  <div>
    {/* Header */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Training &nbsp;Programs</h2>
      <div className="mx-auto mt-3 h-[2px] w-52 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
      <p className="text-gray-500 text-base pt-3 md:text-lg">
        Specially designed for Engineering Students &amp; Professionals
      </p>
    </div>

    {/* Grid */}
    <section className="relative py-10 px-4 overflow-hidden" id="training">
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {trainingData.map((card) => (
            <TrainingCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              audience={card.audience}
              description={card.description}
              featured={card.featured}
              btnVariant={card.btnVariant}
            />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default TrainingSection;
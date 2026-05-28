import { useRef, useState } from "react";

// ───────── DATA ────────────
const expertsData = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rajesh Kumar",
    role: "Full Stack Developer",
    experience: "8+ Years in Web Development",
    expertise: ["React", "Node.js", "MongoDB"],
    linkedin: "#",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    role: "Data Science Expert",
    experience: "6+ Years in ML & AI",
    expertise: ["Python", "TensorFlow", "NLP"],
    linkedin: "#",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    name: "Amit Verma",
    role: "DevOps Engineer",
    experience: "7+ Years in Cloud & CI/CD",
    expertise: ["AWS", "Docker", "Kubernetes"],
    linkedin: "#",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Sneha Gupta",
    role: "UI/UX Designer",
    experience: "5+ Years in Product Design",
    expertise: ["Figma", "React", "Tailwind"],
    linkedin: "#",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Vikram Singh",
    role: "Cybersecurity Analyst",
    experience: "9+ Years in Network Security",
    expertise: ["Ethical Hacking", "VAPT", "Linux"],
    linkedin: "#",
  },
  {
    id: 6,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Anjali Mishra",
    role: "Android Developer",
    experience: "5+ Years in Mobile Apps",
    expertise: ["Kotlin", "Java", "Firebase"],
    linkedin: "#",
  },
];

// ────────────  EXPERT CARD ───────
const ExpertCard = ({ image, name, role, experience, expertise, linkedin }) => {
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">

      {/* Image Area */}
      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-slate-100 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Area */}
      <div className="px-4 pb-6 mt-2">

        {/* Name & Role */}
        <h3 className="text-lg font-bold text-gray-900 leading-tight">{name}</h3>
        <p className="text-orange-600 text-sm font-semibold mt-0.5">{role}</p>

        {/* Divider */}
        <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />

        {/* Experience */}
        <p className="text-xs text-gray-400 font-medium uppercase tracking-widest my-2">Experience</p>
        <p className="text-sm text-gray-600 font-medium">{experience}</p>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {expertise.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-orange-50 text-orange-500 px-2.5 py-1 rounded-full font-medium border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* LinkedIn Button */}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-blue-500 transition-colors duration-200 font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            View Profile
          </a>
        )}
      </div>
    </div>
  );
};

// ────────────── ARROW BUTTON ────────

const ArrowBtn = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200"
    style={
      disabled
        ? { borderColor: "#e5e7eb", color: "#d1d5db", background: "white" }
        : { borderColor: "#ffcc80", color: "#ff8c00", background: "white" }
    }
    onMouseEnter={(e) => {
      if (!disabled) {
        e.currentTarget.style.background = "#ff8c00";
        e.currentTarget.style.color = "white";
        e.currentTarget.style.borderColor = "#ff8c00";
      }
    }}
    onMouseLeave={(e) => {
      if (!disabled) {
        e.currentTarget.style.background = "white";
        e.currentTarget.style.color = "#ff8c00";
        e.currentTarget.style.borderColor = "#ffcc80";
      }
    }}
  >
    {direction === "left" ? (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    ) : (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    )}
  </button>
);

// ─────── EXPERT SECTION ────────────

const ExpertSection = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex,    setActiveIndex]    = useState(0);

  const SCROLL_AMOUNT = 310;

  const updateArrows = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    setActiveIndex(Math.round(el.scrollLeft / SCROLL_AMOUNT));
  };

  const scrollLeft  = () => {
    sliderRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(updateArrows, 300);
  };
  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(updateArrows, 300);
  };

  return (
    <section className="bg-white pb-5 px-4" id="experts">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-6 py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Learn from Experts
            <div className="mx-auto mt-1 h-[2px] w-28 md:w-52 rounded-full bg-gradient-to-r from-[#ff8c00] to-transparent" />
          </h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Experienced trainers with real-world project backgrounds.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <ArrowBtn direction="left" onClick={scrollLeft} disabled={!canScrollLeft} />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <ArrowBtn direction="right" onClick={scrollRight} disabled={!canScrollRight} />
          </div>

          <div
            ref={sliderRef}
            onScroll={updateArrows}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {expertsData.map((expert) => (
              <ExpertCard key={expert.id} {...expert} />
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {expertsData.map((_, i) => (
            <span
              key={i}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? "20px" : "8px",
                background: i === activeIndex ? "#ff8c00" : "#e5e7eb",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpertSection;

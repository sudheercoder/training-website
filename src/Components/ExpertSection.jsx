import { useRef, useState } from "react";

import vedprakash from '/Images/ved-prakash-team-lead-web-development.png'
import adityakashyap from '/Images/aditya-kashyap-business-development-manager.png'
import sumeshgupta from '/Images/sumesh-gupta-team-lead-graphics.png'
import abhisheksingh from '/Images/abhishek-singh-sr.-data-analyst-expert.png'
import masoomabbas from '/Images/masoom-abbas-business-development-analyst.png'
import pushkalsingh from '/Images/pushkal-singh-coorporate-relation-manager.jpeg'
import divyapal from '/Images/divya-pal-hr-executive.png'
import gayatri from '/Images/gayatri-vishwakarma-hr-executive.png'
import roshni from '/Images/roshani-yadav-social-media-manager.jpeg'
import yogeshpal from '/Images/yogesh-pal-full-stack-developer.png'


// ───────── DATA ────────────
const expertsData = [
  {
    id: 1,
    image: vedprakash,
    name: "Ved Prakash",
    role: "Software Developer",
  },
  {
    id: 2,
    image: sumeshgupta,
    name: "Sumesh Gupta",
    role: "Team Lead (Graphics)",
  },
  {
    id: 3,
    image: abhisheksingh,
    name: "Abhishek Singh",
    role: "Sr. Data Analyst Expert",
  },
  {
    id: 4,
    image: adityakashyap,
    name: "Aditya Kashyap",
    role: "Business Development Executive",
  },
  {
    id: 5,
    image: masoomabbas,
    name: "Masoom Abbas",
    role: "Business Development Executive",
  },
  {
    id: 6,
    image: pushkalsingh,
    name: "Pushkal Singh",
    role: "Corporate Relation Manager",
  },
  {
  id: 7,
  image: divyapal,
  name: "Divya Pal",
  role: "HR Executive",
},
  {
  id: 8,
  image: roshni,
  name: "Roshni Yadav",
  role: "Social Media Manager"
},
{
  id: 9,
  image: gayatri,
  name: "Gayatri Vishvakarma",
  role: "Hr Executive",
},
{
  id: 10,
  image: yogeshpal,
  name: "Yogesh Pal",
  role: ".NET Developer",
},
];

// ────────────  EXPERT CARD ───────
const ExpertCard = ({ image, name, role}) => {
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
        <h3 className="text-xl font-bold text-center text-gray-900 leading-tight">{name}</h3>
        <p className="text-orange-600 text-center text-sm font-semibold mt-0.5">{role}</p>

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

import { useRef, useEffect, useState } from "react";
import {
  FaUserTie,
  FaChalkboardTeacher,
  FaBriefcase,
  FaRocket,
  FaShieldAlt,
  FaMicrochip,
} from "react-icons/fa";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const features = [
  {
    icon: <FaUserTie />,
    title: "Expert Mentors & Developers",
    desc: "Learn and collaborate with experienced mentors and skilled developers who bring real industry insights and practical problem-solving expertise",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Industry-Oriented Training",
    desc: "Hands-on training with real-world projects, modern tools, and industry practices to make students job-ready and confident professionals.",
  },
  {
    icon: <FaBriefcase />,
    title: "Placement & Career Support",
    desc: "Comprehensive career support including resume building, mock interviews, and placement assistance to help students confidently secure job opportunities.",
  },
  {
    icon: <FaRocket />,
    title: "Fast & Scalable Development",
    desc: "We build high-performance, scalable applications using modern technologies to ensure speed, reliability, and seamless growth for your business.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Reliable Solutions",
    desc: "We deliver secure, reliable software solutions with best practices, data protection, and consistent performance you can depend on",
  },
  {
    icon: <FaMicrochip />,
    title: "Latest Technology Stack",
    desc: "We use modern, cutting-edge technologies and frameworks to build efficient, future-ready solutions that keep you ahead of the competition",
  },
];

// ─────────── ANIMATION STYLES ─────────────────────
const injectStyles = () => {
  const id = "why-choose-us-styles";
  if (document.getElementById(id)) return;
  const style = document.createElement("style");
  style.id = id;
  style.textContent = `
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
};

// ───────────── WHY CHOOSE US ────────────────
const WhyChooseUs = () => {
  const whyRef = useRef(null);
  const [whyInView, setWhyInView] = useState(false);

  useEffect(() => {
    injectStyles();

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWhyInView(true); },
      { threshold: 0.15 }
    );
    if (whyRef.current) observer.observe(whyRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-10" ref={whyRef} style={{ background: "#f9f5f0" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Why Choose DigiCoders
            <div className="mx-auto mt-3 h-[2px] w-52 rounded-full bg-gradient-to-r from-orange-500 to-transparent" />
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Engineering tomorrow, today. We architect digital advantage for ambitious students and businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 shadow-sm p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer"
              style={
                whyInView
                  ? {
                      animation: `fadeUp 0.5s ease forwards ${index * 0.1}s`,
                      opacity: 0,
                      borderRadius: "24px 4px 24px 4px",
                    }
                  : { opacity: 0, borderRadius: "24px 4px 24px 4px" }
              }
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,140,0,0.4)";
                e.currentTarget.style.borderRadius = "4px 24px 4px 24px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#f3f4f6";
                e.currentTarget.style.borderRadius = "24px 4px 24px 4px";
              }}
            >
              <div className="text-5xl mb-6 transition-transform group-hover:scale-110 duration-300 text-orange-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-400 text-justify leading-relaxed text-sm">{feature.desc}</p>
              <div className="mt-8 h-1 w-12 rounded-full bg-gradient-to-r from-[#ff8c00] to-[#2e7d32]" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

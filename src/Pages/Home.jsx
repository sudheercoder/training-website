import React, { useEffect, useRef, useState } from 'react'
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { ChevronRight, Star, Users, Clock, TrendingUp, Globe, GraduationCap, Building2, Award, BookOpen, Zap } from 'lucide-react';

import about from '../../public/Images/hero1.jpg'
import hero2 from '../../public/Images/hero2.jpg'
import hero3 from '../../public/Images/hero3.jpg'
import ExpertSection from '../Components/ExpertSection';
import ServicesSection from '../Components/ServicesSection';
import HeroSlider from '../Components/HeroSlider';
import TrainingSection from '../Components/TrainingSection';
import WhyChooseUs from '../Components/WhyChooseUs';
import BranchesSection from '../Components/BranchSection';

// ──----- Animated Counter ──────────
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatCard({ stat, index, inView }) {
  const count = useCounter(stat.value, 1800, inView)
  const Icon = stat.icon
  return (
    <div
      className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden group"
      style={{ animation: inView ? `fadeUp 0.5s ease forwards ${index * 0.1}s` : 'none', opacity: 0 }}
    >
      <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110"
        style={{ backgroundColor: stat.color }} />
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: stat.color + '18' }}>
        <Icon size={22} style={{ color: stat.color }} />
      </div>
      <div className="text-4xl font-black text-gray-900 tracking-tight">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
      <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
        style={{ backgroundColor: stat.color }} />
    </div>
  )
}

// ── Stats: Orange = primary CTA, Green = success/placement, Navy = trust
const statsData = [
  { value: 1000, suffix: '+', label: 'Students Trained',  icon: Users,      color: '#ff8c00' },
  { value: 7,    suffix: '+', label: 'Years Experience',  icon: Clock,      color: '#0d1b2a' },
  { value: 500,  suffix: '+', label: 'Placements Done',   icon: TrendingUp, color: '#2e7d32' },
  { value: 50,   suffix: '+', label: 'Hiring Partners',   icon: Building2,  color: '#e65100' },
]

// ── RECENT PLACEMENT  Data ────────────────────────────────────────

const placements1 = [
  { name: "Rahul Sharma",  role: "Security Analyst",   company: "Infosys",       salary: "8.5 LPA", tag: "Cyber Security", bg: "#e8f5e9", salBg: "#c8e6c9", salCol: "#1b5e20", image: about },
  { name: "Priya Singh",   role: "Cloud Engineer",     company: "TCS",           salary: "9.2 LPA", tag: "Cloud",          bg: "#e3f2fd", salBg: "#bbdefb", salCol: "#0d47a1", image: hero2 },
  { name: "Amit Verma",    role: "ML Engineer",        company: "Wipro",         salary: "11 LPA",  tag: "AI / ML",        bg: "#fff3e0", salBg: "#ffe0b2", salCol: "#e65100", image: hero3 },
  { name: "Sneha Patel",   role: "DevOps Engineer",    company: "HCL",           salary: "10 LPA",  tag: "DevOps",         bg: "#f3e5f5", salBg: "#e1bee7", salCol: "#4a148c", image: about },
  { name: "Karan Mehta",   role: "Penetration Tester", company: "Tech Mahindra", salary: "7.8 LPA", tag: "VAPT",           bg: "#fce4ec", salBg: "#f8bbd0", salCol: "#880e4f", image: hero3 },
  { name: "Riya Joshi",    role: "Data Scientist",     company: "Accenture",     salary: "12 LPA",  tag: "Data Science",   bg: "#e0f7fa", salBg: "#b2ebf2", salCol: "#006064", image: hero2 },
];

const placements2 = [
  { name: "Vikas Nair",   role: "SOC Analyst",       company: "Capgemini",  salary: "8 LPA",  tag: "Security",   bg: "#e8f5e9", salBg: "#c8e6c9", salCol: "#1b5e20", image: about   },
  { name: "Anjali Dubey", role: "AWS Architect",     company: "IBM",        salary: "14 LPA", tag: "Cloud",      bg: "#e3f2fd", salBg: "#bbdefb", salCol: "#0d47a1" , image: hero2 },
  { name: "Dev Chauhan",  role: "Python Developer",  company: "Mindtree",   salary: "7 LPA",  tag: "Python",     bg: "#fffde7", salBg: "#fff9c4", salCol: "#f57f17" , image: about },
  { name: "Pooja Rawat",  role: "NLP Engineer",      company: "Persistent", salary: "13 LPA", tag: "NLP",        bg: "#f3e5f5", salBg: "#e1bee7", salCol: "#4a148c" , image: hero3 },
  { name: "Harsh Pandey", role: "Network Engineer",  company: "Cognizant",  salary: "9 LPA",  tag: "Networking", bg: "#fce4ec", salBg: "#f8bbd0", salCol: "#880e4f" , image: hero2 },
  { name: "Neha Gupta",   role: "Power BI Analyst",  company: "Hexaware",   salary: "10 LPA", tag: "BI",         bg: "#e0f7fa", salBg: "#b2ebf2", salCol: "#006064" , image: hero3 },
];

// ── Companies Marquee Data ────────────────────────────────────────

const companies = [
  { name: "Infosys",       color: "#007cc3" },
  { name: "TCS",           color: "#e31e24" },
  { name: "Wipro",         color: "#6c2d82" },
  { name: "HCL Tech",      color: "#0073bb" },
  { name: "Accenture",     color: "#a100ff" },
  { name: "Capgemini",     color: "#003d6b" },
  { name: "Tech Mahindra", color: "#d42027" },
  { name: "IBM",           color: "#1f70c1" },
  { name: "Cognizant",     color: "#1d3c89" },
  { name: "Mindtree",      color: "#007a3b" },
  { name: "Persistent",    color: "#e25400" },
  { name: "Hexaware",      color: "#005baa" },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const statsRef    = useRef(null)
  const whyRef      = useRef(null)
  const aboutRef    = useRef(null)
  const [statsInView,  setStatsInView]  = useState(false)
  const [whyInView,    setWhyInView]    = useState(false)
  const [aboutInView,  setAboutInView]  = useState(false)

  

  useEffect(() => {
    const pairs = [
      { ref: statsRef,  setter: setStatsInView },
      { ref: whyRef,    setter: setWhyInView },
      { ref: aboutRef,  setter: setAboutInView },
    ]
    const observers = pairs.map(({ ref, setter }) => {
      const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true) }, { threshold: 0.15 })
      if (ref.current) o.observe(ref.current)
      return o
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      <style>{`
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
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes animate-slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: animate-slide 20s linear infinite;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }

        /* Shimmer using brand orange */
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

        /* Why choose us card hover bar */
        .why-card:hover .why-bar {
          width: 80px;
        }
        .why-bar {
          transition: width 0.3s ease;
        }
      `}</style>

      {/* HERO SECTION */}
        <HeroSlider/>

      {/*-------- STATS SECTION --------- */}

      <section className="py-14 px-6 bg-white" ref={statsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Real Growth, Real Results
              <div className="mx-auto mt-3 h-[2px] w-52 rounded-full bg-gradient-to-r from-orange-500 to-transparent" />
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">7+ years of real impact, real students, real results</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statsData.map((s, i) => <StatCard key={i} stat={s} index={i} inView={statsInView} />)}
          </div>
        </div>
      </section>

      {/* ----------------RECENT PLACEMENTS —------------- marquee slider */}
      <section className="py-12 overflow-hidden px-10" style={{ background: "#f9f5f0" }}>
      {/* Keyframes */}
      <style>{`
        @keyframes marqueeLeft  { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
        @keyframes marqueeRight { from { transform: translateX(-50%); } to { transform: translateX(0);    } }
      `}</style>
      {/* ── Heading ── */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Recent &nbsp;Placement&nbsp; Highlights
        </h2>
        <div className="mx-auto mt-3 h-[2px] w-52 rounded-full bg-gradient-to-r from-orange-500 to-transparent mb-5" />
      </div>

      {/* ── Row 1 — left ── */}
      <div className="mb-2">
        <p className="text-[11px] font-bold uppercase tracking-[1.2px] text-gray-400 mb-2 px-1">→ Latest placements</p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-0 z-10 pointer-events-none" style={{ background: "linear-gradient(to right,#f9f5f0,transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-0 z-10 pointer-events-none" style={{ background: "linear-gradient(to left,#f9f5f0,transparent)" }} />
          <div
            className="flex w-max"
            style={{ animation: "marqueeLeft 30s linear infinite" }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          >
            {[...placements1, ...placements1].map((p, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[220px] mx-2 rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
                  style={{ borderColor: "rgba(255,140,0,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                >
                  <div className="relative w-full h-[180px] overflow-hidden" style={{ background: p.bg }}>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.18) 0%,transparent 55%)" }} />
                    <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide text-white" style={{ background: "rgba(0,0,0,0.52)" }}>
                      {p.tag}
                    </span>
                  </div>
                  <div className="px-3 pt-2.5 pb-3 bg-white">
                    <p className="text-[13px] font-semibold text-gray-900 m-0 leading-tight">{p.name}</p>
                    <p className="text-[11px] text-gray-500 m-0 mt-0.5">{p.role} · {p.company}</p>
                    <span className="inline-block mt-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: p.salBg, color: p.salCol }}>
                      {p.salary}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* ── Row 2 — right ── */}
      {/* <div className="mt-4 mb-8">
        <p className="text-[11px] font-bold uppercase tracking-[1.2px] text-gray-400 mb-2 px-1 text-right">Featured alumni ←</p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-0 z-10 pointer-events-none" style={{ background: "linear-gradient(to right,#f9f5f0,transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-0 z-10 pointer-events-none" style={{ background: "linear-gradient(to left,#f9f5f0,transparent)" }} />
          <div
            className="flex w-max"
            style={{ animation: "marqueeRight 24s linear infinite" }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          >
            {[...placements2, ...placements2].map((p, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[220px] mx-2 rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
                  style={{ borderColor: "rgba(255,140,0,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                >
                  <div className="relative w-full h-[180px] overflow-hidden" style={{ background: p.bg }}>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.18) 0%,transparent 55%)" }} />
                    <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide text-white" style={{ background: "rgba(0,0,0,0.52)" }}>
                      {p.tag}
                    </span>
                  </div>
                  <div className="px-3 pt-2.5 pb-3 bg-white">
                    <p className="text-[13px] font-semibold text-gray-900 m-0 leading-tight">{p.name}</p>
                    <p className="text-[11px] text-gray-500 m-0 mt-0.5">{p.role} · {p.company}</p>
                    <span className="inline-block mt-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: p.salBg, color: p.salCol }}>
                      {p.salary}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div> */}

      {/* ── Companies marquee ── */}
      <div>
        <div className='text-center'>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 my-8">
              Hiring &nbsp;Partners
              <div className="mx-auto mt-3 h-[2px] w-42 rounded-full bg-gradient-to-r from-orange-500 to-transparent mb-5" />

            </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-0 z-10 pointer-events-none" style={{ background: "linear-gradient(to right,#f9f5f0,transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-0 z-10 pointer-events-none" style={{ background: "linear-gradient(to left,#f9f5f0,transparent)" }} />
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
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.color }} />
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>

      {/* =============== EXPERT SECTION ========== */}
      
      <div className='px-4 md:px-10 bg-white'>
        <ExpertSection />
      </div>

      {/* ================= TRAINING CARDS SECTION =================== */}
      <div className='px-4 md:px-10 pt-10 bg-white'>
        <TrainingSection />
      </div>

      {/* ═══════════════ WHY CHOOSE US ═══════════════════ */}
      <WhyChooseUs/>

      {/* ═══════════════ ABOUT SECTION ══════════════════════ */}
      <section className="py-10 bg-white" ref={aboutRef}>
        <div className="text-center mb-9">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              About &nbsp;DigiCoders
              <div className="mx-auto mt-3 h-[2px] w-52 rounded-full bg-gradient-to-r from-orange-500 to-transparent" />
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
               We offer industrial training, vocational training, and live project-based courses.
            </p>          
          </div>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          
          {/* Image */}
          <div
            className="w-full md:w-1/2"
            style={aboutInView ? { animation: 'slideRight 0.7s ease forwards', opacity: 0 } : { opacity: 0 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={about} alt="About DigiCoders" className="w-full h-auto md:h-[420px] object-cover" />
              {/* Floating badge — navy bg with orange accent */}
              <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: '#fff3e0' }}>
                  <Zap size={20} style={{ color: '#ff8c00' }} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Trusted Since</div>
                  <div className="text-sm font-black text-gray-900">2017 — 7+ Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
        
          <div
            className="w-full md:w-1/2"
            style={aboutInView ? { animation: 'slideLeft 0.7s ease forwards 0.1s', opacity: 0 } : { opacity: 0 }}
          >
            <p className="text-gray-500 leading-relaxed mb-6 text-justify">
              DigiCoders Technologies is Uttar Pradesh's leading software training company, empowering
              students and professionals with industry-ready skills. With branches in Lucknow and Kanpur,
              we have trained 1000+ students and placed 500+ in top IT companies over 7+ years of excellence.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'IT Solutions',
                'Global Solutions',
                'Lifetime Support',
                '8 Years Experience',
                'Software Solutions',
                'Digital Services',
              ].map((item) => (
                <p key={item} className="flex items-center gap-2 font-semibold text-gray-700">
                  <FaCircleArrowRight style={{ color: '#ff8c00' }} className="shrink-0" />
                  {item}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {['ISO Certified', 'MOU Partner', '7+ Years', 'Govt. Approved'].map((badge) => (
                <span key={badge} className="text-xs font-bold px-3 py-1.5 rounded-full border"
                  style={{ background: '#e8f5e9', color: '#2e7d32', borderColor: '#c8e6c9' }}>
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/services"
                className="group flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: '#ff8c00' }}
                onMouseEnter={e => e.currentTarget.style.background = '#e65100'}
                onMouseLeave={e => e.currentTarget.style.background = '#ff8c00'}
              >
                Our Services
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/about"
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ BRANCHES SECTION ═════════════════ */}
      <BranchesSection/>

      {/* ════════ SERVICES SECTION ═══════════ */}
      <ServicesSection />

      {/* ═════════ FINAL CTA SECTION ══════════ */}
      <section className="relative overflow-hidden py-14 px-6"
        style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f1a 50%, #0d1b2a 100%)' }}>

        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #ff8c00 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        {/* Glow orbs using brand colors */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ff8c00, transparent)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #4caf50, transparent)', filter: 'blur(60px)' }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border"
            style={{ background: 'rgba(255,140,0,0.1)', borderColor: 'rgba(255,140,0,0.25)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#ff8c00' }} />
            <span className="text-sm font-medium" style={{ color: '#ffb74d' }}>New Batch Starting Soon — Limited Seats</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Ready to Start Your{' '}
            <span className="shimmer-text">Success Story?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Join 1000+ students who have transformed their careers with DigiCoders Technologies.
            One step is all it takes — we will guide you the rest of the way.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a href="/contact#registration"
              className="group relative px-8 py-4 font-bold rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              style={{ background: '#ff8c00' }}
              onMouseEnter={e => e.currentTarget.style.background = '#e65100'}
              onMouseLeave={e => e.currentTarget.style.background = '#ff8c00'}
            >
              Register Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contact"
              className="px-8 py-4 font-bold rounded-xl border text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'rgba(76,175,80,0.12)', borderColor: 'rgba(76,175,80,0.35)', color: '#81c784' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#4caf50'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(76,175,80,0.12)'; e.currentTarget.style.color = '#81c784'; }}
            >
              Contact Us
            </a>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <a href="tel:+919198483820"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
              <IoCall style={{ color: '#ff8c00' }} />
              +91 9198483820
            </a>
            <a href="https://wa.me/919198483820" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
              <FaWhatsapp style={{ color: '#4caf50' }} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

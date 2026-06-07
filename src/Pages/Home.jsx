import React, { useEffect, useRef, useState } from 'react'
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { ChevronRight, Users, Clock, TrendingUp, GraduationCap, Building2, Award, BookOpen, Zap } from 'lucide-react';

import AboutImage from '/Images/kanpur-branch-digicoders.jpg'
import ExpertSection from '../Components/ExpertSection';
import ServicesSection from '../Components/ServicesSection';
import HeroSection from '../Components/HeroSection'
import TrainingSection from '../Components/TrainingSection';
import WhyChooseUs from '../Components/WhyChooseUs';
import BranchesSection from '../Components/BranchSection';
import PlacementSection from '../Components/PlacementSection';

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
      className=" relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden group"
      style={{ animation: inView ? `fadeUp 0.5s ease forwards ${index * 0.1}s` : 'none', opacity: 0 }}
    >
      <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110"
        style={{ backgroundColor: stat.color }} />
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: stat.color + '18' }}>
        <Icon size={22} style={{ color: stat.color }} />
      </div>
      <div className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
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
  { value: 21000, suffix: '+', label: 'Students Trained',  icon: Users,      color: '#ff8c00' },
  { value: 8,    suffix: '+', label: 'Years Experience',  icon: Clock,      color: '#0d1b2a' },
  { value: 50,  suffix: '+', label: 'Expert Mentors',   icon: TrendingUp, color: '#2e7d32' },
  { value: 40,   suffix: '+', label: 'Hiring Partners',   icon: Building2,  color: '#e65100' },
]

const Home = () => {
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
      <HeroSection/>

      {/* STATS SECTION */}
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

      <PlacementSection/>
      <ExpertSection />
      <TrainingSection />
      <WhyChooseUs/>

      {/*  ABOUT SECTION  */}
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
              <img src={AboutImage} alt="About DigiCoders" className="w-full h-auto md:h-[440px] object-cover" />
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
            <p className="text-md text-gray-500 leading-relaxed mb-6 text-justify">
              DigiCoders Technologies is a leading IT training institute in Kanpur that helps students build successful careers through industrial training, internships, and live project-based learning. <br />
              The company also provides web development, mobile app development, and digital marketing services while training students in industry-relevant technologies such as Python, Full Stack Development, Java, and PHP.
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
              <a href="https://digicoders.in/Home/ITServices"
                target='_blank'
                className="group flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: '#ff8c00' }}
                onMouseEnter={e => e.currentTarget.style.background = '#e65100'}
                onMouseLeave={e => e.currentTarget.style.background = '#ff8c00'}                                               
              >
                Our Services
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://thedigicoders.com/about"
                target='_blank'
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>


      <BranchesSection/>
      <ServicesSection />

      {/* FINAL CTA SECTION */}
      <section className="relative overflow-hidden py-14 px-6"
        style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f1a 50%, #0d1b2a 100%)' }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #ff8c00 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
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
            <a href="https://thedigicoders.com/registration"
              target='_blank'
              className="group relative px-8 py-4 md:font-bold rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              style={{ background: '#ff8c00' }}
              onMouseEnter={e => e.currentTarget.style.background = '#e65100'}
              onMouseLeave={e => e.currentTarget.style.background = '#ff8c00'}
            >
              Register Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://thedigicoders.com/contact"
              target='_blank'
              className="px-8 py-4 md:font-bold rounded-xl border text-white transition-all duration-300 hover:-translate-y-0.5"
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

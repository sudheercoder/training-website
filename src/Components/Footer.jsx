import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook, FaInstagram, FaYoutube, FaLinkedin,
  FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaGlobe,
  FaTrophy,
  FaPhone,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ChevronRight } from "lucide-react";
import logo from '../../public/Images/logo.png'

const trainingLinks = [
  { label: "Vocational Training",     path: "https://thedigicoders.com/vocational-training" },
  { label: "Summer Training",         path: "https://thedigicoders.com/summer-training"  },
  { label: "Winter Training",         path: "https://thedigicoders.com/winter-training"},
  { label: "Industrial Training",     path: "https://thedigicoders.com/industrial-training" },
  { label: "Apprenticeship Training", path: "https://thedigicoders.com/apprenticeship-training"  },
  { label: "Internship Training",     path: "https://thedigicoders.com/internship-training"  },
  { label: "Project Training",        path: "https://thedigicoders.com/project-training"},
  { label: "Faculty Training",        path: "https://thedigicoders.com/faculty-training"},
];

const quickLinks = [
  { label: "Home",         path: "/" },
  { label: "About Us",     path: "https://thedigicoders.com/about" },
  { label: "Registration", path: "https://thedigicoders.com/registration" },
  { label: "Training",     path: "https://thedigicoders.com/summer-training" },
  { label: "Placement",    path: "https://thedigicoders.com/placement" },
  { label: "Gallery",      path: "https://thedigicoders.com/gallery" },
  { label: "Services",     path: "https://digicoders.in/Home/SoftwareDevelopment" },
  { label: "Contact Us",   path: "https://thedigicoders.com/contact" },
];

const services = [
  "Software Development",
  "Website Development",
  "Mobile App Development",
  "Digital Marketing",
];

const socialLinks = [
  { icon: FaFacebook,  title: "Facebook",  href: "https://www.facebook.com/DigiCodersTech/",                          hoverBg: "#1877f2" },
  { icon: FaInstagram, title: "Instagram", href: "https://www.instagram.com/digicoderstech",                          hoverBg: "#e1306c" },
  { icon: FaLinkedin,  title: "LinkedIn",  href: "https://www.linkedin.com/company/digicoders/",                 hoverBg: "#0077b5" },
  { icon: FaYoutube,  title: "YouTube",   href: "https://www.youtube.com/@digicoders",                          hoverBg: "#000000" },
  { icon: FaWhatsapp,  title: "WhatsApp",  href: "https://wa.me/919198483820",                                   hoverBg: "#25d366" },
];

const columns = [
  {
    title: "Our Popular Training Programs",
    links: [
      { label: "Best Summer Training for CS Students in Kanpur", href: "https://thedigicoders.com/courses/best-summer-training-for-cs-students-in-lucknow" },
      { label: "Best Summer Training for EC Students in Kanpur", href: "https://thedigicoders.com/courses/best-summer-training-for-ec-students-in-lucknow" },
      { label: "Best Summer Training for Electrical Students in Kanpur", href: "https://thedigicoders.com/courses/best-summer-training-for-electrical-students-in-lucknow" },
      { label: "Best Summer Training for Mechanical Engineering Students in Kanpur", href: "https://thedigicoders.com/courses/best-summer-training-for-mechanical-engineering-students-in-lucknow" },
      { label: "Corporate Training Programs in Kanpur", href: "https://thedigicoders.com/courses/corporate-training-programs-in-lucknow" },
      { label: "Best Apprenticeship Program in Kanpur", href: "https://thedigicoders.com/courses/best-apprenticeship-program-in-lucknow" },
      { label: "Syllabus-Based Training in Kanpur", href: "https://thedigicoders.com/courses/syllabus-based-training-in-lucknow" },
      { label: "On-Campus Training in Kanpur", href: "https://thedigicoders.com/courses/on-campus-training-in-lucknow" },
      { label: "Top Courses for Data Analytics Course in Kanpur", href: "https://thedigicoders.com/courses/top-company-for-data-analytics-course-in-lucknow" },
      { label: "Software Testing Training in Kanpur", href: "https://thedigicoders.com/courses/software-testing-training-in-lucknow" },
      { label: "Best Company for MEAN Stack Training in Kanpur", href: "https://thedigicoders.com/courses/best-company-for-mean-stack-training-in-lucknow" },
      { label: "Best Company for MERN Stack Training in Kanpur", href: "https://thedigicoders.com/courses/best-company-for-mern-stack-training-in-lucknow" },
      { label: "Top Company for Summer Training on MERN Full Stack", href: "https://thedigicoders.com/courses/top-company-for-summer-training-on-mern-full-stack" },
      { label: "Best Fullstack NodeJS Training in Kanpur", href: "https://thedigicoders.com/courses/best-fullstack-nodejs-training-in-lucknow" },
      { label: "Final Year Project for Diploma (CS Branch)", href: "https://thedigicoders.com/courses/final-year-project-for-diploma-cs-branch" },
    ],
  },
  {
    title: "More Training Links in Kanpur",
    links: [
      { label: "Winter Training in Kanpur", href: "https://thedigicoders.com/courses/winter-training-in-lucknow" },
      { label: "Industrial Training in Kanpur", href: "https://thedigicoders.com/courses/industrial-training-in-lucknow" },
      { label: "Vocational Training in Kanpur", href: "https://thedigicoders.com/courses/vocational-training-in-lucknow" },
      { label: "PD & Skills Development in Kanpur", href: "https://thedigicoders.com/courses/pd-skills-development-in-lucknow" },
      { label: "JavaScript Training in Kanpur", href: "https://thedigicoders.com/courses/javascript-training-in-lucknow" },
      { label: "HTML & CSS Training in Kanpur", href: "https://thedigicoders.com/courses/html-css-training-in-lucknow" },
      { label: "MERN Apprenticeship Training", href: "https://thedigicoders.com/courses/mern-apprenticeship-training" },
      { label: "MERN Fullstack Program in Kanpur", href: "https://thedigicoders.com/courses/mern-fullstack-program-in-Kanpur" },
      { label: "Best Company for Dot Net Core Training in Kanpur", href: "https://thedigicoders.com/courses/best-company-for-dot-net-core-training-in-Kanpur" },
      { label: "100% Job Assistance Program in Kanpur", href: "https://thedigicoders.com/courses/100-job-assistance-program-in-Kanpur" },
      { label: "Civil Engineering Summer Training", href: "https://thedigicoders.com/courses/civil-engineering-summer-training" },
      { label: "Best Companies for Apprenticeship Training", href: "https://thedigicoders.com/courses/best-companies-for-apprenticeship-training" },
      { label: "Best Company for MERN Stack Training in Kanpur", href: "https://thedigicoders.com/courses/best-company-for-mern-stack-training-in-lucknow" },
      { label: "Best Company for IOT Training in Kanpur", href: "https://thedigicoders.com/courses/best-company-for-iot-training-in-lucknow" },
      { label: "Digital Marketing Training Course in Kanpur", href: "https://thedigicoders.com/courses/digital-marketing-training-course-in-lucknow" },
      { label: "Best Company for Data Analytics Training in Kanpur", href: "https://thedigicoders.com/courses/best-company-for-data-analytics-training-in-lucknow" },
      { label: "Final Year Project for B.Tech (CS Branch)", href: "https://thedigicoders.com/courses/final-year-project-for-btech-cs-branch" },
    ],
  },
  {
    title: "Advanced Training Programs in Kanpur",
    links: [
      { label: "Best Summer Training on MERN", href: "https://thedigicoders.com/courses/best-summer-training-on-mern" },
      { label: "Best Summer Training on Python", href: "https://thedigicoders.com/courses/best-summer-training-on-python" },
      { label: "Best Summer Training on PHP Laravel", href: "https://thedigicoders.com/courses/best-summer-training-on-php-laravel" },
      { label: "Best Summer Training on Java", href: "https://thedigicoders.com/courses/best-summer-training-on-java" },
      { label: "Best Summer Training on DotNet", href: "https://thedigicoders.com/courses/best-summer-training-on-dotnet" },
      { label: "MSSQL Training in Kanpur", href: "https://thedigicoders.com/courses/mssql-training-in-Kanpur" },
      { label: "React JS Training in Kanpur", href: "https://thedigicoders.com/courses/react-js-training-in-Kanpur" },
      { label: "Best Summer Training on Flutter", href: "https://thedigicoders.com/courses/best-summer-training-on-flutter" },
      { label: "Best Summer Training on Android", href: "https://thedigicoders.com/courses/best-summer-training-on-android" },
      { label: "AI Training in Kanpur", href: "https://thedigicoders.com/courses/ai-training-in-Kanpur" },
      { label: "Machine Learning in Kanpur", href: "https://thedigicoders.com/courses/machine-learning-in-Kanpur" },
      { label: "Graphics Designing in Kanpur", href: "https://thedigicoders.com/courses/graphics-designing-in-Kanpur" },
      { label: "Data Science Training in Kanpur", href: "https://thedigicoders.com/courses/data-science-training-in-lucknow" },
      { label: "Web Designing Training in Kanpur", href: "https://thedigicoders.com/courses/web-designing-training-in-lucknow" },
      { label: "Node JS Training in Kanpur", href: "https://thedigicoders.com/courses/node-js-training-in-lucknow" },
      { label: "Ethical Hacking Training in Kanpur", href: "https://thedigicoders.com/courses/ethical-hacking-training-in-lucknow" },
      { label: "Best Online Summer Training for CS Students", href: "https://thedigicoders.com/courses/best-online-summer-training-for-cs-students" },
      { label: "Best Company for Online Apprenticeship Training", href: "https://thedigicoders.com/courses/best-company-for-online-apprenticeship-training" },
      { label: "Final Year Project for MCA Students", href: "https://thedigicoders.com/courses/final-year-project-for-mca-students" },
    ],
  },
  {
    title: "Most Top Courses in Kanpur",
    links: [
      { label: "Top Data Analytics Course in Kanpur", href: "https://thedigicoders.com/courses/top-data-analytics-course-in-Kanpur" },
      { label: "Top Software Testing Course in Kanpur", href: "https://thedigicoders.com/courses/top-software-testing-course-in-Kanpur" },
      { label: "Top MEAN Stack Course in Kanpur", href: "https://thedigicoders.com/courses/top-mean-stack-course-in-Kanpur" },
      { label: "Top Ethical Hacking Course in Kanpur", href: "https://thedigicoders.com/courses/top-ethical-hacking-course-in-Kanpur" },
      { label: "Top MERN Stack Course in Kanpur", href: "https://thedigicoders.com/courses/top-mern-stack-course-in-Kanpur" },
      { label: "Top Node JS Course in Kanpur", href: "https://thedigicoders.com/courses/top-node-js-course-in-Kanpur" },
      { label: "Top JavaScript Course in Kanpur", href: "https://thedigicoders.com/courses/top-javascript-course-in-Kanpur" },
      { label: "Top HTML & CSS Course in Kanpur", href: "https://thedigicoders.com/courses/top-html-css-course-in-Kanpur" },
      { label: "Top Digital Marketing Course in Kanpur", href: "https://thedigicoders.com/courses/top-digital-marketing-course-in-Kanpur" },
      { label: "Top AI Course in Kanpur", href: "https://thedigicoders.com/courses/top-ai-course-in-Kanpur" },
      { label: "Top Machine Learning Course in Kanpur", href: "https://thedigicoders.com/courses/top-machine-learning-course-in-Kanpur" },
      { label: "Top Graphics Designing Course in Kanpur", href: "https://thedigicoders.com/courses/top-graphics-designing-course-in-Kanpur" },
      { label: "Top Data Science Course in Kanpur", href: "https://thedigicoders.com/courses/top-data-science-course-in-lucknow" },
      { label: "Top Web Designing Course in Kanpur", href: "https://thedigicoders.com/courses/top-web-designing-course-in-lucknow" },
      { label: "Top MSSQL Course in Kanpur", href: "https://thedigicoders.com/courses/top-mssql-course-in-lucknow" },
      { label: "Top React JS Course in Kanpur", href: "https://thedigicoders.com/courses/top-react-js-course-in-lucknow" },
      { label: "Top Flutter App Development Course in Kanpur", href: "https://thedigicoders.com/courses/top-flutter-app-development-course-in-lucknow" },
      { label: "Final Year Project for BCA Students", href: "https://thedigicoders.com/courses/final-year-project-for-bca-students" },
    ],
  },
];


const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const FooterHeading = ({ title }) => (
  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 relative pb-3"
    style={{
      borderBottom: 'none',
    }}>
    {title}
    <span className="absolute bottom-0 left-0 w-8 h-0.5 rounded-full" style={{ background: '#ff8c00' }} />
  </h4>
);

const FooterNavLink = ({ label, path, target, onClick }) => (
  <li>
    <NavLink
      to={path}
      target={target}
      onClick={onClick}
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-sm text-gray-400 font-medium py-0.5 transition-all duration-200 hover:pl-1 group"
      style={({ isActive }) =>
        isActive ? { color: "#ff8c00" } : {}
      }
    >
      <ChevronRight
        size={13}
        className="flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
        style={{ color: "rgba(255,140,0,0.5)" }}
      />

      <span className="group-hover:text-orange-400 transition-colors">
        {label}
      </span>
    </NavLink>
  </li>
);

const FooterPlainLink = ({ label }) => (
  <li>
    <span className="flex items-center gap-1.5 text-sm text-gray-400 font-medium py-0.5">
      <ChevronRight size={13} className="flex-shrink-0" style={{ color: 'rgba(46,125,50,0.6)' }} />
      {label}
    </span>
  </li>
);

const Footer = () => {

  return (
    <footer className="font-sans" style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #0a1520 100%)' }}>

      {/* ── Top Announcement Bar ── */}
      <div className="py-3 text-center text-white text-sm font-semibold tracking-wide overflow-hidden relative"
        style={{ background: 'linear-gradient(90deg, #0d1b2a, #1a2f1a, #0d1b2a)' }}>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 px-4">

          <span className="text-yellow-400 flex items-center gap-2">
            <FaTrophy className="text-amber-800 text-lg" />
            UP's #1 Software Training Company
          </span>
          <span className="opacity-30 hidden sm:inline">|</span>
          <span className="text-gray-300">21000+ Students Trained</span>
          <span className="opacity-30 hidden sm:inline">|</span>
          <span className="opacity-30 hidden sm:inline">|</span>
          <span className="text-gray-300 flex items-center gap-2">
            <a  href="https://www.google.com/maps/place/DigiCoders+Technologies+Private+Limited,+Best+Software%2FWebsite%2FMobile+App+Development+Company+in+Lucknow/@26.9046469,80.9470183,17z/data=!3m1!4b1!4m6!3m5!1s0x399bfd90f852511b:0xea3004cdf494ecbb!8m2!3d26.9046421!4d80.9495932!16s%2Fg%2F11h37gc4sq?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline underline-offset-2 decoration-dotted transition-colors"
            >
              Lucknow
            </a>
            <span className="opacity-30">&amp;</span>
            <a  href="https://www.google.com/maps/place/DigiCoders+Technologies+-+Kanpur/@26.4092157,80.3252139,17z/data=!3m1!4b1!4m6!3m5!1s0x399c47cc6b1e061f:0xc3429fe37a9666a7!8m2!3d26.4092109!4d80.3277888!16s%2Fg%2F11z6sssxht?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline underline-offset-2 decoration-dotted transition-colors"
            >
              Kanpur
            </a>
            <span className="opacity-30">&amp;</span>
            <a  href="https://www.google.com/maps/search/software+training+institute+Gorakhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline underline-offset-2 decoration-dotted transition-colors"
            >
              Gorakhpur
            </a>
          </span>

        </div>
      </div>

      {/* ── Wave divider ── */}
      <div className="relative h-10 overflow-hidden"
        style={{ background: 'linear-gradient(90deg, #0d1b2a, #1a2f1a, #0d1b2a)' }}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,40 1440,10 L1440,40 L0,40 Z" fill="#0d1b2a" />
        </svg>
      </div>

      {/* ── Main Grid ── */}
      <div className="max-w-6xl mx-auto px-10 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Col 1: Brand */}
        <div className="w-full">
          <img src={logo} alt="Footer logo" />
          <p className="text-sm text-gray-100 leading-relaxed mb-5">
            Uttar Pradesh's leading IT training company — empowering students with industry-ready
            skills in Kanpur since 2017. 
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-2 mb-6 ">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.title} href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer" title={s.title}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-100 border transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:border-transparent"
                  style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = s.hoverBg; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Col 2: Training Programs */}
        <div className="w-full">
          <FooterHeading title="Training Programs" />
          <ul className="flex flex-col gap-1">
            {trainingLinks.map((link) => (
              <FooterNavLink key={link.label} label={link.label} path={link.path} />
            ))}
          </ul>
        </div>

        {/* Col 3: Quick Links + Badges */}
        <div className="w-full">
          <FooterHeading title="Quick Links" />
          <ul className="flex flex-col gap-1 mb-6">
            {quickLinks.map((link) => (
              <FooterNavLink
                key={link.label}
                label={link.label}
                path={link.path}
                target={link.path === "/" ? "_self" : "_blank"}
                onClick={link.path === "/" ? handleScrollTop : undefined}
              />
            ))}
          </ul>
        </div>

        {/* Col 4: Services */}          
          <div className="w-full">
            <FooterHeading title="Our Services" />
            <ul className="flex flex-col gap-1">
              {services.map((s) => <FooterPlainLink key={s} label={s} />)}
            </ul>
          </div>
      </div>
    

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px" style={{ background: 'gray' }} />
      </div>

      {/* Bottom Training Section */}
      <section className="py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-bold text-lg mb-5 leading-snug">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-1.5 text-gray-100 text-sm leading-snug transition-colors duration-200 hover:text-orange-400"
                    >
                      <span className="mt-0.5 text-orange-500 font-bold text-base leading-none transition-colors duration-200 group-hover:text-orange-400">
                        &gt;
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom Bar ── */}
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 flex-wrap">
        <p className="text-sm text-gray-500 font-medium">
          © 2026{" "}
          <NavLink to="/" className="font-bold transition-colors hover:text-orange-300" style={{ color: '#ff8c00' }}>
            DigiCoders Technologies Pvt. Ltd.
          </NavLink>
          {" "}— All Rights Reserved. Made with ❤️ in Kanpur .
        </p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Use", "Sitemap", "Register"].map((link) => (
            <a key={link} href="#"
              className="text-xs text-gray-500 font-medium transition-colors hover:text-orange-400">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>

    
  );
};

export default Footer;

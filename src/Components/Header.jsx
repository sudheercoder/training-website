import React, { useState, useEffect } from 'react'
import logo from '/Images/logo1.png'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: "HOME",         path: "/",  external: false},
  { name: "ABOUT",        path: "https://thedigicoders.com/about", external: true },
  { name: "REGISTRATION", path: "https://thedigicoders.com/registration" , external: true},
  { name: "TRAINING",     path: "https://thedigicoders.com/summer-training", external: true },
  { name: "SERVICES",     path: "https://digicoders.in/Home/SoftwareDevelopment", external: true },
  { name: "PLACEMENT",    path: "https://thedigicoders.com/placement", external: true },
  { name: "GALLERY",      path: "https://thedigicoders.com/gallery", external: true },
  { name: "BLOGS",        path: "https://thedigicoders.com/blog", external: true },
  { name: "CONTACT US",   path: "https://thedigicoders.com/contact", external: true },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // ✅ Universal link click handler
  const handleLinkClick = (e, item, closeMobile = false) => {
    if (closeMobile) setIsOpen(false)

    if (item.external) {
      e.preventDefault()
      window.open(item.path, '_blank', 'noopener,noreferrer')
    } else {
      handleScrollTop()
    }
  }

  return (
    <>
      <style>{`
        .dc-nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 14px; right: 14px;
          height: 2px;
          background: #ff8c00;
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.25s cubic-bezier(.4,0,.2,1);
          transform-origin: left;
        }
        .dc-nav-link:hover::after,
        .dc-nav-link.active::after { transform: scaleX(1); }
        .dc-mobile-link::before {
          content: '';
          position: absolute;
          left: 0; top: 20%; bottom: 20%;
          width: 3px;
          border-radius: 2px;
          background: #ff8c00;
          transform: scaleY(0);
          transition: transform 0.2s;
        }
        .dc-mobile-link:hover::before,
        .dc-mobile-link.active::before { transform: scaleY(1); }
      `}</style>

      {/* ── HEADER ── */}
      <header
        className={`
          sticky top-0 z-50
          bg-white/90 backdrop-blur-md
          border-b border-orange-100
          transition-all duration-300
          ${scrolled ? 'shadow-[0_4px_32px_rgba(255,120,0,0.08)]' : ''}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/20 to-transparent pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <NavLink to='/'>
              <img src={logo} alt="DigiCoders logo" className="h-11" />
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center list-none m-0 p-0">
            {navLinks.map((item) => (
              <li key={item.path}>
                {item.external ? (                  
                  <a  href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dc-nav-link relative inline-block px-[14px] py-[6px] text-[0.78rem] font-semibold tracking-[0.06em] no-underline rounded-md transition-colors duration-200 text-gray-500 hover:text-orange-500"
                  >
                    {item.name}
                  </a>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={handleScrollTop}
                    className={({ isActive }) =>
                      `dc-nav-link relative inline-block px-[14px] py-[6px] text-[0.78rem] font-semibold tracking-[0.06em] no-underline rounded-md transition-colors duration-200
                      ${isActive ? 'text-orange-500 active' : 'text-gray-500 hover:text-orange-500'}`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="
              md:hidden flex items-center justify-center
              w-10 h-10 rounded-[10px]
              border border-orange-200/60
              bg-orange-50/50
              hover:bg-orange-100/50 hover:border-orange-300
              transition-colors duration-200
              relative z-[60]
            "
          >
            <Menu size={20} className="text-orange-500" />
          </button>
        </div>
      </header>

      {/* ── OVERLAY ── */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-[55]
          bg-black/25 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* ── DRAWER ── */}
      <nav
        aria-label="Mobile navigation"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        className="
          fixed top-0 right-0 z-[60]
          w-[min(300px,82vw)] h-dvh
          bg-white flex flex-col
          shadow-[-8px_0_40px_rgba(0,0,0,0.12)]
          border-l border-orange-100
          overflow-y-auto
        "
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 pt-[18px] pb-[14px] border-b border-orange-100/60">
          <span className="text-[0.7rem] font-bold tracking-[0.15em] text-orange-500 uppercase">
            Navigation
          </span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            style={{
              width: '34px', height: '34px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '8px', border: '1.5px solid #fb923c',
              backgroundColor: '#fff7ed', cursor: 'pointer', flexShrink: 0,
            }}
          >
            <X size={20} strokeWidth={2.5} color="#ea580c" />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="list-none m-0 flex-1 flex flex-col gap-[3px] p-3">
          {navLinks.map((item) => (
            <li key={item.path}>
              {item.external ? (
                // ✅ External — plain <a> with target="_blank"
                
                <a href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="dc-mobile-link relative flex items-center gap-[10px] px-[14px] py-[11px] rounded-[10px] text-[0.84rem] font-semibold tracking-[0.04em] no-underline overflow-hidden transition-colors duration-150 text-gray-600 hover:bg-orange-50/60 hover:text-orange-500"
                >
                  {item.name}
                </a>
              ) : (
                // ✅ Internal — NavLink
                <NavLink
                  to={item.path}
                  onClick={() => { setIsOpen(false); handleScrollTop() }}
                  className={({ isActive }) =>
                    `dc-mobile-link relative flex items-center gap-[10px] px-[14px] py-[11px] rounded-[10px] text-[0.84rem] font-semibold tracking-[0.04em] no-underline overflow-hidden transition-colors duration-150
                    ${isActive
                      ? 'bg-orange-50 text-orange-500 font-bold active'
                      : 'text-gray-600 hover:bg-orange-50/60 hover:text-orange-500'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="px-5 pt-4 pb-7 border-t border-orange-100/60">
          
          <a  href="https://thedigicoders.com/registration"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="
              block text-center w-full py-[13px] rounded-xl
              text-[0.88rem] font-bold tracking-[0.04em] text-white no-underline
              bg-gradient-to-br from-orange-400 to-orange-600
              shadow-[0_4px_18px_rgba(255,120,0,0.3)]
              hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(255,120,0,0.38)]
              transition-all duration-150
            "
          >
            🎓 Register for Training
          </a>
        </div>
      </nav>
    </>
  )
}

export default Header
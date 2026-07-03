import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navItems } from '../data/portfolioData'
import doodleLogo from "../assets/images/M-logo.webp"

export function Header({ menuOpen, setMenuOpen, closeMenu }) {
  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-3" onClick={closeMenu}>
        <img src={doodleLogo} className='w-12 h-12 object-cover' alt="logo" />
          {/* <span className="doodle-logo grid size-11 place-items-center text-3xl font-black">M</span> */}
          <span className="leading-none">
            <span className="font-heading block text-2xl">Martin's Portfolio</span>
            {/* <span className="brand-kicker">portfolio</span> */}
          </span>
        </NavLink>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-sticker ${isActive ? 'nav-sticker-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="icon-button lg:hidden"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav-grid" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `mobile-nav-sticker ${isActive ? 'mobile-nav-sticker-active' : ''}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  HomeIcon,
  BuildingIcon,
  FactoryIcon,
  SparklesIcon } from
'lucide-react';
const serviceDropdownItems = [
{
  label: 'Residential Cleaning',
  path: '/services/residential',
  icon: HomeIcon
},
{
  label: 'Commercial Cleaning',
  path: '/services/commercial',
  icon: BuildingIcon
},
{
  label: 'Industrial Cleaning',
  path: '/services/industrial',
  icon: FactoryIcon
},
{
  label: 'Specialized Services',
  path: '/services/specialized',
  icon: SparklesIcon
}];

const navLinks = [
{
  label: 'Home',
  path: '/'
},
{
  label: 'Services',
  path: '/services',
  hasDropdown: true
},
{
  label: 'Contact',
  path: '/contact'
}];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(false);
  }, [location.pathname]);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-xl shadow-lg shadow-black/10' : 'bg-transparent'}`}>

      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation">

        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="NKP Cleaners Home">

            <img
              src="/nkp.jpg"
              alt="NKP Cleaners Logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover" />

            <div className="hidden sm:block">
              <span className="text-white font-heading font-bold text-lg leading-tight block">
                NKP Cleaners
              </span>
              <span className="text-brand-primary-light text-[10px] tracking-wider uppercase">
                Shine Beyond the Surface
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
            <div
              key={link.path}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}>

                <Link
                to={link.path}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname.startsWith('/services') && link.path === '/services' ? 'text-brand-primary bg-brand-primary/10' : location.pathname === link.path ? 'text-brand-primary bg-brand-primary/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>

                  {link.label}
                  {link.hasDropdown &&
                <ChevronDownIcon className="w-3.5 h-3.5" />
                }
                </Link>

                {/* Dropdown - 4 main categories only */}
                <AnimatePresence>
                  {link.hasDropdown && openDropdown &&
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: 8
                  }}
                  transition={{
                    duration: 0.15
                  }}
                  className="absolute top-full left-0 mt-1 w-60 bg-brand-dark-lighter border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2">

                      {serviceDropdownItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${location.pathname === item.path ? 'text-brand-primary bg-brand-primary/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>

                            <Icon className="w-4 h-4 text-brand-primary" />
                            {item.label}
                          </Link>);

                  })}
                      <div className="mx-4 my-2 border-t border-white/5" />
                      <Link
                    to="/services"
                    className="block px-4 py-2 text-brand-primary text-sm font-medium hover:text-brand-primary-light transition-colors">

                        View All Services →
                      </Link>
                    </motion.div>
                }
                </AnimatePresence>
              </div>
            )}

            <Link
              to="/contact"
              className="ml-4 bg-brand-primary hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">

              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}>

            {isMobileOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileOpen &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            transition={{
              duration: 0.2
            }}
            className="md:hidden overflow-hidden border-t border-white/10">

              <div className="py-4 space-y-1">
                <Link
                to="/"
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-brand-primary bg-brand-primary/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>

                  Home
                </Link>

                <Link
                to="/services"
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/services' ? 'text-brand-primary bg-brand-primary/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>

                  All Services
                </Link>

                {serviceDropdownItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 ml-4 px-4 py-2.5 rounded-lg text-sm transition-colors ${location.pathname === item.path ? 'text-brand-primary bg-brand-primary/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>

                      <Icon className="w-4 h-4 text-brand-primary" />
                      {item.label}
                    </Link>);

              })}

                <Link
                to="/contact"
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-brand-primary bg-brand-primary/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>

                  Contact
                </Link>

                <div className="pt-3 px-4">
                  <Link
                  to="/contact"
                  className="block text-center bg-brand-primary hover:bg-blue-600 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors">

                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </nav>
    </header>);

}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LpNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <nav className="Navbar fixed top-0 left-0 right-0 z-[1000] px-5  flex items-center justify-center bg-[#080A0F] pt-[16px] h-[72px]">
      <div className="navbar-container max-w-[914px] w-full h-full flex items-center justify-between gap-[18px] border border-[#808387] rounded-[999px] pl-[9px] pr-[5px] relative">
        {/* Left cluster: Logo + Navigation links (Desktop) */}
        <div className="navbar-left-cluster flex items-center gap-8 lg:flex hidden">
          <div className="navbar-brand flex items-center gap-2 cursor-pointer">
            <img
              src="/lp/logo.png"
              alt="OneAuxilia Logo"
              className="navbar-logo w-[156px] h-6 object-contain"
            />
          </div>

          <div className="navbar-links flex gap-6">
            <Link
              href="/"
              className={`navbar-link text-white font-sans text-sm font-normal leading-none no-underline transition-colors duration-200 hover:text-[#0092D4] cursor-pointer ${
                isActive('/') ? 'text-[#0092D4]' : ''
              }`}
            >
              Docs
            </Link>
            <Link
              href="/pricing"
              className={`navbar-link text-white font-sans text-sm font-normal leading-none no-underline transition-colors duration-200 hover:text-[#0092D4] cursor-pointer ${
                isActive('/pricing') ? 'text-[#0092D4]' : ''
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`navbar-link text-white font-sans text-sm font-normal leading-none no-underline transition-colors duration-200 hover:text-[#0092D4] cursor-pointer ${
                isActive('/contact') ? 'text-[#0092D4]' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right: Sign In button (Desktop) */}
        <div className="navbar-right flex items-center lg:flex hidden">
          <button className="navbar-signin-btn h-[44px] w-[92px] bg-[#030406] border border-[#242728] rounded-[999px] text-white font-sans text-sm font-medium leading-none px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-[#333333] hover:border-[#999999]">
            Sign In
          </button>
        </div>

        {/* Mobile layout: Logo + Hamburger */}
        <div className="navbar-mobile lg:hidden flex w-full items-center justify-between">
          <div className="navbar-brand flex items-center gap-2 cursor-pointer">
            <img
              src="/lp/logo.png"
              alt="OneAuxilia Logo"
              className="navbar-logo w-[156px] h-6 object-contain"
            />
          </div>

          <button
            className="navbar-hamburger w-11 h-11 bg-[#363738] border border-[#7B7C7F] rounded-full cursor-pointer transition-all duration-200 hover:bg-[#333333]/80 flex items-center justify-center"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <div className="w-5 h-5 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            ) : (
              <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                <span className="w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out"></span>
                <span className="w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out"></span>
                <span className="w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out"></span>
              </div>
            )}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="navbar-mobile-dropdown absolute top-full left-0 right-0 mt-2 bg-[#080A0F] border border-[#808387] rounded-lg shadow-lg lg:hidden">
            <div className="dropdown-content flex flex-col p-4 gap-3">
              <Link
                href="/"
                className={`dropdown-link text-white font-sans text-sm font-normal leading-none no-underline transition-colors duration-200 hover:text-[#0092D4] py-2 px-3 rounded-md hover:bg-white/5 cursor-pointer ${
                  isActive('/') ? 'text-[#0092D4]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Docs
              </Link>
              <Link
                href="/pricing"
                className={`dropdown-link text-white font-sans text-sm font-normal leading-none no-underline transition-colors duration-200 hover:text-[#0092D4] py-2 px-3 rounded-md hover:bg-white/5 cursor-pointer ${
                  isActive('/pricing') ? 'text-[#0092D4]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className={`dropdown-link text-white font-sans text-sm font-normal leading-none no-underline transition-colors duration-200 hover:text-[#0092D4] py-2 px-3 rounded-md hover:bg-white/5 cursor-pointer ${
                  isActive('/contact') ? 'text-[#0092D4]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <button className="dropdown-signin-btn bg-[#1A1A1A] border border-[#666666] rounded-md text-white font-sans text-sm font-medium leading-none px-4 py-2 cursor-pointer transition-all duration-200 hover:bg-[#333333] hover:border-[#999999] mt-2">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default LpNavbar

'use client'

const LpFooter = () => {
  return (
    <footer className="Footer bg-[#0A0A0A] text-white border-t border-[#0092D4] w-full mt-auto">
      <div className="footer-container max-w-[1280px] mx-auto px-5 py-12 lg:py-12 md:py-8">
        {/* Top Section */}
        <div className="footer-top flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Logo and Product Hunt */}
          <div className="footer-brand flex flex-col gap-4 lg:w-1/4">
            <div className="footer-logo flex items-center gap-2">
              <img src="/lp/logo.png" alt="OneAuxilia Logo" className="logo-image w-[156px] h-6 object-contain" />
            </div>
            <button className="product-hunt-btn flex items-center gap-3 bg-[#F5F5F5] border border-[#333333] rounded-lg px-4 py-3 w-fit cursor-pointer transition-all duration-200 hover:bg-[#E5E5E5]">
              <div className="ph-icon w-6 h-6 bg-[#666666] rounded-full"></div>
              <span className="text-[#333333] font-sans text-sm font-medium">Product Hunt</span>
            </button>
          </div>

          {/* Navigation Columns */}
          <div className="footer-navigation grid grid-cols-2 gap-4 lg:flex-1 md:grid-cols-5 lg:grid-cols-5">
            <div className="nav-column flex flex-col gap-4 w-[151px]">
              <h3 className="nav-heading text-white font-sans text-[18px] font-medium">Features</h3>
              <ul className="nav-links flex flex-col gap-2">
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Unified login</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Single Sign On</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">MFA Policy</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Roles Customization</a></li>
              </ul>
            </div>

            <div className="nav-column flex flex-col gap-4 w-[151px]">
              <h3 className="nav-heading text-white font-sans text-[18px] font-medium">Developers</h3>
              <ul className="nav-links flex flex-col gap-2">
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Documentation</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Support</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Changelog</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Blog</a></li>
              </ul>
            </div>

            <div className="nav-column flex flex-col gap-4 w-[151px]">
              <h3 className="nav-heading text-white font-sans text-[18px] font-medium">Company</h3>
              <ul className="nav-links flex flex-col gap-2">
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">About</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Why OneAuxilia</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Partners</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Blog</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Customer Stories</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Careers</a></li>
              </ul>
            </div>

            <div className="nav-column flex flex-col gap-4 w-[151px]">
              <h3 className="nav-heading text-white font-sans text-[18px] font-medium">Legal</h3>
              <ul className="nav-links flex flex-col gap-2">
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Privacy Policy</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Term & Conditions</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Cookie Policy</a></li>
              </ul>
            </div>

            <div className="nav-column flex flex-col gap-4 w-[151px] lg:col-span-1">
              <h3 className="nav-heading text-white font-sans text-[18px] font-medium">Product</h3>
              <ul className="nav-links flex flex-col gap-2">
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Features</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Enterprises</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">Security</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">User Management</a></li>
                <li><a href="#" className="nav-link text-white/70 font-sans text-[16px] font-normal no-underline transition-colors duration-200 hover:text-white leading-tight">RBAC Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom mt-4">
          <div className="footer-divider w-full h-px bg-[#26292E] mb-3"></div>
          <div className="footer-bottom-content flex flex-col sm:flex-row justify-start items-start gap-4 md:justify-between md:items-center">
            <div className="copyright">
              <p className="text-white/70 font-sans text-sm font-normal">
                © 2024 OneAuxilia. All Rights Reserved.
              </p>
            </div>
            <div className="social-icons flex items-center gap-4">
              <a href="#" className="social-icon w-10 h-[24px] flex items-center justify-center transition-all duration-200">
                <img src="/lp/in-icon.png" alt="LinkedIn" className="icon-image w-5 h-5 object-contain" />
              </a>
              <a href="#" className="social-icon w-10 h-[24px] flex items-center justify-center transition-all duration-200">
                <img src="/lp/v-icon.png" alt="Instagram" className="icon-image w-5 h-5 object-contain" />
              </a>
              <a href="#" className="social-icon w-10 h-[24px] flex items-center justify-center transition-all duration-200">
                <img src="/lp/x-icon.png" alt="X (Twitter)" className="icon-image w-5 h-5 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LpFooter 
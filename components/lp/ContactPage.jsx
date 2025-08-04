'use client'

import { useState } from 'react'
import LpNavbar from './Navbar'
import LpFooter from './Footer'

const LpContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="ContactPage min-h-screen flex flex-col" style={{
      backgroundImage: 'url(/lp/bg_pricing.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <LpNavbar />
      
      <div className="contact-content pt-16 flex-1">
        {/* Top Section */}
        <div className="max-w-4xl mx-auto px-5 py-12 text-center">
          {/* Contact Button */}
          <div className="mb-8">
            <button className="contact-btn bg-[#363738] border border-[#7B7C7F] rounded-lg px-4 py-2 text-white text-sm font-medium">
              Contact
            </button>
          </div>

          {/* Main Title */}
          <div className="mb-6">
            <h1 className="main-title text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Want to learn more?
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <p className="description text-lg md:text-xl text-gray-300 leading-relaxed">
              Explore OneAuxilia's impact on identity and access management. Contact us for a personalized demo or more information.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto px-5 py-8 relative">
          <div className="absolute z-0 inset-0">
            <img 
              src="/lp/contact-input-glow.svg" 
              alt="Pricing Glow" 
              className="w-full opacity-60"
            />
          </div>
          <div className="contact-form-container bg-[#000000]/50 border border-[#ffffff]/7 rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="form-group">
                <label className="block text-white text-[16px] font-medium mb-2">
                  Full name
                </label>
                <div className="input-wrapper relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <img src="/lp/person.png" alt="User" className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 bg-[#FFFFFF]/20 border border-[#444444] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label className="block text-white text-[16px] font-medium mb-2">
                  Phone Number
                </label>
                <div className="input-wrapper relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <img src="/lp/phone.png" alt="User" className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 bg-[#FFFFFF]/20 border border-[#444444] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label className="block text-white text-[16px] font-medium mb-2">
                  Email Address
                </label>
                <div className="input-wrapper relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@oneauxilia.com"
                    className="w-full pl-10 pr-4 py-3 bg-[#FFFFFF]/20 border border-[#444444] rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="block text-white text-[16px] font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="What's the Problem"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#FFFFFF]/20 border border-[#444444] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <div className="learn-more-btn-wrapper bg-gradient-to-r from-[#473f62] to-[#3f74c5] rounded-lg p-[2px] inline-block hover:from-[#5A4F7A] hover:to-[#4F8AD0] transition-all duration-200 mx-auto">
                  <button className="learn-more-btn bg-gradient-to-r from-[#39284E] to-[#002D62] rounded-lg px-6 h-11 text-white font-medium transition-all duration-200 hover:from-[#4A2D5A] hover:to-[#003D7A] flex items-center gap-2 mx-auto cursor-pointer">
                    <span>Getting Started</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section max-w-4xl mx-auto px-5 py-16 text-center">
          <div className="cta-title text-[36px] xl:text-[64px] font-semibold text-white mb-6">
            Start now, no string attached
          </div>
          <p className="cta-description text-[18px] xl:text-[20px] font-normal text-[#CCCCCC] mb-8 max-w-2xl mx-auto">
            Integrate complete user management in minutes. Free for your first 10,000 monthly active users and 100 monthly active orgs. No credit card required.
          </p>
          <div className="learn-more-btn-wrapper bg-gradient-to-r from-[#473f62] to-[#3f74c5] rounded-lg p-[2px] inline-block hover:from-[#5A4F7A] hover:to-[#4F8AD0] transition-all duration-200">
            <button className="learn-more-btn bg-gradient-to-r from-[#39284E] to-[#002D62] rounded-lg px-6 h-11 text-white font-medium transition-all duration-200 hover:from-[#4A2D5A] hover:to-[#003D7A] flex items-center gap-2 mx-auto cursor-pointer">
              <span>Learn more</span>
              <img src="/lp/arrow-r.png" alt="Arrow" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <LpFooter />
    </div>
  )
}

export default LpContactPage 
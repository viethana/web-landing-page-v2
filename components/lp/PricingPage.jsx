'use client'

import { useState } from 'react'
import LpNavbar from './Navbar'
import LpFooter from './Footer'

const LpPricingPage = () => {
  const [activeTab, setActiveTab] = useState('enterprise')
  const [pricingData, setPricingData] = useState({
    monthlyActiveUsers: 10000,
    applications: 100,
    organizations: 100,
    m2mTokens: 1000,
    ssoConnections: 2,
    scimConnections: 3,
    proPlan: false,
    fullPlan: false
  })

  const handleInputChange = (field, value) => {
    setPricingData(prev => ({
      ...prev,
      [field]: Math.max(0, value)
    }))
  }

  const handlePlanToggle = (plan) => {
    setPricingData(prev => ({
      ...prev,
      [plan]: !prev[plan]
    }))
  }

  return (
    <div className="PricingPage min-h-screen flex flex-col" style={{
      backgroundImage: 'url(/lp/bg_pricing.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <LpNavbar />
      
      <div className="pricing-content pt-16 flex-1">
        {/* Hero Section */}
        <div className="hero-section w-full min-h-[600px] flex items-center justify-center px-5 py-12 relative">
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Pricing Plan button */}
            <div className="mb-8">
              <div className="learn-more-btn-wrapper bg-gradient-to-r from-[#473f62] to-[#3f74c5] rounded-lg p-[2px] inline-block hover:from-[#5A4F7A] hover:to-[#4F8AD0] transition-all duration-200">
                <button className="learn-more-btn bg-gradient-to-r from-[#39284E] to-[#002D62] rounded-lg px-6 h-11 text-white font-medium transition-all duration-200 hover:from-[#4A2D5A] hover:to-[#003D7A] flex items-center gap-2 mx-auto cursor-pointer">
                  <span>Pricing Plan</span>
                  <img src="/lp/arrow-r.png" alt="Arrow" className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Main title */}
            <div className="mb-8">
              <h1 className="main-title text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Explore Our Flexible</span>
                <span className="block relative">
                  Pricing Plans
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto">
              <p className="description text-lg md:text-xl text-gray-300 leading-relaxed">
                Harness the power of Artificial Intelligence to optimize your financial management. Control all your finances, from savings to investments, with one comprehensive app.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="pricing-section mx-auto px-5 py-12 bg-[#07090b] relative">
          {/* Background glow overlay */}
          <div className="absolute z-0 top-[-100px]">
            <img 
              src="/lp/pricing-section-glow.svg" 
              alt="Pricing Glow" 
              className="w-full opacity-60"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Tabs */}
            <img src="/lp/line.png" alt="Line" className="min-w-[220px] max-w-[220px] mx-auto mb-[20px]" />
            <div className="tabs-wrapper flex gap-4 mx-auto justify-center">
              <button
                onClick={() => setActiveTab('enterprise')}
                className={`cursor-pointer tab-btn px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeTab === 'enterprise'
                    ? 'bg-gradient-to-tr from-[#85909b] to-[#9a999e] border border-[#bcc2c6]'
                    : 'bg-gradient-to-tr from-[#594f5c] to-[#544567] border border-[#ab97ac]'
                }`}
              >
                <span className={activeTab === 'enterprise' ? 'text-[#000000]' : 'text-white'}>
                  Enterprise/ B2B
                </span>
                <img 
                  src={activeTab === 'enterprise' ? "/lp/users_left_active.svg" : "/lp/users_left.svg"} 
                  alt="Enterprise" 
                  className="w-6 h-6" 
                />
              </button>
              <button
                onClick={() => setActiveTab('startups')}
                className={`cursor-pointer tab-btn px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeTab === 'startups'
                    ? 'bg-gradient-to-tr from-[#85909b] to-[#9a999e] border border-[#bcc2c6]'
                    : 'bg-gradient-to-tr from-[#594f5c] to-[#544567] border border-[#ab97ac]'
                }`}
              >
                <span className={activeTab === 'startups' ? 'text-[#000000]' : 'text-white'}>
                  Startups/ B2C
                </span>
                <img 
                  src={activeTab === 'startups' ? "/lp/users_right_active.svg" : "/lp/users_right.svg"} 
                  alt="Startups" 
                  className="w-6 h-6" 
                />
              </button>
            </div>

            {/* Tab Description */}
            <div className="text-center mb-12 mt-[20px]">
              <p className="text-[#CCCCCC] text-lg">
                Tailored solutions with flexible pricing based on your specific requirements
              </p>
              <img src="/lp/line.png" alt="Line" className="min-w-[220px] max-w-[220px] mx-auto mt-[20px]" />
            </div>

            {/* Pricing Cards */}
            <div className="pricing-cards grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pay as you go Card - Enterprise */}
              <div className={`pricing-card backdrop-blur-sm border rounded-lg p-8 ${activeTab === 'enterprise' ? 'bg-[#FFF]/10 border-[#FFF]/1' : 'bg-[#000000]/50 border-[#000000]/5'}`}>
                <div className="card-header text-center mb-8">
                  <h3 className="plan-name text-2xl font-bold text-white mb-4">Pay as you go</h3>
                  <div className="price mb-4">
                    <span className="amount text-5xl text-white/70 font-bold">$<span className="text-[60px] text-white">0</span></span>
                    <span className="period text-[#CCCCCC] text-lg block">Per month</span>
                  </div>
                </div>

                <div className="whats-free-section mb-8 text-[13px]">
                  <h4 className="section-title text-lg font-semibold text-white mb-4">What's always free</h4>
                  <div className="free-features grid grid-cols-1 min-[800px]:grid-cols-2 gap-3">
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC] flex-wrap">
                      <img src="/lp/link.svg" alt="Network" className="w-[32px] h-[32px]" />
                      <span><span className="text-white font-bold">10000</span> active users</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC] flex-wrap">
                      <img src="/lp/link.svg" alt="Network" className="w-[32px] h-[32px]" />
                      <span><span className="text-white font-bold">1000</span> M2M tokens</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC] flex-wrap">
                      <img src="/lp/link.svg" alt="Network" className="w-[32px] h-[32px]" />
                      <span><span className="text-white font-bold">100</span> applications</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC] flex-wrap">
                      <img src="/lp/arrow-top.svg" alt="Arrow" className="w-[32px] h-[32px]" />
                      <span>Up to <span className="text-white font-bold">5</span> members per organization</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC] flex-wrap">
                      <img src="/lp/link.svg" alt="Network" className="w-[32px] h-[32px]" />
                      <span><span className="text-white font-bold">100</span> organizations</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC]">
                      <img src="/lp/minus.svg" alt="Minus" className="w-[32px] h-[32px]" />
                      <span>Not include multi-factor auth (SMS, TOTP, backup codes)</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC] flex-wrap">
                      <img src="/lp/link.svg" alt="Network" className="w-[32px] h-[32px]" />
                      <span><span className="text-white font-bold">5</span> SSO or SCIM connections</span>
                    </div>
                  </div>
                </div>

                <div className="included-features mb-8">
                  <h4 className="section-title text-lg font-semibold text-white mb-4">Included Features</h4>
                  <div className="features-list grid grid-cols-1 min-[800px]:grid-cols-2 gap-3 text-[13px]">
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC]">
                        <img src="/lp/tick.svg" alt="Tick" className="w-[32px] h-[32px]" />
                      <span>Organization-level primary + secondary auth policies</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC]">
                      <img src="/lp/tick.svg" alt="Tick" className="w-[32px] h-[32px]" />
                      <span>Built-in multi-tenancy</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC]">
                      <img src="/lp/tick.svg" alt="Tick" className="w-[32px] h-[32px]" />
                      <span>Find your organizations</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC]">
                      <img src="/lp/tick.svg" alt="Tick" className="w-[32px] h-[32px]" />
                      <span>SCIM provisioning, deprovisioning and automatic role management</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC]">
                      <img src="/lp/tick.svg" alt="Tick" className="w-[32px] h-[32px]" />
                      <span>JIT provisioning controls by email domain & SSO Connection</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC]">
                      <img src="/lp/tick.svg" alt="Tick" className="w-[32px] h-[32px]" />
                      <span>Optional fraud and risk prevention</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC]">
                      <img src="/lp/tick.svg" alt="Tick" className="w-[32px] h-[32px]" />
                      <span>Pre-built UI components for login and admin portal</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Estimate monthly bill Card - Startups */}
              <div className={`pricing-card backdrop-blur-sm border rounded-lg p-8 ${activeTab === 'startups' ? 'bg-[#FFF]/10 border-[#FFF]/1' : 'bg-[#000000]/50 border-[#000000]/5'}`}>
                <div className="card-header text-center mb-8">
                  <h3 className="plan-name text-2xl font-bold text-white mb-4">Estimate monthly bill</h3>
                  <div className="price mb-4">
                    <span className="amount text-5xl text-white/70 font-bold">$<span className="text-[60px] text-white">0</span></span>
                    <span className="period text-[#CCCCCC] text-lg block">Per month</span>
                  </div>
                </div>

                <div className="configurable-inputs mb-8">
                  <div className="inputs-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Monthly Active Users */}
                    <div className="input-group">
                      <label className="input-label block text-white text-sm font-medium mb-3">
                        Monthly active user
                      </label>
                      <div className="input-wrapper flex items-center gap-2">
                        <button
                          onClick={() => handleInputChange('monthlyActiveUsers', pricingData.monthlyActiveUsers - 1000)}
                          className="input-btn w-8 h-8 bg-[#333333] border border-[#666666] rounded flex items-center justify-center text-white hover:bg-[#444444] transition-colors duration-200"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={pricingData.monthlyActiveUsers}
                          onChange={(e) => handleInputChange('monthlyActiveUsers', parseInt(e.target.value) || 0)}
                          className="input-field flex-1 px-3 py-2 bg-[#1A1A1A] border border-[#333333] rounded text-white text-center"
                        />
                        <button
                          onClick={() => handleInputChange('monthlyActiveUsers', pricingData.monthlyActiveUsers + 1000)}
                          className="input-btn w-8 h-8 bg-[#333333] border border-[#666666] rounded flex items-center justify-center text-white hover:bg-[#444444] transition-colors duration-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* M2M Tokens */}
                    <div className="input-group">
                      <label className="input-label block text-white text-sm font-medium mb-3">
                        M2M Tokens
                      </label>
                      <div className="input-wrapper flex items-center gap-2">
                        <button
                          onClick={() => handleInputChange('m2mTokens', pricingData.m2mTokens - 100)}
                          className="input-btn w-8 h-8 bg-[#333333] border border-[#666666] rounded flex items-center justify-center text-white hover:bg-[#444444] transition-colors duration-200"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={pricingData.m2mTokens}
                          onChange={(e) => handleInputChange('m2mTokens', parseInt(e.target.value) || 0)}
                          className="input-field flex-1 px-3 py-2 bg-[#1A1A1A] border border-[#333333] rounded text-white text-center"
                        />
                        <button
                          onClick={() => handleInputChange('m2mTokens', pricingData.m2mTokens + 100)}
                          className="input-btn w-8 h-8 bg-[#333333] border border-[#666666] rounded flex items-center justify-center text-white hover:bg-[#444444] transition-colors duration-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="input-group">
                      <label className="input-label block text-white text-sm font-medium mb-3">
                        Applications
                      </label>
                      <div className="input-wrapper flex items-center gap-2">
                        <button
                          onClick={() => handleInputChange('applications', pricingData.applications - 10)}
                          className="input-btn w-8 h-8 bg-[#333333] border border-[#666666] rounded flex items-center justify-center text-white hover:bg-[#444444] transition-colors duration-200"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={pricingData.applications}
                          onChange={(e) => handleInputChange('applications', parseInt(e.target.value) || 0)}
                          className="input-field flex-1 px-3 py-2 bg-[#1A1A1A] border border-[#333333] rounded text-white text-center"
                        />
                        <button
                          onClick={() => handleInputChange('applications', pricingData.applications + 10)}
                          className="input-btn w-8 h-8 bg-[#333333] border border-[#666666] rounded flex items-center justify-center text-white hover:bg-[#444444] transition-colors duration-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* SSO Connections */}
                    <div className="input-group">
                      <label className="input-label block text-white text-sm font-medium mb-3">
                        SSO Connections
                      </label>
                      <div className="input-wrapper flex items-center gap-2">
                        <button
                          onClick={() => handleInputChange('ssoConnections', pricingData.ssoConnections - 1)}
                          className="input-btn w-8 h-8 bg-[#333333] border border-[#666666] rounded flex items-center justify-center text-white hover:bg-[#444444] transition-colors duration-200"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={pricingData.ssoConnections}
                          onChange={(e) => handleInputChange('ssoConnections', parseInt(e.target.value) || 0)}
                          className="input-field flex-1 px-3 py-2 bg-[#1A1A1A] border border-[#333333] rounded text-white text-center"
                        />
                        <button
                          onClick={() => handleInputChange('ssoConnections', pricingData.ssoConnections + 1)}
                          className="input-btn w-8 h-8 bg-[#333333] border border-[#666666] rounded flex items-center justify-center text-white hover:bg-[#444444] transition-colors duration-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Organizations */}
                    <div className="input-group">
                      <label className="input-label block text-white text-sm font-medium mb-3">
                        Organizations
                      </label>
                      <div className="input-wrapper flex items-center gap-2">
                        <button
                          onClick={() => handleInputChange('organizations', pricingData.organizations - 10)}
                          className="input-btn w-8 h-8 bg-[#333333] border border-[#666666] rounded flex items-center justify-center text-white hover:bg-[#444444] transition-colors duration-200"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={pricingData.organizations}
                          onChange={(e) => handleInputChange('organizations', parseInt(e.target.value) || 0)}
                          className="input-field flex-1 px-3 py-2 bg-[#1A1A1A] border border-[#333333] rounded text-white text-center"
                        />
                        <button
                          onClick={() => handleInputChange('organizations', pricingData.organizations + 10)}
                          className="input-btn w-8 h-8 bg-[#333333] border border-[#666666] rounded flex items-center justify-center text-white hover:bg-[#444444] transition-colors duration-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* SCIM Connections */}
                    <div className="input-group">
                      <label className="input-label block text-white text-sm font-medium mb-3">
                        SCIM Connections
                      </label>
                      <div className="input-wrapper flex items-center gap-2">
                        <button
                          onClick={() => handleInputChange('scimConnections', pricingData.scimConnections - 1)}
                          className="input-btn w-8 h-8 bg-[#333333] border border-[#666666] rounded flex items-center justify-center text-white hover:bg-[#444444] transition-colors duration-200"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={pricingData.scimConnections}
                          onChange={(e) => handleInputChange('scimConnections', parseInt(e.target.value) || 0)}
                          className="input-field flex-1 px-3 py-2 bg-[#1A1A1A] border border-[#333333] rounded text-white text-center"
                        />
                        <button
                          onClick={() => handleInputChange('scimConnections', pricingData.scimConnections + 1)}
                          className="input-btn w-8 h-8 bg-[#333333] border border-[#666666] rounded flex items-center justify-center text-white hover:bg-[#444444] transition-colors duration-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="plan-options mb-8">
                  <h4 className="section-title text-lg font-semibold text-white mb-4">Plan Options</h4>
                  <div className="features-list grid grid-cols-1 min-[800px]:grid-cols-2 gap-3 text-[13px]">
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC] pl-[6px]">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={pricingData.proPlan}
                          onChange={() => handlePlanToggle('proPlan')}
                          className="w-4 h-4 text-[#0092D4] bg-white border-[#333333] rounded focus:ring-[#0092D4]"
                        />
                        <span className="text-white font-bold pl-[5px]">Pro Plan</span>
                      </label>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC]">
                      <img src="/lp/tick.svg" alt="Tick" className="w-[32px] h-[32px]" />
                      <span>Include multi-factor auth (SMS, TOTP, backup codes)</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC] pl-[6px]">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={pricingData.proPlan}
                          onChange={() => handlePlanToggle('proPlan')}
                          className="w-4 h-4 text-[#0092D4] bg-white border-[#333333] rounded focus:ring-[#0092D4]"
                        />
                        <span className="text-white font-bold pl-[5px]">Full Plan</span>
                      </label>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC]">
                      <img src="/lp/tick.svg" alt="Tick" className="w-[32px] h-[32px]" />
                      <span>Unlimited member per organization, Session management</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC]">
                      <img src="/lp/tick.svg" alt="Tick" className="w-[32px] h-[32px]" />
                      <span>Email Support</span>
                    </div>
                    <div className="feature-item flex items-center gap-2 text-[#CCCCCC]">
                      <img src="/lp/tick.svg" alt="Tick" className="w-[32px] h-[32px]" />
                      <span>Unlimited Bandwidth</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex justify-center mt-[40px]">
              <div className="w-fit learn-more-btn-wrapper flex justify-center bg-gradient-to-r from-[#473f62] to-[#3f74c5] rounded-lg p-[2px] hover:from-[#5A4F7A] hover:to-[#4F8AD0] transition-all duration-200">
                <button className="learn-more-btn bg-gradient-to-r from-[#39284E] to-[#002D62] rounded-lg px-6 h-11 text-white font-medium transition-all duration-200 hover:from-[#4A2D5A] hover:to-[#003D7A] flex items-center gap-2 mx-auto cursor-pointer">
                  <span>Start building for free</span>
                  <img src="/lp/arrow-r.png" alt="Arrow" className="w-6 h-6" />
                </button>
              </div>
            </div>
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
              <span>Learn More</span>
              <img src="/lp/arrow-r.png" alt="Arrow" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <LpFooter />
    </div>
  )
}

export default LpPricingPage 
"use client";

import LpNavbar from "./Navbar";
import LpFooter from "./Footer";
import Image from "next/image";
import { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-white text-base font-medium">{title}</h3>
        <span className="text-white text-xl">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {isOpen && (
        <p className="text-gray-400 mt-2 text-sm">
          {content}
        </p>
      )}
    </div>
  );
};

const LpDocsPage = () => {
  return (
    <div className="DocsPage min-h-screen flex flex-col">
      <LpNavbar />
      <main className="min-h-[400px] bg-[#0a0f1d] text-white flex items-center justify-center px-4 md:mt-[80px]">
        <div className="text-center  space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="relative inline-block pt-[120px] pb-[40px]">
              <span className="relative z-10 font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-[96px]">
                <div>The ultimate identity</div>
                <div>& access manager.</div>
              </span>
            </span>
          </h1>
          <div className="text-sm sm:text-base md:text-lg text-gray-300 text-center mb-[16px]">
            <p>
              OneAuxilia offers seamless identity and access management across
              all your applications.
            </p>
            <p>
              Simplify user management and protect your digital assets
              effortlessly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#23243c] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#2c2d4a] transition">
              Announcing Series B{/* &rarr; */}
            </button>
            <div className="learn-more-btn-wrapper bg-gradient-to-r from-[#473f62] to-[#3f74c5] rounded-lg p-[2px] inline-block hover:from-[#5A4F7A] hover:to-[#4F8AD0] transition-all duration-200">
              <button className="learn-more-btn bg-gradient-to-r from-[#39284E] to-[#002D62] rounded-lg px-6 h-11 text-white font-medium transition-all duration-200 hover:from-[#4A2D5A] hover:to-[#003D7A] flex items-center gap-2 mx-auto cursor-pointer">
                <span>
                  {" "}
                  Learn more
                  {/* &rarr; */}
                </span>
                {/* <img src="/lp/arrow-r.png" alt="Arrow" className="w-6 h-6" /> */}
              </button>
            </div>
            {/* <button className="bg-[#1940d8] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#2553f1] transition">
              Learn more &rarr;
            </button> */}
          </div>
        </div>
      </main>
      <section className="bg-[#0a0f1d] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg p-2 shadow-xl ">
            <div className="p-1 bg-gradient-to-b from-purple-600 to-blue-600 rounded-xl">
              <Image
                src="/lp/imageslidelandingpage1.png"
                alt="System Overview"
                width={800}
                height={600}
                className="w-full h-auto object-contain rounded-lg bg-slate-800"
                priority
              />
            </div>
          </div>
          <div className="mt-[20px]  ">
            <div className="flex justify-center items-center cursor-pointer">
              <div className="w-[670px] h-[56px] bg-gray-800 border border-solid border-[#FFFFFF4D] rounded-full flex justify-center items-center shadow-lg">
                <button className="h-[44px] flex items-center justify-center px-8 py-3 border border-solid border-[#4C5562] bg-[#000000]/50 rounded-full text-white font-medium text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Two-factor Authentiation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0a0f1d] px-4 py-4 md:py-20 text-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-2xl lg:text-3xl xl:text-[64px] font-bold">
            <div>Ironclad protection for</div>
            <div>your data and users</div>
          </h2>

          <div className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            <p>
              Enhance your apps and APIs and easily extend your Identity
              solution
            </p>
            <p>
              without writing or rewriting code for a variety of use cases, such
              as identity
            </p>
            <p>
              validation, log streaming, data platforms, and consent management.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#0a0f1d] p-0 md:pb-20 pt-12 px-4 text-white">
        <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">
          <div className="hidden w-full max-w-7xl xl:grid grid-cols-1 xl:grid-cols-3 gap-6 overflow-hidden">
            <div className="lg:col-span-1 flex flex-col space-y-6">
              <div className="rounded-xl shadow-xl flex flex-col flex-1">
                <Image
                  src="/lp/mfa.svg"
                  alt="Ảnh 2FA"
                  objectFit="cover"
                  className="rounded-lg"
                  width={370}
                  height={509}
                />
              </div>
              <div className="rounded-xl shadow-xl flex flex-col flex-1">
                <Image
                  src="/lp/protection.svg"
                  alt="Ảnh Restrictions & Attack Protection"
                  objectFit="cover"
                  className="rounded-lg"
                  width={370}
                  height={509}
                />
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col">
              <div className="rounded-xl shadow-xl flex flex-col h-[800px]">
                <div className="relative h-full rounded-lg mt-[-100px]">
                  <Image
                    src="/lp/card.svg"
                    alt="Ảnh OneAuxilia"
                    layout="fill"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 mt-[-150px]">
                <div className="relative h-full rounded-lg">
                  <Image
                    src="/lp/sso.svg"
                    alt="Ảnh Social Sign-on"
                    layout="fill"
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-full rounded-lg">
                  <Image
                    src="/lp/session.svg"
                    alt="Ảnh Social Sign-on"
                    layout="fill"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden xl:hidden w-full max-w-7xl md:grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
            <div className="md:col-span-2 flex flex-col space-y-6">
              <img src="/lp/card.svg" alt="Ảnh OneAuxilia" />
            </div>
            <div className="md:col-span-2 flex flex-col space-y-6">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-full rounded-lg">
                  <img src="/lp/mfa.svg" alt="Ảnh Social Sign-on" />
                </div>
                <div className="relative h-full rounded-lg">
                  <img src="/lp/protection.svg" alt="Ảnh Social Sign-on" />
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-full rounded-lg">
                  <img src="/lp/sso_1.svg" alt="Ảnh Social Sign-on" />
                </div>
                <div className="relative h-full rounded-lg">
                  <img src="/lp/session_1.svg" alt="Ảnh Social Sign-on" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full max-w-7xl md:hidden grid-cols-1 gap-6 overflow-hidden">
            <img src="/lp/card.svg" alt="Ảnh OneAuxilia" />
            <div className="relative h-full rounded-lg">
              <img src="/lp/mfa.svg" alt="Ảnh Social Sign-on" className="w-full"/>
            </div>
            <div className="relative h-full rounded-lg">
              <img src="/lp/protection.svg" alt="Ảnh Social Sign-on" className="w-full" />
            </div>
            <div className="relative h-full rounded-lg">
              <img src="/lp/sso_1.svg" alt="Ảnh Social Sign-on" className="w-full" />
            </div>
            <div className="relative h-full rounded-lg">
              <img src="/lp/session_1.svg" alt="Ảnh Social Sign-on" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[#0a0f1d] text-white p-0 md:py-24 px-4 overflow-hidden">
        <div className="max-w-5xl max-h-[700px] mx-auto text-center space-y-4">
          <img
            src="/lp/sdk_section_1280.svg"
            alt="SDK Integration"
            className="hidden xl:block mx-auto"
          />

          <img
            src="/lp/sdk_section.svg"
            alt="SDK Integration Mobile"
            className="block xl:hidden mx-auto"
          />
        </div>

        {/* Multi-tenancy */}
        <div className="cta-section max-w-4xl mx-auto px-5 py-16 text-center">
          <div className="cta-title text-[36px] xl:text-[64px] font-semibold text-white mb-6">
            The Easy Solution to Multi-tenancy
          </div>
          <p className="cta-description text-[18px] xl:text-[20px] font-normal text-[#CCCCCC] mb-8 max-w-2xl mx-auto">
            OneAuxilia has all the features you need to onboard and manage the
            users and organizations of your multi-tenant SaaS application.
          </p>
        </div>
        <div className="max-w-6xl mx-auto md:mt-20 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="max-w-md mx-auto bg-transparent p-4 rounded-md space-y-2">
              <AccordionItem
                title="Custom Roles and Permissions"
                content="Powerful primitives to fully customize your app's authorization story."
              />
              <AccordionItem
                title="Organization UI Components"
                content="Prebuilt UI elements to manage organizations in your app."
              />
              <AccordionItem
                title="Organization (Multi-tenancy)"
                content="Support for multiple organizations and tenants in one platform."
              />
            </div>
          </div>
          <div>
            <img
              src="/lp/multi_card.svg"
              alt="Multi-Tenant Settings UI"
              className="rounded-lg border border-gray-600 w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#0b101f] text-white md:py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Fine Gain Access Control & Permission
          </h2>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            Powerful primitives to fully customize your app's authorization
            story.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left - UI */}
          <div className="bg-gradient-to-br from-[#1a1d2e] to-[#1a1c24] rounded-xl p-6">
            <img
              src="/lp/multi_card_1.svg"
              alt="Multi-Tenant Settings UI"
              className="rounded-lg border border-gray-600 w-full max-w-md mx-auto"
            />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                Using roles for efficiency and effectiveness
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Directly mapping permissions to users is inefficient, which is
                where roles come in.
              </p>
            </div>
          </div>

          {/* Right - Graph */}
          <div className="bg-gradient-to-br from-[#1a1d2e] to-[#1a1c24] rounded-xl p-6">
            <img
              src="/lp/multi_card_2.svg"
              alt="Multi-Tenant Settings UI"
              className="rounded-lg border border-gray-600 w-full max-w-md mx-auto"
            />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                Manage access control at user level
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Assigning roles to users enables precise access control,
                ensuring that they have the right level of access.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b101f] text-white py-10 px-6 text-center">
        <div className="cta-section max-w-4xl mx-auto px-5 py-2 text-center">
          <div className="cta-title text-[36px] xl:text-[64px] font-semibold text-white mb-4">
            Everything You Need
          </div>
        </div>
        {/* Scroll Selector */}
        <div className="relative mt-12 flex flex-col items-center">
          <button className="text-white text-xl mb-4">&#9650;</button>
          <ul className="text-gray-400 space-y-2 text-sm leading-loose">
            <li className="opacity-30">Protection Policies</li>
            <li className="opacity-60">Multi-Tenancy</li>
            <li className="opacity-80">MFA</li>
            <li className="text-white font-semibold text-base">
              Single Sign On
            </li>
            <li className="opacity-80">Session Management</li>
            <li className="opacity-60">UI Components</li>
            <li className="opacity-30">UI Components</li>
          </ul>
          <button className="text-white text-xl mt-4">&#9660;</button>
        </div>

        {/* CTA */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold">
            Start now, no string attached
          </h3>
          <p className="text-gray-300 mt-2 text-sm max-w-xl mx-auto">
            Integrate complete user management in minutes. Free for your first
            10,000 monthly active users and 100 monthly active orgs. No credit
            card required.
          </p>
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-sm font-medium hover:scale-105 transition">
            Learn more →
          </button>
        </div>
      </section>
      <LpFooter />
    </div>
  );
};

export default LpDocsPage;

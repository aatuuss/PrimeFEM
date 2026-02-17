import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Hexagon, ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Home = () => {
  const { language } = useLanguage()
  const content = {
    en: {
      headlineTop: 'The Power of',
      headlineBottom: 'Possibility',
      description: 'Leading engineering solutions for modern industrial challenges. We deliver precision excellence and sustainable innovation.',
      contactCta: 'Contact Us',
      projects: 'Projects Delivered',
      clients: 'Trusted Clients'
    },
    id: {
      headlineTop: 'Kekuatan',
      headlineBottom: 'Kemungkinan',
      description: 'Solusi rekayasa terdepan untuk tantangan industri modern. Kami menghadirkan presisi, keunggulan, dan inovasi berkelanjutan.',
      contactCta: 'Hubungi Kami',
      projects: 'Proyek Terselesaikan',
      clients: 'Klien Terpercaya'
    }
  }
  const text = content[language]

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden font-sans">
      {/* Background Image with Enhanced Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/red.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] pt-24 pb-12">

        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 text-left space-y-8 md:pr-16 animate-fade-in-up">
          <div className="inline-block border-l-4 border-[#DDFF00] pl-4">
            <p className="text-gray-200 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
              PT PRIMA REKAYASA MANDIRI
            </p>
          </div>

          <h1 className="text-5xl md:text-[64px] font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDFF00] to-yellow-300">
              {text.headlineTop}
            </span> <br />
            <span className="text-white">
              {text.headlineBottom}
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-lg leading-relaxed border-l border-gray-600 pl-4">
            {text.description}
          </p>

          <div className="pt-6 group">
            <Link
              to="/contact"
              className="relative overflow-hidden bg-transparent border-2 border-white text-white px-10 py-3 rounded-full font-semibold text-sm hover:border-[#DDFF00] hover:text-black transition-all duration-300 inline-flex items-center gap-1.5"
            >
              <span className="relative z-10 group-hover:text-[#DDFF00] transition-colors">{text.contactCta}</span>
              <ArrowRight className="w-7 h-7 relative z-40 group-hover:translate-x-1 transition-transform group-hover:text-[#DDFF00]" />
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0 opacity-10"></div>
            </Link>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="w-full md:w-1/2 relative mt-16 md:mt-0 flex justify-center perspective-1000">
          {/* Main Hero Image */}
          <div className="relative w-full max-w-xl group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#DDFF00] to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/img/porto.png"
              alt="Engineering Portfolio"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              className="relative w-full h-auto object-contain rounded-xl shadow-2xl border border-white/10 backdrop-brightness-110"
            />

            {/* Floating Card 1: Projects */}
            <div className="absolute -top-12 -right-4 md:-right-8 bg-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 flex items-center gap-4 max-w-[300px] z-20 hover:-translate-y-2 transition-all duration-300 group/card1">
              <div className="bg-gradient-to-br from-[#DDFF00] to-yellow-500 p-3 rounded-xl shadow-lg group-hover/card1:scale-110 transition-transform duration-300">
                <CheckCircle className="text-black w-8 h-8" />
              </div>
              <div>
                <h3 className="text-4xl font-black text-white leading-none drop-shadow-md">150<span className="text-[#DDFF00]">+</span></h3>
                <p className="text-xs font-bold text-gray-200 mt-1 uppercase tracking-wider">{text.projects}</p>
              </div>
            </div>

            {/* Floating Card 2: Clients */}
            <div className="absolute -bottom-12 -left-4 md:-left-8 bg-white/10 backdrop-blur-xl rounded-2xl p-5 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 flex items-center gap-4 max-w-[280px] z-20 hover:-translate-y-2 transition-all duration-300 delay-100 group/card2">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl shadow-lg group-hover/card2:scale-110 transition-transform duration-300">
                <Hexagon className="text-white w-8 h-8 fill-white/20" />
              </div>
              <div>
                <h3 className="text-4xl font-black text-white leading-none drop-shadow-md">90<span className="text-[#DDFF00]">+</span></h3>
                <p className="text-xs font-bold text-gray-200 mt-1 uppercase tracking-wider">{text.clients}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Cpu, Zap, Activity, ChevronRight, Settings, Database, Layers } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const SimulasiFea = () => {
  const { language } = useLanguage()
  const heroImage = '/img/simulasifem.jpg'
  const content = {
    en: {
      badge: 'Advanced Engineering Suite',
      heroTitle: 'Simulation',
      heroAccent: 'FEA & FEM',
      heroDesc: 'Advanced structural analysis and finite element methods to optimize mission-critical industrial components.',
      consult: 'CONSULT NOW',
      explore: 'EXPLORE EXPERIENCES',
      stats: [
        { label: 'Data-Driven', value: 'Precision' },
        { label: 'Structural', value: 'Integrity' },
        { label: 'High-Perf', value: 'Computing' }
      ],
      expertise: 'Technical Expertise',
      consultingTitle: 'Simulation Consulting',
      consultingAccent: 'Reinvented.',
      consultingDesc: 'PrimeFEM is focused on transforming businesses through the effective use of engineering simulation and FEA Analysis.',
      bullets: [
        'Quality-assured simulation consulting via Chartered Engineers',
        'Validation of product performance and process reliability',
        'Optimization of designs through advanced numerical methods',
        'Bespoke assessments for unconventional codes and standards'
      ],
      overlayTitle: 'Structural Analysis',
      overlayDesc: 'Advanced Stress & Strain Visualization',
      quote: '"Structural Analysis - FEA is widely used to optimize designs, reduce physical prototypes, and solve problems involving complicated geometries."',
      quoteTag: 'Industrial Standard',
      quoteSub: 'Finite Element Method Optimization',
      compliance: 'Compliance & Standards',
      capacityTitle: 'FEA Capacity',
      capacityAccent: '& Skills.',
      capacityDesc: 'We regularly undertake design assessments regarding compliance with regulatory standards and codes, including all types of static, dynamic and buckling simulations for fabrication and assemblies.',
      learnMore: 'Learn more about our methods',
      ctaTitle: 'Ready to optimize your',
      ctaAccent: 'engineering design?',
      ctaDesc: 'Our team of expert engineers is standing by to help you solve your most complex simulation challenges.',
      ctaButton: 'Contact Engineering Team'
    },
    id: {
      badge: 'Suite Rekayasa Lanjutan',
      heroTitle: 'Simulasi',
      heroAccent: 'FEA & FEM',
      heroDesc: 'Analisis struktur lanjutan dan metode elemen hingga untuk mengoptimalkan komponen industri yang kritis.',
      consult: 'KONSULTASI SEKARANG',
      explore: 'JELAJAHI PENGALAMAN',
      stats: [
        { label: 'Berbasis Data', value: 'Presisi' },
        { label: 'Struktural', value: 'Integritas' },
        { label: 'Kinerja Tinggi', value: 'Komputasi' }
      ],
      expertise: 'Keahlian Teknis',
      consultingTitle: 'Konsultasi Simulasi',
      consultingAccent: 'Diperbarui.',
      consultingDesc: 'PrimeFEM berfokus mentransformasi bisnis melalui pemanfaatan simulasi rekayasa, Analisis FEA, dan Analisis CFD.',
      bullets: [
        'Konsultasi simulasi berkualitas oleh Chartered Engineers',
        'Validasi kinerja produk dan keandalan proses',
        'Optimasi desain melalui metode numerik lanjutan',
        'Penilaian khusus untuk kode dan standar non-konvensional'
      ],
      overlayTitle: 'Analisis Struktural',
      overlayDesc: 'Visualisasi Tegangan & Regangan Lanjutan',
      quote: '"Analisis Struktural - FEA banyak digunakan untuk mengoptimalkan desain, mengurangi prototipe fisik, dan memecahkan masalah geometri kompleks."',
      quoteTag: 'Standar Industri',
      quoteSub: 'Optimasi Metode Elemen Hingga',
      compliance: 'Kepatuhan & Standar',
      capacityTitle: 'Kapasitas FEA',
      capacityAccent: '& Keahlian.',
      capacityDesc: 'Kami rutin melakukan penilaian desain terkait kepatuhan standar dan regulasi, termasuk simulasi statik, dinamik, dan buckling untuk fabrikasi serta assembly.',
      learnMore: 'Pelajari metode kami',
      ctaTitle: 'Siap mengoptimalkan',
      ctaAccent: 'desain rekayasa Anda?',
      ctaDesc: 'Tim engineer ahli kami siap membantu Anda menyelesaikan tantangan simulasi paling kompleks.',
      ctaButton: 'Hubungi Tim Engineering'
    }
  }
  const text = content[language]

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-red-500/30">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Layer */}
        <div
          className="absolute inset-0 z-0 scale-105"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3) saturate(1.2)'
          }}
        />

        {/* Technical Overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-[#050505]" />
        <div className="absolute inset-0 z-10 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Animated Glows */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-pulse delay-700" />

        <div className="relative z-20 container mx-auto px-6 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full animate-fadeIn opacity-0 [animation-fill-mode:forwards]">
            <Activity className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-gray-300 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase">{text.badge}</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[1.1] mb-8 animate-fadeIn opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
            {text.heroTitle}
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">{text.heroAccent}</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-12 animate-fadeIn opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
            {text.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4 animate-fadeIn opacity-0 [animation-fill-mode:forwards] [animation-delay:600ms]">
            <Link
              to="/contact"
              className="group relative px-8 py-4 rounded-full bg-red-600 text-white font-bold text-sm tracking-wide shadow-2xl shadow-red-600/20 hover:bg-red-500 transition-all duration-300 flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">{text.consult}</span>
              <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              to="/experince"
              className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
            >
              {text.explore}
            </Link>
          </div>

          {/* Floating Data Cards */}
          <div className="hidden lg:grid grid-cols-3 gap-8 mt-24 animate-fadeIn opacity-0 [animation-fill-mode:forwards] [animation-delay:800ms]">
            {[<Database className="w-5 h-5" />, <ShieldCheck className="w-5 h-5" />, <Zap className="w-5 h-5" />].map((icon, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-4 text-left transition-transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 border border-red-500/20">
                  {icon}
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{text.stats[i].label}</div>
                  <div className="text-lg font-bold text-white tracking-tight">{text.stats[i].value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bg-white text-gray-900 py-32 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent" />
        <div className="absolute top-40 right-0 w-1/3 h-1/3 bg-red-50 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="mb-24 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-[0.2em] rounded-md border border-red-100">
              <Settings className="w-3 h-3" /> {text.expertise}
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              {text.consultingTitle} <br />
              <span className="text-red-600">{text.consultingAccent}</span>
            </h2>
          </div>

          {/* Main Grid Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="space-y-8">
              <p className="text-xl text-gray-600 leading-relaxed font-medium">{text.consultingDesc}</p>
              <div className="space-y-6">
                {text.bullets.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-red-600/20 to-orange-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100">
                <img
                  src="/img/consul1.jpg"
                  alt="Engineering simulation"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="text-white">
                    <p className="text-sm font-bold uppercase tracking-widest mb-1">{text.overlayTitle}</p>
                    <p className="text-xs text-gray-300">{text.overlayDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mb-32">
            <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Cpu className="w-64 h-64 text-white" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white mb-8 shadow-lg shadow-red-600/30">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-6">{text.quote}</h3>
                <div className="flex items-center gap-4 border-t border-white/10 pt-8 mt-8">
                  <div className="w-1 bg-red-600 h-10 rounded-full" />
                  <div>
                    <p className="text-white font-bold uppercase tracking-wider text-sm">{text.quoteTag}</p>
                    <p className="text-gray-500 text-xs font-medium">{text.quoteSub}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Grid Block (Reversed) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="/img/consul2.jpg"
                  alt="FEA analysis result"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em] rounded-md border border-gray-100">
                <Layers className="w-3 h-3" /> {text.compliance}
              </div>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-none">
                {text.capacityTitle} <br />
                <span className="text-red-600">{text.capacityAccent}</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">{text.capacityDesc}</p>
              <div className="pt-4">
                <button className="flex items-center gap-3 text-red-600 font-black tracking-widest text-xs uppercase group">
                  {text.learnMore}
                  <span className="w-10 h-px bg-red-600 transition-all duration-300 group-hover:w-20" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-[#050505] py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
            {text.ctaTitle} <span className="text-red-600">{text.ctaAccent}</span>
          </h2>
          <p className="text-gray-400 text-lg">{text.ctaDesc}</p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="px-12 py-5 rounded-full bg-white text-black font-black tracking-widest text-xs uppercase hover:bg-red-600 hover:text-white transition-all duration-500 shadow-2xl shadow-white/5 inline-block"
            >
              {text.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SimulasiFea


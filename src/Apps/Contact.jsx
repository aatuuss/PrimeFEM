import React, { useState } from 'react'
import { Building2, MapPin, Phone, Mail, Send, Clock, Globe, ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const heroImage = '/img/contact_bg.jpg'

  const content = {
    en: {
      badge: 'Get In Touch',
      heroTitleTop: "Let's Engineering",
      heroTitleBottom: 'Solutions Together',
      contactInfoTitle: 'Contact Information',
      contactInfoDesc: 'Reach out through any of our channels or visit our office for a face-to-face consultation.',
      officeTitle: 'Surabaya Office',
      phoneTitle: 'Phone Support',
      emailTitle: 'Email Us',
      hoursTitle: 'Office Hours',
      operationalTitle: 'Operational Reach',
      operationalDesc: 'Providing engineering excellence and consultancy services across Indonesia and Southeast Asia.',
      learnProjects: 'Learn about our projects',
      formTitle: 'Send us a Message',
      formDesc: 'Fill out the form below and our team will get back to you within 24 hours.',
      fullNameLabel: 'Full Name',
      emailLabel: 'Email Address',
      messageLabel: 'Your Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@example.com',
      messagePlaceholder: 'Describe your project or inquiry...',
      sendMessage: 'Send Message',
      privacyText: 'By submitting, you agree to our',
      privacyLink: 'Privacy Policy',
      visitTitle: 'Visit Our Location',
      visitDesc: 'We are located in the heart of Surabaya business district. Come over for a coffee and discuss your project.',
      openMaps: 'Open in Google Maps'
    },
    id: {
      badge: 'Hubungi Kami',
      heroTitleTop: 'Mari Wujudkan',
      heroTitleBottom: 'Solusi Rekayasa Bersama',
      contactInfoTitle: 'Informasi Kontak',
      contactInfoDesc: 'Hubungi kami melalui berbagai kanal atau kunjungi kantor untuk konsultasi langsung.',
      officeTitle: 'Kantor Surabaya',
      phoneTitle: 'Layanan Telepon',
      emailTitle: 'Email Kami',
      hoursTitle: 'Jam Operasional',
      operationalTitle: 'Jangkauan Operasional',
      operationalDesc: 'Menyediakan layanan rekayasa dan konsultasi di seluruh Indonesia dan Asia Tenggara.',
      learnProjects: 'Pelajari proyek kami',
      formTitle: 'Kirim Pesan',
      formDesc: 'Isi formulir berikut dan tim kami akan merespons dalam 24 jam.',
      fullNameLabel: 'Nama Lengkap',
      emailLabel: 'Alamat Email',
      messageLabel: 'Pesan Anda',
      namePlaceholder: 'Nama Anda',
      emailPlaceholder: 'anda@example.com',
      messagePlaceholder: 'Jelaskan proyek atau kebutuhan Anda...',
      sendMessage: 'Kirim Pesan',
      privacyText: 'Dengan mengirimkan, Anda setuju dengan',
      privacyLink: 'Kebijakan Privasi',
      visitTitle: 'Kunjungi Lokasi Kami',
      visitDesc: 'Kami berada di kawasan bisnis Surabaya. Silakan datang untuk berdiskusi tentang proyek Anda.',
      openMaps: 'Buka di Google Maps'
    }
  }

  const text = content[language]

  const contactInfo = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: text.officeTitle,
      details: 'Jl. Barok Barok IX No.85, Kedung Baruk, Kec. Rungkut, Surabaya, Jawa Timur 60298',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: text.phoneTitle,
      details: '+62 81-333-546-332\n021 7538566',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: text.emailTitle,
      details: 'primefem.id@gmail.com',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: text.hoursTitle,
      details: language === 'id' ? 'Senin - Jumat\n08:30 - 15:00 WIB' : 'Monday - Friday\n08:30 - 15:00 WIB',
      color: 'from-purple-500 to-pink-600'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-32">
        {/* Background Image with Parallax-like effect */}
        <div
          className="absolute inset-0 z-0 scale-110"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }}
        />

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-pulse" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-6 -mt-52">
          <div className="inline-block px-4 py-1.5 mb-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">{text.badge}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
            {text.heroTitleTop} <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
              {text.heroTitleBottom}
            </span>
          </h1>
          {/* <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed z-0">
            Have a complex technical challenge? Our team of experts is ready to collaborate and deliver high-precision FEM analysis and engineering verification.
          </p> */}
        </div>

        {/* Custom SVG Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-black">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C51.17,70.66,128.33,103.1,202.2,95.69,263.49,89.5,302.48,70.34,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* LEFT: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{text.contactInfoTitle}</h2>
              <p className="text-gray-400 max-w-md">{text.contactInfoDesc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full`} />

                  <div className="flex gap-5 items-start">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg">{info.title}</h3>
                      <p className="text-gray-400 text-sm whitespace-pre-line leading-relaxed">
                        {info.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links / Additional Info placeholder */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Globe className="text-blue-400" />
                {text.operationalTitle}
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">{text.operationalDesc}</p>
              <div className="mt-6 flex items-center gap-2 text-blue-400 text-sm font-bold group cursor-pointer">
                {text.learnProjects}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* RIGHT: High-End Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative group">
              {/* Animated Glow behind the form */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

              <div className="relative p-8 md:p-12 bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden">
                {/* Decorative circle in form background */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

                <div className="relative z-10 space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold">{text.formTitle}</h2>
                    <p className="text-gray-400 mt-2">{text.formDesc}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">{text.fullNameLabel}</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={text.namePlaceholder}
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-gray-600"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">{text.emailLabel}</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={text.emailPlaceholder}
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-gray-600"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">{text.messageLabel}</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder={text.messagePlaceholder}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-gray-600 resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full group relative flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
                    >
                      <span>{text.sendMessage}</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>

                  <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                      {text.privacyText} <span className="text-blue-400 cursor-pointer">{text.privacyLink}</span>.
                    </p>
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] font-bold">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-black bg-blue-600 flex items-center justify-center text-[10px] font-bold">
                        +12
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAP / LOCATION SECTION */}
<section className="mt-20 px-6 pb-20 max-w-7xl mx-auto">
  <div className="relative h-[400px] w-full bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden group">
    
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <MapPin className="w-10 h-10 text-blue-500" />
        </div>

        <h3 className="text-2xl font-bold">{text.visitTitle}</h3>

        <p className="text-gray-400 max-w-sm mx-auto">
          {text.visitDesc}
        </p>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Jl.+Barok+Barok+IX+No.85,+Kedung+Baruk,+Rungkut,+Surabaya,+Jawa+Timur+60298"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
        >
          {text.openMaps}
        </a>
      </div>
    </div>

    {/* Background decoration */}
    <div
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundImage:
          'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}
    />
  </div>
</section>

    </div>
  )
}

export default Contact


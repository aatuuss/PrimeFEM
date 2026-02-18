import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const searchInputRef = useRef(null)
    const { language, setLanguage } = useLanguage()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus()
        }
    }, [isSearchOpen])

    const labels = {
        en: {
            home: 'Home',
            experiences: 'Our Experiences',
            service: 'Our Service',
            simulation: 'Simulation FEA',
            contact: 'Contact',
            search: 'Search menu',
            language: 'Language'
        },
        id: {
            home: 'Beranda',
            experiences: 'Pengalaman Kami',
            service: 'Layanan Kami',
            simulation: 'Simulasi FEA',
            contact: 'Kontak',
            search: 'Cari menu',
            language: 'Bahasa'
        }
    }

    const navItems = [
        { label: labels[language].home, href: '/', type: 'route' },
        { label: labels[language].experiences, href: '/experince', type: 'route' },
        { label: labels[language].service, href: '/servis', type: 'route' },
        { label: labels[language].simulation, href: '/simulasifea', type: 'route' },
        { label: labels[language].contact, href: '/contact', type: 'route' }
    ]

    const filteredNavItems = navItems.filter((item) => {
        if (!searchQuery.trim()) {
            return true
        }

        return item.label.toLowerCase().includes(searchQuery.trim().toLowerCase())
    })

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white shadow-md py-2'
                    : 'bg-transparent py-4'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className={`p-2 rounded-lg transition-colors duration-300 ${scrolled ? '' : 'backdrop-blur-sm'}`}>
                            <img
                                className="h-14 w-auto drop-shadow-sm transition-all duration-300"
                                src={scrolled ? '/img/primefem.png' : '/img/primefemwhite.png'}
                                alt="PrimeFEM"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {filteredNavItems.map((item) => (
                            item.type === 'route' ? (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    className={`font-medium text-sm tracking-wide transition-all duration-300 relative group ${
                                        scrolled ? 'text-gray-900 hover:text-red-600' : 'text-white hover:text-[#DDFF00]'
                                    }`}
                                >
                                    {item.label}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                                        scrolled ? 'bg-red-600' : 'bg-[#DDFF00]'
                                    }`}></span>
                                </Link>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`font-medium text-sm tracking-wide transition-all duration-300 relative group ${
                                        scrolled ? 'text-gray-900 hover:text-red-600' : 'text-white hover:text-[#DDFF00]'
                                    }`}
                                >
                                    {item.label}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                                        scrolled ? 'bg-red-600' : 'bg-[#DDFF00]'
                                    }`}></span>
                                </a>
                            )
                        ))}
                    </div>

                    {/* Right Side Icons */}
                    <div className={`hidden md:flex items-center space-x-4 transition-colors duration-300 ${
                        scrolled ? 'text-gray-900' : 'text-white'
                    }`}>
                        <button
                            onClick={() => setIsSearchOpen((prev) => !prev)}
                            className={`hover:scale-110 transition-transform p-2 rounded-full ${
                                scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
                            }`}
                            aria-label={labels[language].search}
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        {isSearchOpen && (
                            <input
                                ref={searchInputRef}
                                type="text"
                                value={searchQuery}
                                onChange={(event) => setSearchQuery(event.target.value)}
                                placeholder={labels[language].search}
                                className={`px-3 py-1.5 rounded-full text-sm outline-none border transition-colors ${
                                    scrolled
                                        ? 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
                                        : 'bg-white/10 border-white/20 text-white placeholder:text-white/60'
                                }`}
                            />
                        )}

                        <div className={`h-6 w-px mx-2 ${
                            scrolled ? 'bg-gray-300' : 'bg-white/50'
                        }`}></div>

                        <label
                            className={`flex items-center space-x-2 cursor-pointer transition-colors p-2 rounded-full ${
                                scrolled ? 'hover:text-red-600 hover:bg-gray-100' : 'hover:text-[#DDFF00] hover:bg-white/20'
                            }`}
                        >
                            <Globe className="w-5 h-5" />
                            <span className="font-medium text-sm">{labels[language].language}</span>
                            <select
                                value={language}
                                onChange={(event) => setLanguage(event.target.value)}
                                className={`text-sm font-semibold bg-transparent outline-none ${
                                    scrolled ? 'text-gray-900' : 'text-white'
                                }`}
                                aria-label={labels[language].language}
                            >
                                <option value="en">EN</option>
                                <option value="id">ID</option>
                            </select>
                        </label>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${
                                scrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-[#DDFF00]'
                            }`}
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl absolute w-full top-full left-0">
                    <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
                        <div className="flex items-center gap-2 px-2">
                            <Search className="w-4 h-4 text-gray-500" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(event) => setSearchQuery(event.target.value)}
                                placeholder={labels[language].search}
                                className="w-full px-3 py-2 rounded-lg text-sm border border-gray-200 outline-none text-gray-900 placeholder:text-gray-400"
                            />
                        </div>

                        <div className="flex items-center gap-2 px-2">
                            <Globe className="w-4 h-4 text-gray-500" />
                            <label className="text-sm font-medium text-gray-700">{labels[language].language}</label>
                            <select
                                value={language}
                                onChange={(event) => setLanguage(event.target.value)}
                                className="ml-auto text-sm font-semibold text-gray-900 bg-white border border-gray-200 rounded-md px-2 py-1"
                                aria-label={labels[language].language}
                            >
                                <option value="en">EN</option>
                                <option value="id">ID</option>
                            </select>
                        </div>

                        {filteredNavItems.map((item) => (
                            item.type === 'route' ? (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            )
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar

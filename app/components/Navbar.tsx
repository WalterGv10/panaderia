'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '#' },
        { name: 'Productos', href: '#productos' },
        { name: 'Delivery', href: '#servicio' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 px-4' : 'py-6 px-6 lg:py-8'
                    }`}
            >
                <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 lg:px-8 lg:py-4 rounded-3xl transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-xl border border-black/5 shadow-lg'
                    : 'bg-white/80 backdrop-blur-md border border-white/20'
                    }`}>
                    {/* Logo Section */}
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 relative group">
                            <div className="absolute inset-0 bg-brand-gold blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                            <Image src="/panguate/logo2.png" alt="Guatemalan Bread Logo" fill className="relative z-10 animate-glow object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base lg:text-lg font-black tracking-tighter leading-none text-black uppercase">
                                Guatemalan Bread
                            </span>
                            <span className="text-[8px] lg:text-[10px] font-bold tracking-[0.3em] text-brand-brown uppercase">The Hamptons Edition</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[10px] lg:text-[11px] font-bold tracking-[0.2em] text-neutral-500 uppercase">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-brand-gold transition-colors relative group">
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Button (Desktop) */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/16319030520"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block bg-green-600 text-white px-5 py-2 lg:px-6 lg:py-2.5 rounded-2xl text-[10px] lg:text-[11px] font-black tracking-widest hover:bg-green-700 transition-all uppercase shadow-lg shadow-green-500/20"
                    >
                        WhatsApp
                    </motion.a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-black"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-32 px-6 flex flex-col items-center gap-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-black uppercase tracking-tighter text-black hover:text-brand-gold transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://wa.me/16319030520"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 bg-green-600 text-white px-10 py-4 rounded-full text-lg font-black tracking-widest uppercase shadow-xl hover:bg-green-700 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Enviar WhatsApp
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

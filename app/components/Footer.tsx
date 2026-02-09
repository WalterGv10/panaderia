'use client';

import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-20 px-8 border-t border-black/5 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 pt-8">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3 mb-4">
                            <Image src="/panguate/logo2.png" alt="Guatemalan Bread Logo" width={60} height={60} className="w-16 h-16 object-contain" />
                            <span className="text-xl font-black tracking-tighter uppercase text-black/40">Guatemalan Bread</span>
                        </div>
                        <p className="text-black/20 text-xs font-bold tracking-widest uppercase">The Hamptons, New York</p>
                    </div>

                    <div className="flex gap-8">
                        <a href="tel:6319030520" className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-black/20 hover:text-brand-brown hover:border-brand-brown/50 transition-all">
                            <Phone className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2">
                        <span className="text-black/20 text-[10px] font-black tracking-[0.3em] uppercase">
                            © 2026 Crafted by
                        </span>
                        <a
                            href="https://walweb.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center md:items-end"
                        >
                            <span className="text-black/40 text-lg font-black tracking-tighter group-hover:text-brand-gold transition-colors duration-300">
                                WalWeb
                            </span>
                            <span className="text-black/20 text-[8px] font-bold tracking-[0.1em] uppercase group-hover:text-black/30 transition-colors">
                                Premium Web Development & Digital Experiences
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

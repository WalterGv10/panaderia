'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function CTASection() {
    return (
        <section id="contacto" className="py-16 lg:py-40 px-4">
            <motion.div
                whileInView={{ scale: 0.95, opacity: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                className="max-w-5xl mx-auto rounded-[40px] lg:rounded-[80px] bg-black/80 backdrop-blur-xl p-8 lg:p-24 text-center border border-white/10 relative overflow-hidden shadow-2xl"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
                <span className="text-brand-gold font-black tracking-[0.5em] uppercase text-[10px] lg:text-xs mb-6 lg:mb-8 block">¿Hablamos?</span>
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 lg:mb-10 italic uppercase tracking-tighter leading-none text-white">
                    FRIO AFUERA, <br /> <span className="text-brand-gold">CALOR DE HOGAR</span> ADENTRO
                </h2>
                <p className="text-base md:text-xl lg:text-2xl text-white/60 mb-10 lg:mb-16 max-w-2xl mx-auto font-medium">
                    Nada combate mejor el invierno de los Hamptons que una taza de café humeante y un pan recién salido del horno.
                    <br className="hidden md:block" />
                    <span className="text-white font-bold">¡La combinación perfecta para el alma!</span>
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 lg:gap-6">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/16319030520"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 sm:px-10 py-4 lg:py-5 rounded-2xl bg-green-600 text-white font-black text-lg md:text-2xl uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg shadow-green-900/20 flex items-center justify-center gap-3"
                    >
                        <Phone className="w-5 h-5 lg:w-6 lg:h-6" /> WhatsApp
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="tel:6319030520"
                        className="px-6 sm:px-10 py-4 lg:py-5 rounded-2xl bg-white text-black font-black text-lg md:text-2xl uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-lg flex items-center justify-center gap-3"
                    >
                        <Phone className="w-5 h-5 lg:w-6 lg:h-6" /> Llamar
                    </motion.a>
                </div>
                <div className="mt-12 text-white/40 font-bold uppercase tracking-[0.2em] text-sm">
                    +1 (631) 903-0520
                </div>
            </motion.div>
        </section>
    );
}

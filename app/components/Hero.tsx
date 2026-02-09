'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-24 px-4 max-w-7xl mx-auto overflow-hidden min-h-[60vh] flex flex-col justify-center">
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-brown/5 blur-[120px] rounded-full pointer-events-none"
            />

            <div className="relative z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="flex items-center gap-4 mb-6 lg:mb-10 group"
                >
                    <div className="h-[2px] w-8 lg:w-12 bg-brand-gold group-hover:w-20 transition-all duration-500" />
                    <span className="text-white/90 font-bold tracking-[0.2em] uppercase text-xs lg:text-base drop-shadow-md">
                        Directo de Guatemala a <span className="text-brand-gold">The Hamptons</span>
                    </span>
                </motion.div>

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                        }
                    }}
                    className="text-5xl sm:text-7xl lg:text-[110px] font-black tracking-tighter mb-6 lg:mb-10 leading-[0.9] lg:leading-[0.85] italic uppercase text-white drop-shadow-md"
                >
                    <motion.span
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                        className="block"
                    >
                        Tradición que
                    </motion.span>
                    <motion.span
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                        className="text-gradient block"
                    >
                        No tiene Fronteras
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="max-w-2xl text-base sm:text-xl lg:text-2xl text-neutral-200 mb-8 lg:mb-14 font-medium leading-relaxed drop-shadow-sm"
                >
                    Pan artesanal horneado con pasión. Mynor Veliz trae el sabor de hogar a tu puerta en NY. Frescura garantizada, desde conchas hasta pan francés.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:gap-6"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="px-6 sm:px-10 py-4 lg:py-5 bg-white border border-black/5 rounded-2xl font-black text-base sm:text-lg hover:bg-neutral-50 transition-all uppercase italic text-black shadow-lg shadow-black/5"
                        onClick={() => window.location.href = 'tel:6319030520'}
                    >
                        631-903-0520
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

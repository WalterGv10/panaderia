'use client';

import { motion } from 'framer-motion';
import { ChefHat, ChevronRight } from 'lucide-react';
import { products } from '../lib/products';

export default function ProductGrid() {
    return (
        <section id="productos" className="py-16 lg:py-32 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-24 gap-6"
            >
                <div>
                    <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-4 block">Del Horno a tu Mesa</span>
                    <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black italic uppercase tracking-tighter text-white drop-shadow-sm">Nuestras Joyas</h2>
                </div>
                <p className="max-w-md text-white/70 font-medium text-base sm:text-lg leading-relaxed">
                    Cada pieza es elaborada siguiendo las recetas tradicionales guatemaltecas que han definido nuestro sabor por años.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            delay: i * 0.1,
                            type: "spring",
                            stiffness: 70,
                            damping: 15
                        }}
                        whileHover={{
                            y: -15,
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        className="group relative bg-white/[0.03] backdrop-blur-2xl p-8 rounded-[32px] border border-white/10 hover:border-brand-gold transition-all duration-500 hover:shadow-[0_20px_40px_rgba(212,165,116,0.15)] flex flex-col items-start overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700 pointer-events-none">
                            <ChefHat className="w-32 h-32 text-white" />
                        </div>

                        <div className="mb-6 w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300 border border-brand-gold/20">
                            {item.icon}
                        </div>

                        {item.tag && (
                            <div className="absolute top-6 right-6 px-3 py-1 bg-brand-gold text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-brand-gold/20">
                                {item.tag}
                            </div>
                        )}

                        <h3 className="text-xl lg:text-2xl font-black mb-3 text-white tracking-tight group-hover:text-brand-gold transition-colors">
                            {item.title}
                        </h3>

                        <p className="text-white/80 text-sm lg:text-base font-medium leading-relaxed mb-8 flex-grow">
                            {item.desc}
                        </p>

                        <div className="w-full flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                            <span className="text-xs font-bold text-brand-gold tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
                                Ver Detalle
                            </span>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

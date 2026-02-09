'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function DeliveryExperience() {
    const serviceRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: serviceRef,
        offset: ["start end", "end start"]
    });

    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <section ref={serviceRef} id="servicio" className="py-16 lg:py-40 relative">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <motion.div
                    style={{ y: y3 }}
                    className="relative group order-2 lg:order-1"
                >
                    <div className="absolute inset-0 bg-brand-gold/20 blur-[60px] rounded-full group-hover:bg-brand-gold/30 transition-colors" />
                    <div className="relative h-[500px] md:h-[650px] lg:h-[800px] rounded-[40px] lg:rounded-[60px] border border-white/20 overflow-hidden bg-white/5 shadow-2xl backdrop-blur-sm group">
                        <Image
                            src="/pana3.png"
                            alt="Mynor Veliz - Maestro Panadero Guatemalteco"
                            fill
                            className="object-cover object-top scale-[1.02] group-hover:scale-110 transition-transform duration-[2s] ease-out shadow-inner"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Floating Badge */}
                        <div className="absolute top-8 left-8 z-20">
                            <motion.div
                                initial={{ rotate: -5 }}
                                animate={{ rotate: 5 }}
                                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                className="bg-brand-gold py-2 px-6 rounded-full shadow-[0_10px_20px_rgba(212,165,116,0.3)] border border-white/20"
                            >
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Maestro Panadero</span>
                            </motion.div>
                        </div>

                        {/* Enhanced Info Card */}
                        <div className="absolute inset-x-4 lg:inset-x-8 bottom-4 lg:bottom-8 p-4 lg:p-10 glass-card rounded-[30px] lg:rounded-[40px] bg-black/20 backdrop-blur-2xl border border-white/10">
                            <div className="flex flex-col gap-1">
                                <h4 className="text-xl lg:text-5xl font-black italic uppercase text-white tracking-tighter leading-none mb-1 lg:mb-2">
                                    Mynor <span className="text-brand-gold">Veliz</span>
                                </h4>
                                <div className="flex items-center gap-2 lg:gap-3">
                                    <div className="h-px w-6 lg:w-8 bg-brand-gold" />
                                    <p className="text-white/90 text-[10px] lg:text-base font-bold tracking-widest uppercase font-outfit">
                                        El Corazón de la Panadería
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="order-1 lg:order-2">
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-6xl lg:text-8xl font-black mb-6 lg:mb-12 italic uppercase leading-[0.9] lg:leading-[0.85] tracking-tighter text-white drop-shadow-sm"
                    >
                        EL SABOR <br /> <span className="text-gradient">TE ALCANZA</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg lg:text-2xl text-neutral-200 mb-8 lg:mb-16 font-medium leading-relaxed drop-shadow-sm"
                    >
                        No importa en qué rincón de The Hamptons estés, llegamos con el pan calientito listo para tus tamales o tu café.
                    </motion.p>

                    <div className="space-y-6 lg:space-y-12">
                        {[
                            { icon: <MapPin className="text-brand-gold" />, title: "Cobertura Hamptons", desc: "Servicio exclusivo en Southampton, East Hampton y alrededores." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                className="flex items-start gap-4 lg:gap-8 group p-5 lg:p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/5 hover:bg-white/10 transition-all font-outfit"
                            >
                                <div className="w-12 h-12 lg:w-20 lg:h-20 rounded-[20px] lg:rounded-[30px] bg-brand-cream flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors shrink-0">
                                    <div className="w-5 h-5 lg:w-8 lg:h-8">{item.icon}</div>
                                </div>
                                <div>
                                    <h4 className="text-lg lg:text-2xl font-bold mb-1 lg:mb-2 uppercase italic text-white">{item.title}</h4>
                                    <p className="text-white/80 text-sm lg:text-lg leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

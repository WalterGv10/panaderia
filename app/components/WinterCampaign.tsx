'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function WinterCampaign() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={targetRef} className="relative py-24 lg:py-48 px-4 overflow-hidden">
            <motion.div style={{ y: y2 }} className="absolute inset-0">
                <Image
                    src="/coffee-winter.jpg"
                    alt="Café caliente y pan guatemalteco"
                    fill
                    className="object-cover object-[center_30%] brightness-[0.4]"
                />
            </motion.div>
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-black/40 backdrop-blur-xl p-8 md:p-16 rounded-[40px] border border-white/10 shadow-2xl"
                >
                    <span className="text-brand-gold font-black tracking-[0.4em] uppercase text-xs mb-6 block drop-shadow-md">
                        Edición Especial
                    </span>
                    <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter text-white mb-8 leading-[0.9]">
                        EL SABOR QUE <br />
                        <span className="text-brand-gold">CALIENTA EL ALMA</span>
                    </h2>

                    <p className="text-lg sm:text-2xl text-neutral-200 font-medium leading-relaxed mb-0 drop-shadow-lg">
                        En los días más fríos de <span className="text-white font-bold">The Hamptons</span>, nuestro pan artesanal es el abrazo que tu mañana necesita. Un legado guatemalteco horneado hoy mismo.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

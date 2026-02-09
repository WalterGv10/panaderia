'use client';

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryImages = [
    "/panguate/1770595642421.png",
    "/panguate/file_0000000007f871f7af83f254f9144ac7.png",
    "/panguate/file_000000006c7071f7a6c80c0b5d7414aa.png",
    "/panguate/file_000000006d4071f786e0c9b6e90b6146.png",
    "/panguate/file_00000000742c71f79f67f6ea64bb6342.png",
    "/panguate/file_00000000788c71f7b7cceb93dbc9df4e.png",
    "/panguate/file_00000000d80871f78fd0ab134dae54af.png",
    "/panguate/file_00000000ecd471f7bc6d78641cf3a33f.png",
    "/panguate/logo2.png"
];

export default function InfiniteGallery() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                    NUESTRO ARTE
                </span>
                <h2 className="text-4xl md:text-6xl font-black italic uppercase text-black tracking-tighter">
                    GALERÍA <span className="text-gradient">ARTESANAL</span>
                </h2>
            </div>

            {/* Draggable Carousel */}
            <div ref={containerRef} className="relative w-full cursor-grab active:cursor-grabbing overflow-hidden">
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -1500, right: 0 }}
                    dragElastic={0.2}
                    className="flex gap-8 px-6"
                >
                    {galleryImages.map((src, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="relative w-[280px] h-[350px] md:w-[450px] md:h-[550px] flex-shrink-0 rounded-[40px] overflow-hidden group border border-black/5 shadow-xl shadow-black/5"
                        >
                            <Image
                                src={src}
                                alt={`Pan Artesanal Guatemalteco - Especialidad de la casa Mynor Veliz Hamptons ${i}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                sizes="(max-width: 768px) 280px, 450px"
                                draggable={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <span className="text-white font-black italic uppercase tracking-widest text-sm drop-shadow-lg">
                                    Calidad Artesanal
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Interaction Indicator */}
                <div className="flex justify-center mt-12 gap-2">
                    <div className="h-1 w-12 bg-brand-gold rounded-full opacity-30" />
                    <div className="h-1 w-4 bg-brand-gold rounded-full" />
                    <div className="h-1 w-12 bg-brand-gold rounded-full opacity-30" />
                </div>
            </div>
        </section>
    );
}

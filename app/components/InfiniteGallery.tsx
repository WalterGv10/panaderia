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

            {/* Infinite Horizontal Scroll */}
            <div className="relative flex w-full">
                <div className="flex gap-8 animate-infinite-scroll hover:pause">
                    {/* Render images twice for seamless loop */}
                    {[...galleryImages, ...galleryImages].map((src, i) => (
                        <div
                            key={i}
                            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0 rounded-[40px] overflow-hidden group border border-black/5"
                        >
                            <Image
                                src={src}
                                alt={`Pan Artesanal Guatemalteco - Especialidad de la casa Mynor Veliz Hamptons ${i}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                sizes="(max-width: 768px) 300px, 400px"
                            />
                            <div className="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/20 transition-colors duration-500" />
                        </div>
                    ))}
                </div>
                <div className="flex gap-8 animate-infinite-scroll hover:pause" aria-hidden="true">
                    {[...galleryImages, ...galleryImages].map((src, i) => (
                        <div
                            key={`dup-${i}`}
                            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0 rounded-[40px] overflow-hidden group border border-black/5"
                        >
                            <Image
                                src={src}
                                alt={`Pan Artesanal Guatemalteco - Especialidad de la casa Mynor Veliz Hamptons ${i}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                sizes="(max-width: 768px) 300px, 400px"
                            />
                            <div className="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/20 transition-colors duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const images = [
    "/panguate/1770595642421.png",
    "/panguate/file_0000000007f871f7af83f254f9144ac7.png",
    "/panguate/file_000000006c7071f7a6c80c0b5d7414aa.png",
    "/panguate/file_000000006d4071f786e0c9b6e90b6146.png",
    "/panguate/file_00000000742c71f79f67f6ea64bb6342.png",
    "/panguate/file_00000000788c71f7b7cceb93dbc9df4e.png",
    "/panguate/file_00000000d80871f78fd0ab134dae54af.png",
    "/panguate/file_00000000ecd471f7bc6d78641cf3a33f.png",
    "/coffee-winter.jpg"
];

export default function BackgroundSlider() {
    const { scrollYProgress } = useScroll();
    const [index, setIndex] = useState(0);

    // Map scroll progress (0 to 1) to image index (0 to images.length - 1)
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Calculate index based on scroll position
        // We use a finer grain mapping to ensure smooth transitions across the full page height
        const newIndex = Math.min(
            Math.floor(latest * images.length),
            images.length - 1
        );
        setIndex(newIndex);
    });

    return (
        <div className="fixed inset-0 z-[-1] h-[100dvh] w-full overflow-hidden bg-black">
            {images.map((src, i) => (
                <motion.div
                    key={src}
                    initial={false}
                    animate={{
                        opacity: index === i ? 1 : 0,
                        scale: index === i ? 1.05 : 1,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                    className="absolute inset-0 h-full w-full will-change-[opacity,transform]"
                >
                    <Image
                        src={src}
                        alt="Fondo de panadería artesanal"
                        fill
                        priority={i === index}
                        quality={70}
                        sizes="100vw"
                        className="object-cover"
                        loading={i === index ? undefined : "lazy"}
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>
            ))}
        </div>
    );
}

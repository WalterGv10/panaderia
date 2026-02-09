'use client';

export default function CategoriesBanner() {
    const categories = ["CONCHAS", "CHAMPURRADAS", "PAN FRANCÉS", "PIRUJOS", "QUESADILLAS", "PAN DULCE"];

    return (
        <section className="py-12 lg:py-24 border-y border-white/10 bg-black/10 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 overflow-hidden">
                <div className="flex gap-12 sm:gap-20 animate-infinite-scroll">
                    {categories.map((cat, i) => (
                        <span key={i} className="text-3xl sm:text-6xl font-black text-white/20 hover:text-brand-gold transition-colors italic whitespace-nowrap cursor-default uppercase">
                            {cat}
                        </span>
                    ))}
                    {/* Duplicate for seamless loop if needed, though Tailwind animation usually handles it */}
                    {categories.map((cat, i) => (
                        <span key={`clone-${i}`} className="text-3xl sm:text-6xl font-black text-white/20 hover:text-brand-gold transition-colors italic whitespace-nowrap cursor-default uppercase">
                            {cat}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

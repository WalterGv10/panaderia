'use client';

import { useRef } from 'react';
import { ChefHat, Truck, Phone, MapPin, ChevronRight, ShoppingBasket, Star, Instagram, Music } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BackgroundSlider from './components/BackgroundSlider';
import Navbar from './components/Navbar';
import InfiniteGallery from './components/InfiniteGallery';
import Image from 'next/image';

export default function Home() {
  const products = [
    {
      title: "Conchas Tradicionales",
      desc: "El ícono de la panadería. Cobertura crujiente de vainilla o chocolate sobre un pan suave y esponjoso.",
      icon: <ShoppingBasket className="w-6 h-6 text-brand-brown" />,
      tag: "Más Vendido"
    },
    {
      title: "Champurradas",
      desc: "Tostaditas, con el toque justo de ajonjolí. Ideales para 'shukear' en tu café mañanero.",
      icon: <Star className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Pan Francés Auténtico",
      desc: "Crujiente por fuera, suave por dentro. El alma de cualquier desayuno guatemalteco.",
      icon: <ChefHat className="w-6 h-6 text-brand-brown" />
    },
    {
      title: "Pan de Manteca",
      desc: "Sabor nostálgico que se deshace en tu boca. Una receta que ha pasado por generaciones.",
      icon: <Music className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Pan Pirujo",
      desc: "Perfecto para sándwiches o para acompañar tus frijolitos volteados. Textura inigualable.",
      icon: <ChefHat className="w-6 h-6 text-brand-brown" />
    },

  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const serviceRef = useRef(null);
  const { scrollYProgress: scrollY2 } = useScroll({
    target: serviceRef,
    offset: ["start end", "end start"]
  });

  const y3 = useTransform(scrollY2, [0, 1], [0, -150]);

  return (
    <main className="relative min-h-screen selection:bg-brand-gold selection:text-white">
      <BackgroundSlider />

      {/* Header / Navigation - Keeping text accessible but minimal */}
      <Navbar />

      {/* Hero Section */}
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
              className="group px-6 sm:px-10 py-4 lg:py-5 bg-gradient-to-r from-brand-gold to-brand-brown rounded-2xl font-black text-base sm:text-lg shadow-[0_20px_40px_rgba(212,165,116,0.2)] flex items-center justify-center gap-3 italic text-white"
            >
              VER EL MENÚ <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-6 sm:px-10 py-4 lg:py-5 bg-white border border-black/5 rounded-2xl font-black text-base sm:text-lg hover:bg-neutral-50 transition-all uppercase italic text-black shadow-lg shadow-black/5"
            >
              631-903-0520
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Winter Season Special Campaign */}
      <section ref={targetRef} className="relative py-24 lg:py-48 px-4 overflow-hidden">
        <motion.div style={{ y: y2 }} className="absolute inset-0">
          <Image
            src="/coffee-winter.jpg"
            alt="Café caliente y pan guatemalteco"
            fill
            className="object-cover object-[center_30%] brightness-[0.4]"
          />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">


          <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter text-white mb-6 drop-shadow-2xl">
            FRIO AFUERA, <br />
            <span className="text-brand-gold">CALOR DE HOGAR</span> ADENTRO
          </h2>

          <p className="max-w-2xl text-lg sm:text-2xl text-neutral-200 font-medium leading-relaxed mb-8 drop-shadow-lg">
            Nada combate mejor el invierno de los Hamptons que una taza de café humeante y un pan recién salido del horno.
            <span className="block mt-4 text-white font-bold">¡La combinación perfecta para el alma!</span>
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#productos"
            className="px-8 py-4 bg-white text-black rounded-2xl font-black text-base sm:text-lg uppercase tracking-widest hover:bg-brand-cream transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Ver Menú de Invierno
          </motion.a>
        </div>
      </section>

      {/* Infinite Gallery - Panguate Folder */}
      <InfiniteGallery />

      {/* Categories Banner (Kinetic Typography) */}
      <section className="py-12 lg:py-24 border-y border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex gap-12 sm:gap-20 animate-infinite-scroll">
            {["CONCHAS", "CHAMPURRADAS", "PAN FRANCÉS", "PIRUJOS", "QUESADILLAS", "PAN DULCE"].map((cat, i) => (
              <span key={i} className="text-3xl sm:text-6xl font-black text-white/10 hover:text-brand-gold/60 transition-colors italic whitespace-nowrap cursor-default uppercase">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
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
          <p className="max-w-md text-neutral-300 font-medium text-base sm:text-lg leading-relaxed">
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
              className="group relative bg-white p-8 rounded-[32px] border border-black/5 hover:border-brand-gold transition-all duration-500 hover:shadow-[0_20px_40px_rgba(212,165,116,0.15)] flex flex-col items-start overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700 pointer-events-none">
                <ChefHat className="w-32 h-32 text-black" />
              </div>

              <div className="mb-6 w-14 h-14 rounded-2xl bg-brand-cream/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              {item.tag && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-brand-gold text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-brand-gold/20">
                  {item.tag}
                </div>
              )}

              <h3 className="text-xl lg:text-2xl font-black mb-3 text-black tracking-tight group-hover:text-brand-brown transition-colors">
                {item.title}
              </h3>

              <p className="text-neutral-500 text-sm lg:text-base font-medium leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>

              <div className="w-full flex items-center justify-between border-t border-black/5 pt-6 mt-auto">
                <span className="text-xs font-bold text-brand-gold tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
                  Ver Detalle
                </span>
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Delivery Experience */}
      <section ref={serviceRef} id="servicio" className="py-16 lg:py-40 relative">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            style={{ y: y3 }}
            className="relative group order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-brand-gold/20 blur-[60px] rounded-full group-hover:bg-brand-gold/30 transition-colors" />
            <div className="relative h-[300px] md:h-[600px] lg:h-[700px] rounded-[40px] lg:rounded-[60px] border border-white/20 overflow-hidden bg-white/5 shadow-2xl backdrop-blur-sm">
              <Image
                src="/pana3.png"
                alt="Mynor Veliz - Maestro Panadero Guatemalteco"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-x-4 lg:inset-x-10 bottom-4 lg:bottom-10 p-5 lg:p-10 glass-card rounded-[30px] lg:rounded-[40px] bg-white/95">
                <h4 className="text-xl lg:text-3xl font-black italic mb-2 lg:mb-4 uppercase text-black">Mynor Veliz</h4>
                <p className="text-neutral-600 text-sm lg:text-lg font-bold">El Maestro Detrás del Sabor</p>
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
                    <p className="text-neutral-300 text-sm lg:text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-16 lg:py-40 px-4">
        <motion.div
          whileInView={{ scale: 0.95, opacity: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          className="max-w-5xl mx-auto rounded-[40px] lg:rounded-[80px] bg-black/80 backdrop-blur-xl p-8 lg:p-24 text-center border border-white/10 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
          <span className="text-brand-gold font-black tracking-[0.5em] uppercase text-[10px] lg:text-xs mb-6 lg:mb-8 block">¿Hablamos?</span>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 lg:mb-10 italic uppercase tracking-tighter leading-none text-white">
            FRIO AFUERA, <br /> CALOR DE HOGAR ADENTRO
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

      {/* Footer / Logos Section */}
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
              <a href="tel:6319030520" className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-black/20 hover:text-brand-brown hover:border-brand-brown/50 transition-all"><Phone className="w-5 h-5" /></a>
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
    </main>
  );
}

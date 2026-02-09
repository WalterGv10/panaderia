'use client';

import BackgroundSlider from './components/BackgroundSlider';
import Navbar from './components/Navbar';
import InfiniteGallery from './components/InfiniteGallery';
import Hero from './components/Hero';
import WinterCampaign from './components/WinterCampaign';
import CategoriesBanner from './components/CategoriesBanner';
import ProductGrid from './components/ProductGrid';
import DeliveryExperience from './components/DeliveryExperience';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-brand-gold selection:text-white">
      <BackgroundSlider />
      <Navbar />
      <Hero />
      <InfiniteGallery />
      <CategoriesBanner />
      <ProductGrid />
      <DeliveryExperience />
      <WinterCampaign />
      <CTASection />
      <Footer />
    </main>
  );
}

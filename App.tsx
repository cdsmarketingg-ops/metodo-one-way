import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Bonuses from './components/Bonuses';
import SocialProof from './components/SocialProof';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Biography from './components/Biography';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 overflow-x-hidden selection:bg-[#B31942] selection:text-white">
      <Hero />
      <PainPoints />
      <Solution />
      <Bonuses />
      <SocialProof />
      <Offer />
      <Guarantee />
      <FAQ />
      <Biography />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;

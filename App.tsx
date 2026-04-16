
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
    </div>
  );
};

export default App;

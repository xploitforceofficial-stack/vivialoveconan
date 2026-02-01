
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Quotes } from './components/Quotes';
import { Events } from './components/Events';
import { RSVP } from './components/RSVP';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <main className="overflow-x-hidden">
        <Hero />
        <Story />
        <Quotes />
        <Events />
        <RSVP />
        <Closing />
        <Footer />
      </main>
    </div>
  );
};

export default App;

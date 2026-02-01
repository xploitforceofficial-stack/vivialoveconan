
import React from 'react';

export const Quotes: React.FC = () => {
  const quotes = [
    "Bersamamu, rumah itu nyata.",
    "Bukan tentang sempurna, tapi saling memilih setiap hari.",
    "Cinta yang tumbuh adalah janji yang kami jaga."
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {quotes.map((quote, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-8 h-[1px] bg-gold mb-6 opacity-40"></div>
            <p className="font-serif italic text-2xl text-gray-700 leading-snug">
              "{quote}"
            </p>
            <div className="w-8 h-[1px] bg-gold mt-6 opacity-40"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

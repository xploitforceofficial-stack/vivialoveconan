
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream overflow-hidden px-4">
      {/* Decorative Background Elements - Clean & Airy */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-gold rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-gold rounded-full opacity-5"></div>
      </div>

      <div className="relative text-center max-w-4xl mx-auto z-10">
        <div className="mb-10 animate-[fadeIn_2s_ease-out]">
           <span className="inline-block mb-3 text-[10px] tracking-[0.5em] uppercase text-gray-400">
            Undangan Pernikahan
          </span>
          <div className="h-[1px] w-12 bg-gold mx-auto opacity-30"></div>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-playfair mb-6 text-gray-800 animate-[slideUp_1.5s_ease-out] font-light">
          Vivia & Conan
        </h1>
        
        <p className="text-xl md:text-2xl font-serif italic text-gold/80 mb-12 animate-[fadeIn_2.5s_ease-out] tracking-wide">
          “Cinta yang tumbuh, janji yang kami jaga”
        </p>
        
        <div className="space-y-4 mb-16 animate-[fadeIn_3s_ease-out]">
          <p className="text-sm tracking-[0.3em] uppercase text-gray-500">
            Minggu, 12 Oktober 2025
          </p>
          <p className="text-xs tracking-[0.1em] text-gray-400">
            Jakarta, Indonesia
          </p>
        </div>

        <a 
          href="#story" 
          className="inline-block px-10 py-4 bg-white border border-gray-200 text-gray-500 hover:border-gold hover:text-gold transition-all duration-700 tracking-[0.3em] text-[10px] uppercase shadow-sm hover:shadow-md"
        >
          Kisah Kami
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

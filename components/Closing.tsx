
import React from 'react';

export const Closing: React.FC = () => {
  return (
    <section className="py-32 bg-cream px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-serif mb-8 text-gray-800">Terima Kasih</h2>
        <p className="text-gray-600 leading-relaxed font-light text-lg mb-12">
          Kehadiran dan doa restu Anda adalah kado terindah bagi kami. Kami sangat bersyukur atas cinta dan dukungan yang diberikan sepanjang perjalanan kami menuju babak baru ini.
        </p>
        
        <div className="space-y-4">
          <p className="font-serif italic text-gold text-2xl">Penuh Cinta,</p>
          <p className="text-3xl font-playfair text-gray-800">Vivia & Conan</p>
        </div>
      </div>
    </section>
  );
};

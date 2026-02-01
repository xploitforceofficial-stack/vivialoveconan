
import React from 'react';

export const Events: React.FC = () => {
  const events = [
    {
      title: 'Akad Nikah',
      date: 'Minggu, 12 Oktober 2025',
      time: '08:00 - 10:00 WIB',
      location: 'Kediaman Mempelai Wanita',
      address: 'Jl. Melati No. 12, Kebayoran Baru, Jakarta Selatan',
      mapLink: 'https://maps.google.com'
    },
    {
      title: 'Resepsi',
      date: 'Minggu, 12 Oktober 2025',
      time: '11:00 - 14:00 WIB',
      location: 'The Glass House',
      address: 'Kawasan SCBD, Lot 14, Jakarta Selatan',
      mapLink: 'https://maps.google.com'
    }
  ];

  return (
    <section className="py-32 bg-cream px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">Detail Acara</h2>
          <p className="text-gray-500 text-sm tracking-[0.1em] uppercase">Momen Berharga Kami</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-full aspect-[4/3] border border-gold/30 bg-white flex flex-col justify-center items-center p-12 transition-all duration-700 hover:border-gold group">
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6">{index === 0 ? 'I' : 'II'}</span>
                <h3 className="text-3xl font-serif mb-8 text-gray-800 group-hover:tracking-widest transition-all duration-700">{event.title}</h3>
                
                <div className="space-y-4 text-gray-600 font-light">
                  <p className="text-lg tracking-wide">{event.date}</p>
                  <p className="text-gold font-serif italic text-xl">{event.time}</p>
                  <div className="h-[1px] w-12 bg-gold/30 mx-auto my-4"></div>
                  <p className="font-normal text-gray-800 tracking-wide uppercase text-xs">{event.location}</p>
                  <p className="text-sm max-w-[240px] leading-relaxed opacity-70">{event.address}</p>
                </div>
                
                <div className="mt-12">
                  <a 
                    href={event.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.4em] text-gray-400 hover:text-gold transition-all border-b border-transparent hover:border-gold pb-1"
                  >
                    Petunjuk Lokasi
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

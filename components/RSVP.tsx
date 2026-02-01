
import React, { useState } from 'react';

export const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'hadir',
    guests: 1,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic for submission would go here
  };

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-2xl mx-auto border border-gold p-8 md:p-16 relative">
        {/* Corner Decorations */}
        <div className="absolute -top-1 -left-1 w-8 h-8 border-t border-l border-gold"></div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b border-r border-gold"></div>

        <h2 className="text-4xl font-serif text-center mb-4 text-gray-800">Konfirmasi Kehadiran</h2>
        <p className="text-center text-gray-500 mb-12 font-light">Mohon beri tahu kami apakah Anda dapat hadir sebelum 1 Oktober 2025.</p>
        
        {submitted ? (
          <div className="text-center py-12 animate-[fadeIn_1s]">
            <p className="text-2xl font-serif text-gold mb-4">Terima Kasih!</p>
            <p className="text-gray-600 font-light">Konfirmasi Anda telah kami terima.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-8 text-xs uppercase tracking-widest text-gray-400 hover:text-gold underline underline-offset-4"
            >
              Ubah Data
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 block">Nama Lengkap</label>
              <input 
                type="text" 
                required
                className="w-full border-b border-gray-200 py-2 focus:border-gold focus:outline-none transition-colors font-light text-gray-800"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest text-gray-500 block">Kehadiran</label>
              <div className="flex gap-8">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="attendance" 
                    value="hadir"
                    checked={formData.attendance === 'hadir'}
                    onChange={(e) => setFormData({...formData, attendance: e.target.value as any})}
                    className="accent-gold"
                  />
                  <span className="text-gray-600 font-light group-hover:text-gold transition-colors">Akan Hadir</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="attendance" 
                    value="tidak_hadir"
                    checked={formData.attendance === 'tidak_hadir'}
                    onChange={(e) => setFormData({...formData, attendance: e.target.value as any})}
                    className="accent-gold"
                  />
                  <span className="text-gray-600 font-light group-hover:text-gold transition-colors">Berhalangan</span>
                </label>
              </div>
            </div>

            {formData.attendance === 'hadir' && (
              <div className="space-y-2 animate-[fadeIn_0.5s]">
                <label className="text-xs uppercase tracking-widest text-gray-500 block">Jumlah Tamu</label>
                <select 
                  className="w-full border-b border-gray-200 py-2 focus:border-gold focus:outline-none transition-colors font-light text-gray-800 bg-transparent"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                >
                  <option value={1}>1 Orang</option>
                  <option value={2}>2 Orang</option>
                </select>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 block">Pesan Singkat</label>
              <textarea 
                rows={3}
                className="w-full border-b border-gray-200 py-2 focus:border-gold focus:outline-none transition-colors font-light text-gray-800 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tuliskan doa atau pesan Anda"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-gray-800 text-white text-xs uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500"
            >
              Kirim Konfirmasi
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

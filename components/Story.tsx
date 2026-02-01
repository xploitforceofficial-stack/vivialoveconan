
import React from 'react';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-32 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-28">
          <span className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4 block">Our Narrative</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-8 text-gray-800 tracking-tight">Menyulam Waktu, Menjemput Takdir</h2>
          <div className="h-[1px] w-32 bg-gold mx-auto opacity-30"></div>
        </div>
        
        <div className="space-y-32">
          {/* Chapter 1: The First Spark */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4 sticky top-32">
                <span className="text-xs tracking-[0.4em] uppercase text-gold font-medium">Moment I</span>
                <h3 className="text-3xl font-serif mt-2 text-gray-800">Gema di Kedalaman Hening</h3>
              </div>
              <div className="md:col-span-8 space-y-6 text-gray-600 leading-relaxed font-light text-lg">
                <p>
                  Pertemuan itu tidak terjadi di bawah sorotan lampu kota yang berkilauan, atau dalam keramaian yang memekakkan telinga. Ia hadir dalam sebuah ruang tenang yang jujur—sebuah seminar kecil tentang literatur dan kehidupan yang kami hadiri beberapa tahun silam. Vivia duduk di baris ketiga, tenggelam dalam catatannya, sementara Conan berada di sudut ruangan, mengamati bagaimana cahaya sore jatuh di atas meja kayu.
                </p>
                <p>
                  Tidak ada ledakan kembang api seketika. Yang ada hanyalah sebuah tarikan magnetis yang halus saat sesi diskusi dimulai. Kami berbicara tentang makna "pulang" dalam sebuah karya sastra, dan betapa terkejutnya kami saat menyadari bahwa definisi kami tentang kenyamanan hampir identik.
                </p>
                <p className="italic text-gray-500 border-l-2 border-gold/20 pl-6 py-2">
                  "Ada sesuatu dalam suaramu yang membuatku merasa tidak perlu lagi menjelaskan diri sendiri secara berlebihan. Untuk pertama kalinya, aku merasa dipahami sepenuhnya tanpa perlu banyak kata."
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 2: The Foundation */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4 md:order-2 sticky top-32 text-right">
                <span className="text-xs tracking-[0.4em] uppercase text-gold font-medium">Moment II</span>
                <h3 className="text-3xl font-serif mt-2 text-gray-800">Menyusun Bata Komitmen</h3>
              </div>
              <div className="md:col-span-8 md:order-1 space-y-6 text-gray-600 leading-relaxed font-light text-lg text-justify md:text-left">
                <p>
                  Bulan-bulan awal hubungan kami adalah tentang eksplorasi intelektual dan emosional. Kami menghabiskan jam-jam yang tak terhitung di kedai kopi kecil, bukan untuk membicarakan hal-hal romantis yang dangkal, melainkan untuk membedah mimpi, ketakutan, dan kegagalan masa lalu kami. 
                </p>
                <p>
                  Vivia mengajarkan Conan tentang ketenangan di tengah badai pekerjaan, sementara Conan memberikan Vivia ruang untuk menjadi rapuh saat dunia terasa terlalu menuntut. Kami menyadari bahwa cinta kami bukan tentang "menghilangkan" masalah satu sama lain, melainkan tentang memiliki rekan diskusi yang paling jujur saat masalah itu datang.
                </p>
                <p>
                  Kami melewati masa-masa di mana karier kami sedang diuji, saat jarak sempat memisahkan, dan saat keraguan manusiawi muncul. Namun, setiap kali badai itu reda, kami selalu mendapati diri kami berdiri di titik yang sama: saling menatap dengan keyakinan yang lebih kuat dari sebelumnya.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 3: The Growth */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4 sticky top-32">
                <span className="text-xs tracking-[0.4em] uppercase text-gold font-medium">Moment III</span>
                <h3 className="text-3xl font-serif mt-2 text-gray-800">Dewasa dalam Genggaman</h3>
              </div>
              <div className="md:col-span-8 space-y-6 text-gray-600 leading-relaxed font-light text-lg">
                <p>
                  Semakin lama kami berjalan, semakin kami memahami bahwa "romantis" versi kami telah bergeser. Ia bukan lagi sekadar buket bunga atau makan malam mewah, melainkan tentang Conan yang membawakan segelas air tanpa diminta saat Vivia bekerja lembur, atau Vivia yang tahu persis kapan Conan butuh waktu untuk menyendiri.
                </p>
                <p>
                  Kami belajar untuk berdebat dengan sehat. Belajar bahwa kata "maaf" dan "aku salah" adalah fondasi yang lebih kokoh daripada ego mana pun. Kedewasaan kami tumbuh di antara tawa-tawa kecil di pasar swalayan saat memilih bahan masakan, dan dalam diskusi serius tentang bagaimana kami ingin mendidik anak-anak kami kelak.
                </p>
                <p className="italic text-gray-500 border-l-2 border-gold/20 pl-6 py-2">
                  "Kita tidak pernah mencoba saling mengubah. Kita hanya menyediakan tanah yang subur agar masing-masing dari kita bisa tumbuh menjadi versi terbaiknya sendiri."
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 4: The Decision */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4 md:order-2 sticky top-32 text-right">
                <span className="text-xs tracking-[0.4em] uppercase text-gold font-medium">Moment IV</span>
                <h3 className="text-3xl font-serif mt-2 text-gray-800">Muara dari Segala Rindu</h3>
              </div>
              <div className="md:col-span-8 md:order-1 space-y-6 text-gray-600 leading-relaxed font-light text-lg">
                <p>
                  Keputusan untuk melangkah ke jenjang pernikahan datang seperti fajar—perlahan, pasti, dan membawa cahaya yang menenangkan. Tidak ada paksaan, tidak ada keraguan yang menyiksa. Suatu malam, di teras rumah yang sepi, kami hanya saling memandang dan tahu bahwa hidup kami sudah tidak lagi lengkap jika dijalani sendirian.
                </p>
                <p>
                  Conan meminta restu kepada orang tua Vivia dengan ketulusan yang menggetarkan, sementara Vivia menerima tanggung jawab untuk menjadi pendamping seumur hidup dengan penuh syukur. Kami sadar bahwa pernikahan bukan akhir dari perjalanan, melainkan awal dari pendakian yang lebih tinggi dan lebih indah.
                </p>
                <p>
                  Persiapan pernikahan ini pun kami jalani dengan filosofi yang sama: kesederhanaan yang berkelas. Kami ingin fokus pada esensi dari penyatuan dua jiwa, bukan sekadar perayaan yang megah namun hampa.
                </p>
              </div>
            </div>
          </div>

          {/* Final Chapter: The Invitation */}
          <div className="text-center py-20 bg-soft-gold/30 rounded-sm">
            <div className="max-w-2xl mx-auto space-y-8">
              <h3 className="text-4xl font-serif text-gray-800">Menuju Altar Janji</h3>
              <p className="text-gray-600 font-light text-xl leading-relaxed italic">
                "Hari ini, kami mengundang Anda untuk menjadi saksi dari babak paling sakral dalam hidup kami. Bukan hanya untuk melihat sebuah pesta, tapi untuk merasakan denyut tulus dari dua manusia yang memilih untuk setia."
              </p>
              <div className="h-[1px] w-16 bg-gold mx-auto opacity-40 my-8"></div>
              <p className="text-gray-500 font-light text-lg">
                Dari percakapan sederhana di sebuah seminar, hingga janji suci di hadapan Tuhan dan keluarga. Inilah kisah kami, Vivia dan Conan, yang akan kami jaga sampai akhir waktu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

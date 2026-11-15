import { BatikDivider, GoldBadge } from '../components/CulturalOrnament';
import ImageWithFallback from '../components/ImageWithFallback';
import GlassCard from '../components/GlassCard';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="w-full min-h-screen bg-transparent pt-24 pb-28 text-stone-900 dark:text-slate-100 transition-colors duration-500">
      {/* Header Banner */}
      <div className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mb-16 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2560&q=85"
            alt="Kepulauan Indonesia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfaf6] via-[#fcfaf6]/85 to-black/70 dark:from-[#070c18] dark:via-[#070c18]/85 dark:to-black/80 transition-colors duration-500" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <GoldBadge className="mb-4">
            Zamrud Khatulistiwa
          </GoldBadge>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-stone-900 dark:text-white tracking-tight mb-4 transition-colors">
            Kisah Agung <span className="text-gold-gradient">Nusantara</span>
          </h1>
          <BatikDivider className="my-2" />
          <p className="text-stone-700 dark:text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed transition-colors">
            Menelusuri ribuan tahun perjalanan peradaban maritim terbesar di dunia, perpaduan biodiversitas spektakuler garis Wallacea, dan jiwa persaudaraan Bhinneka Tunggal Ika.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* ========================================================
            1. THE STORY OF NUSANTARA: Epik Sejarah Bahari
        ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold block">
              Garis Waktu Peradaban
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 dark:text-white leading-tight transition-colors">
              Dari Kemaharajaan Maritim Hingga Republik Merdeka
            </h2>
            <p className="text-stone-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed transition-colors">
              Kepulauan Indonesia berdiri di atas persimpangan dua samudra raksasa: Samudra Hindia dan Samudra Pasifik. Sejak milenium pertama masehi, kemaharajaan bahari seperti Kedatuan Sriwijaya di Sumatera dan Kemaharajaan Majapahit di Jawa telah menguasai jalur perdagangan dunia, menghubungkan peradaban Tiongkok, India, Timur Tengah, dan Eropa.
            </p>
            <p className="text-stone-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed transition-colors">
              Sumpah Palapa yang diikrarkan Mahapatih Gajah Mada pada abad ke-14 menjadi embrio persatuan kepulauan Nusantara, yang kini mekar abadi dalam Negara Kesatuan Republik Indonesia dengan landasan Pancasila.
            </p>

            <GlassCard variant="gold" hover={false} className="p-6">
              <span className="font-serif italic text-lg text-amber-800 dark:text-amber-200 block mb-1">
                "Jalesveva Jayamahe"
              </span>
              <span className="text-xs text-stone-600 dark:text-slate-400">
                Di Lautan Kita Berjaya — motto maritim leluhur pelaut Nusantara penakluk ombak samudra.
              </span>
            </GlassCard>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl aspect-[4/3]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=1600&q=80"
                alt="Sejarah Nusantara"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block mb-1 font-cinzel">
                  Warisan Bahari Sriwijaya & Majapahit
                </span>
                <p className="text-xs text-slate-200">
                  Peradaban maritim yang membangun armada kapal Pinisi dan menguasai jalur rempah rempah dunia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. BIODIVERSITY & THE WALLACE LINE
        ======================================================== */}
        <GlassCard variant="subtle" hover={false} className="p-8 sm:p-14 rounded-3xl">
          <div className="max-w-3xl mb-12">
            <GoldBadge className="mb-2">
              Keajaiban Biosfer Dunia
            </GoldBadge>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white transition-colors">
              Garis Wallacea & Biodiversitas Mega
            </h2>
            <p className="text-stone-600 dark:text-slate-400 text-sm mt-2 transition-colors">
              Titik temu ekologis paling unik di muka bumi yang memisahkan fauna tipe Asia dan fauna tipe Australasia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard variant="card" className="p-6">
              <span className="font-serif text-2xl font-bold text-amber-800 dark:text-amber-300 block mb-2">
                Zona Asiatis (Sunda)
              </span>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 leading-relaxed mb-4">
                Meliputi Sumatera, Jawa, dan Kalimantan. Habitat alami gajah sumatera, harimau loreng, badak bercula satu, serta orangutan borneo di kanopi hutan primer.
              </p>
              <span className="text-[11px] text-stone-500 dark:text-slate-400 font-mono">Fauna Mamalia Besar</span>
            </GlassCard>

            <GlassCard variant="gold" className="p-6">
              <span className="font-serif text-2xl font-bold text-amber-800 dark:text-amber-300 block mb-2">
                Zona Peralihan (Wallacea)
              </span>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 leading-relaxed mb-4">
                Meliputi Sulawesi, Maluku, dan Nusa Tenggara. Rumah bagi naga komodo purba, anoa kerdil, babi rusa taring melingkar, dan burung maleo penimbun telur panas bumi.
              </p>
              <span className="text-[11px] text-amber-700 dark:text-amber-400 font-mono font-semibold">Endemisme Tertinggi</span>
            </GlassCard>

            <GlassCard variant="card" className="p-6">
              <span className="font-serif text-2xl font-bold text-amber-800 dark:text-amber-300 block mb-2">
                Zona Australis (Sahul)
              </span>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 leading-relaxed mb-4">
                Meliputi Tanah Papua dan kepulauan Aru. Dihuni burung cenderawasih berbulu emas, kangguru pohon mantel emas, burung kasuari, dan kuskus berbintik.
              </p>
              <span className="text-[11px] text-stone-500 dark:text-slate-400 font-mono">Marsupial & Avifauna Surga</span>
            </GlassCard>
          </div>
        </GlassCard>

        {/* ========================================================
            3. BHINNEKA TUNGGAL IKA: Semboyan Persatuan Bangsa
        ======================================================== */}
        <GlassCard
          variant="gold"
          hover={false}
          className="relative p-8 sm:p-14 rounded-3xl text-center"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold block">
              Prinsip Luhur Bangsa
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-black text-stone-900 dark:text-white transition-colors">
              Bhinneka Tunggal Ika
            </h2>
            <span className="font-serif italic text-xl text-amber-800 dark:text-amber-200 block">
              "Berbeda-beda Tetapi Tetap Satu Jua"
            </span>
            <BatikDivider className="my-2" />
            <p className="text-stone-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed transition-colors">
              Tertulis dalam Kakawin Sutasoma karya Mpu Tantular pada era Kerajaan Majapahit abad ke-14. Makna sejati persatuan ini bukan menyeragamkan perbedaan, melainkan merayakan keberagaman tradisi, bahasa, keyakinan, dan adat istiadat sebagai satu kesatuan simfoni kebangsaan yang indah.
            </p>

            <div className="pt-4">
              <Link
                to="/explore"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                <span>Jelajahi Keragaman 29 Kota</span>
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

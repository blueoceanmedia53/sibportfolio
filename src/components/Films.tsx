import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { FILMS } from '../constants';

export default function Films() {
  return (
    <section id="films" className="py-24 bg-black border-t border-[#222] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-16 border-b border-[#222] pb-6">
          <span className="block-header-text">CINEMATIC SHOWREELS</span>
          <span className="text-[10px] text-white/20 font-mono tracking-widest">[ 4K ULTRA HD ]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FILMS.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden border border-white/5 bg-dark-surface">
                {/* Thumbnail */}
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay UI */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-brand-red rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,46,46,0.3)] opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Play className="text-white fill-white ml-1" size={32} />
                  </motion.div>
                </div>

                {/* Progress Bar (Mechanical Feel) */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-red"
                    initial={{ width: 0 }}
                    whileInView={{ width: '30%' }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter group-hover:text-brand-red transition-colors">{film.title}</h3>
                  <p className="text-white/40 font-display uppercase tracking-widest text-xs mt-1">{film.subtitle}</p>
                </div>
                <div className="bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-mono text-white/50">
                  4K ULTRA HD
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 bg-brand-blue text-black font-display font-black uppercase tracking-widest overflow-hidden"
          >
            <span className="relative z-10 lg:text-lg">Explore All Projects</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

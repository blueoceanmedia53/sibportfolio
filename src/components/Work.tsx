import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Maximize2, X } from 'lucide-react';

const categories = ['All', 'Motorcycles', 'Motorsports', 'Commercial Shoots', 'Cinematic Frames'];

export default function Work() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <section id="work" className="bg-[#0f0f0f] border-t border-[#222]">
      <div className="max-w-7xl mx-auto border-x border-[#222]">
        <div className="px-12 py-16">
          <div className="flex justify-between items-center mb-10 border-b border-[#222] pb-6">
            <span className="block-header-text">FEATURED MOTORSPORTS WORK</span>
            <span className="text-[10px] text-white/20 font-mono tracking-widest">[ 01 — 06 ]</span>
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                  filter === cat ? 'bg-brand-red text-white' : 'text-white/40 border border-[#333] hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative group border border-[#222] bg-[#1a1a1a] p-2"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative aspect-square overflow-hidden cursor-pointer group-hover:border-brand-red/50 transition-colors">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="mt-4 flex justify-between items-center px-2 pb-2">
                    <h3 className="text-xs font-black tracking-widest uppercase truncate">{item.title}</h3>
                    <Maximize2 size={14} className="text-white/20 group-hover:text-brand-red" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={48} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain shadow-[0_0_50px_rgba(255,46,46,0.1)] transition-all"
                referrerPolicy="no-referrer"
              />
              <div className="mt-8 text-center">
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">{selectedImage.title}</h3>
                <p className="text-brand-red font-display uppercase tracking-widest mt-2">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

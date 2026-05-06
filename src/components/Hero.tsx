import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

const CINEMATIC_CLIPS = [
  {
    type: 'video',
    url: 'https://player.vimeo.com/external/370331493.sd.mp4?s=089e1864140026e7b579178385e054f050d5e55b&profile_id=139&oauth2_token_id=57447761', // Motorcycle track cornering
    poster: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070'
  },
  {
    type: 'video',
    url: 'https://player.vimeo.com/external/469493213.sd.mp4?s=e74d156540c49cf5516a22ef7a840e7939103e5c&profile_id=139&oauth2_token_id=57447761', // Close up mechanical
    poster: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=2070'
  },
  {
    type: 'video',
    url: 'https://player.vimeo.com/external/510850877.sd.mp4?s=d865d66095394338787f6f14a66a127394f7943a&profile_id=139&oauth2_token_id=57447761', // Off-road dirt drift
    poster: 'https://images.unsplash.com/photo-1544650039-2287f3747d95?q=80&w=2070'
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CINEMATIC_CLIPS.length);
    }, 2500); // 2.5s per "cut"
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-start px-12 md:px-24">
      {/* Top/Bottom Cinematic Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-red/20 z-20" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-red/20 z-20" />
      
      {/* Cinematic Background Transitions */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            animate={{ opacity: 0.4, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster={CINEMATIC_CLIPS[index].poster}
            >
              <source src={CINEMATIC_CLIPS[index].url} type="video/mp4" />
            </video>
          </motion.div>
        </AnimatePresence>

        {/* Rapid White Flash (Transition Effect) */}
        <motion.div
          key={`flash-${index}`}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-white mix-blend-overlay z-10 pointer-events-none"
        />

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,46,46,0.08),transparent_70%)] z-10" />
      </div>

      {/* Viewfinder Overlay */}
      <div className="absolute top-[180px] right-12 md:right-32 w-32 h-32 border border-brand-red/30 hidden lg:block">
        <div className="absolute -top-6 right-0 text-[10px] font-black text-brand-red tracking-widest">
          REC
        </div>
        <div className="absolute bottom-2 left-2 text-[8px] font-mono text-white/20">
          CH_01 [4K]
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-brand-red text-xs md:text-sm font-display font-black uppercase tracking-[6px] mb-2"
          >
            Director & Photographer
          </motion.p>
          
          <h1 className="text-[80px] md:text-[112px] font-black text-white text-glow-red max-w-3xl leading-[0.85]">
            DRIVEN <br />
            BY SPEED.
          </h1>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex items-center gap-8 group cursor-pointer"
        >
          <div className="relative">
            {/* Pulse Effect */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-brand-red rounded-full blur-xl"
            />
            
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="relative w-16 h-16 border border-brand-red rounded-full flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:bg-brand-red transition-all duration-500 overflow-hidden"
            >
              <Play 
                size={24} 
                className="text-brand-red fill-current group-hover:text-white group-hover:fill-white ml-1 transition-colors duration-500" 
              />
            </motion.div>
          </div>

          <div className="flex flex-col">
            <span className="text-brand-red text-[8px] font-black tracking-[4px] uppercase mb-1 opacity-60">SHOWREEL VERSION 4.0</span>
            <span className="text-sm md:text-base font-black tracking-[5px] uppercase text-white group-hover:text-brand-red group-hover:translate-x-2 transition-all duration-500 flex items-center gap-4">
              ENTER THE RACE
              <div className="w-8 h-[1px] bg-brand-red transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* VFX: Film Grain Overlay (Defined in index.css) */}
      <div className="film-grain" />
    </section>
  );
}

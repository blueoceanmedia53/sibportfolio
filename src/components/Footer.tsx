import { motion } from 'motion/react';
import { Instagram, Youtube, Video, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-64 bg-brand-red/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none"
          >
            LET’S CREATE SOMETHING <br />
            <span className="text-brand-red italic">FAST</span> & UNFORGETTABLE.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-8"
          >
            {[
              { icon: <Instagram size={24} />, label: 'Instagram' },
              { icon: <Youtube size={24} />, label: 'YouTube' },
              { icon: <Video size={24} />, label: 'Vimeo' },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="text-white/40 hover:text-white transition-colors flex flex-col items-center gap-2"
              >
                {social.icon}
                <span className="text-[10px] font-mono uppercase tracking-widest">{social.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="flex items-center gap-3">
            <span className="text-white font-display font-black text-xl tracking-tighter">SUHAIB</span>
            <div className="w-1.5 h-1.5 bg-brand-red rounded-full" />
            <span className="text-white/20 text-xs font-mono">© 2024 PORTFOLIO</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red transition-all">
              <ArrowUp size={16} />
            </div>
          </button>

          <div className="text-[10px] text-white/20 font-mono tracking-widest">
            DESIGNED BY SUHAIB VISUALS
          </div>
        </div>
      </div>
    </footer>
  );
}

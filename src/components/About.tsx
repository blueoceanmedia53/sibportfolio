import { motion } from 'motion/react';
import { ABOUT_PORTRAIT } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0f0f0f] border-t border-[#222] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Portrait Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pr-8 pb-8"
          >
            <div className="relative aspect-[3/4] overflow-hidden border border-[#333] shadow-2xl">
              <img
                src={ABOUT_PORTRAIT}
                alt="Suhaib Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Background Accent Element */}
            <div className="absolute -z-10 bottom-0 left-8 w-full h-[80%] border-t-2 border-l-2 border-brand-red/40" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-10 border-b border-[#333] pb-4">
              <span className="block-header-text">BIOGRAPHY</span>
              <span className="text-[8px] font-mono text-white/20">EST 2021</span>
            </div>
            
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-white/50 leading-tight font-light">
                Hey, I’m <span className="text-white font-black underline decoration-brand-red decoration-4">Suhaib</span> — a filmmaker driven by motorcycles, motorsports, and raw adventure.
              </p>
              
              <div className="space-y-4 text-sm text-white/40 leading-relaxed font-mono uppercase tracking-widest bg-black/40 p-6 border-l-2 border-brand-red">
                <p>
                  I capture moments that make your heart race and your soul feel alive. Whether I’m chasing bikes on a track or filming deep in the mountains, I’m always looking for the real — the unscripted, the emotional, the wild.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                {[
                  { val: '142+', label: 'Projects' },
                  { val: '12', label: 'Brands' },
                ].map((stat) => (
                  <div key={stat.label} className="border-t-2 border-brand-red pt-4">
                    <div className="text-3xl font-black text-white">{stat.val}</div>
                    <div className="text-[10px] text-[#666] uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

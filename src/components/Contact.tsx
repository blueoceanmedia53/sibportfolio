import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Youtube, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0f0f0f] border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-16 border-b border-[#222] pb-6">
          <span className="block-header-text">GET IN TOUCH</span>
          <span className="text-[10px] text-brand-red font-mono tracking-widest">ONLINE</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-12">
              LIT THE <span className="text-brand-orange">FUSE.</span>
            </h2>

            <div className="space-y-12">
              <div className="group">
                <p className="text-white/30 font-display uppercase tracking-widest text-xs mb-4 group-hover:text-brand-red transition-colors">
                  Direct Line
                </p>
                <div className="space-y-2">
                  <a href="tel:+919895898011" className="block text-2xl md:text-4xl font-black tracking-tighter hover:text-brand-red transition-colors">
                    +91 989 589 8011
                  </a>
                  <a href="tel:+971509468101" className="block text-2xl md:text-4xl font-black tracking-tighter hover:text-brand-red transition-colors text-white/50">
                    +971 509 468 101
                  </a>
                </div>
              </div>

              <div>
                <p className="text-white/30 font-display uppercase tracking-widest text-xs mb-4">
                  Digital Reach
                </p>
                <a href="mailto:sblwork21@gmail.com" className="text-2xl md:text-4xl font-black tracking-tighter hover:text-brand-red transition-colors flex items-center gap-4">
                  sblwork21@gmail.com
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                </a>
              </div>

              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-surface p-8 md:p-12 border border-white/5 relative"
          >
            {/* Form Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 blur-3xl rounded-full" />
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-brand-red outline-none transition-all text-white font-display"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-brand-red outline-none transition-all text-white font-display"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-brand-red outline-none transition-all text-white font-display"
                  placeholder="+91..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-white/40 tracking-widest">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-brand-red outline-none transition-all text-white font-display resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-brand-red text-white flex items-center justify-center gap-4 font-display font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(255,46,46,0.2)]"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

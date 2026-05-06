import { motion } from 'motion/react';
import { BRAND_LOGOS } from '../constants';

export default function Brands() {
  return (
    <section className="bg-black/60 backdrop-blur-xl border-y border-[#222] py-8 z-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap md:flex-nowrap justify-around items-center gap-12">
          {BRAND_LOGOS.map((brand) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0.2 }}
              whileInView={{ opacity: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="h-6 w-auto"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-full w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

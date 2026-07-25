import { PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center overflow-hidden px-5 md:px-16 py-12 lg:py-0">
      <div className="container max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-left flex flex-col items-start gap-6 order-2 lg:order-1"
        >
          <span className="text-[12px] font-semibold tracking-[0.4em] text-secondary uppercase">Ancestral Wisdom</span>
          <h1 className="font-serif text-[36px] md:text-[48px] leading-[1.2] md:leading-[1.1] tracking-[-0.02em] text-primary max-w-xl">
            Drug-free, science-backed scalp therapy
          </h1>
          <p className="text-[18px] leading-[1.6] text-on-surface-variant max-w-lg">
            Experience the clinical potency of botanical concentrates. A meticulous fusion of Rosemary, Black Seed Oil, and proprietary herbal elixirs designed to revitalize from the root.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <button className="px-10 py-4 bg-primary text-white text-[12px] font-semibold rounded-full hover:bg-secondary transition-all active:scale-95 shadow-lg shadow-primary/10 uppercase tracking-widest">
              Discover the Collection
            </button>
            <button className="px-10 py-4 border border-primary/20 text-primary text-[12px] font-semibold rounded-full hover:bg-surface-container transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-widest">
              <PlayCircle className="w-[18px] h-[18px]" strokeWidth={1.5} />
              The Science
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative order-1 lg:order-2 flex justify-center items-center"
        >
          <div className="absolute -z-10 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
          <div className="relative w-full max-w-[500px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover" 
              src="/hero-video.mp4" 
            />
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-outline">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase opacity-60">Scroll</span>
        <div className="w-[1px] h-12 bg-outline/20 relative overflow-hidden">
          <motion.div 
            animate={{ top: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute left-0 w-full h-full bg-primary origin-top"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}

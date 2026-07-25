import { FlaskConical, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export function ValueProp() {
  return (
    <section className="bg-surface-container-lowest py-[120px] px-5 md:px-16">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-8"
        >
          <div className="space-y-4">
            <h2 className="font-serif text-[32px] leading-[1.3] text-primary">The Apothecary Standard.</h2>
            <p className="text-[16px] leading-[1.6] text-on-surface-variant">
              Our formula isn't built in a boardroom. It’s extracted through precision-controlled processes that preserve the volatile compounds of nature's most potent hair-restorative botanicals.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-5 p-6 border border-outline/10 bg-surface rounded-xl hover:border-secondary/30 transition-all group">
              <div className="text-secondary bg-secondary/5 w-14 h-14 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[12px] font-semibold text-primary mb-1 uppercase tracking-wider">Cold-Pressed Black Seed</h4>
                <p className="text-on-surface-variant text-[14px] leading-[1.4] font-medium">Rich in thymoquinone to soothe inflammation and provide essential fatty acids to the follicle base.</p>
              </div>
            </div>
            
            <div className="flex gap-5 p-6 border border-outline/10 bg-surface rounded-xl hover:border-secondary/30 transition-all group">
              <div className="text-secondary bg-secondary/5 w-14 h-14 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <FlaskConical className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[12px] font-semibold text-primary mb-1 uppercase tracking-wider">Steam-Distilled Rosemary</h4>
                <p className="text-on-surface-variant text-[14px] leading-[1.4] font-medium">Clinically observed to stimulate micro-circulation as effectively as 2% Minoxidil, without the chemical side effects.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 grid grid-cols-2 gap-6 mt-12 lg:mt-0"
        >
          <div 
            className="rounded-3xl overflow-hidden aspect-[4/5] bg-surface-container mt-12 shadow-xl" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBm4CaVvjePQ14AQsXbNhUpW05bQz7fc4-bLYnJlKgoj-ZUlWzDPbIz1MjY1nPBrQBJXbOfj93m2JbSCb_c7UUhbFuXA_muzLht1_VnSvni6M_KDyITI-BTJqBuk3XNIs5g_K2iLG8nGzuEUJKnqHIXE9jqi8MIkGQVty6EO3IgjZFsK-F4bLVJ9Q8MPp8KgVCMjeS2zXwnmzILCTciADBi9Hz1yawi0X4PeVIL-xrCKbx5UN_-1AEk0A')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
          <div 
            className="rounded-3xl overflow-hidden aspect-[4/5] bg-surface-container shadow-xl" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBwOmKGu5oPD3VyqwHivYABgl7sRp2l7Fq-gE1ueXVlW3agIJtMHkQByaEZuM7Me5OyMVYBPD5rEbI5am_UEtGwV3LkolA9OpOVS4iCbQU5Gs4YZM5ECKrnUEe-tJyz-6GeUnoYR9dOkhtWzF5XXUT7J-145sDEBnmnlQVzJ-B022jdBC3tPcUPOT1ldA-HNAtphitrWKx84s6crPExFFD2AR8EkkwW9NmfUE4cP3rUvWQdnmFzszVGw')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
}

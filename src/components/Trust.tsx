import { Award, FlaskConical, Rabbit, Recycle } from 'lucide-react';
import { motion } from 'motion/react';

export function Trust() {
  return (
    <section className="py-[120px] px-5 md:px-16">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 lg:col-span-3 bg-primary text-white p-12 rounded-[40px] flex flex-col justify-between shadow-2xl"
          >
            <div className="space-y-6">
              <span className="text-[12px] font-semibold text-secondary-fixed uppercase tracking-widest">Our Genesis</span>
              <h3 className="font-serif text-3xl lg:text-4xl leading-tight italic">"We combined ancestral folklore with laboratory rigor to fix what modern chemicals failed to address."</h3>
            </div>
            <div className="mt-16 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-surface/10 border border-white/10 overflow-hidden">
                <img 
                  alt="Dr. Elara Thorne" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUwLyq9tixWtOJzMKXvViVYOJi9Ln5sOKmOV1HyR44cYcr_2HmeEfk6un6J9mFFd6DY068inAP5FRPqakOzu12PcaMYKKA7qXGQPXjEHwTv1KG22sCeoNpoesTNhRTp2RhU2-IiAU8euM81_bry_dJ1JHLLNoqQVxUe1JU8UpXhp1TCz2P9woYrQklsUALP0gPB1XuU_T1olUwIzLy6XQ-QOfUyLTVzpGr_j3erBotNWPBudp1hi944A" 
                />
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-wider font-bold">Dr. Elara Thorne</p>
                <p className="text-[14px] font-medium text-on-primary-container/70">Founder &amp; Lead Scientist</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 lg:col-span-3 bg-secondary-container/10 p-10 rounded-[40px] flex flex-col items-center justify-center text-center gap-6 border border-secondary/20 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-20 h-20 rounded-full bg-secondary/5 flex items-center justify-center">
              <Award className="w-12 h-12 text-secondary" strokeWidth={1} />
            </div>
            <h4 className="text-[12px] text-primary uppercase tracking-widest font-bold">Certified Ethical Apothecary</h4>
            <p className="text-[16px] leading-[1.6] text-on-surface-variant max-w-sm">Our facility operates at zero-waste standards, sourcing ingredients exclusively from regenerative farms.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 bg-surface p-8 rounded-[40px] border border-outline/10 flex flex-col gap-5 hover:bg-surface-container-low transition-colors"
          >
            <Rabbit className="text-secondary w-10 h-10" strokeWidth={1.5} />
            <div>
              <h5 className="text-[12px] text-primary uppercase tracking-wider font-bold mb-2">100% Cruelty Free</h5>
              <p className="text-[14px] font-medium text-on-surface-variant leading-relaxed">Never tested on animals. Ethically derived botanical compounds only.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 lg:col-span-2 bg-surface p-8 rounded-[40px] border border-outline/10 flex flex-col gap-5 hover:bg-surface-container-low transition-colors"
          >
            <FlaskConical className="text-secondary w-10 h-10" strokeWidth={1.5} />
            <div>
              <h5 className="text-[12px] text-primary uppercase tracking-wider font-bold mb-2">Lab Verified</h5>
              <p className="text-[14px] font-medium text-on-surface-variant leading-relaxed">Every batch is GC/MS tested for purity and potency in independent labs.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 lg:col-span-2 bg-surface p-8 rounded-[40px] border border-outline/10 flex flex-col gap-5 hover:bg-surface-container-low transition-colors"
          >
            <Recycle className="text-secondary w-10 h-10" strokeWidth={1.5} />
            <div>
              <h5 className="text-[12px] text-primary uppercase tracking-wider font-bold mb-2">Infinite Glass</h5>
              <p className="text-[14px] font-medium text-on-surface-variant leading-relaxed">Our violet glass bottles are 100% recyclable and infinitely reusable.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

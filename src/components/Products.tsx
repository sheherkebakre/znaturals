import { ClipboardCheck, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export function Products() {
  const products = [
    {
      name: 'Follicle Focus 2.0',
      subtitle: 'The Hero Scalp Elixir',
      desc: 'A concentrated blend of cold-pressed botanicals designed for deep follicular activation.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnmgfvnkaNjOEjtIoJcB1AJfUaZr58C1JljVt2m2X9sViPhmd447haGLtdTWAk13MWiq5UTAfxFjQ3NiLCKuuZT-xFIzXKI3iPjBR6nfTEW7ScrKZqT-Yp6meucl7joE0mMraUqeadrMblsGVNkU4lXWFPhUgEktsvZECW9jChBGFCxdiBWMP-PHjM8R0rgVVy34ZKmGK_iypH2JwXOAFOyJhjersExueyDxrmj3PNXlds5WiAV3zAdFhV2pjh8NosdCU',
      action: 'View Details'
    },
    {
      name: 'Nourishing Pre-Wash',
      subtitle: 'Detoxifying Treatment',
      desc: 'Removes scalp buildup and oxidative stress before your cleansing ritual begins.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMKL81fcbflTvS908S5NLOH59KG_pSZL3jUEBmUC2Xl0HS1N6H3ReLo-hWXmiMqQrEo9FiX0gaLT0DKF7pJccrWM0CokwYrKuqG3IHOISIZz0Qpwv50oE2jWn-E1lf_Hgnis9VoTMygHasRxZJPtossTn26EQ3fVQq81lrGlaWK8YOB2FeQmkP838q8X1hXVPfBCiL2lir6bm24SJiIlVpzGC8fKBpolgOvNyQ7wnpwzmIt1fJgZbD47E6g7EZ6pUXQgM',
      action: 'Discover More'
    },
    {
      name: 'Scalp Mist',
      subtitle: 'Hydration & Balance',
      desc: 'A weightless, aqueous infusion for daily microbiome support and instant freshness.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6DO3vvVVpeuvVXTbM4N4-G8nqVAbYzuMBYkSO-xUm3iUEremZAw_ZXYYzNBtcqn2JJuHdyU71dHa86ZXhsziG6zLSRnufRYDbi5OPH6zvnwW3OUSKPUV41QE8QScTVJ-QBsyxW4VyzEgQQgfgt283EsvodWSKQgmpZuoA2gwxESK7MZgC-zDxm9WUtfYtXxMpHx2mCQZWKyeg62RDJd4YSKd2M57mK4YkQ0x14o-KmpE02GPBBBrXu8avo8iKkJpzwZs',
      action: 'View Details'
    }
  ];

  return (
    <section className="py-[120px] px-5 md:px-16 bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[12px] font-semibold text-secondary mb-3 block uppercase tracking-widest">The Curated Collection</span>
          <h2 className="font-serif text-[32px] leading-[1.3] text-primary">Signature Treatments</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container p-4">
                <img 
                  alt={product.name} 
                  className="w-full h-full object-cover rounded-[30px] transform transition-transform duration-700 group-hover:scale-105" 
                  src={product.image} 
                />
              </div>
              <div className="p-8 flex flex-col items-center text-center flex-grow">
                <h3 className="font-serif text-[24px] leading-[1.4] text-primary mb-2">{product.name}</h3>
                <p className="text-[14px] leading-[1.4] font-medium text-on-surface-variant mb-6 uppercase tracking-wider">{product.subtitle}</p>
                <p className="text-[16px] leading-[1.6] text-on-surface-variant mb-8 flex-grow">{product.desc}</p>
                <button className="w-full py-4 border border-primary/10 text-primary text-[12px] font-semibold rounded-full hover:bg-primary hover:text-white transition-all uppercase tracking-widest active:scale-95">
                  {product.action}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-16 mt-16 border-t border-outline/10 text-center">
          <div className="flex flex-col items-center gap-2">
            <Truck className="text-secondary w-8 h-8" strokeWidth={1.5} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Fast Shipping</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="text-secondary w-8 h-8" strokeWidth={1.5} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Pure Sourced</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ClipboardCheck className="text-secondary w-8 h-8" strokeWidth={1.5} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Tested Batch</span>
          </div>
        </div>
      </div>
    </section>
  );
}

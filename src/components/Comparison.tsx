import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Comparison() {
  const benefits = [
    { name: 'Drug-Free Formula', zarrah: true, chemical: false },
    { name: 'Clinical Efficacy', zarrah: true, chemical: true },
    { name: 'Scalp Nourishment', zarrah: true, chemical: false },
    { name: 'No \'Shedding\' Phase', zarrah: true, chemical: false },
    { name: 'Sustainable Sourcing', zarrah: true, chemical: false },
  ];

  return (
    <section className="py-[120px] px-5 md:px-16 bg-surface">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-container-max mx-auto text-center mb-16"
      >
        <span className="text-[12px] font-semibold text-secondary tracking-widest uppercase mb-4 block">The Clinical Distinction</span>
        <h2 className="font-serif text-[32px] leading-[1.3] text-primary mb-4">Zarrah Botanical vs Minoxidil</h2>
        <p className="text-[16px] leading-[1.6] text-on-surface-variant max-w-2xl mx-auto">The choice for those who prioritize long-term scalp health without compromising on clinical results.</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-outline/10 bg-white shadow-xl"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-8 text-[12px] font-semibold uppercase tracking-widest">Benefit</th>
                <th className="p-8 text-[12px] font-semibold text-center bg-primary-container uppercase tracking-widest">Zarrah Elixir</th>
                <th className="p-8 text-[12px] font-semibold text-center uppercase tracking-widest opacity-80">Chemicals</th>
              </tr>
            </thead>
            <tbody className="text-[16px] leading-[1.6] divide-y divide-outline/5">
              {benefits.map((item, idx) => (
                <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                  <td className="p-8 font-medium text-primary">{item.name}</td>
                  <td className="p-8 text-center text-secondary bg-primary-container/5">
                    {item.zarrah ? <CheckCircle2 className="inline w-6 h-6 fill-secondary text-white" /> : <XCircle className="inline w-6 h-6 text-on-surface-variant/30" />}
                  </td>
                  <td className="p-8 text-center">
                    {item.chemical ? <CheckCircle2 className="inline w-6 h-6 text-secondary/60 fill-secondary/60 text-white" /> : <XCircle className="inline w-6 h-6 text-on-surface-variant/30" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}

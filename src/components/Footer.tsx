import { AtSign, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full mt-[120px] bg-primary text-white border-t border-white/5 pb-20 md:pb-0">
      <div className="max-w-container-max mx-auto px-5 md:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-primary font-serif text-2xl shrink-0">
                Z
              </div>
              <span className="font-serif text-[22px] tracking-widest uppercase">Zarrah Naturals</span>
            </div>
            <p className="max-w-sm text-white/70 text-[16px] leading-[1.6] mb-10">
              The intersection of clinical science and ancestral botanical knowledge. Dedicated to long-term scalp health and restorative therapy.
            </p>
            <div className="flex gap-4">
              <a className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary transition-all" href="#">
                <Globe className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary transition-all" href="#">
                <AtSign className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-5">
            <h6 className="text-[12px] font-bold text-secondary-fixed uppercase tracking-widest mb-2">Explore</h6>
            <a className="text-white/60 hover:text-white transition-colors" href="#">Home</a>
            <a className="text-white/60 hover:text-white transition-colors" href="#">Shop</a>
            <a className="text-white/60 hover:text-white transition-colors" href="#">Science</a>
            <a className="text-white/60 hover:text-white transition-colors" href="#">FAQ</a>
          </div>
          
          <div className="flex flex-col gap-5">
            <h6 className="text-[12px] font-bold text-secondary-fixed uppercase tracking-widest mb-2">Legal</h6>
            <a className="text-white/60 hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="text-white/60 hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="text-white/60 hover:text-white transition-colors" href="#">Shipping Policy</a>
            <a className="text-white/60 hover:text-white transition-colors" href="#">Returns &amp; Refunds</a>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] font-medium text-white/30">
          <p>© 2024 Zarrah Botanical Elixir. All rights reserved.</p>
          <div className="flex items-center gap-6 uppercase tracking-widest text-[10px]">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" strokeWidth={1.5} />
              <span>English (US)</span>
            </div>
            <span>Secured Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

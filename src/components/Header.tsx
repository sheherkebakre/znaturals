import { Menu, ShoppingBag } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-outline/10 bg-surface/90 backdrop-blur-md">
      <div className="flex items-center justify-between h-16 px-4 md:px-16 max-w-container-max mx-auto w-full relative">
        
        {/* Left: Menu & Logo */}
        <div className="flex items-center gap-2 md:gap-4 z-10 w-1/4">
          <button className="text-primary active:opacity-70 transition-opacity p-2 md:hidden -ml-2">
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white font-serif text-lg md:text-xl shrink-0">
            Z
          </div>
        </div>

        {/* Center: Brand Name */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-max">
          <span className="font-serif text-[15px] sm:text-[18px] md:text-[20px] text-primary tracking-[0.2em] sm:tracking-widest uppercase text-center whitespace-nowrap">
            Zarrah Naturals
          </span>
        </div>

        {/* Right: Nav & Cart */}
        <div className="flex items-center justify-end gap-6 z-10 w-1/4">
          <nav className="hidden md:flex gap-8">
            <a className="text-[12px] text-primary font-bold transition-colors hover:text-secondary uppercase tracking-widest" href="#">Home</a>
            <a className="text-[12px] text-on-surface-variant/70 transition-colors hover:text-secondary uppercase tracking-widest" href="#">Shop</a>
            <a className="text-[12px] text-on-surface-variant/70 transition-colors hover:text-secondary uppercase tracking-widest" href="#">Science</a>
          </nav>
          <button className="text-primary active:opacity-70 transition-opacity p-2 relative -mr-2 md:mr-0">
            <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full"></span>
          </button>
        </div>
        
      </div>
    </header>
  );
}

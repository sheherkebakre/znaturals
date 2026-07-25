import { HelpCircle, Home, ShoppingBag, TestTube } from 'lucide-react';

export function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center py-4 px-2 bg-surface/95 backdrop-blur-lg border-t border-outline/10 z-50 shadow-[0_-4px_12px_rgba(6,27,14,0.1)]">
      <a className="flex flex-col items-center justify-center text-primary" href="#">
        <Home className="w-6 h-6" strokeWidth={1.5} />
        <span className="text-[9px] font-bold uppercase tracking-tighter mt-1">Home</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant/70" href="#">
        <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
        <span className="text-[9px] font-bold uppercase tracking-tighter mt-1">Shop</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant/70" href="#">
        <TestTube className="w-6 h-6" strokeWidth={1.5} />
        <span className="text-[9px] font-bold uppercase tracking-tighter mt-1">Science</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant/70" href="#">
        <HelpCircle className="w-6 h-6" strokeWidth={1.5} />
        <span className="text-[9px] font-bold uppercase tracking-tighter mt-1">FAQ</span>
      </a>
    </nav>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BottomNav } from './components/BottomNav';
import { Comparison } from './components/Comparison';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Trust } from './components/Trust';
import { ValueProp } from './components/ValueProp';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-16 flex-grow">
        <Hero />
        <ValueProp />
        <Comparison />
        <Products />
        <Trust />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

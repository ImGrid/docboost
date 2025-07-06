import './index.css';
import { lazy, Suspense } from 'react';

// ✅ CRITICAL: Solo Header y Hero cargan inmediatamente (above-the-fold)
import Header from './components/common/Header';
import Hero from './sections/Hero';

// ✅ LAZY: Below-the-fold sections (user no las ve inicialmente)
const Services = lazy(() => import('./sections/Services'));
const Pricing = lazy(() => import('./sections/Pricing'));
const WhyChooseUs = lazy(() => import('./sections/WhyChooseUs'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./components/common/Footer'));

// ✅ LOADING: Simple skeleton mientras carga (solo cuando sea necesario)
const SectionSkeleton = () => (
  <div className="py-20 bg-gray-50">
    <div className="px-4 mx-auto max-w-7xl">
      <div className="animate-pulse">
        <div className="w-1/3 h-8 mx-auto mb-4 bg-gray-200 rounded"></div>
        <div className="w-1/2 h-4 mx-auto mb-8 bg-gray-200 rounded"></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      {/* ✅ CRITICAL: Above-the-fold content carga inmediatamente */}
      <Header />
      
      <main>
        {/* ✅ CRITICAL: Hero visible inmediatamente */}
        <Hero />
        
        {/* ✅ LAZY: Below-the-fold sections con Suspense */}
        <Suspense fallback={<SectionSkeleton />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Pricing />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <WhyChooseUs />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      
      {/* ✅ LAZY: Footer al final */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
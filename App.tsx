import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Gallery from './components/Gallery';
import QuoteForm from './components/QuoteForm';
import Info from './components/Info';
import Location from './components/Location';
import Faq from './components/Faq';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

// Sem lazy(): a página é pré-renderizada no build e os componentes são pequenos;
// dividir em chunks só criaria uma cadeia de requisições.
function App() {
  return (
    <div className="bg-white text-text-gray font-lato">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Gallery />
        <QuoteForm />
        <Info />
        <Location />
        <Faq />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default App;

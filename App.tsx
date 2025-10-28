import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Keywords from './components/Keywords';
import About from './components/About';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

// O link de WhatsApp está bem formatado com a URL codificada.
const WHATSAPP_LINK = "https://wa.me/556294808438?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento.";

function App() {
  return (
    // CORREÇÃO: Altere 'text-text-gray' para uma classe válida do Tailwind, como 'text-gray-800'.
    <div className="bg-white text-gray-800 font-lato"> 
      <Header whatsappLink={WHATSAPP_LINK} />
      <main>
        <Hero whatsappLink={WHATSAPP_LINK} />
        <Keywords />
        <About />
        <Gallery />
        <Info />
        <Location />
      </main>
      <Footer />
      <WhatsappButton whatsappLink={WHATSAPP_LINK} />
    </div>
  );
}

export default App;

/*
   Lembrete: Para que o roteamento funcione no GitHub Pages,
   certifique-se de que o componente BrowserRouter no seu 
   arquivo principal (ex: main.jsx) use o basename:
   
   <BrowserRouter basename="/manancial_mangueiras">
       <App />
   </BrowserRouter>
*/

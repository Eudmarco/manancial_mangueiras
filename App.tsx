import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatsappButton from './components/WhatsappButton';

// Lazy load components that are below the fold
const Keywords = lazy(() => import('./components/Keywords'));
const About = lazy(() => import('./components/About'));
const Gallery = lazy(() => import('./components/Gallery'));
const Info = lazy(() => import('./components/Info'));
const Location = lazy(() => import('./components/Location'));
const Footer = lazy(() => import('./components/Footer'));


const WHATSAPP_LINK = "https://wa.me/556232982131?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento.";

function App() {
  return (
    <>
      <title>Mangueiras e Conexões para Indústria, Agronegócio e Química | Manancial - Goiânia/GO</title>
      <meta 
        name="description" 
        content="Soluções completas em mangueiras e conexões para os setores industrial, agrícola, farmacêutico e químico em Goiânia. Qualidade, durabilidade e atendimento especializado para garantir o desempenho e a segurança de seus equipamentos." 
      />
      <div className="bg-white text-text-gray font-lato">
        <Header whatsappLink={WHATSAPP_LINK} />
        <main>
          <Hero whatsappLink={WHATSAPP_LINK} />
          <Suspense fallback={null}>
            <Keywords />
            <About />
            <Gallery />
            <Info />
            <Location />
            <Footer />
          </Suspense>
        </main>
        <WhatsappButton whatsappLink={WHATSAPP_LINK} />
      </div>
    </>
  );
}

export default App;

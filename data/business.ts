// Fonte única dos dados da empresa: alimenta os componentes, o JSON-LD, o llms.txt e as ferramentas WebMCP.
// Ao mudar telefone, endereço ou horário, altere somente aqui.

export const SITE_URL = 'https://manancialmangueirasgo.com.br/';

const WHATSAPP_NUMBER = '556232982131';

export const BUSINESS = {
    name: 'Manancial Mangueiras e Conexões',
    shortName: 'Manancial',
    description:
        'Comércio atacadista e varejista de mangueiras, conexões, engates, válvulas e componentes hidráulicos e pneumáticos para os setores industrial, agrícola, químico, farmacêutico e automotivo em Goiânia/GO.',
    phoneDisplay: '(62) 3298-2131',
    phoneE164: '+556232982131',
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de um orçamento.')}`,
    address: {
        street: 'Rua Anchieta, 17',
        neighborhood: 'Rodoviário',
        city: 'Goiânia',
        state: 'GO',
        postalCode: '74430-040',
        country: 'BR',
    },
    geo: { lat: -16.6736363, lng: -49.3082181 },
    hours: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
        weekdaysText: 'Segunda a sexta, das 08:00 às 18:00',
        weekendText: 'Sábado e domingo: fechado',
    },
    payments: ['Cartão de crédito', 'Cartão de débito', 'Dinheiro', 'Boleto', 'PIX'],
    segments: ['Industrial', 'Agrícola', 'Químico', 'Farmacêutico', 'Automotivo'],
    // TODO(confirmar): ampliar se a empresa atende/entrega em outras cidades de Goiás.
    areaServed: ['Goiânia', 'Região Metropolitana de Goiânia'],
    social: {
        instagram: 'https://www.instagram.com/manancialmangueirasgyn',
        facebook: 'https://www.facebook.com/profile.php?id=100092676146446',
    },
    // TODO(confirmar): link do Perfil da Empresa no Google (g.page / maps.app.goo.gl), e-mail e ano de fundação.
    // Quando confirmados, incluir em `sameAs`/`email`/`foundingDate` em seo.ts.
};

export const ADDRESS_LINE = `${BUSINESS.address.street} - ${BUSINESS.address.neighborhood}, ${BUSINESS.address.city}/${BUSINESS.address.state}, CEP ${BUSINESS.address.postalCode}`;

export const MAPS = {
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${BUSINESS.geo.lat},${BUSINESS.geo.lng}`,
    wazeUrl: `https://waze.com/ul?ll=${BUSINESS.geo.lat},${BUSINESS.geo.lng}&navigate=yes`,
    embedUrl: `https://maps.google.com/maps?q=${BUSINESS.geo.lat},${BUSINESS.geo.lng}&t=&z=18&ie=UTF8&iwloc=&output=embed`,
};

export const whatsappLinkWith = (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export interface Product {
    name: string;
    description: string;
}

export const PRODUCTS: Product[] = [
    {
        name: 'Mangueiras hidráulicas de alta pressão',
        description: 'Para retroescavadeiras, tratores, prensas e máquinas pesadas que trabalham com óleo hidráulico sob alta pressão.',
    },
    {
        name: 'Conexões hidráulicas e de alta pressão',
        description: 'Terminais, adaptadores, engates e niples para montar e manter circuitos hidráulicos com segurança.',
    },
    {
        name: 'Mangueiras e conexões pneumáticas',
        description: 'Linhas de ar comprimido para ferramentas, compressores e automação industrial.',
    },
    {
        name: 'Mangueiras para o agronegócio e pulverização agrícola',
        description: 'Mangueiras para pulverizadores, implementos e sistemas de irrigação no campo.',
    },
    {
        name: 'Tubulação para indústria química',
        description: 'Mangueiras e conexões para transferência de produtos químicos, com materiais compatíveis com cada fluido.',
    },
    {
        name: 'Conexões sanitárias farmacêuticas',
        description: 'Componentes para linhas de processo que exigem higiene, como as indústrias farmacêutica e alimentícia.',
    },
    {
        name: 'Flexível inox para alta temperatura',
        description: 'Flexíveis metálicos para vapor, fluidos quentes e aplicações sujeitas a vibração.',
    },
    {
        name: 'Sistemas de transferência de fluidos',
        description: 'Válvulas, engates rápidos e acessórios para baixa, média e alta pressão.',
    },
    {
        name: 'Correias industriais',
        description: 'Correias para transmissão de potência em máquinas industriais e agrícolas.',
    },
];

export interface FaqItem {
    question: string;
    answer: string;
}

// Somente fatos já publicados no site. Perguntas que dependem de confirmação estão em FAQ_PENDENTES.
export const FAQ: FaqItem[] = [
    {
        question: 'Onde fica a Manancial Mangueiras e Conexões?',
        answer: `Na ${ADDRESS_LINE}. Há links para o Google Maps e o Waze na seção Localização.`,
    },
    {
        question: 'Qual o horário de atendimento?',
        answer: `${BUSINESS.hours.weekdaysText}. ${BUSINESS.hours.weekendText}.`,
    },
    {
        question: 'Como solicitar um orçamento?',
        answer: `Pelo WhatsApp ${BUSINESS.phoneDisplay} ou pelo formulário de orçamento desta página, que já monta a mensagem com o produto, a medida e a quantidade.`,
    },
    {
        question: 'Quais formas de pagamento são aceitas?',
        answer: `${BUSINESS.payments.join(', ')}.`,
    },
    {
        question: 'Quais setores a Manancial atende?',
        answer: 'Os setores industrial, agrícola, químico, farmacêutico e automotivo, com mangueiras, conexões, engates, válvulas e componentes hidráulicos e pneumáticos.',
    },
    {
        question: 'A Manancial vende no atacado e no varejo?',
        answer: 'Sim. A Manancial faz comercialização atacadista e varejista de produtos hidráulicos e pneumáticos.',
    },
    {
        question: 'Vocês têm produtos para baixa, média e alta pressão?',
        answer: 'Sim. Trabalhamos com mangueiras, conexões, engates, válvulas e componentes projetados para baixa, média e alta pressão.',
    },
];

// TODO(confirmar com o cliente antes de publicar; depois mover para FAQ):
// - Vocês montam/prensam mangueiras hidráulicas sob medida? Na hora?
// - Fazem entrega? Para quais cidades?
// - Quais marcas vocês trabalham?
// - Atendem empresas de outras cidades de Goiás?

// Gera os artefatos de SEO/IA no build (chamado por scripts/prerender.mjs via entry-server.tsx).
import { BUSINESS, SITE_URL, ADDRESS_LINE, MAPS, PRODUCTS, FAQ } from './data/business';

const ORG_ID = `${SITE_URL}#empresa`;

export const buildJsonLd = () => ({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': ['HardwareStore', 'LocalBusiness'],
            '@id': ORG_ID,
            name: BUSINESS.name,
            description: BUSINESS.description,
            url: SITE_URL,
            logo: `${SITE_URL}img/logo-512.png`,
            image: [`${SITE_URL}img/og.jpg`, `${SITE_URL}img/estoque-mangueiras-800.webp`],
            telephone: BUSINESS.phoneE164,
            address: {
                '@type': 'PostalAddress',
                streetAddress: BUSINESS.address.street,
                addressLocality: BUSINESS.address.city,
                addressRegion: BUSINESS.address.state,
                postalCode: BUSINESS.address.postalCode,
                addressCountry: BUSINESS.address.country,
            },
            geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
            hasMap: MAPS.googleMapsUrl,
            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: BUSINESS.hours.days,
                    opens: BUSINESS.hours.opens,
                    closes: BUSINESS.hours.closes,
                },
            ],
            areaServed: BUSINESS.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
            paymentAccepted: BUSINESS.payments.join(', '),
            currenciesAccepted: 'BRL',
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: BUSINESS.phoneE164,
                contactType: 'sales',
                areaServed: 'BR',
                availableLanguage: 'Portuguese',
                url: BUSINESS.whatsappLink,
            },
            sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
            knowsAbout: PRODUCTS.map((p) => p.name),
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Mangueiras, conexões e componentes hidráulicos e pneumáticos',
                itemListElement: PRODUCTS.map((p) => ({
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Product', name: p.name, description: p.description },
                })),
            },
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}#site`,
            url: SITE_URL,
            name: BUSINESS.name,
            inLanguage: 'pt-BR',
            publisher: { '@id': ORG_ID },
        },
        {
            '@type': 'WebPage',
            '@id': `${SITE_URL}#pagina`,
            url: SITE_URL,
            name: 'Mangueiras e Conexões para Indústria, Agronegócio e Química | Manancial - Goiânia/GO',
            isPartOf: { '@id': `${SITE_URL}#site` },
            about: { '@id': ORG_ID },
            inLanguage: 'pt-BR',
        },
        {
            '@type': 'FAQPage',
            '@id': `${SITE_URL}#duvidas`,
            mainEntity: FAQ.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
        },
    ],
});

export const buildLlmsTxt = () => `# ${BUSINESS.name}

> ${BUSINESS.description}

Localizada em Goiânia/GO. Orçamentos e atendimento comercial pelo WhatsApp ${BUSINESS.phoneDisplay}.

## Contato e atendimento

- WhatsApp e telefone: ${BUSINESS.phoneDisplay} (${BUSINESS.whatsappLink})
- Endereço: ${ADDRESS_LINE}
- Horário: ${BUSINESS.hours.weekdaysText}. ${BUSINESS.hours.weekendText}.
- Formas de pagamento: ${BUSINESS.payments.join(', ')}
- Setores atendidos: ${BUSINESS.segments.join(', ')}
- Área de atendimento: ${BUSINESS.areaServed.join(', ')}

## Produtos e soluções

${PRODUCTS.map((p) => `- ${p.name}: ${p.description}`).join('\n')}

## Perguntas frequentes

${FAQ.map((f) => `### ${f.question}\n\n${f.answer}`).join('\n\n')}

## Links

- [Página inicial](${SITE_URL})
- [Solicitar orçamento](${SITE_URL}#orcamento)
- [Como chegar (Google Maps)](${MAPS.googleMapsUrl})
- [Instagram](${BUSINESS.social.instagram})
- [Facebook](${BUSINESS.social.facebook})
`;

export const buildSitemap = (lastmod: string) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`;

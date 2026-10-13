// Ferramentas WebMCP (imperativas) para agentes de IA no navegador: https://developer.chrome.com/docs/ai/webmcp
// O pedido de orçamento é exposto pelo formulário declarativo em components/QuoteForm.tsx.
import { BUSINESS, ADDRESS_LINE, MAPS, PRODUCTS, FAQ } from './data/business';

const noInput = { type: 'object', properties: {} };
const json = (value: unknown) => JSON.stringify(value);

const tools: ModelContextTool[] = [
    {
        name: 'obter_contato',
        description: `Retorna telefone, WhatsApp e redes sociais da ${BUSINESS.name}.`,
        inputSchema: noInput,
        annotations: { readOnlyHint: true },
        execute: () => json({
            telefone: BUSINESS.phoneDisplay,
            whatsapp: BUSINESS.whatsappLink,
            instagram: BUSINESS.social.instagram,
            facebook: BUSINESS.social.facebook,
        }),
    },
    {
        name: 'obter_horario_funcionamento',
        description: 'Retorna os dias e horários de atendimento da loja em Goiânia/GO.',
        inputSchema: noInput,
        annotations: { readOnlyHint: true },
        execute: () => `${BUSINESS.hours.weekdaysText}. ${BUSINESS.hours.weekendText}.`,
    },
    {
        name: 'obter_endereco_e_rotas',
        description: 'Retorna o endereço da loja e links de rota no Google Maps e no Waze.',
        inputSchema: noInput,
        annotations: { readOnlyHint: true },
        execute: () => json({ endereco: ADDRESS_LINE, googleMaps: MAPS.googleMapsUrl, waze: MAPS.wazeUrl }),
    },
    {
        name: 'listar_produtos',
        description: 'Lista as linhas de produtos (mangueiras, conexões e componentes hidráulicos e pneumáticos) com uma descrição de cada uma.',
        inputSchema: noInput,
        annotations: { readOnlyHint: true },
        execute: () => json(PRODUCTS),
    },
    {
        name: 'perguntas_frequentes',
        description: 'Retorna perguntas frequentes sobre a empresa: pagamento, setores atendidos, atacado/varejo e como pedir orçamento.',
        inputSchema: noInput,
        annotations: { readOnlyHint: true },
        execute: () => json(FAQ),
    },
];

export const registerAgentTools = () => {
    const modelContext = document.modelContext;
    if (!modelContext) return;
    for (const tool of tools) {
        modelContext.registerTool(tool).catch(() => {});
    }
};

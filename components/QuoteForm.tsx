import React from 'react';
import { PRODUCTS, whatsappLinkWith } from '../data/business';

const fieldClass = "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-text-gray focus:border-principal-blue focus:outline-none focus:ring-2 focus:ring-principal-blue";
const labelClass = "block text-sm font-bold text-text-gray mb-1";

const buildMessage = (data: FormData) => {
    const get = (key: string) => String(data.get(key) ?? '').trim();
    const lines = [
        'Olá! Gostaria de um orçamento.',
        `Nome: ${get('nome')}`,
        get('empresa') && `Empresa: ${get('empresa')}`,
        get('cidade') && `Cidade: ${get('cidade')}`,
        `Produto: ${get('produto')}`,
        get('medida') && `Medida/bitola: ${get('medida')}`,
        get('quantidade') && `Quantidade: ${get('quantidade')}`,
        get('observacoes') && `Observações: ${get('observacoes')}`,
    ];
    return lines.filter(Boolean).join('\n');
};

// Formulário com anotações WebMCP declarativas (toolname/tooldescription/toolparamdescription):
// agentes de IA no navegador conseguem preenchê-lo; o envio continua sendo do usuário (sem toolautosubmit).
const QuoteForm: React.FC = () => {
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = whatsappLinkWith(buildMessage(new FormData(e.currentTarget)));
        const submitEvent = e.nativeEvent;

        if (submitEvent.agentInvoked && submitEvent.respondWith) {
            submitEvent.respondWith(Promise.resolve(`Pedido de orçamento preparado. Abra este link para enviá-lo pelo WhatsApp da Manancial: ${url}`));
            return;
        }
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="orcamento" aria-labelledby="orcamento-titulo" className="py-16 md:py-24 bg-light-gray scroll-mt-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-10">
                    <h2 id="orcamento-titulo" className="text-3xl md:text-4xl font-roboto font-bold text-text-gray">Solicitar Orçamento</h2>
                    <p className="mt-4 text-lg text-text-gray/80">
                        Preencha os dados e enviaremos seu pedido direto para o nosso WhatsApp.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    toolname="solicitar_orcamento"
                    tooldescription="Prepara um pedido de orçamento de mangueiras, conexões ou componentes hidráulicos e pneumáticos e o envia para o WhatsApp da Manancial Mangueiras e Conexões (Goiânia/GO)."
                    className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    <div>
                        <label htmlFor="orc-nome" className={labelClass}>Nome *</label>
                        <input id="orc-nome" name="nome" type="text" required autoComplete="name" className={fieldClass}
                            toolparamdescription="Nome da pessoa que solicita o orçamento." />
                    </div>
                    <div>
                        <label htmlFor="orc-empresa" className={labelClass}>Empresa</label>
                        <input id="orc-empresa" name="empresa" type="text" autoComplete="organization" className={fieldClass}
                            toolparamdescription="Nome da empresa ou fazenda, se houver (opcional)." />
                    </div>
                    <div>
                        <label htmlFor="orc-produto" className={labelClass}>Produto *</label>
                        <select id="orc-produto" name="produto" required className={fieldClass}
                            toolparamdescription="Linha de produto desejada.">
                            <option value="">Selecione</option>
                            {PRODUCTS.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="orc-cidade" className={labelClass}>Cidade</label>
                        <input id="orc-cidade" name="cidade" type="text" autoComplete="address-level2" className={fieldClass}
                            toolparamdescription="Cidade do cliente (opcional)." />
                    </div>
                    <div>
                        <label htmlFor="orc-medida" className={labelClass}>Medida / bitola / aplicação</label>
                        <input id="orc-medida" name="medida" type="text" placeholder='Ex.: 1/2", 2 metros, retroescavadeira' className={fieldClass}
                            toolparamdescription="Medida, bitola, comprimento, pressão ou equipamento onde a peça será usada (opcional)." />
                    </div>
                    <div>
                        <label htmlFor="orc-quantidade" className={labelClass}>Quantidade</label>
                        <input id="orc-quantidade" name="quantidade" type="text" inputMode="numeric" className={fieldClass}
                            toolparamdescription="Quantidade de peças ou metros (opcional)." />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="orc-observacoes" className={labelClass}>Observações</label>
                        <textarea id="orc-observacoes" name="observacoes" rows={3} className={fieldClass}
                            toolparamdescription="Detalhes adicionais do pedido (opcional)." />
                    </div>
                    <div className="sm:col-span-2">
                        <button type="submit" className="w-full bg-highlight-orange text-white font-bold font-roboto text-lg py-3 px-6 rounded-lg shadow-md hover:bg-orange-800 transition-colors">
                            Enviar pedido pelo WhatsApp
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default QuoteForm;

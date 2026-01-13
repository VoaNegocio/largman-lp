import React from 'react'
import { WHATSAPP_URL } from '../constants'

export default function Project3D() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
            {/* Elementos decorativos de fundo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A951] rounded-full blur-[120px] opacity-[0.05] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C8A951] rounded-full blur-[100px] opacity-[0.05] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Conteúdo de Texto */}
                    <div className="space-y-6 md:space-y-8 order-2 md:order-1">
                        <div className="space-y-4">
                            <div className="inline-block px-3 py-1 rounded-full bg-[#C8A951]/10 border border-[#C8A951]/20">
                                <span className="text-xs md:text-sm font-bold text-[#C8A951] uppercase tracking-wider">
                                    Visualização Realista
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                                Veja seus móveis prontos <span className="text-[#C8A951]">antes de começar a obra</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                Antes de qualquer produção, criamos o projeto 3D completo dos seus móveis planejados.
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                Você visualiza cores, acabamentos, proporções e cada detalhe do ambiente, tudo ajustado à sua rotina e ao seu espaço.
                            </p>
                        </div>

                        <div className="pt-4">
                            <div className="flex items-center gap-4 text-neutral-800 font-medium">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center text-xs">3D</div>
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-300 flex items-center justify-center text-xs">HD</div>
                                </div>
                                <span>Tecnologia de ponta em cada detalhe</span>
                            </div>
                        </div>

                        <div className="pt-2">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#C8A951] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#b09340] transition-all transform hover:scale-105 shadow-lg group"
                            >
                                <span>Quero meu projeto </span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Imagem */}
                    <div className="relative order-1 md:order-2 group">
                        <div className="absolute inset-0 bg-[#C8A951] rounded-2xl rotate-3 opacity-10 transition-transform duration-500 group-hover:rotate-6"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                            <img
                                src="/projeto3d.png"
                                alt="Projeto 3D de ambiente planejado - Largman"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />

                            {/* Overlay de brilho */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#C8A951]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

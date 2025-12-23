import { FiStar, FiAward, FiUsers, FiChevronDown } from 'react-icons/fi'
import { WHATSAPP_URL, LOGO_URL } from '../constants'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background com imagem do banner */}
            <div className="absolute inset-0 z-0">
                {/* Imagem Mobile */}
                <img
                    src="/hero-largman-mobile.jpg"
                    alt="Ambiente premium com móveis planejados"
                    className="w-full h-full object-cover md:hidden"
                />
                {/* Imagem Desktop */}
                <img
                    src="/hero-largman-desktop.jpg"
                    alt="Ambiente premium com móveis planejados"
                    className="hidden md:block w-full h-full object-cover scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#C8A951]/20 via-transparent to-transparent"></div>
            </div>

            {/* VERSÃO MOBILE - Hero Section Alternativa */}
            <div className="md:hidden relative z-10 w-full px-4 py-8">
                <div className="space-y-6">
                    <div className="text-center">
                        <div className="inline-block bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20">
                            <img
                                src={LOGO_URL}
                                alt="Largman - Móveis Planejados"
                                className="h-24 md:h-36 w-auto object-contain"
                            />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-white text-center leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_8px_rgba(0,0,0,0.9)]">
                        Transformando ambientes com móveis planejados de alto padrão
                    </h1>

                    <p className="text-base text-white/95 text-center leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] px-2">
                        Excelência, pontualidade e facilidade na hora de planejar seu ambiente dos sonhos.
                    </p>

                    <div className="pt-4">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] text-white px-6 py-4 rounded-xl font-bold text-base btn-3d-whatsapp animate-pulse-slow overflow-hidden w-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                            <svg className="w-6 h-6 group-hover:scale-125 transition-transform relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span className="relative z-10 font-extrabold">Fale com uma designer</span>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-xl px-3 py-3 shadow-lg">
                            <div className="flex items-center gap-2">
                                <FiStar className="w-5 h-5 text-[#C8A951] flex-shrink-0" />
                                <p className="text-xs text-neutral-800 font-semibold leading-tight">
                                    8 anos de experiência
                                </p>
                            </div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-xl px-3 py-3 shadow-lg">
                            <div className="flex items-center gap-2">
                                <FiUsers className="w-5 h-5 text-[#C8A951] flex-shrink-0" />
                                <p className="text-xs text-neutral-800 font-semibold leading-tight">
                                    Design de interiores
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* VERSÃO DESKTOP - Hero Section Original */}
            <div className="hidden md:block relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-12 md:py-20">
                <div className="max-w-4xl">
                    <div className="space-y-10 md:space-y-12">

                        <div className="space-y-6 md:space-y-8">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                                <div className="inline-block mb-3 md:mb-4 bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20">
                                    <img
                                        src={LOGO_URL}
                                        alt="Largman - Móveis Planejados"
                                        className="h-24 md:h-36 w-auto object-contain"
                                    />
                                </div>
                                <span className="block text-white font-bold drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_8px_rgba(0,0,0,0.9)]">
                                    Transformando ambientes com móveis planejados de alto padrão.
                                </span>
                            </h1>

                            <div className="relative">
                                <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C8A951]/60 via-[#C8A951]/40 to-transparent rounded-full"></div>
                                <p className="text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed max-w-3xl font-light pl-6 md:pl-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] [text-shadow:_1px_1px_4px_rgba(0,0,0,0.8)]">
                                    Mais que móveis: o cenário do seu próximo capítulo, com foco em quem busca excelência, pontualidade e facilidade na hora de planejar.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="group flex items-start gap-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 shadow-xl hover:bg-white/95 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C8A951]/10 flex items-center justify-center group-hover:bg-[#C8A951]/20 transition-colors">
                                    <FiStar className="w-6 h-6 text-[#C8A951]" />
                                </div>
                                <div>
                                    <p className="text-neutral-800 font-semibold text-base leading-snug">
                                        Especialista em móveis planejados há mais de 8 anos.
                                    </p>
                                </div>
                            </div>

                            <div className="group flex items-start gap-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 shadow-xl hover:bg-white/95 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C8A951]/10 flex items-center justify-center group-hover:bg-[#C8A951]/20 transition-colors">
                                    <FiAward className="w-6 h-6 text-[#C8A951]" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-neutral-800 font-bold text-base leading-tight mb-1">
                                        Alta qualidade:
                                    </p>
                                    <p className="text-[#C8A951] font-extrabold text-lg leading-tight">
                                        100% MDF
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg btn-3d-whatsapp animate-pulse-slow overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                                <div className="absolute inset-0 rounded-xl border-2 border-white/50 animate-ping-slow opacity-75"></div>

                                <svg className="w-7 h-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span className="relative z-10 drop-shadow-lg font-extrabold tracking-wide">Fale com uma designer</span>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
                            </a>

                            <a
                                href="#diferenciais"
                                className="group inline-flex items-center justify-center gap-2 md:gap-3 bg-white backdrop-blur-md border-2 border-white text-[#C8A951] px-3 py-2 md:px-6 md:py-3 rounded-xl font-semibold text-base md:text-xl hover:bg-[#C8A951] hover:text-white hover:border-[#C8A951] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                            >
                                <span className="drop-shadow-sm">Ver Diferenciais</span>
                                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                <span className="text-white text-[10px] md:text-sm uppercase tracking-[0.2em] font-light text-shadow-sm">Explorar</span>
                <FiChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white animate-bounce" />
            </div>
        </section>
    )
}

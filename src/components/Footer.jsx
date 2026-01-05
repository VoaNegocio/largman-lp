import { FiStar } from 'react-icons/fi'
import { WHATSAPP_URL, CONTACT_INFO, LOGO_URL } from '../constants'

export default function Footer() {
    return (
        <footer className="hidden md:block relative bg-gradient-to-b from-neutral-900 via-neutral-900 to-black text-white py-16 md:py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C8A951] rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C8A951] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Coluna 1: Sobre a empresa */}
                    <div className="lg:col-span-1">
                        <div className="mb-6 inline-block bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                            <img
                                src={LOGO_URL}
                                alt="Largman - Móveis Planejados"
                                className="h-10 md:h-14 w-auto object-contain"
                            />
                        </div>
                        <p className="text-neutral-400 leading-relaxed text-sm">
                            8 anos transformando ambientes com móveis planejados de alto padrão em Uberaba, MG.
                        </p>
                    </div>

                    {/* Coluna 2: Contato */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-[#C8A951] to-[#E0C370] rounded-full"></div>
                            Contato
                        </h3>
                        <div className="space-y-4">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#25D366]/20 to-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center group-hover:from-[#25D366]/30 group-hover:to-[#25D366]/20 transition-all duration-300">
                                    <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">WhatsApp</p>
                                    <p className="text-sm text-neutral-400">
                                        {CONTACT_INFO.whatsappNumber.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')}
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Coluna 3: Localização */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-[#C8A951] to-[#E0C370] rounded-full"></div>
                            Localização
                        </h3>
                        <div className="space-y-2 text-neutral-300">
                            <p className="text-sm leading-relaxed">
                                Av. Niza Marquez Guaritá, 528
                            </p>
                            <p className="text-sm leading-relaxed">
                                Conj. Manoel Mendes
                            </p>
                            <p className="text-sm leading-relaxed">
                                Uberaba - MG, 38082-669
                            </p>
                        </div>
                    </div>

                    {/* Coluna 4: Atendimento */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-[#C8A951] to-[#E0C370] rounded-full"></div>
                            Atendimento
                        </h3>
                        <p className="text-neutral-300 leading-relaxed text-sm mb-4">
                            Atendimento realizado por designers de interiores especializados.
                        </p>
                        <div className="flex items-center gap-2 text-neutral-400 text-sm">
                            <FiStar className="w-4 h-4 text-yellow-400" />
                            <span>4.9 / 5.0</span>
                            <span className="text-neutral-500">•</span>
                            <span>150+ avaliações</span>
                        </div>
                    </div>
                </div>

                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C8A951] to-transparent"></div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-800/50">
                    <div className="text-center md:text-left">
                        <p className="text-neutral-400 text-sm">
                            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Largman</span>. Todos os direitos reservados.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-neutral-500 text-xs">
                        <span className="text-neutral-600">Landing Page made by</span>
                        <span className="text-white font-semibold bg-gradient-to-r from-[#C8A951] to-[#E0C370] bg-clip-text text-transparent">
                            Voa Negocio
                        </span>
                        <span className="text-neutral-600">e</span>
                        <a
                            href="https://almavictor.digital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-semibold hover:text-[#E0C370] transition-colors duration-300"
                        >
                            Victor
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

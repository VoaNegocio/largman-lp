import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL, CONTACT_INFO } from '../constants'

export default function Location() {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white via-neutral-50/50 to-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-[800px] h-[350px] bg-gradient-to-l from-[#1B4B7B]/22 via-[#2a6ba8]/18 to-transparent rounded-full blur-[100px] -rotate-12"></div>
                <div className="absolute top-1/3 -left-32 w-[320px] h-[700px] bg-gradient-to-r from-[#2a6ba8]/20 via-[#1B4B7B]/16 to-transparent rounded-full blur-[120px] rotate-6"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-t from-[#1B4B7B]/14 via-[#2a6ba8]/10 via-[#153a5f]/8 to-transparent rounded-full blur-[140px]"></div>
                <div className="absolute -bottom-32 left-1/4 w-[700px] h-[300px] bg-gradient-to-t from-[#153a5f]/18 via-[#1B4B7B]/14 to-transparent rounded-full blur-[110px] rotate-12"></div>
                <div className="absolute top-0 right-0 w-[280px] h-[550px] bg-gradient-to-l from-[#1B4B7B]/16 via-[#2a6ba8]/12 to-transparent rounded-full blur-[100px]"></div>
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#2a6ba8]/14 via-[#1B4B7B]/10 to-transparent rounded-full blur-[90px]"></div>
                <div className="absolute top-1/4 right-1/3 w-[550px] h-[180px] bg-gradient-to-l from-[#1B4B7B]/12 via-[#2a6ba8]/9 to-transparent rounded-full blur-[100px] -rotate-45"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent via-transparent to-white/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-4 drop-shadow-sm [text-shadow:_0_2px_4px_rgba(0,0,0,0.1)]">
                    Venha nos visitar
                </h2>
                <p className="text-lg text-neutral-800 font-medium text-center mb-12 max-w-2xl mx-auto drop-shadow-sm">
                    Estamos prontos para recebê-lo e apresentar nossos projetos de móveis planejados.
                </p>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 group">
                    <iframe
                        src={GOOGLE_MAPS_EMBED_URL}
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[500px] md:h-[600px]"
                        title="Localização Nunes Móveis"
                    />

                    <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-[#1B4B7B]/20 hover:scale-105 transition-transform duration-300 hover:bg-white z-10"
                    >
                        <div className="flex items-center gap-3">
                            <svg className="w-6 h-6 text-[#1B4B7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-bold text-[#1B4B7B] drop-shadow-sm">Abrir no Google Maps</span>
                            <svg className="w-5 h-5 text-[#1B4B7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                    </a>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-neutral-900 font-semibold mb-2 text-lg drop-shadow-sm">
                        <span className="text-[#1B4B7B]">📍</span> {CONTACT_INFO.enderecoCompleto}
                    </p>
                    <p className="text-sm text-neutral-800 font-medium">
                        Clique no mapa para ver a localização completa no Google Maps
                    </p>
                </div>
            </div>
        </section>
    )
}

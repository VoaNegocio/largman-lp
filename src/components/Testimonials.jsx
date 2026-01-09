import { useState, useEffect } from 'react'
import { FiStar } from 'react-icons/fi'
import { CONTACT_INFO, DEPOIMENTOS_FALLBACK } from '../constants'

export default function Testimonials() {
    const [googleReviews, setGoogleReviews] = useState([])
    const [googleRating, setGoogleRating] = useState(CONTACT_INFO.googleRating || 4.9)
    const [isLoadingReviews, setIsLoadingReviews] = useState(false)
    const [depoimentoSlide, setDepoimentoSlide] = useState(0)

    // Configuracoes
    const googlePlaceId = CONTACT_INFO.googlePlaceId
    const selectedReviewIds = [] // Exemplo: ['review_id_1']

    const fetchGoogleReviews = async () => {
        if (!googlePlaceId) {
            console.log('Place ID não configurado. Usando depoimentos padrão.')
            return
        }

        setIsLoadingReviews(true)

        try {
            // Simulação
            await new Promise(resolve => setTimeout(resolve, 500))
            const mockData = {
                result: {
                    rating: 4.9,
                    user_ratings_total: 150,
                    reviews: [] // Populate if real API not available or empty place ID
                }
            }

            if (mockData.result && mockData.result.reviews) {
                let reviews = mockData.result.reviews
                if (selectedReviewIds.length > 0) {
                    reviews = reviews.filter(review =>
                        selectedReviewIds.includes(review.author_name) ||
                        selectedReviewIds.includes(review.time?.toString())
                    )
                }
                reviews = reviews.slice(0, 6)

                const formattedReviews = reviews.map(review => ({
                    nome: review.author_name || 'Cliente',
                    cidade: 'Uberaba - MG',
                    texto: review.text || '',
                    nota: review.rating || 5,
                    data: review.relative_time_description || '',
                    foto: review.profile_photo_url || null,
                    link: `https://www.google.com/maps/place/?q=place_id:${googlePlaceId}`
                }))

                setGoogleReviews(formattedReviews)
                setGoogleRating(mockData.result.rating || 4.9)
            }
        } catch (error) {
            console.error('Erro ao buscar reviews do Google:', error)
        } finally {
            setIsLoadingReviews(false)
        }
    }

    useEffect(() => {
        fetchGoogleReviews()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const depoimentos = googleReviews.length > 0 ? googleReviews : DEPOIMENTOS_FALLBACK

    const nextDepoimento = () => {
        setDepoimentoSlide((prev) => (prev + 1) % depoimentos.length)
    }

    const prevDepoimento = () => {
        setDepoimentoSlide((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)
    }

    return (
        <section className="pt-24 pb-0 md:py-32 px-4 bg-gradient-to-b from-white via-neutral-50/50 to-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 -left-32 w-[900px] h-[400px] bg-gradient-to-r from-[#C8A951]/25 via-[#E0C370]/20 to-transparent rounded-full blur-[100px] rotate-12"></div>
                <div className="absolute top-1/4 -right-40 w-[350px] h-[800px] bg-gradient-to-l from-[#E0C370]/22 via-[#C8A951]/18 to-transparent rounded-full blur-[120px] -rotate-6"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-[#C8A951]/15 via-[#E0C370]/10 via-[#8C7335]/8 to-transparent rounded-full blur-[150px]"></div>
                <div className="absolute -bottom-40 left-1/3 w-[800px] h-[350px] bg-gradient-to-t from-[#8C7335]/20 via-[#C8A951]/15 to-transparent rounded-full blur-[110px] -rotate-12"></div>
                <div className="absolute top-0 left-0 w-[300px] h-[600px] bg-gradient-to-r from-[#C8A951]/18 via-[#E0C370]/12 to-transparent rounded-full blur-[100px]"></div>
                <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-[#E0C370]/16 via-[#C8A951]/10 to-transparent rounded-full blur-[90px]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[200px] bg-gradient-to-r from-[#C8A951]/14 via-[#E0C370]/10 to-transparent rounded-full blur-[100px] rotate-45"></div>

                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent via-transparent to-white/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight tracking-tight">
                        <span className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 bg-clip-text text-transparent">
                            Clientes satisfeitos são nossa
                        </span>
                        <br />
                        <span className="text-[#C8A951]">maior prova de qualidade.</span>
                    </h2>

                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C8A951]/30"></div>
                        <div className="w-2 h-2 rounded-full bg-[#C8A951]"></div>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C8A951]/30"></div>
                    </div>

                    <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        Ao longo de quase quatro décadas, entregamos centenas de projetos residenciais e corporativos, sempre com alta precisão, estética e pontualidade. Veja o que nossos clientes dizem sobre a experiência com a Largman:
                    </p>

                    <div className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-md border border-[#C8A951]/20 rounded-2xl shadow-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C8A951]/10 to-[#C8A951]/5 flex items-center justify-center border-2 border-[#C8A951]/20">
                                <FiStar className="w-8 h-8 text-[#C8A951]" />
                            </div>
                            <div className="text-left">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl md:text-5xl font-bold text-[#C8A951]">
                                        {googleRating.toFixed(1)}
                                    </span>
                                    <span className="text-xl text-neutral-600">/ 5</span>
                                </div>
                                <div className="flex items-center gap-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(googleRating)
                                                ? 'text-yellow-400 fill-yellow-400'
                                                : i < googleRating
                                                    ? 'text-yellow-400 fill-yellow-400/50'
                                                    : 'text-neutral-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        {googleReviews.length > 0 && (
                            <div className="h-12 w-px bg-neutral-300"></div>
                        )}
                        {googleReviews.length > 0 && (
                            <div className="text-left">
                                <p className="text-sm text-neutral-500 mb-1">Avaliações no Google</p>
                                <p className="text-lg font-semibold text-neutral-900">
                                    {googleReviews.length}+ avaliações verificadas
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {isLoadingReviews ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 border-4 border-[#C8A951]/20 border-t-[#C8A951] rounded-full animate-spin"></div>
                            <p className="text-neutral-600">Carregando avaliações...</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="relative md:hidden mb-8">
                            <div className="overflow-hidden rounded-2xl">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${depoimentoSlide * 100}%)` }}
                                >
                                    {depoimentos.map((depoimento, index) => (
                                        <div key={index} className="min-w-full px-2">
                                            <TestimonialCard depoimento={depoimento} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {depoimentos.length > 1 && (
                                <div className="flex items-center justify-center gap-4 mt-4">
                                    <button onClick={prevDepoimento} aria-label="Depoimento anterior" className="bg-white/90 hover:bg-white text-neutral-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                    <button onClick={nextDepoimento} aria-label="Próximo depoimento" className="bg-white/90 hover:bg-white text-neutral-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {depoimentos.map((depoimento, index) => (
                                <TestimonialCard key={index} depoimento={depoimento} />
                            ))}
                        </div>
                    </>
                )}

                {googleReviews.length > 0 && (
                    <div className="text-center mt-12">
                        <a
                            href={`https://www.google.com/maps/place/?q=place_id:${googlePlaceId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-3 bg-white/90 backdrop-blur-md border-2 border-[#C8A951]/20 text-[#C8A951] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#C8A951] hover:text-white hover:border-[#C8A951] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            <span>Ver todas as avaliações no Google</span>
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}

function TestimonialCard({ depoimento }) {
    return (
        <div className="group relative bg-white p-6 md:p-8 rounded-2xl border border-neutral-200/80 hover:border-[#C8A951]/40 transition-all duration-500 shadow-sm hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C8A951]/0 via-[#C8A951]/0 to-[#C8A951]/0 group-hover:from-[#C8A951]/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>

            {depoimento.link && (
                <div className="absolute top-4 right-4 z-10">
                    <a href={depoimento.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-full text-xs font-medium text-neutral-700 hover:bg-white hover:border-[#C8A951]/40 transition-all">
                        Google
                    </a>
                </div>
            )}

            <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className={`w-4 h-4 md:w-5 md:h-5 ${i < depoimento.nota ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`} />
                    ))}
                    <span className="ml-2 text-xs md:text-sm font-semibold text-neutral-600">{depoimento.nota}.0</span>
                </div>

                <p className="text-neutral-700 mb-4 md:mb-6 leading-relaxed text-sm md:text-base italic relative">
                    <span className="absolute -left-1 -top-1 md:-left-2 text-3xl md:text-4xl text-[#C8A951]/10 font-serif leading-none">"</span>
                    {depoimento.texto}
                    <span className="absolute -right-1 -bottom-3 md:-bottom-4 text-3xl md:text-4xl text-[#C8A951]/10 font-serif leading-none">"</span>
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-neutral-200/80">
                    {depoimento.foto ? (
                        <img src={depoimento.foto} alt={depoimento.nome} loading="lazy" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-neutral-200" />
                    ) : (
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#C8A951]/20 to-[#C8A951]/10 flex items-center justify-center border-2 border-neutral-200">
                            <span className="text-base md:text-lg font-bold text-[#C8A951]">{depoimento.nome.charAt(0).toUpperCase()}</span>
                        </div>
                    )}
                    <div className="flex-1">
                        <p className="font-semibold text-neutral-900 mb-1 text-sm md:text-base">{depoimento.nome}</p>
                        <div className="flex items-center gap-2">
                            {depoimento.cidade && <p className="text-xs md:text-sm text-neutral-600">{depoimento.cidade}</p>}
                            {depoimento.cidade && depoimento.data && <span className="text-neutral-400">•</span>}
                            {depoimento.data && <p className="text-xs md:text-sm text-neutral-500">{depoimento.data}</p>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8A951]/0 to-transparent group-hover:via-[#C8A951] transition-all duration-500"></div>
        </div>
    )
}

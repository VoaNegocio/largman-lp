import { useState } from 'react'
import GalleryModal from './GalleryModal'
import { WHATSAPP_URL, GALLERY_IMAGES, SECTION_VIDEOS } from '../constants'

export default function Differentials() {
    const [activeTab, setActiveTab] = useState('projetos')

    // Indices states
    const [indices, setIndices] = useState({
        projetos: 0
    })

    const [selectedIndex, setSelectedIndex] = useState(null) // For modal

    const getActiveImages = () => GALLERY_IMAGES[activeTab] || []
    const getActiveVideo = () => SECTION_VIDEOS[activeTab]

    const getCurrentIndex = () => indices[activeTab]

    const setCurrentIndex = (newIndex) => {
        setIndices(prev => ({
            ...prev,
            [activeTab]: newIndex
        }))
    }

    const nextImage = () => {
        const images = getActiveImages()
        setCurrentIndex((getCurrentIndex() + 1) % images.length)
    }

    const prevImage = () => {
        const images = getActiveImages()
        setCurrentIndex((getCurrentIndex() - 1 + images.length) % images.length)
    }

    const openModal = (index) => {
        setSelectedIndex(index)
        setCurrentIndex(index)
    }

    const closeModal = () => {
        setSelectedIndex(null)
    }

    // Video helpers
    const getVideoEmbedUrl = (videoUrl) => {
        if (!videoUrl) return null
        const cleanUrl = videoUrl.split('#')[0]
        if (cleanUrl.includes('youtu.be/')) return `https://www.youtube.com/embed/${cleanUrl.split('youtu.be/')[1].split('?')[0]}`
        if (cleanUrl.includes('youtube.com/watch')) return `https://www.youtube.com/embed/${cleanUrl.split('v=')[1].split('&')[0]}`
        if (cleanUrl.includes('youtube.com/embed')) return cleanUrl.split('#')[0]
        if (cleanUrl.includes('vimeo.com/')) return `https://player.vimeo.com/video/${cleanUrl.split('vimeo.com/')[1].split('?')[0]}`
        if (cleanUrl.includes('player.vimeo.com')) return cleanUrl.split('#')[0]
        return videoUrl
    }

    const isEmbedVideo = (videoUrl) => {
        if (!videoUrl) return false
        return videoUrl.includes('youtube.com/embed') ||
            videoUrl.includes('player.vimeo.com') ||
            videoUrl.includes('youtu.be') ||
            videoUrl.includes('youtube.com/watch') ||
            videoUrl.includes('vimeo.com/')
    }

    return (
        <section id="diferenciais" className="pt-8 md:pt-12 pb-2 md:pb-3 px-0 bg-gradient-to-b from-white via-neutral-50/30 to-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C8A951] rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C8A951] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">


                <div className="mb-16 md:mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
                        <span className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 bg-clip-text text-transparent">
                            Nossos Projetos
                        </span>
                    </h3>

                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                            <button className="relative px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 whitespace-nowrap capitalize bg-[#C8A951] text-white shadow-lg shadow-[#C8A951]/30 cursor-default">
                                Projetos
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 rounded-b-xl"></div>
                            </button>
                        </div>

                        <div className="relative">
                            {getActiveVideo() ? (
                                <div className="overflow-hidden rounded-2xl bg-neutral-100">
                                    {isEmbedVideo(getActiveVideo()) ? (
                                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                            <iframe
                                                src={getVideoEmbedUrl(getActiveVideo())}
                                                className="absolute top-0 left-0 w-full h-full"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title={`Vídeo ${activeTab}`}
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <video
                                            className="w-full h-[400px] md:h-[500px] object-cover"
                                            controls
                                            playsInline
                                        >
                                            <source src={getActiveVideo()} type="video/mp4" />
                                            <source src={getActiveVideo()} type="video/webm" />
                                            Seu navegador não suporta o elemento de vídeo.
                                        </video>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <div className="overflow-hidden rounded-2xl bg-neutral-100">
                                        <div
                                            className="flex transition-transform duration-500 ease-in-out"
                                            style={{ transform: `translateX(-${getCurrentIndex() * 100}%)` }}
                                        >
                                            {getActiveImages().map((imagem, index) => (
                                                <div
                                                    key={index}
                                                    className="min-w-full relative group cursor-pointer"
                                                    onClick={() => openModal(index)}
                                                >
                                                    <img
                                                        src={imagem.src}
                                                        alt={imagem.alt}
                                                        className="w-full h-[400px] md:h-[500px] object-cover group-hover:opacity-90 transition-opacity"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
                                                        <p className="text-white font-semibold text-lg">{imagem.nome}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {getActiveImages().length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                                                aria-label="Imagem anterior"
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>

                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
                                                aria-label="Próxima imagem"
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </>
                                    )}

                                    {getActiveImages().length > 1 && (
                                        <div className="flex justify-center gap-2 mt-6">
                                            {getActiveImages().map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentIndex(index)}
                                                    className={`h-2 rounded-full transition-all duration-300 ${index === getCurrentIndex() ? 'w-8 bg-[#C8A951]' : 'w-2 bg-neutral-300'
                                                        }`}
                                                    aria-label={`Ir para imagem ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16 md:mt-20">
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#C8A951] via-[#E0C370] to-[#C8A951] text-white px-10 py-5 rounded-2xl font-bold text-lg md:text-xl btn-3d-gold animate-pulse-slow relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <span className="relative z-10 drop-shadow-sm font-extrabold tracking-wide">Solicitar orçamento personalizado</span>
                        <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        {/* Efeito de brilho pulsante extra */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-white/50 animate-ping-slow opacity-30 pointer-events-none"></div>
                    </a>
                </div>

                <GalleryModal
                    isOpen={selectedIndex !== null}
                    onClose={closeModal}
                    images={getActiveImages()}
                    currentIndex={getCurrentIndex()}
                    onNext={nextImage}
                    onPrev={prevImage}
                    onSelectImage={setCurrentIndex}
                />
            </div>
        </section>
    )
}

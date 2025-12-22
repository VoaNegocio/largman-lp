export const CONTACT_INFO = {
    whatsappNumber: '5534999002642',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre móveis planejados.',
    endereco: 'Nunes Móveis, Uberaba, MG',
    enderecoCompleto: 'Av. Niza Marquez Guaritá, 528 - Conj. Manoel Mendes, Uberaba - MG',
    googlePlaceId: '', // To be filled
    googleRating: 4.9,
    totalReviews: 150
}

export const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.endereco)}`
export const GOOGLE_MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7509.839827059201!2d-47.89959263201268!3d-19.75855692625126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bacf94f5726321%3A0x388b157581986cf0!2sAv.%20Niza%20Marquez%20Guarit%C3%A1%2C%20528%20-%20Conj.%20Manoel%20Mendes%2C%20Uberaba%20-%20MG%2C%2038082-669!5e0!3m2!1spt-BR!2sbr!4v1764878550346!5m2!1spt-BR!2sbr'

export const AMBIENTES = [
    {
        nome: 'Cozinha',
        descricao: 'Cozinhas planejadas com acabamento premium',
        imagem: '/carrossel/img2.png'
    },
    {
        nome: 'Sala',
        descricao: 'Salas elegantes e funcionais',
        imagem: '/carrossel/img1.png'
    },
    {
        nome: 'Closet',
        descricao: 'Closets organizados e personalizados',
        imagem: '/carrossel/img4.png'
    },
    {
        nome: 'Área Gourmet',
        descricao: 'Áreas gourmet completas e sofisticadas',
        imagem: '/carrossel/img5.png'
    },
]

export const GALLERY_IMAGES = {
    banheiro: [
        { src: '/banheiro/img1.jpg', alt: 'Projeto de móveis planejados - Banheiro', nome: 'Banheiro' },
        { src: '/banheiro/img2.jpg', alt: 'Projeto de móveis planejados - Banheiro', nome: 'Banheiro' },
        { src: '/banheiro/img3.jpg', alt: 'Projeto de móveis planejados - Banheiro', nome: 'Banheiro' },
    ],
    sala: [
        { src: '/sala/sala1.jpg', alt: 'Projeto de móveis planejados - Sala', nome: 'Sala' },
        { src: '/sala/sala2.jpg', alt: 'Projeto de móveis planejados - Sala', nome: 'Sala' },
        { src: '/sala/sala3.jpg', alt: 'Projeto de móveis planejados - Sala', nome: 'Sala' },
    ],
    cozinha: [
        { src: '/cozinha/cozinha1.jpg', alt: 'Projeto de móveis planejados - Cozinha', nome: 'Cozinha' },
        { src: '/cozinha/cozinha2.jpg', alt: 'Projeto de móveis planejados - Cozinha', nome: 'Cozinha' },
        { src: '/cozinha/cozinha3.jpg', alt: 'Projeto de móveis planejados - Cozinha', nome: 'Cozinha' },
    ]
}

export const DEPOIMENTOS_FALLBACK = [
    {
        nome: 'Maria Silva',
        cidade: 'Uberaba - MG',
        texto: 'Ficamos encantados com o resultado! A equipe da Nunes transformou nossa cozinha em um ambiente dos sonhos. Profissionalismo e qualidade impecáveis.',
        nota: 5,
        data: '2024-01-15',
        foto: null
    },
    {
        nome: 'João Santos',
        cidade: 'Uberaba - MG',
        texto: '8 anos de experiência realmente fazem diferença. O projeto do nosso closet ficou perfeito, exatamente como planejamos. Recomendo!',
        nota: 5,
        data: '2024-02-20',
        foto: null
    },
    {
        nome: 'Ana Costa',
        cidade: 'Uberaba - MG',
        texto: 'Atendimento excepcional desde o primeiro contato. A designer entendeu perfeitamente nossa visão e entregou além das expectativas.',
        nota: 5,
        data: '2024-03-10',
        foto: null
    },
]

export const SECTION_VIDEOS = {
    section4: '/video-nunes-moveis-lp.mp4',
    banheiro: null,
    sala: null,
    cozinha: null
}

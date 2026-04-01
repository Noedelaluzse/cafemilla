export interface Feature {
  icon: string
  title: string
  desc: string
  color: string
  image: string
}

export const features: Feature[] = [
  {
    icon: '🚫☕',
    title: 'Sin cafeína',
    desc: 'Disfruta el ritual del café sin los efectos del estimulante. Perfecto para cualquier hora del día, incluso antes de dormir.',
    color: '#6E3F2A',
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/v1775019787/SECCIO%CC%81N_2_-_imagen_1_gtxdnp.png',
  },
  {
    icon: '🌿',
    title: '100% Natural',
    desc: 'Elaborado con semillas sin procesos químicos. Lo que la naturaleza da, nosotros lo transformamos con respeto.',
    color: '#ED8B00',
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/v1774228876/WhatsApp_Image_2026-03-21_at_22.15.16_vuar7b.jpg',
  },
  {
    icon: '🇲🇽',
    title: 'Origen mexicano',
    desc: 'Las semillas de Ramón han sido usadas por culturas mesoamericanas por siglos. Hoy las traemos a tu taza.',
    color: '#EAAA00',
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/v1775020198/hombrecito_en_el_campo_mfubpd.png',
  },
  {
    icon: '❤️',
    title: 'Cuida tu salud',
    desc: 'Sin acidez, sin taquicardia, sin insomnio. Una alternativa funcional que respeta tu cuerpo.',
    color: '#4A2C20',
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/v1775019778/cuida_tu_salud_opwiek.png',
  },
]
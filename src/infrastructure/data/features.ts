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
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/v1774228877/WhatsApp_Image_2026-03-21_at_22.15.16_1_vi3elb.jpg',
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
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/v1774228869/5b73ce8f9a219ea5c23a740b7fe65b3cb03bfefc76c91436d1ae72d2e1214f13_efvk6d.png',
  },
  {
    icon: '❤️',
    title: 'Cuida tu salud',
    desc: 'Sin acidez, sin taquicardia, sin insomnio. Una alternativa funcional que respeta tu cuerpo.',
    color: '#4A2C20',
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/v1774228870/07e5b1900392b21e56e2c7f873499054595361f727dd7a0a4de22a40cfe321a8_xzhtkm.png',
  },
]
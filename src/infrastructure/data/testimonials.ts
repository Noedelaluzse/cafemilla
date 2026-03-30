export interface Testimonial {
  name: string
  role: string
  avatar: string
  image: string
  rating: number
  text: string
  tag: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'María González',
    role: 'Maestra · CDMX',
    avatar: '👩‍🏫',
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/v1774139145/SECCION_4_MUJER_wfpjjs.png',
    rating: 5,
    text: 'Tenía gastritis crónica por años de tomar café. Desde que cambié a CAFEMILLA, ya no siento el ardor. El sabor me encantó desde la primera taza. No extraño el café para nada.',
    tag: 'Gastritis',
  },
  {
    name: 'Roberto Méndez',
    role: 'Diseñador · Guadalajara',
    avatar: '👨‍💻',
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/v1774139144/SECCION_4_gngkkb.png',
    rating: 5,
    text: 'Empecé a tomarlo por los problemas de ansiedad que me daba la cafeína. Ahora trabajo igual de productivo pero sin el nerviosismo. Es increíble que algo tan natural funcione tan bien.',
    tag: 'Ansiedad',
  },
  {
    name: 'Carmen Ríos',
    role: 'Médica · Mérida',
    avatar: '👩‍⚕️',
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/v1774139143/MUJER_SECCION_5_gqkjil.png',
    rating: 5,
    text: 'Como médica, aprecio que sea un producto real y sin aditivos. Se lo recomiendo a mis pacientes hipertensos. El ritual del café es importante para muchos, y CAFEMILLA lo preserva.',
    tag: 'Salud',
  },
  {
    name: 'Andrés Torres',
    role: 'Emprendedor · Monterrey',
    avatar: '👨‍💼',
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/v1774139143/COMODIN_ijklaf.png',
    rating: 5,
    text: 'Mi familia entera ya lo consume. Mis hijos pueden tomarlo sin problema y mi mamá con presión alta también. Es una bebida que une a la familia en la mesa del desayuno.',
    tag: 'Familiar',
  },
  {
    name: 'Lupita Vargas',
    role: 'Yoga instructor · Oaxaca',
    avatar: '🧘‍♀️',
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/v1774140665/MUJER_SONRIENTE_hpfnml.png',
    rating: 5,
    text: 'La combinación del ritual del café con la calma que me da CAFEMILLA es perfecta para mis mañanas de meditación. Me siento conectada con algo profundamente mexicano.',
    tag: 'Bienestar',
  },
]
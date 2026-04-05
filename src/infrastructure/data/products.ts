export interface Product {
  id: string
  name: string
  description: string
  image: string
  color: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Café de Chiapas',
    description: `
    Un clásico que honra el origen.
El Café de Chiapas ofrece un perfil más tradicional, con notas intensas, cuerpo equilibrado y ese carácter inconfundible del café mexicano de altura.
Es la opción ideal para quienes aman el sabor del café auténtico, pero desean una experiencia cuidada, de calidad y con identidad. Cada taza refleja la riqueza de la tierra y el orgullo de su origen.

    `,
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/q_auto/f_auto/v1775193610/Sin_ti%CC%81tulo_utskil.png',
    color: '#4CAF50',
  },
  {
    id: '2',
    name: 'Café de Ramón',
    description: `Una experiencia auténtica y reconfortante que conecta con lo natural.
El Café de Ramón es una bebida ancestral reinventada, elaborada a base de semillas de Ramón cuidadosamente tostadas que ofrecen un sabor suave, ligeramente tostado y profundamente equilibrado.
Perfecto para quienes buscan disfrutar el ritual del café sin cafeína, sin ansiedad y sin alterar su descanso. Cada taza es un momento de calma, bienestar y conexión contigo.`,
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/q_auto/f_auto/v1775193610/Adobe_Express_-_file_n7irjm.png',
    color: '#D59C1F',
  },
  {
    id: '3',
    name: 'Café de Ramón-canela',
    description: `
     Un abrazo cálido en cada sorbo.
Esta mezcla combina la suavidad del café de Ramón con el toque especiado y aromático de la canela, creando una bebida envolvente, reconfortante y ligeramente dulce de forma natural.
Ideal para esos momentos en los que buscas relajarte, consentirte y disfrutar sin prisas. Su aroma despierta los sentidos mientras mantiene la tranquilidad en tu cuerpo.

    `,
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/q_auto/f_auto/v1775193610/Sin_ti%CC%81tulo_1_kkpamb.png',
    color: '#c85826',
  },
]
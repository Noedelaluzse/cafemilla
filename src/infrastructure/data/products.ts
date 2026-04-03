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
    name: 'Bolsa de cafe verde',
    description: 'Descripción corta del producto',
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/q_auto/f_auto/v1775193610/Sin_ti%CC%81tulo_utskil.png',
    color: '#4CAF50',
  },
  {
    id: '2',
    name: 'Bolsa de cafe dorado',
    description: 'Descripción corta del producto',
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/q_auto/f_auto/v1775193610/Adobe_Express_-_file_n7irjm.png',
    color: '#D59C1F',
  },
  {
    id: '3',
    name: 'Bolsa de cafe naranja',
    description: 'Descripción corta del producto',
    image: 'https://res.cloudinary.com/dqvcmjkue/image/upload/q_auto/f_auto/v1775193610/Sin_ti%CC%81tulo_1_kkpamb.png',
    color: '#c85826',
  },
]
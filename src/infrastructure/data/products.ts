export interface Product {
  id: string
  name: string
  description: string
  image: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Nombre producto 1',
    description: 'Descripción corta del producto',
    image: 'https://res.cloudinary.com/...',
  },
  {
    id: '2',
    name: 'Nombre producto 2',
    description: 'Descripción corta del producto',
    image: 'https://res.cloudinary.com/...',
  },
  {
    id: '3',
    name: 'Nombre producto 3',
    description: 'Descripción corta del producto',
    image: 'https://res.cloudinary.com/...',
  },
]
export interface Sense {
  id: string
  icon: string
  emoji: string
  label: string
  title: string
  desc: string
  words: [string, string, string, string]
  color: string
}

export const senses: Sense[] = [
  {
    id: 'aroma',
    icon: '🌫️',
    emoji: '☕',
    label: 'Aroma',
    title: 'Cálido como el hogar',
    desc: 'El primer sorbo empieza con los ojos cerrados. Un aroma terroso, caramelo y levemente ahumado que activa cada recuerdo de las mañanas perfectas.',
    words: ['Terroso', 'Cálido', 'Caramelo', 'Envolvente'],
    color: '#ED8B00',
  },
  {
    id: 'sabor',
    icon: '✨',
    emoji: '🍫',
    label: 'Sabor',
    title: 'Profundo y sin amargura',
    desc: 'Un cuerpo rico y suave con notas a cacao, avellana y tierra húmeda. Sin la acidez del café, solo pura profundidad de sabor natural.',
    words: ['Cacao', 'Avellana', 'Suave', 'Profundo'],
    color: '#6E3F2A',
  },
  {
    id: 'ritual',
    icon: '🕯️',
    emoji: '🙏',
    label: 'Ritual',
    title: 'El mismo momento, mejor',
    desc: 'La misma taza. El mismo momento de pausa en tu día. El mismo calor entre tus manos. Solo que ahora sin la culpa ni las consecuencias.',
    words: ['Pausa', 'Calma', 'Conexión', 'Presente'],
    color: '#4A2C20',
  },
]

export const wordPositions = [
  { top: '0%',   left: '50%',  transform: 'translate(-50%, -50%)' },
  { top: '50%',  left: '100%', transform: 'translate(-50%, -50%)' },
  { top: '100%', left: '50%',  transform: 'translate(-50%, -50%)' },
  { top: '50%',  left: '0%',   transform: 'translate(-50%, -50%)' },
] as const

export const moodItems = [
  'Mañanas tranquilas',
  'Tarde sin taquicardia',
  'Noches reparadoras',
  'Estómago feliz',
]
export interface CafeLocation {
  id: number
  name: string
  address: string
  phone: string
  hours: string
  center: [number, number]
}

export const locations: CafeLocation[] = [
  {
    id: 1,
    name: 'Cancún — Grand Outlet Riviera Maya',
    address: 'Av. Huayacán, Cancún, Q.R.',
    phone: '+52 (998) 111-2233',
    hours: 'Lun–Dom 10am–9pm',
    center: [20.9859, -86.8614],
  },
  {
    id: 2,
    name: 'Cancún — Parque Las Ceibas',
    address: 'Av. 135, Cancún, Q.R.',
    phone: '+52 (998) 222-3344',
    hours: 'Lun–Dom 6am–10pm',
    center: [21.1325, -86.8738],
  },
  {
    id: 3,
    name: 'Cancún — Puerto Cancún',
    address: 'Blvd. Kukulcán, Zona Hotelera, Cancún, Q.R.',
    phone: '+52 (998) 333-4455',
    hours: 'Lun–Dom 10am–10pm',
    center: [21.1678, -86.8075],
  },
  {
    id: 4,
    name: 'Cancún — Mercado Nader',
    address: 'Av. Nader, Centro, Cancún, Q.R.',
    phone: '+52 (998) 444-5566',
    hours: 'Lun–Sab 9am–6pm',
    center: [21.1595, -86.8282],
  },
  {
    id: 5,
    name: 'Cancún — Malecón Tajamar',
    address: 'Av. Bonampak, Zona Tajamar, Cancún, Q.R.',
    phone: '+52 (998) 555-6677',
    hours: 'Lun–Dom 24h',
    center: [21.1509, -86.822],
  },
  {
    id: 6,
    name: 'Cancún — Parque de Las Palapas',
    address: 'Centro, Cancún, Q.R.',
    phone: '+52 (998) 666-7788',
    hours: 'Lun–Dom 5pm–11pm',
    center: [21.1589, -86.8294],
  },
  {
    id: 7,
    name: 'Cancún — Puerto Juárez',
    address: 'Terminal Marítima, Puerto Juárez, Cancún, Q.R.',
    phone: '+52 (998) 777-8899',
    hours: 'Lun–Dom 6am–10pm',
    center: [21.1883, -86.8071],
  },
]
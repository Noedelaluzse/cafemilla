import L from 'leaflet'

/**
 * Call this only on the client side (inside useEffect or a 'use client' component).
 * Patches Leaflet's default icon URLs broken by bundlers (Vite / Next.js).
 */
if (typeof globalThis.window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })
}

export function createCustomIcon(isActive: boolean): L.DivIcon {
  const size = isActive ? 36 : 28
  const bg = isActive ? '#ED8B00' : '#6E3F2A'
  const border = isActive ? '#EAAA00' : '#C9A87E'
  const dot = isActive ? '#4A2C20' : '#F7F0E6'

  return L.divIcon({
    className: '',
    html: `
      <div style="
        width:${size}px;height:${size}px;
        background:${bg};
        border:2.5px solid ${border};
        border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
        box-shadow:0 4px 12px rgba(0,0,0,0.3);
        position:relative;
      ">
        <div style="
          width:8px;height:8px;
          background:${dot};
          border-radius:50%;
          position:absolute;
          top:50%;left:50%;
          transform:translate(-50%,-50%);
        "/>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
  })
}
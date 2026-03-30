
import { features } from '@/infrastructure'
import FeatureCard from './FeatureCard'

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {features.map((f, i) => (
        <FeatureCard key={f.title} feature={f} index={i} />
      ))}
    </div>
  )
}
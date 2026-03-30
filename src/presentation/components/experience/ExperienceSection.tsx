'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ExperienceHeader from './ExperienceHeader'
import SenseTabs from './SenseTabs'
import SenseVisual from './SenseVisual'
import SenseContent from './SenseContent'
import MoodBar from './MoodBar'
import { senses } from '@/infrastructure'


export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0)
  const active = senses[activeTab]

  return (
    <section
      id="experiencia"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F7F0E6, #EDE3D5)' }}
    >
      {/* Blob decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#EAAA00]/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <ExperienceHeader />

        <SenseTabs activeIndex={activeTab} onSelect={setActiveTab} />

        {/* Panel animado al cambiar de tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <SenseVisual sense={active} />
            <SenseContent sense={active} />
          </motion.div>
        </AnimatePresence>

        <MoodBar />
      </div>
    </section>
  )
}
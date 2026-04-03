export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F7F0E6] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full animate-pulse bg-[#E0D0BC]" />
        <div className="w-32 h-4 rounded-sm animate-pulse bg-[#E0D0BC]" />
      </div>
    </div>
  )
}
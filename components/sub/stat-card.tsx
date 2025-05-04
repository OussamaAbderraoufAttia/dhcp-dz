import type { ReactNode } from "react"

interface StatCardProps {
  icon: ReactNode
  value: string
  label: string
}

export function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
      <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4">{icon}</div>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  )
}

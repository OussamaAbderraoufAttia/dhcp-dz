import { BarChart, Cpu, GraduationCap, HeadphonesIcon, RefreshCw, Settings } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Cpu":
        return <Cpu className="h-10 w-10 text-blue-600" />
      case "BarChart":
        return <BarChart className="h-10 w-10 text-blue-600" />
      case "Settings":
        return <Settings className="h-10 w-10 text-blue-600" />
      case "RefreshCw":
        return <RefreshCw className="h-10 w-10 text-blue-600" />
      case "GraduationCap":
        return <GraduationCap className="h-10 w-10 text-blue-600" />
      case "HeadphonesIcon":
        return <HeadphonesIcon className="h-10 w-10 text-blue-600" />
      default:
        return <Cpu className="h-10 w-10 text-blue-600" />
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-6">{getIcon()}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

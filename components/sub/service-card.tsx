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
        return <Cpu className="h-10 w-10 text-blue-600 dark:text-blue-400" />
      case "BarChart":
        return <BarChart className="h-10 w-10 text-blue-600 dark:text-blue-400" />
      case "Settings":
        return <Settings className="h-10 w-10 text-blue-600 dark:text-blue-400" />
      case "RefreshCw":
        return <RefreshCw className="h-10 w-10 text-blue-600 dark:text-blue-400" />
      case "GraduationCap":
        return <GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />
      case "HeadphonesIcon":
        return <HeadphonesIcon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
      default:
        return <Cpu className="h-10 w-10 text-blue-600 dark:text-blue-400" />
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <div className="inline-flex items-center justify-center p-3 bg-blue-50 dark:bg-blue-900 rounded-full mb-6">
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

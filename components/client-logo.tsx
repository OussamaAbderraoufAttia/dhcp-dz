import Image from "next/image"

interface ClientLogoProps {
  image: string
}

export function ClientLogo({ image }: ClientLogoProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-48">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt="Client Logo" fill style={{ objectFit: "contain" }} />
      </div>
    </div>
  )
}

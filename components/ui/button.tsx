import { cn } from "@/lib/utils" // your clsx helper maybe
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
}

export function Button({ variant = "default", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-md px-4 py-2 text-white font-semibold transition-colors",
        variant === "outline" ? "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100" : "bg-blue-600 hover:bg-blue-700",
        className
      )}
      {...props}
    />
  )
}

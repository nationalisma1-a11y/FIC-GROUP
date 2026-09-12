import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

export function Logo({
  className = "",
  size = 44,
  showText = true,
}: {
  className?: string
  size?: number
  showText?: boolean
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/images/logo-fic-group.jpg"
        alt={`Logo ${siteConfig.brand}`}
        width={size}
        height={size}
        className="rounded-lg object-contain"
        priority
      />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight text-brand-green">
            FIC <span className="text-brand-orange">GROUP</span>
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
            Foncier · Immobilier · Climatisation
          </span>
        </span>
      )}
    </span>
  )
}
